#1
CREATE SCHEMA immobilier;
use immobilier;

#2
CALL create_table_agence();
CALL create_table_logement();
CALL create_table_personne();
CALL create_table_demande();
CALL create_table_logement_agence();
CALL create_table_logement_personne();
CALL insert_info_agence();
CALL insert_info_logement();
CALL insert_info_personne();
CALL insert_info_demande();
CALL insert_info_logement_agence();


#3.1
CALL afficher_nom_agence();

#3.2
CALL afficher_numero_agence_orpi();

#3.3
CALL afficher_permier_logement();

#3.4
CALL count_logement();

#3.5
CALL afficher_logement_moins150k_asc();

#3.6
CALL afficher_logement_location();

#3.7
CALL afficher_ville_recherchees();

#3.8
CALL count_logement_par_ville();

#3.9
CALL afficher_id_logement_location();

#3.10
CALL afficher_logement_sf2030();

#3.11
CALL afficher_logement_prix_min();

#3.12
CALL afficher_logement_maison_par_ville();

#3.13
CALL diminuer_frais_logement_trois();

#3.14
CALL logement_agence_seloger();

#3.15
CALL count_proprietaire_paris();

#3.16
CALL afficher_info_trois_premiere_demande();

#3.17
CALL afficher_info_demande_paris();

/*3.18 Si l’ensemble des logements étaient vendus ou loués demain, quel serait le bénéfice généré grâce aux frais d’agence et pour chaque agence (Alias : bénéfice, classement : par ordre croissant des gains ?????????????????????????

SELECT la.idAgence, SUM(frais) from logement_agence as la
INNER JOIN (SELECT * from agence) as a on la.idAgence = a.idAgence;*/

#3.19
CALL afficher_prenom_ville_chaque_proprietaire();

#3.20
CALL count_logement_par_ville_recherchee('Lyon');


#4.1
CALL create_user_afpa();
CALL create_user_cda314();

#4.2
CALL grant_select_insert_to_cda314_onpersonne();
CALL grant_select_insert_to_cda314_onlogement();

#4.3
CALL grant_delete_to_afpa_on_logement();
CALL  grant_delete_to_afpa_on_demande();
