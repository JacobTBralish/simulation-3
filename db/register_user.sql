INSERT INTO users_sim3
(username, password) values
($1, $2)
returning *;