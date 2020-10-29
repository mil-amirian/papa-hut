--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE IF EXISTS ONLY public.toppings DROP CONSTRAINT IF EXISTS toppings_pkey;
ALTER TABLE IF EXISTS public.toppings ALTER COLUMN "toppingId" DROP DEFAULT;
DROP SEQUENCE IF EXISTS public."toppings_toppingId_seq";
DROP TABLE IF EXISTS public.toppings;
DROP EXTENSION IF EXISTS plpgsql;
DROP SCHEMA IF EXISTS public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: toppings; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.toppings (
    "toppingId" integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    description text NOT NULL,
    calories integer NOT NULL,
    category text NOT NULL
);


--
-- Name: toppings_toppingId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."toppings_toppingId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: toppings_toppingId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."toppings_toppingId_seq" OWNED BY public.toppings."toppingId";


--
-- Name: toppings toppingId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.toppings ALTER COLUMN "toppingId" SET DEFAULT nextval('public."toppings_toppingId_seq"'::regclass);


--
-- Data for Name: toppings; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.toppings ("toppingId", name, price, image, description, calories, category) FROM stdin;
1	Grilled Chicken	299	/images/grilled-chicken.png	Plus 20 Calories	20	 meats
2	Mushrooms	199	/images/mushrooms.png	Plus 5 Calories	5	veggies
3	Black Olives	199	/images/black-olives.png	Plus 15 Calories	15	veggies
4	Green Peppers 	199	/images/green-peppers.png	Plus 17 Calories	17	 veggies
5	Jalapeño Peppers	199	/images/jalapeno.png	Plus 20 Calories	20	veggies
6	Pineapple	199	/images/pineapple.png	Plus 10 Calories	10	veggies
7	Spinach	199	/images/spinach.png	Plus 16 Calories	16	veggies
8	Onions	199	/images/grilled-chicken.png	Plus 5 Calories	5	meats
9	Crispy Bacon	299	/images/bacon.png	Plus 60 Calories	60	meats
10	Beef	299	/images/beef.png	Plus 50 Calories	50	meats
11	Pepperoni	299	/images/pepperoni.png	Plus 60 Calories	60	meats
\.


--
-- Name: toppings_toppingId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."toppings_toppingId_seq"', 1, false);


--
-- Name: toppings toppings_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.toppings
    ADD CONSTRAINT toppings_pkey PRIMARY KEY ("toppingId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

