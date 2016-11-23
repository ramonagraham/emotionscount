<?php
	session_start();
	require "pdo-cnxn.php";
	$sql = "SELECT student.firstname, student.lastname, answers.description, answers.answer, screener.dateEntered
			FROM student, screener, answers
			WHERE screener.questionId2 = :qid
			AND screener.answerId2 = answers.answerId
			AND screener.studentId2 = student.studentId
			ORDER BY dateEntered DESC";
	
	$stmt = $dbh->prepare($sql);
	
	$stmt->bindParam(":qid", $_POST['qid'], PDO::PARAM_INT);
	
	$stmt->execute();
		
	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
	
	$data = array();
	foreach ($result as $row)
	{
		$data[] =  $row;
	}
	
	echo json_encode($data);
?>