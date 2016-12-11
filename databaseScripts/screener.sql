USE sigmagam_emotionscount;

CREATE TABLE screener
(
	screenerId INT AUTO_INCREMENT,
    studentId2 INT(7),
	questionId2 INT(7),
    answerId2 INT(7),
	dateEntered TIMESTAMP,
	PRIMARY KEY (screenerId)
);
