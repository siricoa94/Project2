CREATE DATABASE savings;

USE savings;

CREATE TABLE savingsInput(
	id INT AUTO_INCREMENT NOT NULL,
    deposit FLOAT(10,2),
    withdrawl FLOAT(10,2),
    PRIMARY KEY (id)
);
