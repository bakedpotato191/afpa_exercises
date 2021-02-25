use formation;

CREATE TABLE vols (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    numero_vols VARCHAR(6) NOT NULL,
    code_vol INT(6) NOT NULL,
    id_pilote VARCHAR(5) NOT NULL,
    ville_depart VARCHAR(15) NOT NULL,
    ville_arrive VARCHAR(15) NOT NULL,
    temp_depart TIME NOT NULL,
    temp_arrive TIME NOT NULL
);

INSERT into vols (numero_vols, code_vol, id_pilote, ville_depart, ville_arrive, temp_depart, temp_arrive) values 
('AF351', '152010', '00001', 'Paris', 'New York', '09:00', '17:00'), 
('RU154', '458950', '00002', 'Montreal', 'Londres', '13:00', '22:00'), 
('LH1792', '538710', '00003', 'Paris', 'Tunis', '11:00', '21:00');
			
CREATE TABLE pilotes (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom_pilote VARCHAR(15) NOT NULL,
    prenom_pilote VARCHAR(15) NOT NULL,
    code_pilote VARCHAR(5) NOT NULL,
    ville_origine_pilote VARCHAR(20) NOT NULL,
    distance_pilote INT(7) NOT NULL
);

INSERT into pilotes (nom_pilote, prenom_pilote, code_pilote, ville_origine_pilote, distance_pilote) values 
('Déodat', 'Clothilde', '00001', 'Paris', '650000'), 
('Lisette', 'Ruben', '00002', 'Marseille', '825000'), 
('Pascale', 'Hadrien', '00003', 'Cergy', '675000');

alter table vols add constraint fk_pilote_id foreign key (id_pilote) references client(code_pilote);

/* afficher toutes les informations sur les pilotes de compagnie */
SELECT DISTINCT
    nom_pilote,
    prenom_pilote,
    ville_origine_pilote,
    distance_pilote,
    numero_vols,
    code_vol,
    ville_depart,
    ville_arrive,
    temp_depart,
    temp_arrive,
    id_pilote AS code_pilote
FROM
    pilotes AS p,
    vols AS v
WHERE
    p.code_pilote = v.id_pilote

/* afficher le numéro des pilotes en service et les villes de départ de ses velos*/
SELECT DISTINCT
    ville_depart, id_pilote AS code_pilote
FROM
    pilotes AS p,
    vols AS v
WHERE
    p.code_pilote = v.id_pilote



