USE barn_db;

-- INSERT INTO owners (firstName, lastName, createdAt, updatedAt) VALUES ('Stephanie', 'Stull', '2021-02-13 04:54:57', '2021-02-13 04:54:57');
-- INSERT INTO owners (firstName, lastName, createdAt, updatedAt) VALUES ('Nancy', 'Klaus', '2021-02-13 04:54:57', '2021-02-13 04:54:57');
-- INSERT INTO owners (firstName, lastName, createdAt, updatedAt) VALUES ('Mary Jo', 'McMan', '2021-02-13 04:54:57', '2021-02-13 04:54:57');
-- INSERT INTO owners (firstName, lastName, createdAt, updatedAt) VALUES ('Lynn', 'Gunderson', '2021-02-13 04:54:57', '2021-02-13 04:54:57');

INSERT INTO horses (name, age, breed, amFlakes, pmFlakes, grainServing, lastDewormer, lastVaccination, lastCoggins, lastFarrier, createdAt, updatedAt, OwnerId) VALUES ('Pyro', 13, 'Paint', 2, 2, 2, '2020-10-25', '2020-04-15', '2020-05-02', '2021-01-07', '2021-02-13 04:54:57', '2021-02-13 04:54:57', 1);
INSERT INTO horses (name, age, breed, amFlakes, pmFlakes, grainServing, lastDewormer, lastVaccination, lastCoggins, lastFarrier, createdAt, updatedAt, OwnerId) VALUES ('Hershey', 22, 'Quarter Horse', 2, 2, 0.5, '2020-11-05', '2020-05-17', '2020-09-12', '2021-02-09', '2021-02-13 04:54:57', '2021-02-13 04:54:57', 2);
INSERT INTO horses (name, age, breed, amFlakes, pmFlakes, grainServing, lastDewormer, lastVaccination, lastCoggins, lastFarrier, createdAt, updatedAt, OwnerId) VALUES ('Rebel', 5, 'Quarter Horse', 2, 2, 0.5, '2020-08-15', '2020-05-19', '2020-06-22', '2020-04-17', '2021-02-13 04:54:57', '2021-02-13 04:54:57', 2);
INSERT INTO horses (name, age, breed, amFlakes, pmFlakes, grainServing, lastDewormer, lastVaccination, lastCoggins, lastFarrier, createdAt, updatedAt, OwnerId) VALUES ('Bees Knees', 4, 'POA', 1, 1, 0.5, '2021-01-22', '2020-03-11', '2020-12-12', '2020-06-27', '2021-01-23 04:54:57', '2021-02-13 04:54:57', 3);
INSERT INTO horses (name, age, breed, amFlakes, pmFlakes, grainServing, lastDewormer, lastVaccination, lastCoggins, lastFarrier, createdAt, updatedAt, OwnerId) VALUES ('Venelope Von Schweetz', 3, 'POA', 2, 1, 1, '2020-07-01', '2020-12-19', '2021-01-04', '2021-02-12', '2021-02-13 04:54:57', '2021-02-13 04:54:57', 3);
INSERT INTO horses (name, age, breed, amFlakes, pmFlakes, grainServing, lastDewormer, lastVaccination, lastCoggins, lastFarrier, createdAt, updatedAt, OwnerId) VALUES ('Star', 22, 'Quarter Horse', 3, 3, 1.5, '2020-09-14', '2021-01-17', '2020-06-22', '2020-12-09', '2021-02-13 04:54:57', '2021-02-13 04:54:57', 4);

SELECT * FROM horses