use formation;

create table vols (id int unsigned auto_increment primary key, numero_vols varchar(6) not null,  code_vol int(6) not null, id_pilote varchar(5) not null, ville_depart varchar(15) not null, ville_arrive varchar(15) not null, temp_depart time not null, temp_arrive time not null);

INSERT into vols (numero_vols, code_vol, id_pilote, ville_depart, ville_arrive, temp_depart, temp_arrive) values
				 ('AF351', '152010', '00001', 'Paris', 'New York', '09:00', '17:00'),
                 ('RU154', '458950', '00002', 'Montreal', 'Londres', '13:00', '22:00'),
				 ('LH1792', '538710', '00003', 'Paris', 'Tunis', '11:00', '21:00');
			
create table pilotes (id int unsigned auto_increment primary key, nom_pilote varchar(15) not null, prenom_pilote varchar(15) not null, code_pilote varchar(5) not null, ville_origine_pilote varchar(20) not null, distance_pilote int(7) not null);

INSERT into pilotes (nom_pilote, prenom_pilote, code_pilote, ville_origine_pilote, distance_pilote) values
				 ('Déodat', 'Clothilde', '00001', 'Paris', '650000'),
                 ('Lisette', 'Ruben', '00002', 'Marseille', '825000'),
				 ('Pascale', 'Hadrien', '00003', 'Cergy', '675000');

alter table vols add constraint fk_pilote_id foreign key (id_pilote) references client(code_pilote);

/* afficher toutes les informations sur les pilotes de compagnie */
select distinct nom_pilote, prenom_pilote, ville_origine_pilote, distance_pilote, numero_vols, code_vol, ville_depart, ville_arrive, temp_depart, temp_arrive, id_pilote as code_pilote from pilotes as p, vols as v
	where p.code_pilote = v.id_pilote;
    
/* afficher le numéro des pilotes en service et les villes de départ de ses velos*/
select distinct ville_depart, id_pilote as code_pilote from pilotes as p, vols as v
	where p.code_pilote = v.id_pilote;



