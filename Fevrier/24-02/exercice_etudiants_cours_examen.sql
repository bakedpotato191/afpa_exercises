create table etudiants (id int unsigned auto_increment primary key, matricule varchar(10), nom varchar(50), prenom varchar(50), dn date, niveau varchar(8));

insert into etudiants (matricule, nom, prenom, dn, niveau) values 
	('a000000001', 'Doe', 'John', '1997-06-11', 'cap'), 
	('a000000002', 'Doe1', 'John1', '1997-02-23', 'bac+2'), 
	('a000000003', 'Doe2', 'John2', '1997-09-18', 'bac+3'), 
	('a000000004', 'Doe3', 'John3', '1997-01-10', 'bac');


create table cours (id int unsigned auto_increment primary key, codecours int(5), nom varchar(25), enseignant varchar(20));

insert into cours (codecours, nom, enseignant) values 
	('101', 'cour1', 'Jeffery Adria'), 
    ('202', 'cour2', 'Patrice Wilford'),
    ('303', 'cour3', 'Clarinda Christobel'),
    ('404', 'cour4', 'Algernon Wes');


create table examen (id int unsigned auto_increment primary key, matricule varchar(10), codee varchar(8), notes int(2) not null);

insert into examen (matricule, codee, notes) values 
	('a000000001', '101', '16'), 
    ('a000000002', '101', '17'),
    ('a000000003', '101', '10'),
    ('a000000004', '101', '19'),
    ('a000000001', '202', '15'), 
    ('a000000002', '202', '14'),
    ('a000000003', '202', '9'),
    ('a000000004', '202', '18'),
	('a000000001', '303', '16'), 
    ('a000000002', '303', '13'),
    ('a000000003', '303', '12'),
    ('a000000004', '303', '17'),
	('a000000001', '404', '18'), 
    ('a000000002', '404', '14'),
    ('a000000003', '404', '8'),
    ('a000000004', '404', '20');


SELECT * from etudiants; /* afficher la liste des étudiants */
SELECT * from cours; /* afficher la liste des cours */
SELECT * from etudiants group by date (dn); /* afficher la liste des étudiants par ordre de date de naissance */
SELECT * from etudiants WHERE niveau='bac' or niveau='cap'; /* afficher la liste des étudiants ayant le niveau bac ou cap */
SELECT AVG(notes) from examen; /* afficher la moyenne des notes */
SELECT matricule, AVG(notes) FROM examen GROUP BY matricule; /* afficher la moyenne de note de chaque etudiants */
SELECT * from examen group by matricule having avg(notes) >=10; /* afficher la liste des etudiants avec avg>=10 */
SELECT codee, AVG(notes) FROM examen GROUP BY codee; /* afficher le moyenne de note de chaque cours */
SELECT count(*) from etudiants; /* compter le nombre des étudiants */








