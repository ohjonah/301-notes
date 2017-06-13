// grab elements
$('li'); // traverse the DOM and grabs all the li

// grab elements with a specific class
$('.some-class');

// grab element with an id
$('#some-id');

// parent child selections
$('ul li');

// direct child selections
$('.container > p');

// select elements with certain attributes
$('li[class="active"]');
$('input[type="password"]');

// get text from an elements
$('.el').text();

// set text on an element
$('.el').text('some new text for my element');

// access data attribute on an element
$('.el').data('category');
// element with a data 'category' and this is equal to science fiction.

<section data-category="science">this is a cool story</section>

var mydata = $('.el').data('category');

// example: color picker.

// set data attribute on an element
$('.el').data('category', 'shoes');

// append an element to the DOM
$('ul').append('<li>new item</li>');

// remove an item from the DOM
$('.el').remove();


// wrap it up!
$(document).ready(function() {
  // do stuff here
});
