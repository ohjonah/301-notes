# Intermediate Software Development
***
# CRUD Ops and REST

#### CRUD
* create : in a db
* read : in a db
* update : in a db
* delete : in a db

#### REST
* GET : read
* POST : create
* PUT : update
* DELETE : delete

** The cycle: Make a REST req to API -> API will CRUD to the db. **

# What is a Database
* way to organize collection of data
* Database Management Systems (DBMS) usually composed of tables

# SQL - Structured Query Language
* Programming language for managing Database
* SQL statements are made up of clauses, expressions, and predicates.
  * Clause : command
  * Expression : evaluation/evaluated value
  * Predicate : condition

#### Queries
* A query retrieves data :

```SQL
SELECT isbn,
  title,
  price,
  price * 0.06 AS sales_tax
FROM Book
WHERE price > 100.00
ORDER BY title;
```

#### DDL - Data Definition language
* Manages the table and index Structured
* It handles SQL queries like the following:
  * CREATE,
  * ALTER,
  * DROP,
  * TRUNCATE

```SQL
CREATE TABLE example(
  column1 INTEGER PRIMARY KEY,
  column2 VARCHAR(50),
  column3 DATE NOT NULL
);
```

#### Data Types
* Is a ** constraint ** on the kind of data a column can have

#### MVC - How does it relate?
* A database is a simple model.
* In OOP, models are objects. Columns correspond to properties.
* Models can also have a behavior, like a method


# CRUD : create, read, update, and delete

### CREATE TABLE
* Name table and list desired columns and data types

```SQL
CREATE TABLE articles(
  id INTEGER PRIMARY KEY,
  title VARCHAR(50),
  author VARCHAR(50),
  markdown TEXT,
  publishedOn DATETIME
);
```

|id|title|author|markdown|publishedOn|
|---|---|---|---|---|
| | | | | | |

#### INSERT records
* Use INSERT INTO

```SQL
INSERT INTO articles (title, author, markdown, publishedOn)
  VALUES ('Bacon Ipsum', 'Kevin Bacon', '# hickory smoked', '2015-12-25');
```

|id|title|author|markdown|publishedOn|
|---|---|---|---|---|
| 1 | Bacon Ipsum |  Kevin Bacon |  # hickory smoked | 2015-12-25 |

### READ
* Use the SELECT clause with constraints

```SQL
SELECT title, author, publishedOn
  FROM articles
  WHERE publishedOn BETWEEN '2013-01-01' AND '2013-12-31'
  ORDER BY publishedOn DESC;
```

### UPDATE
* Use UPDATE clause to alter an existing records

```SQL
UPDATE articles
SET author = 'Kevin Bacon'
WHERE author = 'Keven Bacron';
```
* Always use a condition with UPDATE (WHERE)


### REMOVE
* Use DELETE FROM to remove an existing record

```SQL
DELETE FROM articles
WHERE author = 'Keven Bacron';
```
