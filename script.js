$(document).ready(function() {

var currentDay = $("#currentDay");

currentDay.html(moment().format("dddd, MMMM Do"));

const currentHour = moment().hour();

  var rowBlocks = $(".color"); 

   var button1 = $("#button1");
   var textBox1 = $('#textBox1');
   var theText = $('textBox1.val');
  var theTextArray = [""];



  $("#button1").on('click', saveLocal());
  
   function saveLocal() {
localStorage.setItem(textBox1.val, 
JSON.stringify.theTextArray) 

//then 

//if (theText = null)
//JSON.parse(localStorage.getItem("theTextArray")

}
