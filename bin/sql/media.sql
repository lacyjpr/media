CREATE TABLE users(
  id serial,
  username character varying(50),
  email character varying(50)
);

CREATE TABLE posts(
  id serial,
  ownerId int,
  title character varying(50),
  body text
);


INSERT INTO users(username, email)
  VALUES
  ('Matty', 'matt.leonard.22@gmail.com'),
  ('JP', 'jp@email.com');

INSERT INTO posts(ownerId, title, body)
  VALUES
  (1, 'This is a cool title', 'And here is some body text. Lorem ipsum dolor sit amet.'),
  (2, 'This is another cool title', 'And some even better body text. Lorem ipsum dolor sit amet.');
