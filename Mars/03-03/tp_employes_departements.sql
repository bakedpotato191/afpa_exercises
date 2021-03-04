use formation;

CREATE TABLE departements (
    DNO INT AUTO_INCREMENT PRIMARY KEY,
    DNOM VARCHAR(20),
    DIR VARCHAR(20),
    VILLE VARCHAR(20)
);

CREATE TABLE employes (
    ENO INT AUTO_INCREMENT PRIMARY KEY,
    ENOM VARCHAR(25),
    PROF VARCHAR(25),
    DATEEMB DATE,
    SAL FLOAT,
    COMM FLOAT,
    DNO INT,
    FOREIGN KEY (DNO)
        REFERENCES departements (DNO)
);

INSERT INTO departements (DNOM, DIR, Ville) VALUES 
	('Commercial', 30, 'New York'), 
    ('Production', 20, 'Houston'), 
    ('Développement', 40, 'Boston');
    
INSERT INTO employes (ENOM, PROF, DATEEMB, SAL, COMM, DNO) VALUES 
	('Joe', 'Ingénieur', '1993-10-1', 4000, 3000, 3), 
    ('Jack', 'Technicien', '1988-5-1', 3000, 2000, 2), 
    ('Joe', 'Vendeur', '1993-9-2', 5000, 5000, 1),
    ('Lucy', 'Ingénieur', '1980-3-1', 5000, 5000, 3);

#1 - Faire le produit cartésien en Employés 
#et Départements

SELECT * FROM employes CROSS JOIN departements;

#2- Donnez les noms des employés et 
#les noms de leur département

SELECT ENOM, DNOM from employes
INNER JOIN departements on 
employes.DNO = departements.DNO;

#3 - Donnez les numéros des employés 
#travaillant à Boston

select ENO from employes where 
    DNO in (select DNO from departements
		where VILLE = 'Boston'
        );
        
	select ENO from employes as s, 
    departements as d    
    where s.DNO = d.DNO 
    and VILLE='BOSTON';
    
    select ENO from employes
    inner join departements 
    on VILLE like 'BOSTON' and
    employes.DNO = departements.DNO;

#4-  Donnez les noms des directeurs de département 1 et 3.
	select DIR from departements where DNO in (1,3);

#5- Donnez les noms des employés travaillant dans un 
#département avec au moins un ingénieur
	SELECT ENOM FROM employes WHERE DNO IN(
    SELECT DNO FROM employes WHERE PROF = "Ingénieur"
);

#6- Donnez le salaire et le nom des employés gagnant plus qu'un 
#(au moins un) ingénieur
	select SAL, ENOM from employes 
    where SAL > (
		select MIN(SAL) from employes where PROF = "Ingénieur"
    );

#7- Donnez les salaires et le nom des employés gagnant plus que 
#tous les ingénieurs
	select SAL, ENOM from employes 
    where SAL > (
		select MAX(SAL) from employes where PROF = "Ingénieur"
    );
    
#8- Donnez les noms des employés et les noms de leur directeur.
	select ENOM, DIR from employes
    inner join departements
    on employes.DNO = departements.DNO;



    