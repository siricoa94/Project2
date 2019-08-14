CREATE DATABASE savings;

USE savings;

CREATE TABLE savingsInput(
	id INT AUTO_INCREMENT NOT NULL,
    balance FLOAT(10,2),
    googleId VARCHAR (50) NOT NULL,
    PRIMARY KEY (id)
);
INSERT INTO savingsInput (balance, googleId)
VALUES("820","uqy2MiRaI2XErybNUuTIDlHN2Zs1");