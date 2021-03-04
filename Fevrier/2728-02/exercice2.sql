use formation;

create table departements (
	DNO int auto_increment primary key,
    DNOM char(25),
    DIR varchar(23),
    VILLE char(25)
);

create table employes (
	ENO int auto_increment primary key,
    ENOM varchar(20),
    PROF varchar(20),
    DATEEMB date,
    SAL float,
    COMM float,
    DNO int,
    foreign key (DNO) references departements(DNO)
);

#1 
select * 
from employes 
having COMM;

#2
select ENOM, SAL
from employes
order by PROF asc, SAL desc;
    
#3
select avg(SAL) 
from employes;

#4
select avg(SAL)
from employes as e, departements as d
where e.DNO = d.DNO
and d.DNOM = 'production';

#5
select DNO, max(SAL) 
from employes;

#6
select PROF, avg(SAL)
from employes group by PROF;

#7
select avg(SAL) as 'Salaire moyen', PROF
from employes
group by PROF 
order by avg(SAL) limit 1;

#8
select PROF, avg(SAL)
from employes
group by PROF having avg(SAL) = ( 
	select avg(SAL) 
    from employes 
    group by PROF
	order by avg(SAL) limit 1
);