-----------------------------------
--Table : public.user
-----------------------------------

CREATE TABLE public."user" {
    id  INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    pseudo TEXT NOT NULL UNIQUE,
    role TEXT NOT NULL,
    date_inscription TIMESTAMP NOT NULL,
    date_derniere_connexion TIMESTAMP
};

-----------------------------------
--Table : public.recette
-----------------------------------

CREATE TABLE public."recipe" {
    id  INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    id_user INTEGER NOT NULL,
    id_categorie INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL, 
    description VARCHAR(255) NOT NULL,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL,
    image TEXT,
    temps_préparation INTEGER NOT NULL ,
    temps_cuisson INTEGER NOT NULL,
    portions INTEGER NOT NULL,
    difficultes VARCHAR(50),
    publiee BOOLEAN DEFAULT FALSE,
    date_creation TIMESTAMP,
    date_modification TIMESTAMP,
    FOREIGN KEY (id_user) REFERENCES "user"(id) ON DELETE CASCADE,
    FOREIGN KEY (id_category) REFERENCES "category"(id) ON DELETE CASCADE
};

-----------------------------------
--Table : public.categorie
-----------------------------------

CREATE TABLE public."category" {
    id  INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nom VARCHAR(50) NOT NULL UNIQUE,
    description TEXT

};

-----------------------------------
--Table : public.film
-----------------------------------

CREATE TABLE public."film" {
    id  INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    annee INTEGER NOT NULL,
    genre TEXT NOT NULL,
    type BOOLEAN NOT NULL,
    affiche_url TEXT NOT NULL,
    tmdb_id INTEGER NOT NULL UNIQUE
};

------------------------------------------------------------
--Table : public.user_has_recipe (association many to many)
------------------------------------------------------------

CREATE TABLE public.user_has_recipe {
    id_user INTEGER NOT NULL
    id_recipe INTEGER NOT NULL

    PRIMARY KEY (id_user, id_recipe)

    FOREIGN KEY (id_recipe)
        REFERENCES recipe(id) ON DELETE CASCADE

    FOREIGN KEY (id_user)
        REFERENCES user(id) ON DELETE CASCADE
};

--------------------------------------------------------
--Table : public.recipe_has_category (association many to many)
------------------------------------------------------------

CREATE TABLE public.recipe_has_category {
    id_recipe INTEGER NOT NULL
    id_category INTEGER NOT NULL

    PRIMARY KEY (id_recipe, id_category)

    FOREIGN KEY (id_category)
        REFERENCES category(id) ON DELETE CASCADE

    FOREIGN KEY (id_recipe)
        REFERENCES recipe(id) ON DELETE CASCADE
};

------------------------------------------------------------
--Table : public.rceipe_has_film (association many to many)
------------------------------------------------------------

CREATE TABLE public.recipe_has_film {
    id_recipe INTEGER NOT NULL
    id_film INTEGER NOT NULL

    PRIMARY KEY (id_recipe, id_film)

    FOREIGN KEY (id_film)
        REFERENCES film(id) ON DELETE CASCADE

    FOREIGN KEY (id_recipe)
        REFERENCES recipe(id) ON DELETE CASCADE
};

