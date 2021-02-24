use formation;

CREATE TABLE `formation`.`stagiaire` (
	`Id` INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `Nom` VARCHAR(30) NOT NULL,
    `Prénom` VARCHAR(30) NOT NULL,
    `Email` VARCHAR(30) NOT NULL
								);

insert into stagiaire (Nom, Prénom, Email) values ('Chirac', 'Jacques', 'jacques@gmail.com'), ('Dupont', 'Jean', 'jeandupont@gmail.com'), ('Henri', 'Zack', 'zackhenri@gmail.com'), ('Bidule', 'Machin', 'mbidule@gmail.com');

CREATE TABLE `formation`.`centre` (
	`Id` INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `Nom` VARCHAR(30) NOT NULL,
    `Lieu` VARCHAR(30) NOT NULL,
    `Specialité` VARCHAR(30) NOT NULL
								);
                                
INSERT into centre (Nom, Lieu, Specialité) values ('Afpa', 'Paris', 'CDA'), ('Afpa', 'Marseille', 'Dev Mobile'), ('Afpa', 'Lyon', 'Marketing');







