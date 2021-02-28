#1 
USE formation;

CREATE TABLE salle (
    id_salle INT(2) ZEROFILL AUTO_INCREMENT PRIMARY KEY,
    nom_salle CHAR(15),
    adr_salle CHAR(50),
    cap_salle INT(3)
);

CREATE TABLE spectacle (
    id_spec INT(4) ZEROFILL AUTO_INCREMENT PRIMARY KEY,
    titre_spec CHAR(25),
    date_spec DATE,
    duree_spec TIME,
    id_salle INT(4) ZEROFILL,
    chanteur CHAR(25),
    CONSTRAINT fk_idsalle FOREIGN KEY (id_salle)
        REFERENCES salle (id_salle)
);

CREATE TABLE concert (
    id_conc INT(4) ZEROFILL AUTO_INCREMENT PRIMARY KEY,
    date_conc DATE,
    heure_conc TIME,
    id_spec INT(4) ZEROFILL,
    CONSTRAINT fk_idspec FOREIGN KEY (id_spec)
        REFERENCES spectacle (id_spec)
);

CREATE TABLE billet (
    id_billet INT(5) ZEROFILL AUTO_INCREMENT PRIMARY KEY,
    id_conc INT(4) ZEROFILL,
    num_place CHAR(3),
    categorie CHAR(15),
    prix INT(3),
    CONSTRAINT fk_idconc FOREIGN KEY (id_conc)
        REFERENCES concert (id_conc)
);

CREATE TABLE vente (
    id_vente INT(5) ZEROFILL AUTO_INCREMENT PRIMARY KEY,
    date_vente DATE,
    id_billet INT(5) ZEROFILL,
    moyen CHAR(15),
    CONSTRAINT fk_idbillet FOREIGN KEY (id_billet)
        REFERENCES billet (id_billet)
);

INSERT INTO salle (nom_salle, adr_salle, cap_salle) VALUES 
	('salle 1', '45  rue La Boétie', '105'),
    ('salle 2', '48  Square de la Couronne', '150'),
    ('salle 3', '53  rue Nationale', '130'),
    ('salle 4', '110  Square de la Couronne', '120'),
    ('salle 5', '57  Square de la Couronne', '110'),
    ('salle 6', '114  Place de la Madeleine', '133'),
    ('salle 7', '59  Square de la Couronne', '217'),
    ('salle 8', '31  rue La Boétie', '361'),
    ('salle 9', '108  Place de la Madeleine', '450'),
    ('salle 10', '117  rue La Boétie', '175'),
    ('salle 11', '35  Place de la Madeleine', '189'),
    ('salle 12', '44  Place de la Madeleine', '231'),
    ('salle 13', '81  rue La Boétie', '213'),
    ('salle 14', '37  Square de la Couronne', '178'),
    ('salle 15', '54  Faubourg Saint Honoré', '156'),
    ('salle 16', '55  rue Victor Hugo', '146'),
    ('salle 17', '77  rue Victor Hugo', '125'),
    ('salle 18', '64 rue du Paillle en queue', '546'),
    ('salle 19', '29 boulevard de Prague', '658'),
    ('salle 20', '15 Rue du Limas', '230');

INSERT INTO spectacle (titre_spec, date_spec, duree_spec, id_salle, chanteur) VALUES 
	("spec1", '2021-03-03', '00:50', '03', 'Marc Lavoine'),
    ("spec2", '2021-03-05', '01:50', '02', 'Pierre Perret'),
    ("spec3", '2021-02-25', '00:35', '01', 'Dani'),
    ("spec4", '2021-04-19', '00:53', '12', 'Louis-Jean Cormier'),
    ("spec5", '2021-05-18', '01:00', '13', 'Noe Preszow'),
    ("spec6", '2021-04-05', '01:35', '19', 'Corneille'),
    ("spec7", '2021-04-06', '01:15', '10', 'Clarika'),
    ("spec8", '2021-04-08', '01:10', '10', 'Veronic Dicaire'),
    ("spec9", '2021-04-23', '01:20', '10', 'Les Negresses Vertes'),
    ("spec10", '2021-05-06', '01:45', '10', 'Julie Zenatti'),
    ("spec11", '2021-07-08', '00:54', '10', 'Alex Beaupain'),
    ("spec12", '2021-04-21', '00:39', '10', 'Laurent Voulzy');
    
INSERT INTO concert (date_conc, heure_conc, id_spec) VALUES
	("2021-05-18", '19:50', '0005'),
    ("2021-04-05", '20:30', '0006'),
    ("2021-04-08", '20:00', '0008'),
    ("2021-03-03", '19:00', '0001'),
    ("2021-04-19", '21:00', '0004'),
    ("2021-04-23", '20:00', '0009'),
    ("2021-05-06", '20:20', '0010'),
    ("2021-04-21", '19:25', '0012'),
    ("2021-03-05", '18:30', '0002'),
    ("2021-02-25", '20:15', '0003'),
    ("2021-07-08", '19:35', '0011'),
    ("2021-04-06", '18:45', '0007');
    
INSERT INTO billet (id_conc, num_place, categorie, prix) VALUES 
	('0003', '105', 'cat_test1', '60'),
    ('0001', '104', 'cat_test1', '70'),
    ('0010', '103', 'cat_test2', '80'),
    ('0009', '100', 'cat_test1', '90'),
    ('0002', '120', 'cat_test3', '45'),
    ('0008', '150', 'cat_test2', '35'),
    ('0011', '145', 'cat_test1', '25'),
    ('0004', '137', 'cat_test4', '18'),
    ('0007', '86', 'cat_test3', '37'),
    ('0012', '59', 'cat_test2', '45'),
    ('0005', '78', 'cat_test1', '68'),
    ('0006', '350', 'cat_test3', '71');
    
INSERT INTO vente (date_vente, id_billet, moyen) VALUES 
	('2021-01-01', '0001', 'paypal'),
    ('2021-01-02', '0003', 'cart bancaire'),
    ('2021-02-01', '0010', 'especes'),
    ('2021-01-05', '0009', 'cart bancaire'),
    ('2021-01-06', '0007', 'paypal'),
    ('2021-01-01', '0006', 'cart bancaire'),
    ('2021-01-02', '0005', 'paypal'),
    ('2021-01-03', '0002', 'cart bancaire'),
    ('2021-01-05', '0011', 'especes'),
    ('2021-01-04', '0012', 'cart bancaire'),
    ('2021-01-07', '0008', 'especes'),
    ('2021-01-02', '0004', 'cart bancaire');


