DROP TABLE IF EXISTS clubs;
DROP TABLE IF EXISTS users;

CREATE TABLE club (
    club_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    club_name VARCHAR(255) NOT NULL,
    club_description VARCHAR(255) NOT NULL,
    club_image VARCHAR(255) NOT NULL,
    club_created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    club_owner_id INTEGER NOT NULL,
    FOREIGN KEY (club_owner_id) REFERENCES user(id),
    UNIQUE (club_name)
);

-- create club owner table
CREATE TABLE club_owner (
    club_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    PRIMARY KEY (club_id, user_id),
    FOREIGN KEY (club_id) REFERENCES club (club_id),
    FOREIGN KEY (user_id) REFERENCES user (id)
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