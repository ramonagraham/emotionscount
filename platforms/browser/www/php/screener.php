<?php
	session_start();
	require "pdo-cnxn.php";
	
	if (isset($_POST['submit']))
	{	
		$answerarray = explode(" ", $_POST['answers']);
		
		$qid = 0;
		foreach($answerarray as $answer)
		{
			$qid++;
			$sql = "SELECT answerId FROM answers WHERE description = :answer";
			$stmt = $dbh->prepare($sql);
			
			$stmt->bindParam(":answer", $answer, PDO::PARAM_STR);
			$stmt->execute();
			
			$row = $stmt->fetch(PDO::FETCH_ASSOC);
			$answerid = $row["answerId"];
			
			$sid = $_SESSION['userid'];
			$sql = "INSERT INTO screener(studentId2, questionId2, answerId2) VALUES (:sid, :qid, :aid)";
			$stmt = $dbh->prepare($sql);
			
			$stmt->bindParam(":sid", $_SESSION['userid'], PDO::PARAM_INT);
			$stmt->bindParam(":qid", $qid, PDO::PARAM_INT);
			$stmt->bindParam(":aid", $answerid, PDO::PARAM_INT);
			
			$stmt->execute();
		}
		
		$sql = "SELECT * FROM screener WHERE studentID = :sid";
		$stmt = $dbh->prepare($sql);
		
		$stmt->bindParam(":sid", $_SESSION['userid'], PDO::PARAM_INT);
		$stmt->execute();
		
		$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
		if (count($rows == 6))
		{
			echo "Success!";
		}
	}
?>