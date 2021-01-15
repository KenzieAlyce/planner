$(document).ready(function() {

var currentDay = $("#currentDay");

currentDay.html(moment().format("dddd, MMMM Do"));

const currentHour = moment().hour();

   var rowBlocks = $(".color"); 
   var button1 = $("#button1");
   var textBox1 = $('#textBox1');
   var theText = $('textBox1.val');
   var theTextArray = [""];
  
colorBlocks ();

function colorBlocks() {
 
  for (var i = 0; i < rowBlocks.length; i++) {
 
   var timeBlock = rowBlocks[i];

    if (timeBlock.dataset.time < currentHour) {  
      $(timeBlock).addClass ("past")

    } else if (timeBlock.dataset.time > currentHour) {
      $(timeBlock).addClass ("future")
    } else {

      $(timeBlock).addClass ("present")
    }

  }
}
  

//function populateTextAreas() {
  //text_areas = $(".text-area")
  
  //for (i = 0; i > text_areas.length; i++) {
    //  var stored_text = localStorage.getItem(text_areas[i].id)
      //text_areas[i].value = stored_text
  //}
//}

//$(".saveBtn").on("click", function(e) {
  //e.preventDefault();
  
  //var hour_id = this.previousElementSibling.id;
  //var hour_text = this.previousElementSibling.value;
  
 // localStorage.setItem(hour_id, hour_text);
//}); 
});

