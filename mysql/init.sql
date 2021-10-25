CREATE DATABASE IF NOT EXISTS `real_estate_db`;
USE `real_estate_db`;

CREATE TABLE `properties` (
  `id` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `area` int NOT NULL,
  `useful_area` int NOT NULL,
  `rooms` int NOT NULL,
  `parking` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT now(),
  `updated_at` timestamp NOT NULL DEFAULT now(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;