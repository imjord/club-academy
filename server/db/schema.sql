DROP TABLE IF EXISTS clubs;
DROP TABLE IF EXISTS users;

CREATE TABLE club (
    club_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE club_member(
    club_member_id INTEGER,
    user_id INTEGER,
    FOREIGN KEY (club_member_id) REFERENCES club(club_id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE user (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL

);