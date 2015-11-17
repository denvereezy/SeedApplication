CREATE DATABASE pets;
CREATE USER admin@localhost IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON pets.* TO admin@localhost;
FLUSH PRIVILEGES;

CREATE TABLE animal_type(
  id int NOT NULL auto_increment primary key,
  type char (100) not null
);

CREATE TABLE animal(
  id int NOT NULL auto_increment primary key,
  name char (100) not null,
  color char (100) not null,
  date_found date,
  area varchar (100) not null,
  breed char (100) not null,
  description varchar (100) not null,
  animal_type_id int not NULL,
	FOREIGN KEY (animal_type_id) REFERENCES animal_type(id)
);

CREATE TABLE dog_comments(
  id int NOT NULL auto_increment primary key,
  ownerName char (100) not null,
  phoneNumber int not null,
  email varchar (100) not null,
  lastSeen varchar (100) not null,
  description varchar (100) not null,
  animal_type_id int not null,
	FOREIGN KEY (animal_type_id) REFERENCES animal_type(id)
);

CREATE TABLE cat_comments(
  id int NOT NULL auto_increment primary key,
  ownerName char (100) not null,
  phoneNumber int not null,
  email varchar (100) not null,
  lastSeen varchar (100) not null,
  description varchar (100) not null,
  animal_type_id int not null,
	FOREIGN KEY (animal_type_id) REFERENCES animal_type(id)
);
