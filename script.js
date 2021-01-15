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
colorBlocks ();

function colorBlocks() {
 
  for (var i = 0; i < rowBlocks.length; i++) {
 
   var timeBlock = rowBlocks[i];

    if (timeBlock.dataset.time < currentHour) {  
      $(timeBlock).addClass ("past")
        //do something for the past

    } else if (timeBlock.dataset.time > currentHour) {
      $(timeBlock).addClass ("future")
        // do something for the future

    } else {

      $(timeBlock).addClass ("present")
        //do something for present 
    }

  }
}

}); 
