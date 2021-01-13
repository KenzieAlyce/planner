var currentDay = $("#currentDay");

currentDay.html(moment().format("dddd, MMMM Do"));

const currentHour = moment().hour();

function colorBlocks() {
  var rowBlocks = $(".color");
 
  for (var i = 0; i < rowBlocks.length; i++) {
    var timeBlock = rowBlocks[i];

    if (timeBlock.dataset.time < currentHour) {  
      $(rowBlocks).addClass ("past")
        //do something for the past

    } else if (timeBlock.dataset.time > currentHour) {
      $(rowBlocks).addClass ("future")
        // do something for the future

    } else {

      $(rowBlocks).addClass ("present")
        //do something for present 
    }

  }
}
console.log (rowBlocks)
  console.log (timeBlock)
  console.log (currentHour)
