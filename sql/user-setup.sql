/* Create Nodopoly Database */
CREATE DATABASE IF NOT EXISTS nodopoly;

/* Create Nodopoly User */
CREATE USER IF NOT EXISTS 'nodopoly'@'localhost' IDENTIFIED BY 'nodopoly';
GRANT ALL PRIVILEGES ON nodopoly.* TO 'nodopoly'@'localhost';
FLUSH PRIVILEGES;
