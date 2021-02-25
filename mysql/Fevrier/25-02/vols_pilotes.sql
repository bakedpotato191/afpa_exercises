use formation;

/* table avions */
CREATE TABLE avions (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    NumAv VARCHAR(5) NOT NULL,
    NomAv VARCHAR(5) NOT NULL,
    Capacité INT(3) NOT NULL,
    Localisation VARCHAR(10) NOT NULL
)

INSERT into avions (NumAv, NomAv, Capacité, Localisation) values 
('00001', 'Alpha', '300', 'Paris'), 
('00002', 'Delta', '400', 'Milan'), 
('00003', 'Delta', '350', 'Rome');


/* table vols */
CREATE TABLE vols (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    NumVol VARCHAR(6) NOT NULL,
    NumAv INT(6) NOT NULL,
    NumPil VARCHAR(5) NOT NULL,
    Ville_depart VARCHAR(15) NOT NULL,
    Ville_arrive VARCHAR(15) NOT NULL,
    Heure_dep TIME NOT NULL,
    Heure_arrivee TIME NOT NULL
)

INSERT into vols (NumVol, NumAv, NumPil, Ville_depart, Ville_arrive, Heure_dep, Heure_arrivee) values 
('AF351', '152010', '00001', 'Paris', 'New York', '05:00', '23:00'), 
('RU154', '458950', '00002', 'Montreal', 'Londres', '13:00', '22:00'), 
('LH1792', '538710', '00003', 'Paris', 'Tunis', '11:00', '21:00');


/* table pilotes */
CREATE TABLE pilotes (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    NomPil VARCHAR(20) NOT NULL,
    NumPil VARCHAR(5) NOT NULL,
    Adresse VARCHAR(15) NOT NULL,
    Salaire INT(6) NOT NULL
)

INSERT into pilotes (NomPil, NumPil, Adresse, Salaire) values 
('Déodat Clothilde', '00001', 'Paris', '650000'), 
('Lisette Ruben', '00002', 'Marseille', '825000'), 
('Pascale Hadrien', '00003', 'Cergy', '675000');

/* Donnez toutes les informations sur les pilotes de la compagnie. */
SELECT * from pilotes;

/* Quels sont les numéros des pilotes en service et les villes de départ de leurs vols ? */
SELECT NumPil, Ville_depart from vols;

/* Donnez la liste des avions dont la capacité est supérieure à 350 passagers. */
SELECT * from avions WHERE Capacité>350;

/* Quels sont les numéros et noms des avions localisés à 'Paris' ? */
SELECT NumAv, NomAv from avions WHERE Localisation='Paris';

/* Dans combien de villes distinctes sont localisées des avions ? */
SELECT COUNT(DISTINCT Localisation) from avions;

/* Quel est le nom des pilotes domiciliés à Cergydont le salaire est supérieur à 500000? */
SELECT NomPil from pilotes WHERE Adresse='Cergy' and Salaire>'500000';

/* Quels sont les avions (numéro et nom) localisés à Paris ou dont la capacité est inférieure à 350 passagers ? */
SELECT NumAv, NomAv FROM avions WHERE Localisation='Paris' OR Capacité<'350';

/* Liste des vols au départ de Paris allant à 'New york' après 18 heures ? */
SELECT * from vols where TIMEDIFF(Heure_arrivee, Heure_dep)>='18';

/* Quels sont les vols (numéro, ville de départ) effectués par les pilotes de numéro 00001et 00002? */
SELECT NumVol, Ville_depart from vols WHERE NumPil='00001' or  NumPil='00002';

/* Quels sont les pilotes dont le nom commence par «P» ? */
SELECT * from pilotes WHERE NomPil LIKE 'P%';

/* Quels sont les pilotes dont la troisième lettre est un «s» ? */alter
SELECT * from pilotes WHERE NomPil LIKE '__s%';

/* Quels sont les numéros des pilotes qui ne sont pas en service ? */

/* ??? */




