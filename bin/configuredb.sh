#!/bin/bash

export PGPASSWORD="L!llyP0nd"

database="mediadb"
echo "Configuring database: $database"

dropdb -U admin mediadb
createdb -U admin mediadb

psql -U admin mediadb < ./bin/sql/media.sql

echo "$database configured"
