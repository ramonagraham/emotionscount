USE sigmagam_emotionscount;

CREATE TABLE screener
(
	screenerId INT AUTO_INCREMENT,
    studentId2 CHAR(7),
	questionId2 CHAR(7),
    answerId2 CHAR(7),
	dateEntered DATETIME,
	PRIMARY KEY (screenerId)
);