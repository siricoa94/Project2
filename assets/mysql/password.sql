DROP DATABASE IF EXISTS userPassword;
CREATE DATABASE userPassword;

USE userPassword;

CREATE TABLE userInfo(
	id INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(45),
    userPassword VARCHAR(45),
    PRIMARY KEY (id)
);