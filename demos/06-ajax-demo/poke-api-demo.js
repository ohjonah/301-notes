// default jQ AJAX GET request
// jQ method accepts an object=
$.ajax({
  url: 'http://pokapi.co/api/v2/pokemon/44',
  type: 'GET',
  success: function(data, message, xhr) {
    // where we handle the data
    console.log('my data:', data);
  },
  fail: function(err) {
    console.error(err);
  }
});

// shorthand jQ AJAX GET request
$.get('http://pokapi.co/api/v2/pokemon/33')
.done(function(data) {
  console.log('my poke data:', data);
})
.fail(function(err) {
  console.error('this broke because:', err);
})
.always(function() {
  console.log('this is going to log no matter what');
});

// shorthand jQ AJAX GET request : Replace logo with img src
$.get('http://pokapi.co/api/v2/pokemon/33')
.done(function(data) {
  var logo = $('.logo');
  logo.html('<img src="' + data.sprites.back_default + '">');
})
.fail(function(err) {
  console.error('this broke because:', err);
})
.always(function() {
  console.log('this is going to log no matter what');
});

// JSON specific AJAX request
$.getJSON('http://pokeapi.co/api/v2/pokemon/21')
.then(function(data) {
  console.log('my pokemon name is:', data);
}, function(err) {
  console.err('my stuff broke:', err);
});

// JSON specific AJAX request : Accessing an Object
$.getJSON('http://pokeapi.co/api/v2/pokemon/21')
.then(function(data) {
  console.log('my pokemon name is:', data.name);
}, function(err) {
  console.err('my stuff broke:', err);
});


// JSON specific AJAX request : Dynamic DOM Manipulation
$.getJSON('http://pokeapi.co/api/v2/pokemon/21')
.then(function(data) {
  var logo = $('.logo');
  logo.text('my pokename is ', data.name);
}, function(err) {
  console.err('my stuff broke:', err);
});
