
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- CREATE TABLE "user" (
--     "id" SERIAL PRIMARY KEY,
--     "username" VARCHAR (80) UNIQUE NOT NULL,
--     "password" VARCHAR (1000) NOT NULL
-- );

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL, 
    "email" VARCHAR (500) UNIQUE NOT NULL
);

CREATE TABLE "wishlist"(
"id" SERIAL PRIMARY KEY,
"user_id" INT REFERENCES "user",
"product_id" INT REFERENCES "product"
);

CREATE TABLE "product" (
"id" SERIAL PRIMARY KEY,
"product_name" VARCHAR (1000) NOT NULL,
"product_discription" VARCHAR (50000) NOT NULL,
"image" VARCHAR (50000) NOT NULL,
"price" INT,
"categories_id" INT REFERENCES "categories"
);

CREATE TABLE "categories"(
"id" SERIAL PRIMARY KEY,
"type" VARCHAR (200)
);

INSERT INTO "product" ("product_name", "product_discription", "image", "price", "categories_id")
VALUES ('Black Abaya Set', 'All black three piece set, white and black crystal detail. Size medium (58)', 'images/AllBlackAbaya.jpg', 65, 1), 
('Baby Pink Satin Dress', 'Soft silky slip on satin dress, wide bell sleeves. It has a removable belt to cinch the waist. Size Large (60), it runs large if you are between sizes we would recommend sizing down.', 'images/BabyPinkSatinDress.jpg', 40, 3), 
('Black Embroidered Abaya', 'All black plain abaya, long, beautiful black detailed embroidery. Three-piece set with a detached underdress. Size is small (56)', 'images/BlackAbaya.jpg', 65, 1), 
('Maroon & Mauve Pink Abaya Set', 'Stunning three piece set, Maroon on the outer Abaya and Pink on the inner underdress, Long with pink embroidered detailing on the Maroon outer layer', 'images/MaroonAbaya.jpg', 70, 1), 
('Ocean Blue Satin Dress', 'Flawless Princess two-piece skirt and top. Long sleeves layered with a puffy glittery fabric.', 'images/OceanBlueSatin.jpg', 50, 3), 
('White Ombre Linen Dress', 'Pretty Plain linen dress, one large pocket on the side. Dress is white and fades into a mauve pink color for an ombre effect.', 'images/WhiteOmbredress.jpg', 30, 3), 
('Nude Floral Hijab', 'Long nude hijab with a large floral print. The material is soft cotton, perfect for the fall.', 'images/NudeFloralHijab.jpg', 5, 4), 
('Blue Floral Satin Scarf','Large square shaped satin scarf with a beautiful floral print on the edges. Gives the perfect renaissance era look.', 'imagesBlueFloralSatinScarf.jpg', 10, 4), 
('Nude Pink Satin Abaya Set', 'An Elegant Three piece set, Monochromatic Nude Pink Set. Size is medium (58) and underdress is detached and can be worn separately.', 'images/NudeSatinAbaya.jpg', 60, 1), 
('Green and White Satin Hijab', 'Medium sized square satin scarf, white with green leave print.', 'images/WhiteAndGreenSatin.jpg', 10, 4), 
('Monochromatic, Blush Abaya Set', 'All blush pink two-piece set, including hijab, comes with a detachable belt to cinch the waist. The material is soft silky satin. Size is large (60).', 'images/BlushAbaya.jpg', 70, 1), 
('Emeral Green Satin Dress', 'Gorgeous short sleeved emerald green dress with wait already cinched in. The size is small (54), dress runs small so you are between sizes we recommend you size up', 'images/EmeraldGreenSatin.jpg', 40, 3), 
('Brown Jersey Hijab', 'Large jersey material hijab, does not move. Material is slightly heavy and is perfect for fall and winter.', 'images/JerseyScarf.jpg', 5, 4), 
('Sage Green Tye-Dye Abaya set', 'Perfect minty sage green Abaya, tye-dye print is perfect for the summer. Two-piece set includes hijab, size is medium (56)', 'images/SageGreenAbaya.JPG', 60, 1), 
('Warm Brown Floral Satin Hijab', 'Squared shaped medium size scarf with large floral print.', 'images/BrownFloralSatin.jpg', 5, 4), 
('Navy Blue and Gold Abaya', 'Stunning long navy blue abaya with gold embroidering on the top front. It is a two-piece set, including the hijab. The size is small (54).', 'images/NavyBlueGoldAbaya.JPG', 65, 1), 
('Pink Floral Dress', 'Soft Pink dress with a hot pink floral print. Perfect bright-colored dress for a cottage core aesthetic. The size is Medium, the dress is meant to be slightly baggy and runs small if you are between sizes we recommend that you size up.', 'images/PinkFloral.jpg', 35, 3), 
('Black Abaya Set', 'All black three-piece set, white and black crystal detail', 'images/AllBlackAbaya.jpg', 65, 1), 
('Blue Floral Satin Scarf','Large square shaped satin scarf with a beautiful floral print on the edges. Gives the perfect renaissance era look.', 'images/BlueFloralSatinScarf.jpg', 10, 4);


