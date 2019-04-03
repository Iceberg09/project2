--Delete project2_db if it already exists
DROP DATABASE IF EXISTS project2_db;
--Create project2_db
CREATE DATABASE project2_db;

--Table outlines
/* CREATE TABLE cars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    make VARCHAR(50) NOT NULL,
    model VARCHAR(50) NOT NULL,
    year INT
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    user_access VARCHAR(50) NOT NULL
);

CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    make VARCHAR(50) NOT NULL,
    model VARCHAR(50) NOT NULL,
    color VARCHAR(50),
    license_plate VARCHAR(50),
    rating INT,
    comment VARCHAR(300),
    date_time DATETIME,
    location VARCHAR(100)
); */