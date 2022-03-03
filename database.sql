CREATE DATABASE test
--
--table product
CREATE TABLE IF NOT EXISTS public."Product"
(
    id integer NOT NULL DEFAULT nextval('"Product_id_seq"'::regclass),
    name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    price double precision NOT NULL,
    CONSTRAINT "Product_pkey" PRIMARY KEY (id)
)
--insert
INSERT INTO public."Product"(id, name, price)
VALUES (1, 'Laptop', 10000);

--table User
CREATE TABLE IF NOT EXISTS public."User"
(
    id integer NOT NULL DEFAULT nextval('"User_user_id_seq"'::regclass),
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "User_pkey" PRIMARY KEY (id)
)

INSERT INTO public."User"(id, name)
VALUES (1, 'Kien');

--table Product_trasaction
-- DROP TABLE IF EXISTS public."Product_trasaction";

CREATE TABLE IF NOT EXISTS public."Product_trasaction"
(
    id integer NOT NULL DEFAULT nextval('"Product_trasaction_id_seq"'::regclass),
    user_id integer NOT NULL DEFAULT nextval('"Product_trasaction_user_id_seq"'::regclass),
    product_id integer NOT NULL DEFAULT nextval('"Product_trasaction_product_id_seq"'::regclass),
    pay double precision NOT NULL,
    status boolean,
    CONSTRAINT "Product_trasaction_pkey" PRIMARY KEY (id),
    CONSTRAINT "Product_trasaction_product_id" FOREIGN KEY (product_id)
        REFERENCES public."Product" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "Product_trasaction_user_id" FOREIGN KEY (user_id)
        REFERENCES public."User" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

INSERT INTO public."Product_trasaction"(id, user_id, product_id, pay, status)
VALUES (1, 1, 1, 10000, true);