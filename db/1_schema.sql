-- PG_DUMP BOILERPLATE ---------------------------------
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

-- DROP AND CREATE DATABASE ---------------------------------
DROP DATABASE IF EXISTS app_db;

CREATE DATABASE app_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C.UTF-8';

ALTER DATABASE app_db OWNER TO postgres;

\connect app_db

-- CREATE FN SCHEMA ---------------------------------


--  TABLES: TENANTS, USERS, PATIENTS ---------------------------------

create table if not exists public.users
(
    id bigserial primary key,
    email varchar,
    name varchar
);