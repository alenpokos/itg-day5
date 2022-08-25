CREATE TABLE `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `message` varchar(45) DEFAULT NULL,
  `category` int DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `categories` (
`id` INT NOT NULL AUTO_INCREMENT,
`name` VARCHAR(45) NULL,
PRIMARY KEY (`id`));

INSERT INTO categories (id, name) VALUES (1, 'Python');
INSERT INTO categories (id, name) VALUES (2, 'NodeJs');
INSERT INTO categories (id, name) VALUES (3, 'MySQL');

INSERT into messages (message, category) VALUES
('Python radi brzo', 1),
('NodeJs je super zabavan', 2),
('NodeJs je lagan za nauciti', 2),
('U bazu mogu spremiti što god poželim', 3);


