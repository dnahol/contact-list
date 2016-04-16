'use strict'

$(document).ready(init);

var info = {};

function init() {
  $('#btn-id').click(clickBtn);

}


function clickBtn(event) {
  //get text from input boxes and store it
  var firstName = $("#firstname").val();
//  console.log("firstname: ", firstName);
  var lastName= $('#lastname').val();
  var phoneNumber= $('#phonenumber').val();
  var address= $('#address').val();
  var email= $('#email').val();
  var image= $('#image').val();


  info.firstName= firstName;
  info.lastName = lastName;
  info.phoneNumber = phoneNumber;
  info.address= address;
  info.email=email;
  info.image=image;
//console.log(info.firstName, info.lastName, info.phoneNumber, info.address, info.email, info.image);


  displayInfo(info);

//functions if using media object;
  // updateFirstname(info);
  // updateLastname(info);
  // updatePhoneNumber(info);
  // updateAddress(info);
  // updateEmail(info);
  // updateImage(info);
}

//add info to col in display
function displayInfo(info) {

  var elem= $('.row-contacts').children().first().children().first().next();
  console.log("elem.text(): ", elem);
  elem.text('N: ' + info.firstName + info.lastName + '\nP: ' + info.phoneNumber +'\nA: ' + info.address + '\nE: ' + info.email);


  //select and replace image
  var img = $('.media-object').first();
  console.log("image before: ", img);
  img.attr('src', info.image);
  console.log("image after: ", img);
}


//functions if using media object:
// function updateFirstname(info) {
//
// }
// function updateLastname(info) {
//
// }
//
// function updatePhoneNumber(info) {
//
// }
// function updateAddress(info) {
//
// }
// function updateEmail(info) {
//
// }
// function updateImage(info) {
//
// }
