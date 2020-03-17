DROP TABLE responses;
DROP TABLE responses_types;
DROP TABLE remarks;
DROP TABLE remarks_contexts;
DROP TABLE users;


CREATE TABLE users (
    pseudo_user VARCHAR(128) NOT NULL,
    password_user VARCHAR(128) NOT NULL,
    is_admin_user BOOLEAN DEFAULT FALSE,
    CONSTRAINT pk_users PRIMARY KEY (pseudo_user)
);

CREATE TABLE remarks_contexts(
    id_context INTEGER NOT NULL AUTO_INCREMENT,
    name_context  VARCHAR(128),
    color_context INTEGER,
    CONSTRAINT pk_remarks_contexts PRIMARY KEY (id_context)
);

CREATE TABLE remarks(
    id_remark INTEGER NOT NULL AUTO_INCREMENT,
    description_remark TEXT(65000),
    nb_seen_remark INTEGER,
    nb_suffered_remark INTEGER,
    date_remark DATETIME,
    pseudo_user VARCHAR(128),
    id_context INTEGER NOT NULL,
    CONSTRAINT pk_remarks PRIMARY KEY (id_remark),
    CONSTRAINT fk_remarks_users FOREIGN KEY (pseudo_user) REFERENCES users(pseudo_user),
    CONSTRAINT fk_remarks_contexts FOREIGN KEY (id_context) REFERENCES remarks_contexts(id_context)
);

CREATE TABLE responses_types(
    id_response_type INTEGER NOT NULL AUTO_INCREMENT,
    name_response_type VARCHAR(128),
    emoji_response_type VARCHAR(128),
    CONSTRAINT pk_responses_types PRIMARY KEY (id_response_type)
);


CREATE TABLE responses(
    id_response INTEGER NOT NULL AUTO_INCREMENT,
    description_response TEXT(65000),
    nb_likes_response INTEGER,
    nb_dislikes_response INTEGER,
    date_response DATETIME,
    pseudo_user VARCHAR(128) NOT NULL,
    id_remark INTEGER NOT NULL,
    id_response_type INTEGER NOT NULL,
    CONSTRAINT pk_response PRIMARY KEY (id_response),
    CONSTRAINT fk_responses_remarks FOREIGN KEY (id_remark) REFERENCES remarks(id_remark),
    CONSTRAINT fk_responses_responses_type FOREIGN KEY (id_response_type) REFERENCES responses_types(id_response_type),
    CONSTRAINT fk_responses_users FOREIGN KEY (pseudo_user) REFERENCES users(pseudo_user) 
);




