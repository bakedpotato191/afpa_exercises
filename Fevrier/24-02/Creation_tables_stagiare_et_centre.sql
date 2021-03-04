use formation;

CREATE TABLE stagiaire (id int unsigned auto_increment primary key, nom varchar(50), prenom varchar(50), email varchar(50));

insert into stagiaire (nom, prenom, email) values 
	('Chirac', 'Jacques', 'jacques@gmail.com'), 
	('Dupont', 'Jean', 'jeandupont@gmail.com'), 
	('Henri', 'Zack', 'zackhenri@gmail.com'), 
	('Bidule', 'Machin', 'mbidule@gmail.com');

CREATE TABLE centre (id int unsigned auto_increment primary key, nom varchar(10), lieu varchar(20), specialite varchar(10));
                                
INSERT into centre (nom, lieu, specialite) values 
	('Afpa', 'Paris', 'CDA'), 
	('Afpa', 'Marseille', 'Dev Mobile'), 
	('Afpa', 'Lyon', 'Marketing');







