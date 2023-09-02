//tells browser to load the html and css first
$(document).ready(function() {
 
  
//display current day
var today = dayjs();
  $("#currentDay").text(today.format("MMM D, YYYY [at] hh:mm:ss a"));
  
  // assign saveBtn click listener for user input and time stamp
  $('.saveBtn').on("click", function() {
    //get nearby values
    console.log(this);


    //take the change from the sibling in html descrition attribute
    var text =$(this).siblings(".description").val();

    //take the change from the parent html id attribute
    var time =$(this).parent().attr("id");


    //set item in local storage
    localStorage.setItem(time, text);
  });
});


$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));


//create a function to determine if the time blocks are past, present, or future
    function tense() {
      //get current time
      var currentTime = moment().hour();

      //loop over time blocks
      $(".time-block").each(function() {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockTime, currentTime)

        //check to see what tense we are in
        if (blockTime < currentTime) {
          $(this).addClass("past");
          $(this).removeClass("future");
          $(this).removeClass("present");
        } else if (blockTime === currentTime) {
          $(this).removeClass("past");
          $(this).addClass("future");
          $(this).removeClass("present");
        } else {
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present");

          //re-run function
          tense();
        }
      })


    // if (calTime.isBefore(today)) {
    //   timeBlock.addClass("past");
    // } else if (projectDate.isSame(today)) {
    //   timeBlock.addClass("present");
    // } else if (projectDate.isAfter(today)) {
    //   timeBlock.addClass("future")
    // }

    // console.log(tense);
  };



// saveBtn.addEventListener("click", userInput);