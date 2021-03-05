-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: immobilier
-- ------------------------------------------------------
-- Server version	5.7.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `agence`
--

DROP TABLE IF EXISTS `agence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agence` (
  `idAgence` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `nom` varchar(25) DEFAULT NULL,
  `adresse` tinytext,
  PRIMARY KEY (`idAgence`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agence`
--

LOCK TABLES `agence` WRITE;
/*!40000 ALTER TABLE `agence` DISABLE KEYS */;
INSERT INTO `agence` VALUES (000001,'logic-immo','www.logic-immo.com'),(000002,'century21','rue century'),(000003,'laforet','rue laforet'),(000004,'fnaim','rue fnaim'),(000005,'orpi','rue orpi'),(000006,'foncia','rue foncia'),(000007,'guy-hoquet','rue guy-hoquet'),(000008,'seloger','www.seloger.com'),(000009,'bouygues immobilier','www.bouygues-immobilier.net');
/*!40000 ALTER TABLE `agence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `demande`
--

DROP TABLE IF EXISTS `demande`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `demande` (
  `idDemande` int(11) NOT NULL AUTO_INCREMENT,
  `idPersonne` int(11) DEFAULT NULL,
  `type` varchar(15) DEFAULT NULL,
  `ville` varchar(25) DEFAULT NULL,
  `budget` int(11) DEFAULT NULL,
  `superficie` int(11) DEFAULT NULL,
  `categorie` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`idDemande`),
  KEY `idPersonne` (`idPersonne`),
  KEY `type` (`type`),
  KEY `ville` (`ville`),
  KEY `superficie` (`superficie`),
  KEY `categorie` (`categorie`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `demande`
--

LOCK TABLES `demande` WRITE;
/*!40000 ALTER TABLE `demande` DISABLE KEYS */;
INSERT INTO `demande` VALUES (1,1,'appartement','paris',530000,120,'vente'),(2,3,'appartement','bordeaux',120000,18,'vente'),(3,4,'appartement','bordeaux',145000,21,'vente'),(4,5,'appartement','bordeaux',152000,26,'vente'),(5,6,'appartement','lyon',200000,55,'vente'),(6,9,'appartement','paris',171000,40,'vente'),(7,13,'appartement','paris',163000,25,'vente'),(8,16,'appartement','paris',132000,15,'vente'),(9,19,'appartement','paris',350000,80,'vente'),(10,22,'appartement','lyon',600,20,'location'),(11,25,'appartement','lyon',188000,65,'vente'),(12,27,'appartement','paris',400,15,'location'),(13,28,'appartement','paris',330500,100,'vente'),(14,31,'appartement','paris',90000,15,'vente'),(15,32,'appartement','lyon',123800,21,'vente'),(16,35,'appartement','lyon',1200,70,'vente'),(17,37,'appartement','lyon',11500,100,'vente'),(18,43,'appartement','paris',600,20,'location'),(19,44,'appartement','paris',750,30,'location'),(20,45,'appartement','bordeaux',6801,30,'location'),(21,46,'appartement','bordeaux',213000,40,'vente');
/*!40000 ALTER TABLE `demande` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logement`
--

DROP TABLE IF EXISTS `logement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logement` (
  `idLogement` int(5) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `type` varchar(15) DEFAULT NULL,
  `ville` varchar(25) DEFAULT NULL,
  `prix` int(11) DEFAULT NULL,
  `superficie` int(11) DEFAULT NULL,
  `categorie` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`idLogement`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logement`
--

LOCK TABLES `logement` WRITE;
/*!40000 ALTER TABLE `logement` DISABLE KEYS */;
INSERT INTO `logement` VALUES (00001,'appartement','paris',185000,61,'vente'),(00002,'appartement','paris',115000,29,'vente'),(00003,'maison','paris',510000,130,'vente'),(00004,'appartement','bordeaux',550,26,'location'),(00005,'maison','lyon',420,14,'location'),(00006,'appartement','paris',160000,40,'vente'),(00007,'appartement','paris',670,35,'location'),(00008,'maison','lyon',110000,21,'vente'),(00009,'appartement','bordeaux',161500,33,'vente'),(00010,'appartement','paris',202000,90,'vente'),(00011,'appartement','nantes',150000,94,'vente'),(00012,'maison','bordeaux',180000,86,'vente'),(00013,'appartement','marseille',201000,100,'vente'),(00014,'appartement','creteil',175800,76,'vente'),(00015,'appartement','marseille',145900,45,'vente'),(00016,'maison','lyon',198547,79,'vente'),(00017,'appartement','bordeaux',65045,65,'vente'),(00018,'maison','paris',214000,50,'vente'),(00019,'appartement','lyon',98700,45,'vente');
/*!40000 ALTER TABLE `logement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logement_agence`
--

DROP TABLE IF EXISTS `logement_agence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logement_agence` (
  `idLogementAgence` int(11) NOT NULL AUTO_INCREMENT,
  `idAgence` int(6) DEFAULT NULL,
  `idLogement` int(5) DEFAULT NULL,
  `frais` int(11) DEFAULT NULL,
  PRIMARY KEY (`idLogementAgence`),
  KEY `idAgence` (`idAgence`),
  KEY `idLogement` (`idLogement`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logement_agence`
--

LOCK TABLES `logement_agence` WRITE;
/*!40000 ALTER TABLE `logement_agence` DISABLE KEYS */;
INSERT INTO `logement_agence` VALUES (1,2,5,15000),(2,1,1,20000),(3,5,10,18000),(4,6,9,17500),(5,9,6,12600),(6,8,4,19450),(7,3,8,15000),(8,7,2,20000),(9,4,3,730),(10,4,7,30000);
/*!40000 ALTER TABLE `logement_agence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logement_personne`
--

DROP TABLE IF EXISTS `logement_personne`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logement_personne` (
  `idLogementPersonne` int(11) NOT NULL AUTO_INCREMENT,
  `idPersonne` int(11) DEFAULT NULL,
  `idLogement` int(5) DEFAULT NULL,
  PRIMARY KEY (`idLogementPersonne`),
  KEY `idPersonne` (`idPersonne`),
  KEY `idLogement` (`idLogement`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logement_personne`
--

LOCK TABLES `logement_personne` WRITE;
/*!40000 ALTER TABLE `logement_personne` DISABLE KEYS */;
INSERT INTO `logement_personne` VALUES (1,2,11),(2,7,13),(3,8,14),(4,10,12),(5,11,16),(6,12,18),(7,14,17),(8,15,15),(9,17,19);
/*!40000 ALTER TABLE `logement_personne` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personne`
--

DROP TABLE IF EXISTS `personne`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personne` (
  `idPersonne` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(20) DEFAULT NULL,
  `prenom` varchar(20) DEFAULT NULL,
  `email` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`idPersonne`)
) ENGINE=MyISAM AUTO_INCREMENT=51 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personne`
--

LOCK TABLES `personne` WRITE;
/*!40000 ALTER TABLE `personne` DISABLE KEYS */;
INSERT INTO `personne` VALUES (1,'Constantin','Blick','handerson@example.org'),(2,'Edwina','Lesch','mharris@example.com'),(3,'Destini','Hintz','waelchi.gerard@example.or'),(4,'Demarco','Larkin','green.maya@example.com'),(5,'Raquel','Barrows','mayra58@example.net'),(6,'Buddy','Torp','sullrich@example.org'),(7,'Buster','Bode','diego74@example.org'),(8,'Guido','Koepp','adams.emanuel@example.org'),(9,'Deion','Lesch','alford.wunsch@example.com'),(10,'Kylee','O\'Keefe','boris.runolfsdottir@examp'),(11,'Patience','Quigley','marvin.aufderhar@example.'),(12,'Liana','Graham','apadberg@example.net'),(13,'Kobe','Spencer','schmeler.karina@example.c'),(14,'Bennett','Flatley','sstreich@example.org'),(15,'Brandi','Johns','dswaniawski@example.com'),(16,'Robyn','Kassulke','o\'reilly.brenna@example.n'),(17,'Coty','Weissnat','cali.witting@example.net'),(18,'Malinda','Kiehn','qswift@example.org'),(19,'Delbert','Feil','little.tiara@example.com'),(20,'Maximus','Borer','effertz.kiarra@example.or'),(21,'Christine','Swift','yvonne.kuhlman@example.ne'),(22,'Ezra','Schultz','zbalistreri@example.com'),(23,'Fausto','Schuster','mprosacco@example.org'),(24,'Madaline','Kassulke','rwaters@example.net'),(25,'Scot','Hoeger','ava97@example.com'),(26,'Geovanni','Crooks','dd\'amore@example.com'),(27,'Amie','Mosciski','roscoe45@example.com'),(28,'Madelyn','Mayert','mann.daren@example.org'),(29,'Marquis','Halvorson','eschaefer@example.org'),(30,'Elfrieda','Harvey','nitzsche.ezequiel@example'),(31,'Marlin','Shields','zachery30@example.com'),(32,'Justice','Kohler','melyna.cronin@example.org'),(33,'Delaney','Abbott','tierra.altenwerth@example'),(34,'Dalton','Murphy','cade.mccullough@example.n'),(35,'Drake','Heller','mayert.garett@example.com'),(36,'Margarete','Collins','homenick.nichole@example.'),(37,'Jamison','Dickens','fgreenfelder@example.org'),(38,'Kian','Legros','gnienow@example.net'),(39,'Lisa','Ziemann','sanford01@example.net'),(40,'Mossie','Boyle','general10@example.org'),(41,'Genesis','Cremin','levi.deckow@example.com'),(42,'Dayton','Feil','batz.hoyt@example.com'),(43,'Sibyl','Kuhic','qluettgen@example.org'),(44,'Jayne','Schroeder','mortimer.prohaska@example'),(45,'Ashton','Kulas','ckoepp@example.net'),(46,'Nona','Nitzsche','gerlach.brent@example.com'),(47,'Thad','Murphy','koelpin.verla@example.com'),(48,'Pearl','Oberbrunner','anais04@example.org'),(49,'Berniece','Williamson','dkuhic@example.com'),(50,'Carley','McDermott','emery.mraz@example.com');
/*!40000 ALTER TABLE `personne` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'immobilier'
--
/*!50003 DROP PROCEDURE IF EXISTS `insert_info_agence` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insert_info_agence`()
BEGIN
	insert into agence (nom, adresse) values 
	('logic-immo', 'www.logic-immo.com'),
	('century21', 'rue century'),
	('laforet', 'rue laforet'),
	('fnaim', 'rue fnaim'),
	('orpi', 'rue orpi'),
	('foncia', 'rue foncia'),
	('guy-hoquet', 'rue guy-hoquet'),
	('seloger', 'www.seloger.com'),
	('bouygues immobilier', 'www.bouygues-immobilier.net'); 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insert_info_demande` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insert_info_demande`()
BEGIN
	insert into demande (idPersonne, type, ville, budget, superficie, categorie) values
	(1, 'appartement', 'paris', 530000, 120 , 'vente'),
	(3, 'appartement', 'bordeaux', 120000, 18, 'vente'),
	(4, 'appartement', 'bordeaux', 145000, 21, 'vente'),
	(5, 'appartement', 'bordeaux', 152000, 26, 'vente'),
	(6, 'appartement', 'lyon', 200000, 55, 'vente'),
	(9, 'appartement', 'paris', 171000, 40, 'vente'),
	(13, 'appartement', 'paris', 163000, 25, 'vente'), 
	(16, 'appartement' , 'paris', 132000, 15, 'vente'),
	(19, 'appartement', 'paris', 350000, 80, 'vente'),
	(22, 'appartement', 'lyon', 600, 20, 'location'),
	(25, 'appartement', 'lyon', 188000, 65, 'vente'),
	(27, 'appartement' , 'paris', 400, 15, 'location'),
	(28, 'appartement' , 'paris', 330500, 100, 'vente'),
	(31, 'appartement' , 'paris', 90000, 15, 'vente'),
	(32, 'appartement', 'lyon', 123800, 21, 'vente'),
	(35, 'appartement', 'lyon', 1200, 70, 'vente'),
	(37, 'appartement', 'lyon', 11500, 100, 'vente'),
	(43, 'appartement', 'paris', 600, 20, 'location'),
	(44, 'appartement', 'paris', 750, 30, 'location'),
	(45, 'appartement', 'bordeaux', 6801, 30, 'location'), 
	(46, 'appartement', 'bordeaux', 213000, 40, 'vente');
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insert_info_logement` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insert_info_logement`()
BEGIN
	insert into logement (type, ville, prix, superficie, categorie) values
	('appartement', 'paris', 185000, 61, 'vente'),
	('appartement', 'paris', 115000, 29, 'vente'),
	('maison', 'paris', 510000,  130, 'vente'),
	('appartement', 'bordeaux', 550, 26, 'location'),
	('maison', 'lyon', 420, 14, 'location'),
	('appartement', 'paris', 160000, 40, 'vente'),
	('appartement', 'paris', 670, 35, 'location'),
	('maison', 'lyon', 110000, 21, 'vente'),
	('appartement', 'bordeaux', 161500, 33, 'vente'),
	('appartement', 'paris', 202000, 90, 'vente'),
    ('appartement', 'nantes', 150000, 94, 'vente'),
    ('maison', 'bordeaux', 180000, 86, 'vente'),
    ('appartement', 'marseille', 201000, 100, 'vente'),
    ('appartement', 'creteil', 175800, 76, 'vente'),
    ('appartement', 'marseille', 145900, 45, 'vente'),
    ('maison', 'lyon', 198547, 79, 'vente'),
    ('appartement', 'bordeaux', 65045, 65, 'vente'),
    ('maison', 'paris', 214000, 50, 'vente'),
    ('appartement', 'lyon', 98700, 45, 'vente');
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insert_info_logement_agence` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insert_info_logement_agence`()
BEGIN
	insert into logement_agence (idAgence, idLogement, frais) values
	(000002, 00005, 15000),
    (000001, 00001, 20000),
    (000005, 00010, 18000),
    (000006, 00009, 17500),
    (000009, 00006, 12600),
    (000008, 00004, 19450),
    (000003, 00008, 15000),
    (000007, 00002, 20000),
    (000004, 00003, 25000),
    (000004, 00007, 30000);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insert_info_logement_personne` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insert_info_logement_personne`()
BEGIN
	insert into logement_personne (idPersonne, idLogement) values
    (2, 00011),
    (7, 00013),
    (8, 00014), 
    (10, 00012), 
    (11, 00016), 
    (12, 00018), 
    (14, 00017), 
    (15, 00015), 
    (17, 00019);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insert_info_personne` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_ALL_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insert_info_personne`()
BEGIN
	INSERT INTO personne  (nom, prenom, email) VALUES 
('Constantin','Blick','handerson@example.org'),
('Edwina','Lesch','mharris@example.com'),
('Destini','Hintz','waelchi.gerard@example.or'),
('Demarco','Larkin','green.maya@example.com'),
('Raquel','Barrows','mayra58@example.net'),
('Buddy','Torp','sullrich@example.org'),
('Buster','Bode','diego74@example.org'),
('Guido','Koepp','adams.emanuel@example.org'),
('Deion','Lesch','alford.wunsch@example.com'),
('Kylee','O\'Keefe','boris.runolfsdottir@examp'),
('Patience','Quigley','marvin.aufderhar@example.'),
('Liana','Graham','apadberg@example.net'),
('Kobe','Spencer','schmeler.karina@example.c'),
('Bennett','Flatley','sstreich@example.org'),
('Brandi','Johns','dswaniawski@example.com'),
('Robyn','Kassulke','o\'reilly.brenna@example.n'),
('Coty','Weissnat','cali.witting@example.net'),
('Malinda','Kiehn','qswift@example.org'),
('Delbert','Feil','little.tiara@example.com'),
('Maximus','Borer','effertz.kiarra@example.or'),
('Christine','Swift','yvonne.kuhlman@example.ne'),
('Ezra','Schultz','zbalistreri@example.com'),
('Fausto','Schuster','mprosacco@example.org'),
('Madaline','Kassulke','rwaters@example.net'),
('Scot','Hoeger','ava97@example.com'),
('Geovanni','Crooks','dd\'amore@example.com'),
('Amie','Mosciski','roscoe45@example.com'),
('Madelyn','Mayert','mann.daren@example.org'),
('Marquis','Halvorson','eschaefer@example.org'),
('Elfrieda','Harvey','nitzsche.ezequiel@example'),
('Marlin','Shields','zachery30@example.com'),
('Justice','Kohler','melyna.cronin@example.org'),
('Delaney','Abbott','tierra.altenwerth@example'),
('Dalton','Murphy','cade.mccullough@example.n'),
('Drake','Heller','mayert.garett@example.com'),
('Margarete','Collins','homenick.nichole@example.'),
('Jamison','Dickens','fgreenfelder@example.org'),
('Kian','Legros','gnienow@example.net'),
('Lisa','Ziemann','sanford01@example.net'),
('Mossie','Boyle','general10@example.org'),
('Genesis','Cremin','levi.deckow@example.com'),
('Dayton','Feil','batz.hoyt@example.com'),
('Sibyl','Kuhic','qluettgen@example.org'),
('Jayne','Schroeder','mortimer.prohaska@example'),
('Ashton','Kulas','ckoepp@example.net'),
('Nona','Nitzsche','gerlach.brent@example.com'),
('Thad','Murphy','koelpin.verla@example.com'),
('Pearl','Oberbrunner','anais04@example.org'),
('Berniece','Williamson','dkuhic@example.com'),
('Carley','McDermott','emery.mraz@example.com');
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-05  9:21:05
