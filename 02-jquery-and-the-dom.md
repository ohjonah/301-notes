# jQuery and the DOM
***

# Code Review

* Throw this in so that the presentation is relative to the viewport!

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

# Git Flow
| ** step ** | ** repo ** | ** action ** | ** location ** |
| ------ |
| 1. | upstream | fork | yourname/cf |
| 2. | yourname/cf | clone | local |
| 3. | local | push | yourname/cf |
| 4. | yourname/cf | PR | CF Repo |
| 5. | yourname/cf | pull | upstream |

# Intro to jQuery
> jQuery was built to deal with the DOM

* $ grabs and traverses the entire DOM

#### DOM
> Document Object Model
  * 'Query the DOM' -> navigate through the html
  * Representation of a webpage as an object

* Before, to find elements:
```js
var el = document.getElementbyId('articles');
var els = document.getElementsByTagName('li');
```
* Before, to change elements:
```js
var el = document.getElementbyId('articles').innerHTML = '<h1>News</h1>';
var els = document.getElementsByTagName('li').textContent = 'News';
```
* Also, added and removed elements, read attributes and values, navigate the tree and manage user interactions, events, etc...

# jQuery
> JS library that provides an API for
 * DOM selections,
 * Dom manipulation,
 * DOM traversal,
 * Event management
 * AJAX

* jQuery looks like this:
```js
$('selector string').actionToPerform(args);
```
* this is what jQuery is doing:
```js
$('.el').hide(args);
```

  * $ = 'jQuery'
  * () = function call
  * .el = jQuery Object
  * hide = the method;
  * () = function call

#### Getter and a Setter
* GETTER - this will return a color:
```js
$('.el').css('color');
```
* SETTER - this will set a color:
```js
$('.el').css('color', 'blue');
```

# jQuery Selectors

* *grab elements*
```js
$('li');
```
* *grab elements with a specific class*
```js
$('.some-class');
```
* *grab element with an id*
```js
$('#some-id');
```

* *parent child selection*
```js
$('ul li');
```

* *direct child selection*
```js
$('.container > p');
```

* *select elements with certain attribute*
```js
$('li[class="active"]');
$('input[type="password"]');
```

* *get text from an elements*
```js
$('.el').text();
```

* *set text on an element*
```js
$('.el').text('some new text for my element');
```
* *access data attribute on an element*
```js
$('.el').data('category');
```

* *set data attribute on an element*
```js
$('.el').data('category', 'shoes');
```


* *append an element to the D
OM*
```js
$('ul').append('<li>new item</li>');
```
* *remove an item from the DOM*
```js
$('.el').remove();
```

* *wrap your jQ in:*
```js
$(document).ready(function() {
  // do stuff here
});
```

# Assignment Prep
