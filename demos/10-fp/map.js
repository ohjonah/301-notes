'use strict';

const doctors = [
  {number: 20, actor: ''}
]

let mappedDocs = doctors.map(doctor => {
  return {
    number: doctor.number,
    name: doctor.actor.split(' '),
    yearsPlayed: (doctor.end - doctor.begin) + 1
  }
});


let moreMappedDocs = doctors.map(doctor => {
  return {
    number: doctor.number,
    name: doctor.actor.split(' '),
    yearsPlayed: (doctor.end - doctor.begin)
  }
}).filter(doctor => doctor.yearsPlayed < 5);

console.log(moreMappedDocs);

// *********************************************************

var arr = [2, 4, 6, 8];

var newArr = arr.map{(function(i) {
  return i * i;
})};
