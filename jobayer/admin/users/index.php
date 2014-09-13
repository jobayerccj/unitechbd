<?php

/*echo '<pre>';
error_reporting(E_ALL);
ini_set('display_errors', 1);*/
session_start();

$path = "../path.php";

$functionfile = $_SERVER['DOCUMENT_ROOT']."/jobayer/admin/includes/functions.php";

require_once($functionfile);

require_once($path);

include($config);

include '../functions.php';

include 'class.php';

if(loggedin())
{
	include($loginheader);
?>
<script src="ajax.js" type="text/javascript"></script>
<script src="responseHTML.js" type="text/javascript"></script>
<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<script src="//code.jquery.com/ui/1.11.1/jquery-ui.js"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.css">
<link rel="stylesheet" href="/resources/demos/style.css">
<!--<script src="js/ckeditor.js"></script>-->
<script>
$(function() {
$( "#datepicker" ).datepicker();
});


</script>
<script>
				function test(){
					alert('test');
				}
				//tinymce.init({selector:'textarea'});
		</script>
<!--
<div id="storage" style="display:none;">
</div>-->

<section class="row" style="background:#9bd7d5;height:auto;">
	<div class="container" style="height:100%;">
		<div style="width:9%;float:left;padding:25px 0;">
		<ul style ="display: block;list-style: none outside none;text-decoration: none; font-family:open_sanslight;" class="left1">
						<li style="padding:8px 0;">
						
                                                <a href="#" ONCLICK="loadWholePage('adduser2.php')" style="text-decoration:none;">Add User</a>
						</li>
				        <li style="padding:8px 0;">
						<a href="#" ONCLICK="loadWholePage('modify-user2.php')" style="text-decoration:none;">Edit User</a>
						</li>
						<li style="padding:8px 0;">
						<a href="#" ONCLICK="loadWholePage('online-user.php')" style="text-decoration:none;">Online Users</a>
						</li>
						<li style="padding:8px 0;">
						<a href="#" ONCLICK="loadWholePage('view-logs2.php')" style="text-decoration:none;">View Logs</a>
						</li>
						<li style="padding:8px 0;">
						<a href="#" ONCLICK="loadWholePage('show_campaign.php')" style="text-decoration:none;">Manage Campaigns</a>
						</li>
						<li style="padding:8px 0;">
						<a href="#" ONCLICK="loadWholePage('statistics.php')" style="text-decoration:none;">Statistics</a>
						</li>
						<li style="padding:8px 0;">
						<a href="../logout.php" style="text-decoration:none;">Logout</a>
						</li>
					</ul>
		</div>
	
	<div id="displayed" style="width:90%;float:left;border-left:1px solid #848482;height:100%;">
	
	<?php //echo ip2long("31.223.185.221"); ?>
	<h1 style="width:94%; padding:32px 0;float:right;font-family:open_sanslight;color:#15317e;padding-bottom:10px;">Welcome to WAAUGO Admin Panel</h1>
	
	<div class="view_log_details" style="width:55%;margin-left:68px;">
				<div class="log_heading">
					
					<div class="serial_no" style="width:20%;">Statistics</div>
					<div class="user_name" style="width:42%;">Last Week</div>
					<div class="first_name">Past 30 days</div>
					
					
				</div>
<?php 
				
				$date1 = date('Y-m-d', strtotime("-7 days"));
				$date2 = date('Y-m-d', strtotime("-30 days"));
				//echo date('M d, Y', $date);
				
				$dbh = new PDO('mysql:host=localhost;dbname=vpndb', 'vpndb', 'ENFEqax3VGdQmC6t');
				$result = $dbh->prepare("SELECT COUNT(user_id) FROM user WHERE DATEDIFF(user_registration_datetime, '$date1') >= 1");
				$result->execute();
				$row = $result->fetch();
				$total_user = $row[0];
				
				$result_1 = $dbh->prepare("SELECT COUNT(user_id) FROM user WHERE DATEDIFF(user_registration_datetime, '$date2') >= 1");
				$result_1->execute();
				$row_1 = $result_1->fetch();
				$total_user_1 = $row_1[0];
				
				$result2 = $dbh->prepare("SELECT COUNT(user_id) FROM user WHERE user_active='1'");
				$result2->execute();
				$row2 = $result2->fetch();
				$total_active = $row2[0];
				
				$result3 = $dbh->prepare("SELECT COUNT(user_id) FROM user WHERE user_active='0'");
				$result3->execute();
				$row3 = $result3->fetch();
				$total_inactive = $row3[0];
				
				$result4 = $dbh->prepare("SELECT COUNT(user_id) FROM user WHERE role='1'");
				$result4->execute();
				$row4 = $result4->fetch();
				$total_admin = $row4[0];
				
				$result5 = $dbh->prepare("SELECT COUNT(user_id) FROM user WHERE role != '1'");
				$result5->execute();
				$row5 = $result5->fetch();
				$total_client = $row5[0];
				
				$result6 = $dbh->prepare("SELECT COUNT(id) FROM campaign");
				$result6->execute();
				$row6 = $result6->fetch();
				$total_campaign = $row6[0];
									
				//echo $total_records.'test';
				?>
			<div class="log_row">
				<?php 
				$datetime1 = date('Y-m-d H:i:s');
				//echo $datetime1;
				//$datetime2 = '2014-09-02';
				
				//$interval = $datetime1->diff($datetime2);
				//echo $interval->format('%R%a days');
				?>
				
				<div class="serial_no" style="width:22%;padding-left:5px;"> Total registered user</div>
				<div class="user_name" style="width:39%;"><?php echo $total_user; ?></div>
				<div class="first_name"><?php echo $total_user_1; ?></div>							
			</div>
			
			<div class="log_row">			
				<div class="serial_no" style="width:20%;padding-left:5px;"> Total active user</div>
				<div class="user_name" style="width:42%;"><?php echo $total_active; ?></div>
				<div class="first_name"><?php echo $total_active; ?></div>							
			</div>
			
			<div class="log_row">		
				<div class="serial_no" style="width:20%;padding-left:5px;"> Total inactive user</div>
				<div class="user_name" style="width:42%;"><?php echo $total_inactive; ?></div>
				<div class="first_name"><?php echo $total_inactive; ?></div>							
			</div>
			
			<div class="log_row">		
				<div class="serial_no" style="width:20%;padding-left:5px;"> No. of Admin</div>
				<div class="user_name" style="width:42%;"><?php echo $total_admin; ?></div>
				<div class="first_name"><?php echo $total_admin; ?></div>							
			</div>
			
			<div class="log_row">		
				<div class="serial_no" style="width:20%;padding-left:5px;"> No. of Client</div>
				<div class="user_name" style="width:42%;"><?php echo $total_client; ?></div>
				<div class="first_name"><?php echo $total_client; ?></div>							
			</div>
			
			<div class="log_row">		
				<div class="serial_no" style="width:20%;padding-left:5px;"> No. of Campaign</div>
				<div class="user_name" style="width:42%;"><?php echo $total_campaign; ?></div>
				<div class="first_name"><?php echo $total_campaign; ?></div>							
			</div>
				
		
		
			</div>
			 <span style="width:100%;float:left">&nbsp; </span>	
			 <span style="width:100%;float:left">&nbsp; </span>	
</div>
	
	
<?php }else { 
header('Location:../index.php');
 } ?>


<?php




	if(isset($_POST['register']))
	{
	//echo 'testing';
		$seprator = "|";
		
		$message = "User Added";
		
		$uname = $_POST['uname'];
		
		$password = $_POST['upassword'];
		
		$confirm_password = $_POST['confirm_password'];
		
		$mdpass = md5($password);
		
		$uemail = $_POST['uemail'];
		
		$activate = $_POST['activate'];
		
		$expiration = $_POST['expiration'];
		
		$role = $_POST['role'];
		
		$data = $seprator." ".$message.",".$uname.",".$password.",".$uemail.",".$activate.",".$role;
		
		$dbh = new PDO('mysql:host=localhost;dbname=vpndb', 'vpndb', 'ENFEqax3VGdQmC6t');
		$stmt = $dbh->prepare("SELECT user_id FROM user where `user_name` = ? || `user_email` = ?");
		$stmt->execute(array($uname,$uemail)) ;
		$rows = $stmt->fetchAll() ;
		$data = count($rows);
		
		//$check = mysql_query("SELECT * FROM `members` where `user_name`='$uname' || `email_id`='$uemail'") or die(mysql_error());
		
		if($data >=1)
		{	
			
			//$error_msg = "Username/Email id is already registered with this account";
			
			$_SESSION['error_msg']="Username/Email id is already registered with this account";
			echo "<script>
			loadWholePage('adduser2.php');
			</script>";
			//echo $error_msg;
			//$error_msg = '';
			
		}
		
		else if($uname =='' || $password=='' || $uemail=='' || $confirm_password =='')
		{	
		
			//$error_msg = "Please fill up all required field correctly";
			
			$_SESSION['error_msg']="Please fill up all required field correctly";
			echo "<script>
			loadWholePage('adduser2.php');
			</script>";
			
		}
		
		else if($password != $confirm_password)
		{
			
			$_SESSION['error_msg']="Password mismatched, please re enter password.";
			echo "<script>
			loadWholePage('adduser2.php');
			</script>";
			
			
		}
		
		else if (!filter_var($uemail, FILTER_VALIDATE_EMAIL)) {
			
			$_SESSION['error_msg']="Please enter valid email address";
			echo "<script>
			loadWholePage('adduser2.php');
			</script>";
			
		}
		
		else
		{
		
		
		$date = date('Y-m-d H:i:s');
		$id_address = $_SERVER['REMOTE_ADDR'];
		
		$sqlInsert = 'INSERT INTO `user` (`user_name`, `user_password_hash`,`user_email`,`user_active`,`user_registration_datetime`,`expiration_date`,`user_registration_ip`,`role`) 
			VALUES (:user_name,:user_password_hash,:user_email,:user_active,:date, :expiration, :ip_address,:role) ;';
			$preparedStatement = $dbh->prepare($sqlInsert);
			
			$final = $preparedStatement->execute(array(':user_name' => $uname, ':user_password_hash' => $mdpass, ':user_email' => $uemail, ':user_active' => $activate, ':date' => $date,':expiration' => $expiration, ':ip_address' => $id_address , ':role' => $role));
		
		//echo 'successfully added';
		
			//$querys = mysql_query("INSERT INTO `user` (`user_name`,`user_password_hash`,`user_email`,`user_active`,`role`)
		 //VALUES ('$uname','$mdpass','$uemail','$empno','$activate','$role')") or die(mysql_error());
		 
	
		//$log = new File_log();
	
		//$log-> Write("../../test.txt",$data);
	
	}
	

	if($final)
	{
		echo "<div class='messages' style='float: left;padding-left: 171px;font-weight:bold;padding-bottom:10px;'>            User Successfully Registered.</div>";
		
		
	}
	/*else
	{
		echo "<div class='messages'>Something went wrong</div>";
	}*/
		
	}
	
	
	
	if(isset($_POST['c_posted'])){
		$name = $_POST['campaign'];
		$text = $_POST['formatted_text'];
		if($_FILES["logo"]["name"]==''){
		$logo = $_POST['logo'];
		}
		else
		$logo = "logo/".$_FILES["logo"]["name"];
		
		//$destination_path = getcwd().DIRECTORY_SEPARATOR;
		//$target_path = $destination_path . basename( $_FILES["logo"]["name"]);
		//@move_uploaded_file($_FILES['logo']['tmp_name'], $target_path);
		if(!file_exists($_FILES["logo"]["name"])){
		move_uploaded_file($_FILES["logo"]["tmp_name"],"./logo/".$_FILES["logo"]["name"]);
		}
		//echo is_uploaded_file($_FILES['logo']['tmp_name'])?'true':'false';
		
			
			if($_POST['campaign']=='' || $_POST['formatted_text']=='' || $_FILES["logo"]["name"] ==''){
			$_SESSION['c_error_msg'] .="*Please enter all information properly";		
			echo "<script>
			window.location='add_campaign2.php';
			</script>";
			}
			else{
			$_SESSION['c_error_msg']="Campaign successfully added.";
			
			$dbh = new PDO('mysql:host=localhost;dbname=vpndb', 'vpndb', 'ENFEqax3VGdQmC6t');
			
			$sqlInsert = 'INSERT INTO `campaign` (`name`, `formatted_text`, `logo`) 
			VALUES (:name,:formatted_text,:logo);';
			$preparedStatement = $dbh->prepare($sqlInsert);
			
			$final = $preparedStatement->execute(array(':name' => $name, ':formatted_text' => $text, ':logo' => $logo));
			echo "<script>
			loadWholePage('show_campaign.php');
			</script>";
			}
			//echo $_SESSION['c_error_msg'];exit;
			
			
			
		}
	if(isset($_POST['ce_posted']))	{
	
		$id = $_POST['ce_id'];
		
		$name = $_POST['campaign'];
		$text = $_POST['formatted_text'];
		$logo1 = $_POST['logo1'];
		//echo $logo."<br/>";
		//echo $logo." ".$_FILES["logo"]["name"].'test';exit;
		
		if($_FILES["logo"]["name"]==''){
			$logo = $logo1;
		}
		else{
		$logo = "logo/".$_FILES["logo"]["name"];
		}
		//echo $logo.'qweqwewq';exit;
		
		
		//$destination_path = getcwd().DIRECTORY_SEPARATOR;
		//$target_path = $destination_path . basename( $_FILES["logo"]["name"]);
		//@move_uploaded_file($_FILES['logo']['tmp_name'], $target_path);
		
		if(!file_exists($_FILES["logo"]["name"])){
		move_uploaded_file($_FILES["logo"]["tmp_name"],"./logo/".$_FILES["logo"]["name"]);
		}
		//move_uploaded_file($_FILES["logo"]["tmp_name"],"./logo/".$_FILES["logo"]["name"]);
		
		$dbh = new PDO('mysql:host=localhost;dbname=vpndb', 'vpndb', 'ENFEqax3VGdQmC6t');
		
		$sqlInsert = 'UPDATE `campaign` set name=:name, formatted_text=:formatted_text,logo=:logo WHERE id=:id';
		$preparedStatement = $dbh->prepare($sqlInsert);
			
		$final = $preparedStatement->execute(array(':name' => $name, ':formatted_text' => $text, ':logo' => $logo, ':id'=> $id));
		
		$_SESSION['c_error_msg']= $name." Campaign successfully updated.";
		echo "<script>
			loadWholePage('show_campaign.php');
			</script>";
	}
	
	
	

?>
<!-- For validations 
<script src="https://<?php echo $jqueryminjs; ?>"></script>

<script src="https://<?php echo $validateminjs; ?>"></script>-->

<!-- validation end --> 

<!-- jQuery Form Validation code -->
<script>
setTimeout(function(){ $('.messages').fadeOut('slow'); }, 5000);
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
</script></div>
	</div>
</section>
<?php
require($get_footer);
?>
