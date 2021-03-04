use formation;

/* table pilotes */
CREATE TABLE pilotes (
    numPil INT(8) ZEROFILL AUTO_INCREMENT PRIMARY KEY,
    nomPil VARCHAR(20),
    adresse TEXT,
    salaire INT
);

INSERT into pilotes (nomPil, numPil, adresse, salaire) values 
('Déodat Clothilde', '00001', 'Paris', '650000'), 
('Lisette Ruben', '00002', 'Marseille', '825000'), 
('Pascale Hadrien', '00003', 'Cergy', '675000');

/* table avions */
CREATE TABLE avions (
    numAv INT(5) ZEROFILL AUTO_INCREMENT PRIMARY KEY,
    nomAv VARCHAR(10),
    capacite INT,
    localisation VARCHAR(15)
);

INSERT into avions (numAv, nomAv, capacite, localisation) values 
('00001', 'Alpha', '300', 'Paris'), 
('00002', 'Delta', '400', 'Milan'), 
('00003', 'Tea', '375', 'Rome'),
('00004', 'Coffee', '350', 'Bordeaux'),
('00005', 'Cappucino', '110', 'Barcelona');

/* table vols */
CREATE TABLE vols (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    numVol VARCHAR(10),
    numPil INT(8) ZEROFILL,
    numAv INT(5) ZEROFILL,
    ville_dep VARCHAR(50),
    ville_ar VARCHAR(50),
    heure_dep TIME,
    heure_ar TIME,
    CONSTRAINT fk_numpil FOREIGN KEY (numPil)
        REFERENCES pilotes (numPil),
    CONSTRAINT fk_numav FOREIGN KEY (numAv)
        REFERENCES avions (numAv)
);

INSERT into vols (numVol, numPil, numAv, ville_dep, ville_ar, heure_dep, heure_ar) values 
('AF351', '00003', '00001', 'Paris', 'New York', '190000', '040000'), 
('RU154', '00003', '00002', 'Montreal', 'Londres', '130000', '220000'), 
('LH1792', '00001', '00003', 'Lyon', 'Tunis', '110000', '210000');

/* Donnez toutes les informations sur les pilotes de la compagnie. */
SELECT * FROM pilotes;

/* Quels sont les numéros des pilotes en service et les villes de départ de leurs vols ? */
SELECT  numPil, ville_dep FROM vols;

/* Donnez la liste des avions dont la capacité est supérieure à 350 passagers. */
SELECT * from avions WHERE capacite>350;

/* Quels sont les numéros et noms des avions localisés à 'Paris' ? */
SELECT numAv, nomAv from avions WHERE localisation='Paris';

/* Dans combien de villes distinctes sont localisées des avions ? */
SELECT COUNT(DISTINCT localisation) from avions;

/* Quel est le nom des pilotes domiciliés à Cergydont le salaire est supérieur à 500000? */
SELECT nomPil from pilotes WHERE adresse='Cergy' and salaire>'500000';

/* Quels sont les avions (numéro et nom) localisés à Paris ou dont la capacité est inférieure à 350 passagers ? */
SELECT numAv, nomAv FROM avions WHERE localisation='Paris' OR capacite<'350';

/* Liste des vols au départ de Paris allant à 'New york' après 18 heures ? */
SELECT * from vols where ville_dep LIKE 'Paris' AND ville_ar LIKE 'New York' AND heure_dep>'180000';

/* Quels sont les vols (numéro, ville de départ) effectués par les pilotes de numéro 00001 et 00002? */
SELECT numVol, ville_dep from vols WHERE numPil in (00001, 00002);

/* Quels sont les pilotes dont le nom commence par «P» ? */
SELECT * from pilotes WHERE nomPil LIKE 'P%';

/* Quels sont les pilotes dont la troisième lettre est un «s» ? */
SELECT * from pilotes WHERE nomPil LIKE '__s%';

/* Quels sont les numéros des pilotes qui ne sont pas en service ? */
SELECT * from pilotes WHERE numPil not in (select numPil from vols);



######################

#inner join
select * from avions
	inner join vols
	on avions.numAv = vols.numAv;

#left join
select * from avions
	left join vols
	on avions.numAv = vols.numAv;

#right join
select * from avions
	right join vols
	on avions.numAv = vols.numAv;
    
#cross join
select * from avions
	cross join vols
	on avions.numAv = vols.numAv;


select user from mysql.user;
create user 'cda314@localhost' identified by 'test314';

alter user 'cda314@localhost' identified by 'test1314';

show grants for 'root';

grant update on formation.avions to 'cda314@localhost';

show grants for 'cda314@localhost';
