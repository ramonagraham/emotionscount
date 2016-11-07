USE sigmagam_emotionscount;

ALTER TABLE screener
	MODIFY COLUMN screenerId INT AUTO_INCREMENT NOT NULL,

	ADD CONSTRAINT fk_studentId2
	FOREIGN KEY(studentId2)
	REFERENCES student(studentId),
		
	ADD CONSTRAINT fk_questionId2
	FOREIGN KEY (questionId2)
	REFERENCES questions(questionId),
		
	ADD CONSTRAINT fk_answerId2
	FOREIGN KEY (answerId2)
	REFERENCES answers(answerId);