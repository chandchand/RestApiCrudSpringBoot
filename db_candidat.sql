/*
SQLyog Ultimate v12.5.1 (64 bit)
MySQL - 10.4.19-MariaDB : Database - candidat
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`candidat` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `candidat`;

/*Table structure for table `tb_candidate` */

DROP TABLE IF EXISTS `tb_candidate`;

CREATE TABLE `tb_candidate` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `full_name` varchar(100) NOT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `photo` longtext DEFAULT NULL,
  `position` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_p7q0ljcll3bxh3w2as3lxxc90` (`email`),
  UNIQUE KEY `UK_3072hsyaqjqfgf9dapw35exu7` (`phone`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

/*Data for the table `tb_candidate` */

insert  into `tb_candidate`(`id`,`address`,`email`,`full_name`,`phone`,`photo`,`position`) values 
(4,'Bandung','chanchcand@gmail.com','Cahndra','54654654654',NULL,'Java'),
(3,'Jakarta,Indonesia','shanishani48@gmail.com','Shani','08484858702','test','Android Developer'),
(6,'Jakarta','chika@gmail.com','Chika','084848846194',NULL,'Android Developer');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
