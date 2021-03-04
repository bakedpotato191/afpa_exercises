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
CALL insert_info_logement_personne();

#3

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
