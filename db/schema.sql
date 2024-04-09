DROP DATABASE IF EXISTS wholepractice_db;
CREATE DATABASE wholepractice_db;

-- Patient tables --
USE wholepractice_db;

CREATE TABLE patient_basic (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	patient_name VARCHAR(60)
	patient_guardian VARCHAR(60)
	physical_address VARCHAR(80)
	phone_number VARCHAR(20)
	email_address VARCHAR(60)
);

CREATE TABLE patient_financialsummary (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	patient_name VARCHAR(60)
	number_of_appointments VARCHAR(100)
	total_charges DECIMAL(19,4)
);

CREATE TABLE appointments (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	appointment_date DATE
	appointment_rate DECIMAL(19,4)
	mileage_fee DECIMAL(19,4)
	comments VARCHAR(500)
);