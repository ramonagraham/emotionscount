use sigmagam_emotionscount;


CREATE TABLE student
(
studentId INT AUTO_INCREMENT NOT NULL,
firstname VARCHAR(75),
middleinitial VARCHAR(50),
lastname VARCHAR(75),
username VARCHAR(50),
password CHAR(40) NOT NULL,
access_level VARCHAR(50),
PRIMARY KEY (studentId)
);


INSERT INTO student
(firstname, lastname, username, password1)
VALUES("Roxy", "Smith", "rsmith", "123456"),
("Stephen", "Smith", "ssmith", "123456", "student"),
("Caroline", "Jacks", "cjacks", "123456", "student"),
("Monica", "Lewis", "mlewis", "123456", "student"),
("Evelyn", "Johanson", "ejohanson", "123456", "teacher"),
("Grant", "Peterson", "gpeterson", "123456");
