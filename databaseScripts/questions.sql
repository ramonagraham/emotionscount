USE sigmagam_emotionscount;

CREATE TABLE questions (
questionId INT(3) NOT NULL AUTO_INCREMENT PRIMARY KEY,
question VARCHAR(200),
category VARCHAR(50),
type_question VARCHAR(50)
);


INSERT INTO questions (question, category, type_question)

VALUES("Do you enjoy school?", "school", "rate"),
("Have you ever been bullied at school?", "school", "rate"),
("Does your family help you with problems you have at school?", "home", "rate"),
("Do you get the help you need from staff, teachers or counselors at school?", "school", "rate"),
("Do your friends help and support you with problems you have?", "school", "rate"),
("Is there anything that has happened in the classroom, on the bus, at home or anywhere that you want to share that has been bothering you? Please share below.", "school", "fill"),
("Is there anything exciting or that has made you happy that you would like to share today?", "school", "fill");
