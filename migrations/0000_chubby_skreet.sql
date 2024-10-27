CREATE TABLE IF NOT EXISTS "investment" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"quantity" integer NOT NULL,
	"buy_price" numeric(10, 2) NOT NULL,
	"current_price" numeric(10, 2) NOT NULL
);
