USE sigmagam_emotionscount;

CREATE TABLE answers
(
	answerId INT AUTO_INCREMENT NOT NULL,
	answer INT,
	description TEXT,
	PRIMARY KEY (answerId)
);


INSERT INTO answers
(answer, description)

VALUES
(1, "Terrible"),
(2, "Bad"),
(3, "Average"),
(4, "Good"),
(5, "Fantastic");
