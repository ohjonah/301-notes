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

#### jQuery
> JS library that provides an API for
 * DOM selections,
 * Dom manipulation,
 * DOM traversal,
 * Event management
 * AJAX



# jQuery Selectors

# Assignment Prep
