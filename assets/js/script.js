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



//load saved data from LocalStorage for each hour creatEd
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));





//create a function to determine if the time blocks are past, present, or future
function tense() {
  var currentTime = dayjs();

  // Loop over time blocks
  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour-")[1]);

    // Check to see what tense we are in
    if (blockTime < currentTime.hour()) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    } else if (blockTime === currentTime.hour()) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}


  //re-run function
  tense();