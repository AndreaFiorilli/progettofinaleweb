CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,  -- ID univoco per ogni utente
    username TEXT NOT NULL UNIQUE,         -- Nome utente (unico)
    email TEXT NOT NULL UNIQUE            -- Email (unica)
);

INSERT INTO users (username, email) 
VALUES 
  ('giovanni_rossi', 'giovanni.rossi@example.com'),
  ('maria_bianchi', 'maria.bianchi@example.com'),
  ('luca_verdi', 'luca.verdi@example.com'),
  ('francesca_esposito', 'francesca.esposito@example.com'),
  ('marco_deluca', 'marco.deluca@example.com'),
  ('valentina_moretti', 'valentina.moretti@example.com');

