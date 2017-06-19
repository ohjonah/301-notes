# AJAX and JSON
***



# JSON
> json: javascript object notation

Looks like a javascript object, but with stringified properties.
Serialization is a way to standardizing JSON data. You are dehydrating data structures and reconstituting it when needed.

#### JSON is:
* more human readable
* more 'object-oriented'
* more compact
* client -> Request -> server
<br>
*  server -> Response -> client
</br>

#### JSON data:
* always use double quotes
* keys are quoted strings
* values can be:
  * string
  * number
  * object
  * array
  * true/false
  * null

# AJAX
> asynchronous javascript and xml


XHR = AJAX Calls

#### Aynchronous
* Async, like, with callbacks?

```js
// code code code
$.getJSON('api.snacks/snacks');
// code code code
// code code code
$.getJSON('...');
// code code code
// code code code
// code code code
```
1. functions and variables get hoisted to the top of the call stack.
2. When it gets to our first getJSON and says,
>let's wait in lala land until the server builds a reply and gets backs to us

3. keeps on reading code
4. makes an AJAX call, while
5. code keeps on executing.


* when you make an ajax call, you can have **out of order** code and non-blocking execution
  * you don't have to reload the whole page & the DOM

#### AJAX: Send a Request
1. Send a Request
  * specify the request "method", URL, settings
  * request method options:
    * GET
    * POST
    * etc
  * jQ has helper methods to simplify:
    * $.ajax
    * $.load
    * $.get
    * $.getJSON
    * $.post
2. Callbacks
  * register an async callback function to handle the response
  * write code to handle each kind of response
    * success option or chain .done(),
    * error option or chain .fail(),
    * complete option or chain .always();
  * use named functions to avoid callback-hell

```js
$.getJSON('/api/cats', function(data) {
  console.log('list of cats:', );
})
```

###### REST
* GET (verb) -> cats (noun)
* POST -> Adds new data
* PUT -> updates data
* DELETES -> removes data

These are VERBS that interact with a NOUN.
