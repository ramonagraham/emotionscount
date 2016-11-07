use sigmagam_emotionscount;


CREATE TABLE student
(
studentId INT AUTO_INCREMENT NOT NULL,
firstname VARCHAR(75),
middleinitial VARCHAR(50),
lastname VARCHAR(75),
username VARCHAR(50),
password CHAR(40) NOT NULL,
PRIMARY KEY (studentId)
);


INSERT INTO student 
(firstname, lastname, username, password1)
VALUES("Roxy", "Smith", "rsmith", "123456"),
("Stephen", "Smith", "ssmith", "123456"),
("Caroline", "Jacks", "cjacks", "123456"),
("Monica", "Lewis", "mlewis", "123456"),
("Evelyn", "Johanson", "ejohanson", "123456"),
("Grant", "Peterson", "gpeterson", "123456");
