var currentDay = $("#currentDay");

currentDay.html(moment().format("dddd, MMMM Do"));

const currentHour = moment().hour();

  var rowBlocks = $(".color"); 

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
