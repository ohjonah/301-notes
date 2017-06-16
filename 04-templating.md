# Templating
***
# Review

* **TODO**: 'Read More/Read Less' Link:
```js
$('article').on('click', 'a.read-on', function(e) {
  e.preventDefault(); // don't reload or take you somewhere else
  if ($(this).text() === 'Read on...') {
    $(this).parent().find('*').fadeIn();
    $(this).html('Show Less &larr;');
  } else {
    $('body').animate({
      scrolltop: ($(this).parent().offset().top)
    }, 200);
    $(this).html('Read on &rarr;');
    $(this).parent().find('.article-body *:nth-of-type(n+2)').hide();
  }
});
```

# Typography
> visual component of the written word
> * utility
> * legibility
> * design

#### Important Considerations for Font Selection:
* color
* weight
* serif/sans serif
* font
* typeface

#### How to Import an Externally Hosted Font
```js
@font-face {
  font-family: 'myWebFont';
  src: url('webFont'); // for IE, Chrome, etc
}
```

#### Font Scaling
* pixel : the static choice
* [em ](type-scale.com): a dynamic option
  ```css
  body {
    font-size: 62.5%
  };
  ```
  ```css
  span {
    font-size: 1.6rem;
  }
  ```
* rem : a more predictable em, based on the container
* [vw demo](https://codepen.io/jonahoh/pen/bRBYBP)

# HTML Templating
[handlebars.js](handlebarsjs.com)

```js
var product= {
  title: 'tshirt';
}
```

```html
<span>{{product.title}}</span>
```
# Demo
See Demo Folder for 04

# Lab
