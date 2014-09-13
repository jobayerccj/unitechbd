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
<title>Manage Campaign</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

</head>

<body bgcolor="#FFFFFF">

	<div class="form_section_content">
	<?php 
	if($_SESSION['c_error_msg']){
		echo "<h1 style=\"color:#15317e;\">".$_SESSION['c_error_msg']."</h1>";
		$_SESSION['c_error_msg'] = '';
	}
	
	?>
		<div id="cam_menu">
		<h1 class="add_user">Select your task</h1>
		
			<ul>
				<li><a href="add_campaign2.php" >Add Campaign</a></li>
				<!--<li><a href="#" ONCLICK="loadWholePage('edit_campaign.php')">Edit Campaign</a></li>
				<li><a href="#" ONCLICK="loadWholePage('delete_campaign.php')">Delete Campaign</a></li>-->
				<li><a href="#" ONCLICK="loadWholePage('show_campaign.php')">Show Campaign</a></li>
			</ul>
		</div>


<div id="inserting">
	
</div>

<div id="edit_form">


<!--<div class="form_section_content">
			<h1 class="add_user">Edit Campaign data</h1>
			
			<div class="view_log_details">
				<div class="log_heading">
					
					<div class="serial_no">Name</div>
					<div class="user_name">F. Text</div>
					<div class="first_name">Logo</div>
					<div class="last_name">Action</div>
					
				</div>
<?php 
	$i = 1;
	
				if (isset($_GET["page"])) { 
				
				$page = $_GET["page"]; 
				//echo $page;
				} 
				else { $page=1; };
				$start_from = ($page-1) * 3; 
				
				$dbh = new PDO('mysql:host=localhost;dbname=vpndb', 'vpndb', 'ENFEqax3VGdQmC6t');
				$stmt = $dbh->prepare("SELECT * FROM campaign LIMIT $start_from, 3");
				$stmt->execute() ;
				
				//$result = $sth->fetch(PDO::FETCH_ASSOC);
				$rows = $stmt->fetchAll() ;
				//$usersdata = mysql_query("SELECT * FROM `campaign`");
				foreach($rows as $userdetails)
				{
					?>
		
		<div class="log_row">
			
			<div class="serial_no"><?php echo $userdetails['name'];?></div>
			<div class="user_name"><?php echo $userdetails['formatted_text'];?></div>
			<div class="first_name"><img src="<?php echo $userdetails['logo'];?>" alt="logo" width="50%"/></div>
			<div class="last_name">Edit</div>
			
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
				
				$total_pages = ceil($total_records / 3);
				 
				/*for ($i=1; $i<=$total_pages; $i++) {
				
				echo "<a href='view-logs2.php?page=".$i."'";
				if($page==$i)
				{
				echo "id=active";
				}
				echo ">";
				echo "".$i."</a> ";
				}*/
				
				for ($i=1; $i<=$total_pages; $i++) {
				?>
				<a href="#" ONCLICK="loadWholePage('edit_campaign.php?page=<?php echo $i;?>')" id="<?php if($page==$i) echo "active";?>"><?php echo $i;?></a>
				<?php }?>
				</div>
		</div>
</div>-->

<div id="delete_form">
Delete campaign
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
