'use strict';

pageLoad();

$('#user-form').on('submit', function(e) {
  e.preventDefault();
// prevent refreshing

// target always gets name or id property
  let data =  {
    name: e.target.name.value,
    age: e.target.age.value,
    ninja: e.target.ninja.value
  };

  $.post('/db/person', data)
  .then(function () {
    // load our page with the data of all persons (see below)
    pageLoad();
  });
});


// after we do a redirect
function pageLoad() {
  $.get('/db/person')
  .then(function(data) {
    console.log('our data:', data);
    $('#results').empty(); // gets rid of the children that's loaded


    // comes back with a rows property i.e. record
    data.rows.forEach(function(item) {
      let content = `
        <h2>name: ${item.name}</h2>
        <p>age: ${item.age}</p>
        <p>ninja status: ${item.ninja}</p>
      `;
      $('#results').append(content);
    });
  }, function(err) {
    console.err(err);
  });
}
