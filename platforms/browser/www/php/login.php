<?php
	session_start();
	require "pdo-cnxn.php";
	
	if (isset($_POST['submit']))
	{
		if(!empty($_POST['username']))
		{
			$username = $_POST['username'];
		}
		
		if(!empty($_POST['password']))
		{
			$password = sha1($_POST['password']);
		}
		
		$sql = "SELECT * FROM student WHERE username = :username AND password = :password";
		
		$stmt = $dbh->prepare($sql);
		$stmt->bindParam(":username", $username, PDO::PARAM_STR);
		$stmt->bindParam(":password", $password, PDO::PARAM_STR);
		
		$stmt->execute();
		
		$result = $stmt->fetch(PDO::FETCH_ASSOC);
		
		if($result)
		{
			$_SESSION['userid'] = $result['studentId'];
			$data = array("success" => "Logged In", "access" => $result['access_level']);
			echo json_encode($data);
		}
	}
?>