use formation;

CREATE TABLE `formation`.`stagiaire` (
	`Id` INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `Nom` VARCHAR(30) NOT NULL,
    `Prénom` VARCHAR(30) NOT NULL,
    `Email` VARCHAR(30) NOT NULL
								);
							
INSERT into stagiaire (Nom, Prénom, Email) values ('Chirac', 'Jacques', 'jacques@gmail.com');
INSERT into stagiaire (Nom, Prénom, Email) values ('Dupont', 'Jean', 'jeandupont@gmail.com');
INSERT into stagiaire (Nom, Prénom, Email) values ('Henri', 'Zack', 'zackhenri@gmail.com');
INSERT into stagiaire (Nom, Prénom, Email) values ('Bidule', 'Machin', 'mbidule@gmail.com');

CREATE TABLE `formation`.`centre` (
	`Id` INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `Nom` VARCHAR(30) NOT NULL,
    `Lieu` VARCHAR(30) NOT NULL,
    `Specialité` VARCHAR(30) NOT NULL
								);

INSERT into centre (Nom, Lieu, Specialité) values ('Afpa', 'Paris', 'CDA');
INSERT into centre (Nom, Lieu, Specialité) values ('Afpa', 'Marseille', 'Dev Mobile');
INSERT into centre (Nom, Lieu, Specialité) values ('Afpa', 'Lyon', 'Marketing');



