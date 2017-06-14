'use strict';

// If we are going to build out the functionality to add a task, we need
// 1. add task functionality,
// 2. remove task funciton

function addTask() {
  var $btn = $('.add');
  var $input = $('section input');
  var $list = $('.tasks ul');

  // we get the value out of the input val
  $btn.on('click', function() {
    var val = $input.val();

    // clear the input. use a setter
    $input.val('');
    $list.append('<li>' + val + '</li>');
  });
}

// // RABBIT HOLE
// $('.el').on('click', function() {
//   // console.log($(this)); refers to element you clicked on
//   $('.something').each(function() {
//     // console.log($(this)); refers to each something
//     //do stuff
//   })
// })
//
// // HOWEVER: Arrow Functions


// query the outer box to remove using event delegation
// I need to event delegate because li doesn't exist in the dom

function removeTask() {
  var $container = $('.tasks ul');
  $container.on('click', 'li', function() {
    $(this).remove();

    // this vs $(this)
    // $(this) - refers to jquery object, in this case, the delegated event, li
  });
}


$(document).ready(function() {
  addTask();
  removeTask();
});

// doesn't always work. take it out if it doesn't.
