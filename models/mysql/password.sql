DROP DATABASE IF EXISTS userPassword;
CREATE DATABASE userPassword;

USE userPassword;

CREATE TABLE userInfo(
	id INT AUTO_INCREMENT NOT NULL,
    userID VARCHAR(45),
    PRIMARY KEY (id)
);

