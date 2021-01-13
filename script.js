var currentDay = $("#currentDay");

currentDay.html(moment().format("dddd, MMMM Do"));

const currentHour = moment().hour();

function colorBlocks() {
  var rowBlocks = $(".row");
  var timeBlock;
  for (var i = 0; i < rowBlocks.length; i++) {
    timeBlock = rowBlocks[i];

    if (timeBlock.dataset.time < currentHour) { 
        //do something for the past
    } else if (timeBlock.dataset.time > currentHour) {
        // do something for the future

    } else {
        //do something for present 
    }

  }
}



// local storage 24 hr
// JSON  stringify

// if today > than stored day? clear storage & refresh?

// buttons

//For Loop*/
