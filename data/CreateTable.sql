create database if not exists `gs_arya`;
USE `gs_arya`;

CREATE TABLE `student` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Class` varchar(45) NOT NULL,
  `RollNo` varchar(45) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `FatherName` varchar(45) NOT NULL,
  `MotherName` varchar(45) NOT NULL,
  `DOB` varchar(45) NOT NULL,
  `Address` varchar(95) NOT NULL,
  `FatherMobile` varchar(45) DEFAULT NULL,
  `MotherMobile` varchar(45) DEFAULT NULL,
  `StudentMobile` varchar(45) DEFAULT NULL,
  `FatherOccupation` varchar(45) DEFAULT NULL,
  `PrevSchoolInfo` varchar(45) DEFAULT NULL,
  `DocumentSubmitted` varchar(45) NOT NULL DEFAULT 'No',
  `Qualification` varchar(45) DEFAULT NULL,
  `Description` varchar(200) DEFAULT NULL,
  `MotherOccuoation` varchar(45) DEFAULT NULL,
  `Status` varchar(45) NOT NULL DEFAULT 'A',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8