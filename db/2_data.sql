-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2 (Homebrew)

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

\connect app_db

SET SESSION AUTHORIZATION DEFAULT;

ALTER TABLE public.users DISABLE TRIGGER ALL;

INSERT INTO public.users (id, email, name) VALUES (1, 'alice@prisma.io', 'Alice');
INSERT INTO public.users (id, email, name) VALUES (2, 'nilu@prisma.io', 'Nilu');
INSERT INTO public.users (id, email, name) VALUES (3, 'mahmoud@prisma.io', 'Mahmoud');


ALTER TABLE public.users ENABLE TRIGGER ALL;

SELECT pg_catalog.setval('public.users_id_seq', 3, true);
