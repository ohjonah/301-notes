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
