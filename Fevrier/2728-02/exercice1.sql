use formation;

CREATE TABLE representation (
    Num_Rep INT(4) ZEROFILL AUTO_INCREMENT PRIMARY KEY,
    Titre_Rep VARCHAR(35),
    Lieu_Rep VARCHAR (35)
);

CREATE TABLE musicien (
	id INT AUTO_INCREMENT PRIMARY KEY,
	Num_Mus INT,
    Nom_Mus VARCHAR (20),
    Num_Rep INT(4) ZEROFILL UNIQUE,
    CONSTRAINT fk_numrep FOREIGN KEY (Num_Rep)
        REFERENCES representation (Num_Rep)
    );
    
CREATE TABLE programme (
	id INT AUTO_INCREMENT PRIMARY KEY,
    date_prog DATE,
    Num_Rep INT(4) ZEROFILL,
    tarif INT,
    CONSTRAINT fk_numrep FOREIGN KEY (Num_Rep)
        REFERENCES representation (Num_Rep)
);

INSERT INTO representation (Titre_Rep, Lieu_Rep) VALUES 
	('SHOWGIRL TOUR', 'Théâtre JCC'),
    ('REQUIEM DE FAURÉ', 'Basilique le Sacré-Coeur'),
    ('LE SOULIER QUI VOLE', 'Arkea Arena'),
    ('LE LAC DES CYGNES', 'Palais Des Congres'),
    ('TROP VRAI POUR ETRE BEAU', 'La Cie Du Cafe Theatre A ');

INSERT INTO musicien (Num_Mus, Nom_Mus, Num_Rep) VALUES 
	('1', 'Jordan Toussaint', '0002'),
    ('2','La Caution', '0003'),
    ('2',"Life's Decay", '0001'),
    ('1','Béatrice Dufour', '0004'),
    ('7','Les Satellites', '0005');

 INSERT INTO programme (date_prog, Num_Rep, tarif) VALUES 
	('2021-05-04', '0002', '50'),
    ('2021-04-07', '0003', '30'),
    ('2021-03-22', '0001', '45'),
    ('2021-06-18', '0004', '65'),
    ('2021-02-28', '0005', '27'); 

#1
CALL AfficherTitreRepresentations();

#2
CALL AfficherTitreRepresentationsDansTheathre();

#3 
CALL Afficher_musiciens_titre();

#4
CALL afficher_rerp_28fevrier();
    
#5
CALL count_musicien_num_rep(5);

#6
CALL get_titredate_price_less(35);

