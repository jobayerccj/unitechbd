<?php
session_start();

$path = $_SERVER['DOCUMENT_ROOT']."/jobayer/admin/path.php";

$functionfile = $_SERVER['DOCUMENT_ROOT']."/jobayer/admin/includes/functions.php";

require_once($functionfile);

require_once($path);

include($config);

include '../functions.php';

include 'class.php';

if(loggedin())
{
	//include($loginheader);
?>
<html>
<head>
<title>Show Campaign</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">


</head>

<body bgcolor="#FFFFFF">
<div id="dvLoading"></div>
	<div class="form_section_content" style="float:left;padding-top:11px;">

<div id="edit_form2">

<?php 
if(isset($_GET['id'])){

$id = $_GET['id'];
//echo 'test';
$dbh = new PDO('mysql:host=localhost;dbname=vpndb', 'vpndb', 'ENFEqax3VGdQmC6t');
$stmt = $dbh->prepare("DELETE FROM campaign WHERE id='$id'");
$stmt->execute() ;

}
?>

<div class="form_section_content" style="float:left;padding-top:11px;padding-left:0;">
			<h1 class="add_user">Campaign data</h1>
			
			<div class="view_log_details" style="width:78%;">
				<div class="log_heading">
					
					<div class="serial_no">Name</div>
					<div class="user_name" style="width:55%;">Campaign Details</div>
					<div class="first_name">Logo</div>
					<div class="first_name" style="width:5%;">link</div>
					<div class="last_name">Action</div>
					
				</div>
<?php 
	$i = 1;
	
				if (isset($_GET["page"])) { 
				
				$page = $_GET["page"]; 
				//echo $page;
				} 
				else { $page=1; };
				$start_from = ($page-1) * 10; 
				
				$dbh = new PDO('mysql:host=localhost;dbname=vpndb', 'vpndb', 'ENFEqax3VGdQmC6t');
				$stmt = $dbh->prepare("SELECT * FROM campaign LIMIT $start_from, 10");
				$stmt->execute() ;
				
				//$result = $sth->fetch(PDO::FETCH_ASSOC);
				$rows = $stmt->fetchAll() ;
				//$usersdata = mysql_query("SELECT * FROM `campaign`");
				foreach($rows as $userdetails)
				{
					?>
		
		<div class="log_row">
			
			<div class="serial_no"><?php echo $userdetails['name'];?></div>
			<div class="user_name" style="width:55%;"><?php echo $userdetails['formatted_text'];?></div>
			<div class="first_name"><img src="<?php echo $userdetails['logo'];?>" alt="logo" width="50%"/></div>
			<div class="first_name" style="width:5%;"><a href="../landing.php?name=<?php echo $userdetails['name'];?>" target="_blank">visit</a></div>
			<div class="last_name">
			<a href="#" ONCLICK="if(confirm('Are you sure!!!')) {loadWholePage('show_campaign.php?id=<?php echo $userdetails['id'];?>');}">Delete</a>
			&nbsp;
			<a href="edit_campaign2.php?id=<?php echo $userdetails['id'];?>" >Edit</a>
			</div>
			<!--loadWholePage('delete_campaign.php?id=<?php echo $userdetails['id'];?>')-->
		</div>
<?php

}
?>
			</div>
			

				<div id="pagination" style="">
				
				<?php
				//echo 'testing pagination';
				
				$result = $dbh->prepare("SELECT COUNT(id) FROM campaign");
				$result->execute();
				$row = $result->fetch();
				$total_records = $row[0];
				
				$total_pages = ceil($total_records / 10);
				 
				/*for ($i=1; $i<=$total_pages; $i++) {
				
				echo "<a href='view-logs2.php?page=".$i."'";
				if($page==$i)
				{
				echo "id=active";
				}
				echo ">";
				echo "".$i."</a> ";
				}*/
				
				
				if($total_pages>1){
				for ($i=1; $i<=$total_pages; $i++) {
				?>
				<a href="#" ONCLICK="loadWholePage('show_campaign.php?page=<?php echo $i;?>')" id="<?php if($page==$i) echo "active";?>"><?php echo $i;?></a>
				<?php }
				}
				?>
				</div>
				<br/>
				<h1 class="s_campaign_h1"><a href="add_campaign2.php" >Add New Campaign</a></h1>
				<br/>
		</div>
</div>



<?php }else { 
header('Location:../index.php');
 } ?>



<!-- For validations -->
<script src="http://<?php echo $jqueryminjs; ?>"></script>

<script src="http://<?php echo $validateminjs; ?>"></script>

<!-- validation end --> 

<!-- jQuery Form Validation code -->
<script>
$(document).ready(function(){
	jQuery.validator.addMethod("noSpace", function(value, element)
    	{ return value.indexOf(" ") < 0; }, "No space in Password");
    	$.validator.addMethod("alpha", function(value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z ]*$/);
 });
    $("#regform").validate({
    
        // Specify the validation rules
        rules: {
            uname: {
				required:true,
				minlength:5,
				noSpace: true
				},
            email: {
                required: true,
                email: true
            },
            upassword: {
                required: true,
                minlength: 5,
                noSpace: true
            },
            confirm_password:{
					required:true,
					equalTo:"#uppassword"
				},
            fname:{
				required: true,
				minlength: 3,
				alpha: true
				},
			lname:{
				required:true,
				minlength: 3,
				alpha: true
				},
			designation:{
				required:true,
				minlength:4
				},
			empno:{
				required: true,
				},
			organisation:{
				required:true,
				},
				uemail:{
					required:true,
					}
				
        },
        
        // Specify the validation error messages
        errorElement: "span",
        messages: {
            uname: {
				required: "Please choose Username",
				noSpace: "Spaces are not allowed in Username"
			},
            fname:{
				required: "Please Enter your Name",
				alpha: "Only Characters are allowed"
			},
            lname:{
				required: "Please enter your Last Name",
				alpha: "Only Characters are allowed"
			},
            designation:"Field is required",
            empno: "Field is required",
            confirm_password:"Password don not Match",
            organisation:"Field is required",
            uemail: "Please enter a valid email address",
            username: "Please enter a valid username",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                noSpace: "Spaces are not allowed in Password"
            }
        },
        
        submitHandler: function(form) {
            form.submit();
        }
    });

  });
</script>

</div>
	

</body>
</html>
<?php
//require($get_footer);
?>
