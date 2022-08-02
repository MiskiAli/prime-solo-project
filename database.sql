
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- CREATE TABLE "user" (
--     "id" SERIAL PRIMARY KEY,
--     "username" VARCHAR (80) UNIQUE NOT NULL,
--     "password" VARCHAR (1000) NOT NULL, 
--     "email" VARCHAR (500) UNIQUE NOT NULL
-- );

-- CREATE TABLE "wishlist"(
-- "id" SERIAL PRIMARY KEY,
-- "user_id" INT REFERENCES "user",
-- "product_id" INT REFERENCES "product"
-- );

-- CREATE TABLE "product" (
-- "id" SERIAL PRIMARY KEY,
-- "product_name" VARCHAR (1000) NOT NULL,
-- "product_discription" VARCHAR (50000) NOT NULL,
-- "image" VARCHAR (50000) NOT NULL,
-- "price" INT,
-- "categories_id" INT REFERENCES "categories"
-- );

-- CREATE TABLE "categories"(
-- "id" SERIAL PRIMARY KEY,
-- "type" VARCHAR (200)
-- );



