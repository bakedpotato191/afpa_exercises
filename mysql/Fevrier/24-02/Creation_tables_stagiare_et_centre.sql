use formation;

CREATE TABLE `formation`.`stagiaire` (
	`Id` INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `Nom` VARCHAR(30) NOT NULL,
    `Prénom` VARCHAR(30) NOT NULL,
    `Email` VARCHAR(30) NOT NULL
								);

CREATE TABLE `formation`.`centre` (
	`Id` INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `Nom` VARCHAR(30) NOT NULL,
    `Lieu` VARCHAR(30) NOT NULL,
    `Specialité` VARCHAR(30) NOT NULL
								);
