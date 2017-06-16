# Events and Delegation
***
# Review

* **imperative logic**: I want to do this and I want to do this, and now I have a thing. Procedural programming

* **declarative logic**: The computer has things in the background that does imperative logic.

# Events Overview

#### DOM Events
* When _______ , do _______ .
* When the user does something, run some code.
* When an event is fired, invoke a function.
* We register a callback function as an event handler.

###### Why?
* We can execute code out of order.
* 'Asynchronous' callbacks.

###### What Events?
* p246-247
* click
* hover
* orientation change
* resize
* etc

# Event Delegation
* Capturing elements and having dynamic Events
* You need to have a parent container to watch for all the dynamic things in the child elements

# Lab

TODO:
1. data attribute that has the author name. data attr = author name
2. if "this".val. If string is empty, falsy.
3. all about matching. select brian nations. find an element with a data element with brian nations. fade it in. hide everything else
4. otherwise (opposite of 3), show everything if it's empty.
5. handlecategoryFilter -> category section, virtually identical to td3/4
6. you will need to dynamically selector string based on the .tab-content that was clicked. dynamically build = query using data attribute and concatenate. req: query based on attr.
```js
input [type="text"] // data, author = brian nations

// final result:
$('section[data-author*="brian*"]');

// *dynamic
```
7. go through everything high level. What needs to go through doc ready?

1. go through everything.
2. read out each file.
3. start to implement. TODO in order.
