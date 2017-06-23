# Week Two Review
***
# AJAX
> asynchronous javascript and xml

$.ajax - longhanded way of handling an AJAX call
* $.ajax abstraction layers : these are REST requests
  * $.get
  * $.post
  * $.put
  * $.delete

Web Res Req Cycle : Stateless
* No knowledge of previous request

Parts of Req and Res
* req :
  1. URL
  2. header
  3. method


* res :
  1. headers
  2. body
  3. status


# Intro to Node
* package.json - saves depencies
```sh
npm init -y
```

Node File Tree:
- server.js
- package.json
- .gitignore
- /public
  - index.html

# Intro to SQL
> structured query language

SQL Dbs are relational db systems : ** DBMS **
WE have been using PostgreSQL
  * SQLserver
  * MySQL
  * etc.
WE use a SQL wrapper that allows us JS and add in client.query('SOME SQL QUERY').
DDL
- Select * FROM table;


# Intro to SQL JOIN
- table
  - records (rows)
    - id (primary key)
      - map to foreign key (something.id)
- inner join : both tables and only return matches

# Functional Programming
> Declarative Methods: methods written on top of vanilla js
> ex. forEach declares.

#### Why?
* cleaner code
* easier to trace and reason
* scalable and performant on multi-core systems and/or large volumes of data

#### What!
###### Array
* .forEach
* .some and .every
* .concat
* .filter
* .map
* .reduce

###### mutable vs. immutable
immutability gives focus. takes away opps for things to be unintentionally modified
harder to work with. memory usage.

* these methods don't mutate the data. returns new Array
  * forEach
  * slice
  * map
  * reduce
  * filter


* these methods mutate the data. returns the same array
  * sort
  * reverse
  * splice
