##1

CREATE SCHEMA immobilier;
use immobilier;

create table agence (
	idAgence int(6) zerofill auto_increment primary key,
    nom varchar(25),
    adresse TINYTEXT
);

create table logement (
	idLogement int(5) zerofill auto_increment primary key,
    type varchar(15), check (type in ('maison', 'appartement')),
    ville varchar(25),
    prix int,
    superficie int,
    categorie varchar(10), check (categorie in ('location', 'vente'))
);

create table personne (
	idPersonne int auto_increment primary key,
    nom varchar(20),
    prenom varchar(20),
    email varchar(25) unique, check(email like '%@%.__' or email like '%@%.___')
);

create table demande (
	idDemande int auto_increment primary key,
    idPersonne int,
    type varchar(15), check (type in ('maison', 'appartement')),
    ville varchar(25),
    budget int,
    superficie int,
    categorie varchar(10), check (categorie in ('location', 'vente')),
    FOREIGN KEY (idPersonne) references personne (idPersonne),
    FOREIGN KEY (type) references logement (type),
    FOREIGN KEY (ville) references logement (ville),
    FOREIGN KEY (superficie) references logement (superficie),
    FOREIGN KEY (categorie) references logement (categorie)
    );
    
create table logement_agence (
	idLogementAgence int auto_increment primary key,
    idAgence int(6),
    idLogement int(5),
    frais int,
    FOREIGN KEY (idAgence) references agence (idAgence),
    FOREIGN KEY (idLogement) references logement (idLogement)
);

create table logement_personne (
	idLogementPersonne int auto_increment primary key,
    idPersonne int,
    idLogement int(5),
    FOREIGN KEY (idPersonne) references personne (idPersonne),
    FOREIGN KEY (idLogement) references logement (idLogement)
);

##2

CALL insert_info_agence();
CALL insert_info_logement();
CALL insert_info_personne();
CALL insert_info_demande();
CALL insert_info_logement_agence();
CALL insert_info_logement_personne();

##3

#3.1

SELECT nom from agence;

#3.2

SELECT idAgence from agence where nom LIKE 'orpi';

#3.3

SELECT * from logement limit 1;

#3.4

SELECT COUNT(*) as 'Nombre de logements' from logement;

#3.5

SELECT * from logement WHERE prix < 150000 order by prix asc;

#3.6

SELECT COUNT(*) as 'Nombre de logement avec location' from logement WHERE categorie LIKE 'location';

#3.7

SELECT DISTINCT ville from demande;

#3.8

SELECT COUNT(*) as 'Nombre des logements', ville from logement where categorie like 'vente' group by ville;

#3.9

SELECT idLogement from logement where categorie LIKE 'location';

#3.10

SELECT idLogement from logement where superficie between 20 and 30;

#3.11

SELECT MIN(prix) as 'Min Prix Vente' from logement where categorie like 'vente';

#3.12

SELECT DISTINCT ville from logement where type like 'maison' and categorie = 'vente';

#3.13

UPDATE logement_agence SET frais='730' WHERE idLogement='00003';

#3.14

SELECT * from logement as l, logement_agence as la WHERE idAgence in (SELECT idAgence from agence WHERE nom LIKE 'seloger') and l.idLogement = la.idLogement;

select * from logement as l inner join logement_agence as la on l.idLogement = la.idLogement inner join agence on agence.idAgence = la.idAgence where agence.nom = 'seloger';

#3.15

SELECT COUNT(*) as 'Nombre' from logement as l, logement_personne as lp WHERE lp.idLogement in (SELECT idLogement from logement where ville LIKE 'Paris') and l.idLogement = lp.idLogement;

#3.16

SELECT * from personne as p
INNER JOIN (SELECT * from demande WHERE categorie = 'vente' LIMIT 3) 
as d on p.idPersonne = d.idPersonne;

#3.17

SELECT prenom, email FROM personne AS p
INNER JOIN (SELECT * FROM demande WHERE ville LIKE 'Paris' and categorie='location') 
AS d ON p.idPersonne = d.idPersonne;

#3.18 

SELECT a.nom, b.frais AS 'bénéfice' FROM agence AS a
INNER JOIN (SELECT idAgence, SUM(frais) AS frais FROM logement_agence GROUP BY idAgence ORDER BY frais ASC) 
AS b ON a.idAgence = b.idAgence;

#3.19

SELECT p.idPersonne, p.prenom, l.ville FROM
	personne AS p,
	logement AS l,
	logement_personne AS lp
WHERE l.idLogement = lp.idLogement AND lp.idPersonne = p.idPersonne;

#3.20

SELECT COUNT(*) AS 'nombre' FROM logement WHERE categorie LIKE 'vente' AND ville IN 
(SELECT ville FROM demande AS d, personne AS p WHERE d.idPersonne = p.idPersonne AND p.prenom = 'Hoeger');


##4

#4.1

create user 'afpa'@'localhost' identified by 'passwordAfpa';
create user 'cda314'@'localhost' identified by 'passwordCda314';

#4.2

grant select, insert on immobilier.personne to 'afpa@localhost';
grant select, insert on immobilier.logement to 'afpa@localhost';

#4.3

grant delete on immobilier.logement to 'cda314@localhost';
grant delete on immobilier.demande to 'cda314@localhost';
