var currentDate = function () {
    $("#thisDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    
}
var timeBlock = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
]


$(".saveBtn").on('click', function () {
    console.log("Clicked save button ", $(this));
    //grab the hour and description when the save button is clicked 
    var timeStaple = $(this).siblings('.hour').text();
    console.log(timeStaple);
    var description = $(this).siblings('.description').val();
    console.log(description);

    //save information in localStorage 
    localStorage.setItem(timeStaple, description);
});


for (let i = 0; i < timeBlock.length; i++) {
    
    var id = "#" + timeBlock[i].split(":")[0];
    //console.log("id", id )
    $(id).val(localStorage.getItem(timeBlock[i]))

}



//call function
currentDate(); 
