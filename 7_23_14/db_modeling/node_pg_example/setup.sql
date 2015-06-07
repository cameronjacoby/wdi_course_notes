DROP DATABASE IF EXISTS library_example_app;
CREATE DATABASE library_example_app;

\c library_example_app

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255)
);

INSERT INTO books (title, author) VALUES ('The Giver', 'Lois Lowry');