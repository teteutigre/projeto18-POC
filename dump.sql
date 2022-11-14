--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: genre; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.genre (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);


--
-- Name: genre_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.genre_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: genre_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.genre_id_seq OWNED BY public.genre.id;


--
-- Name: movie; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.movie (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    streaming character varying(255) NOT NULL,
    status boolean NOT NULL,
    reviews text NOT NULL,
    "genreId" integer NOT NULL
);


--
-- Name: movie_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.movie_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: movie_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.movie_id_seq OWNED BY public.movie.id;


--
-- Name: genre id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genre ALTER COLUMN id SET DEFAULT nextval('public.genre_id_seq'::regclass);


--
-- Name: movie id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movie ALTER COLUMN id SET DEFAULT nextval('public.movie_id_seq'::regclass);


--
-- Data for Name: genre; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.genre VALUES (1, 'romance');
INSERT INTO public.genre VALUES (2, 'terror');
INSERT INTO public.genre VALUES (3, 'comedia');
INSERT INTO public.genre VALUES (4, 'acao');
INSERT INTO public.genre VALUES (5, 'drama');


--
-- Data for Name: movie; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.movie VALUES (7, 'uma noite com rogerio', 'netflix', false, 'filme legal', 1);
INSERT INTO public.movie VALUES (8, 'quero toamr banho', 'HBO', false, 'filme legal', 1);
INSERT INTO public.movie VALUES (9, 'quero toamr banho', 'HBO', false, ' ', 1);
INSERT INTO public.movie VALUES (12, 'em busca do amanhar', 'HBO', false, 'show', 1);
INSERT INTO public.movie VALUES (13, 'em busca do amanhar', 'HBO', false, 'show', 1);
INSERT INTO public.movie VALUES (5, 'uma noite', 'netflix', true, 'tomar um banho', 1);
INSERT INTO public.movie VALUES (6, 'uma noite com rogerio', 'netflix', true, 'tomar um banho', 1);
INSERT INTO public.movie VALUES (10, 'em busca do amanhar', 'HBO', true, 'quero ir tomar um banho gostoso', 1);
INSERT INTO public.movie VALUES (11, 'em busca do amanhar', 'HBO', true, 'quero ir tomar um banho gostoso', 1);


--
-- Name: genre_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.genre_id_seq', 5, true);


--
-- Name: movie_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.movie_id_seq', 13, true);


--
-- Name: genre genre_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genre
    ADD CONSTRAINT genre_pk PRIMARY KEY (id);


--
-- Name: movie movie_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movie
    ADD CONSTRAINT movie_pk PRIMARY KEY (id);


--
-- Name: movie movie_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movie
    ADD CONSTRAINT movie_fk0 FOREIGN KEY ("genreId") REFERENCES public.genre(id);


--
-- PostgreSQL database dump complete
--

