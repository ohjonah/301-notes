# Everything We've Done
***

# Server.js Demo

require.js is a library that pulls code into the code we are working with. Server.js, that we created, is considered a module. It gets attached to the greater picture of node.

#### CONST
* Express creates robust apis in a node environment.
* pg wrapper is our connection to our * postgres database via js.
* body-parser parse the request body.
* PORT is our port that we want to start our server in
* connectionString sets postgress as the default protocol with the name of the db.
* client creates a new instance which connects directly to our database. client has a prototype method called connect.

#### app.use
* middleware
* between the req and res, it manipulates the data.
* considered application middleware, not route middleware.

#### app.get
* route
  * when you visit your home page '/', send back a response 'sendFile'

* client.query - go to the db and do this command.
  * client is our instantiated object from CONT
* then only fires when you get data from the server
* catch is what we use to see errors.

#### app.post
* we make the end point
* when you go to the path, if you have a POST method, query the client.
* then reloads

#### invoke private helper function
* functions get hoisted to the top of the call stack

#### listen
* when we connect to the port of the server, we log it.


#### RES/REQ Cycle
###### our API lives here: GET/api/cats
* local ->
```js
$.get('/api/cats')
```
* server ->
```js
app.get('/api/cats')
```
* DB
  * -> read ->
* server
  * -> res ->
* local
  * -> (data) ->
* view/fill/update HTML

# SQL Joins and Relationships
> the relational model of data permits the database designer to create a consistent, logical representation of information. consistency is achieved by including declared constraints in the database design, which is usually referred to as the logical schema

#### Relational Data
* complex data is organized using more than one table
* redundancy is error prone

#### Normalization
* decomposing of a table into smaller, less redundant tables without losing information
* ** one-to-one: ** author has a book
* ** one-to-many: ** author has a book, articles,
* ** many-to-many: ** office supplies is related to chairs, like staplers are. Staplers are part of the office accessories
* foreign keys in the old table to reference primary key in the new table

#### in class
1. Drop table
2. Create tables
3. INTEGER NOT NULL REFERENCES

# LAB
#### TODO
1. Write a SQL query which joins all data from articles and authors tables on the author_id
```SQL
SELECT * FROM articles
INNER JOIN authors
ON articles.author_id = authors.author_id;
```

2. Write a SQL query to insert a new author, ON CONFLICT DO NOTHING
<!-- ```js
  client.query(
    'INSERT INTO authors(author, "authorUrl") VALUES($1, $2) ON CONFLICT DO NOTHING',
    [request.body.author, request.body.authorUrl],
  ')
``` -->

```SQL
INSERT INTO authors(author, "authorUrl") VALUES($1, $2) ON CONFLICT DO NOTHING;
```

Add the author and "authorURL" as data for the SQL query

# Ways to Experiment

```sh
createdb testdb
psql testdb // drops us in the db
\d // no relations found
CREAT table person(person_id SERIAL PRIMARY KEY, first_name VARCHAR(64), last_name VARCHAR(64), ssn INTEGER, date_of_birth VARCHAR(25);)
\d // see the relations.
```
