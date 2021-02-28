#1 
use formation;

CREATE TABLE client (
    num_cli INT(4) ZEROFILL AUTO_INCREMENT PRIMARY KEY,
    nom_cli CHAR (15),
    prenom_cli CHAR (15),
    adr_cli CHAR(60),
    mail_cli CHAR(25) UNIQUE
);

CREATE TABLE produit (
    num_prod INT(4) ZEROFILL AUTO_INCREMENT PRIMARY KEY,
    nom_prod CHAR(35),
	prix_prod INT,
    qte_prod INT DEFAULT '0'
);

CREATE TABLE vendeur (
    id_vend INT(4) ZEROFILL AUTO_INCREMENT PRIMARY KEY,
    nom_vend CHAR (25),
	adr_vend CHAR(60) NOT NULL
);

CREATE TABLE commande (
    num_comm INT(4) ZEROFILL AUTO_INCREMENT PRIMARY KEY,
	num_cli INT(4) ZEROFILL,
    id_vend INT(4) ZEROFILL,
    num_prod INT(4) ZEROFILL,
    date_comm DATE,
    qte_comm INT,
    CONSTRAINT fk_numcli FOREIGN KEY (num_cli)
        REFERENCES client (num_cli),
	CONSTRAINT fk_idvend FOREIGN KEY (id_vend)
        REFERENCES vendeur (id_vend),
	CONSTRAINT fk_numprod FOREIGN KEY (num_prod)
        REFERENCES produit (num_prod)
);

INSERT INTO client (nom_cli, prenom_cli, adr_cli, mail_cli) VALUES 
	('Pascal', 'Liliane', '98 rue du Président Roosevelt, 77176 SAVIGNY-LE-TEMPLE', 'pascalliliane@gmail.com'),
    ('Carrel', 'Zacharie', '36  rue La Boétie, 75014 Paris', 'carrelzach@gmail.com'),
	('Masson', 'André', '66  rue de la République, 69003 Lyon', 'massonandre@gmail.com'),
    ('Laurens', 'Marthe', '42  rue Banaudon, 69006 Lyon', 'laurensmarthe@gmail.com'),
    ('Gide', 'Brice', '107  place Maurice-Charretier, 94500 CHAMPIGNY-SUR-MARNE', 'gidebrice@gmail.com');

INSERT INTO produit (nom_prod, prix_prod, qte_prod) VALUES 
	('Anker Nebula', '400', '35'),
    ('HP Spectre x360', '1900', '15'),
    ('Bedsure Housse de Couette', '27', '56'),
    ('Chaussons', '18', '99'),
    ('Pokémon Carte Album', '9', '150');

INSERT INTO vendeur (nom_vend, adr_vend) VALUES
	('Anker', '72  rue La Boétie, 75017 PARIS'),
    ('HP', '65  rue de la République, 69004 LYON'),
    ('Bedsure', '22  boulevard Bryas, 94000 CRÉTEIL'),
    ('Funmo', '39  cours Jean Jaures, 33300 BORDEAUX'),
    ('Misolin', ' 23 Avenue du Général Gallieni, 94340 JOINVILLE-LE-PONT');
    
INSERT INTO commande (num_cli, id_vend, num_prod, date_comm, qte_comm) VALUES
	('0005', '0001', '0001', '2021-02-28', '1'),
    ('0003', '0002', '0002', '2021-02-13', '5'),
    ('0004', '0002', '0001', '2021-02-01', '12'),
    ('0001', '0004', '0004', '2021-02-10', '8'),
    ('0002', '0003', '0003', '2021-02-02', '4');

#2
SELECT * from client WHERE adr_cli LIKE '%,%Paris';

#3
SELECT * from produit ORDER BY prix_prod DESC;

#4
SELECT nom_vend, adr_vend FROM vendeur WHERE nom_vend LIKE 'M%';

#5
SELECT
	num_cli,
    id_vend,
    num_prod,
    date_comm,
    qte_comm
FROM 
	commande
WHERE id_vend in (SELECT id_vend FROM vendeur WHERE nom_vend LIKE 'Anker') AND (date_comm < '2021-03-01' AND date_comm > '2021-02-01');

#6
SELECT COUNT(*) FROM commande WHERE num_prod LIKE '0004';

