<?php
	//Initialize Variables
	$username = "sigmagam_sgz";
	$password = "ynO*Z#$0dLl8";
	$host = "localhost";
	$database = "sigmagam_emotionscount";
	
	//Attempt DB connection
	try
	{
		$dbh = new PDO(("mysql:host=". $host . "; dbname=" . $database), $username, $password);
	}
	catch (PDOException $e)
	{
		echo $e->getMessage(); 
	}
?>