#1
CREATE SCHEMA immobilier;
use immobilier;

create table agence (
	idAgence int(6) zerofill auto_increment primary key,
    nom varchar(25),
    adresse TINYTEXT
);

insert into agence (nom, adresse) values 
	('logic-immo', 'www.logic-immo.com'),
	('century21', 'rue century'),
	('laforet', 'rue laforet'),
	('fnaim', 'rue fnaim'),
	('orpi', 'rue orpi'),
	('foncia', 'rue foncia'),
	('guy-hoquet', 'rue guy-hoquet'),
	('seloger', 'www.seloger.com'),
	('bouygues immobilier', 'www.bouygues-immobilier.net'); 

create table logement (
	idLogement int(5) zerofill auto_increment primary key,
    type varchar(15),
    ville varchar(25),
    prix int,
    superficie int,
    categorie varchar(10)
);

insert into logement (type, ville, prix, superficie, categorie) values
	('appartement', 'paris', 185000, 61, 'vente'),
	('appartement', 'paris', 115000, 29, 'vente'),
	('maison', 'paris', 510000,  130, 'vente'),
	('appartement', 'bordeaux', 550, 26, 'location'),
	('maison', 'lyon', 420, 14, 'location'),
	('appartement', 'paris', 160000, 40, 'vente'),
	('appartement', 'paris', 670, 35, 'location'),
	('maison', 'lyon', 110000, 21, 'vente'),
	('appartement', 'bordeaux', 161500, 33, 'vente'),
	('appartement', 'paris', 202000, 90, 'vente'),
    ('appartement', 'nantes', 150000, 94, 'vente'),
    ('maison', 'bordeaux', 180000, 86, 'vente'),
    ('appartement', 'marseille', 201000, 100, 'vente'),
    ('appartement', 'creteil', 175800, 76, 'vente'),
    ('appartement', 'marseille', 145900, 45, 'vente'),
    ('maison', 'lyon', 198547, 79, 'vente'),
    ('appartement', 'bordeaux', 65045, 65, 'vente'),
    ('maison', 'paris', 214000, 50, 'vente'),
    ('appartement', 'lyon', 98700, 45, 'vente');

create table personne (
	idPersonne int auto_increment primary key,
    nom varchar(20),
    prenom varchar(20),
    email varchar(25)
);

INSERT INTO personne  (nom, prenom, email) VALUES 
('Constantin','Blick','handerson@example.org'),
('Edwina','Lesch','mharris@example.com'),
('Destini','Hintz','waelchi.gerard@example.or'),
('Demarco','Larkin','green.maya@example.com'),
('Raquel','Barrows','mayra58@example.net'),
('Buddy','Torp','sullrich@example.org'),
('Buster','Bode','diego74@example.org'),
('Guido','Koepp','adams.emanuel@example.org'),
('Deion','Lesch','alford.wunsch@example.com'),
('Kylee','O\'Keefe','boris.runolfsdottir@examp'),
('Patience','Quigley','marvin.aufderhar@example.'),
('Liana','Graham','apadberg@example.net'),
('Kobe','Spencer','schmeler.karina@example.c'),
('Bennett','Flatley','sstreich@example.org'),
('Brandi','Johns','dswaniawski@example.com'),
('Robyn','Kassulke','o\'reilly.brenna@example.n'),
('Coty','Weissnat','cali.witting@example.net'),
('Malinda','Kiehn','qswift@example.org'),
('Delbert','Feil','little.tiara@example.com'),
('Maximus','Borer','effertz.kiarra@example.or'),
('Christine','Swift','yvonne.kuhlman@example.ne'),
('Ezra','Schultz','zbalistreri@example.com'),
('Fausto','Schuster','mprosacco@example.org'),
('Madaline','Kassulke','rwaters@example.net'),
('Scot','Hoeger','ava97@example.com'),
('Geovanni','Crooks','dd\'amore@example.com'),
('Amie','Mosciski','roscoe45@example.com'),
('Madelyn','Mayert','mann.daren@example.org'),
('Marquis','Halvorson','eschaefer@example.org'),
('Elfrieda','Harvey','nitzsche.ezequiel@example'),
('Marlin','Shields','zachery30@example.com'),
('Justice','Kohler','melyna.cronin@example.org'),
('Delaney','Abbott','tierra.altenwerth@example'),
('Dalton','Murphy','cade.mccullough@example.n'),
('Drake','Heller','mayert.garett@example.com'),
('Margarete','Collins','homenick.nichole@example.'),
('Jamison','Dickens','fgreenfelder@example.org'),
('Kian','Legros','gnienow@example.net'),
('Lisa','Ziemann','sanford01@example.net'),
('Mossie','Boyle','general10@example.org'),
('Genesis','Cremin','levi.deckow@example.com'),
('Dayton','Feil','batz.hoyt@example.com'),
('Sibyl','Kuhic','qluettgen@example.org'),
('Jayne','Schroeder','mortimer.prohaska@example'),
('Ashton','Kulas','ckoepp@example.net'),
('Nona','Nitzsche','gerlach.brent@example.com'),
('Thad','Murphy','koelpin.verla@example.com'),
('Pearl','Oberbrunner','anais04@example.org'),
('Berniece','Williamson','dkuhic@example.com'),
('Carley','McDermott','emery.mraz@example.com');


create table demande (
	idDemande int auto_increment primary key,
    idPersonne int,
    type varchar(15),
    ville varchar(25),
    budget int,
    superficie int,
    categorie varchar(10),
    FOREIGN KEY (idPersonne) references personne (idPersonne),
    FOREIGN KEY (type) references logement (type),
    FOREIGN KEY (ville) references logement (ville),
    FOREIGN KEY (superficie) references logement (superficie),
    FOREIGN KEY (categorie) references logement (categorie)
    );
    
insert into demande (idPersonne, type, ville, budget, superficie, categorie) values
	(1, 'appartement', 'paris', 530000, 120 , 'vente'),
	(3, 'appartement', 'bordeaux', 120000, 18, 'vente'),
	(4, 'appartement', 'bordeaux', 145000, 21, 'vente'),
	(5, 'appartement', 'bordeaux', 152000, 26, 'vente'),
	(6, 'appartement', 'lyon', 200000, 55, 'vente'),
	(9, 'appartement', 'paris', 171000, 40, 'vente'),
	(13, 'appartement', 'paris', 163000, 25, 'vente'), 
	(16, 'appartement' , 'paris', 132000, 15, 'vente'),
	(19, 'appartement', 'paris', 350000, 80, 'vente'),
	(22, 'appartement', 'lyon', 600, 20, 'location'),
	(25, 'appartement', 'lyon', 188000, 65, 'vente'),
	(27, 'appartement' , 'paris', 400, 15, 'location'),
	(28, 'appartement' , 'paris', 330500, 100, 'vente'),
	(31, 'appartement' , 'paris', 90000, 15, 'vente'),
	(32, 'appartement', 'lyon', 123800, 21, 'vente'),
	(35, 'appartement', 'lyon', 1200, 70, 'vente'),
	(37, 'appartement', 'lyon', 11500, 100, 'vente'),
	(43, 'appartement', 'paris', 600, 20, 'location'),
	(44, 'appartement', 'paris', 750, 30, 'location'),
	(45, 'appartement', 'bordeaux', 6801, 30, 'location'), 
	(46, 'appartement', 'bordeaux', 213000, 40, 'vente');
    
create table logement_agence (
	idLogementAgence int auto_increment primary key,
    idAgence int(6),
    idLogement int(5),
    frais int,
    FOREIGN KEY (idAgence) references agence (idAgence),
    FOREIGN KEY (idLogement) references logement (idLogement)
);

insert into logement_agence (idAgence, idLogement, frais) values
	(000002, 00005, 15000),
    (000001, 00001, 20000),
    (000005, 00010, 18000),
    (000006, 00009, 17500),
    (000009, 00006, 12600),
    (000008, 00004, 19450),
    (000003, 00008, 15000),
    (000007, 00002, 20000),
    (000004, 00003, 25000),
    (000004, 00007, 30000);

create table logement_personne (
	idLogementPersonne int auto_increment primary key,
    idPersonne int,
    idLogement int(5),
    FOREIGN KEY (idPersonne) references personne (idPersonne),
    FOREIGN KEY (idLogement) references logement (idLogement)
);
    
insert into logement_personne (idPersonne, idLogement) values
    (2, 00011),
    (7, 00013),
    (8, 00014), 
    (10, 00012), 
    (11, 00016), 
    (12, 00018), 
    (14, 00017), 
    (15, 00015), 
    (17, 00019);

#3.1

SELECT nom from agence;

#3.2

SELECT idAgence from agence where nom LIKE 'orpi';

#3.3

SELECT * from logement limit 1;

#3.4

SELECT COUNT(*) from logement;

#3.5

SELECT * from logement WHERE prix < 150000 order by prix asc;

#3.6

SELECT COUNT(*) from logement WHERE categorie LIKE 'location';

#3.7

SELECT DISTINCT ville from demande;

#3.8

SELECT COUNT(*), ville from logement group by ville;

#3.9

SELECT idLogement from logement where categorie LIKE 'location';

#3.10

SELECT idLogement from logement where superficie between 20 and 30;

#3.11

SELECT * from logement where prix in (SELECT MIN(prix) from logement);

#3.12

SELECT DISTINCT ville from logement where type='maison';

#3.13

UPDATE logement_agence SET frais='730' WHERE idLogement='00003';

#3.14 Quels sont les logements gérés par l’agence « seloger »

SELECT * from logement as l, logement_agence as la WHERE idAgence in (SELECT idAgence from agence WHERE nom LIKE 'seloger') and l.idLogement = la.idLogement;

#3.15 Affichez le nombre de propriétaires dans la ville de Paris (Alias : Nombre)

SELECT COUNT(*) from logement as l, logement_personne as lp WHERE lp.idLogement in (SELECT idLogement from logement where ville LIKE 'Paris') and l.idLogement = lp.idLogement;

#3.16 Affichez les informations des trois premières personnes souhaitant acheter un logement

SELECT * from personne as p
INNER JOIN (SELECT idPersonne from demande LIMIT 3) as d on p.idPersonne = d.idPersonne;

#3.17 Affichez les prénoms, email des personnes souhaitant accéder à un logement en location sur la ville de Paris

SELECT prenom, email from personne as p
INNER JOIN (SELECT * from demande where ville like 'Paris') as d on p.idPersonne = d.idPersonne;

#3.18 

select a.nom,
       b.frais
from agence as a
inner join
(
    select idAgence, sum(frais) as frais
    from logement_agence
    group by idAgence
) as b on a.idAgence = b.idAgence;

#3.19
SELECT
	p.idPersonne,
	p.prenom,
    l.ville
FROM personne as p,
	 logement as l,
     logement_personne as lp
WHERE l.idLogement = lp.idLogement and lp.idPersonne = p.idPersonne;

#3.20
SELECT COUNT(*) FROM logement WHERE ville LIKE 'hugo';

#4.1
create user 'afpa' identified by 'passwordAfpa';
create user 'cda314' identified by 'passwordCda314';

#4.2
grant select, insert on immobilier.personne to 'cda314';
grant select, insert on immobilier.logement to 'cda314';

#4.3
grant delete on immobilier.logement to 'afpa';
grant delete on immobilier.demande to 'afpa';
