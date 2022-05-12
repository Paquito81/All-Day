var setDate = function () {
    $("#currentDay").text(moment().format("dddd, MMMMM Do YYYY, h:mm:ss a"));
}

var currentHour = ["9:00 AM", "10:00 AM", "11:00 AM","12:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM","6:00 PM"]

$(".saveBtn").on('click', function () {
    console.log("Clicked save button", $(this));

    var timeStamp = $(this).siblings('.hour').text();
    console.log(timeStamp);

    var sectionDescription = $(this).siblings('.description').val();
    console.log(sectionDescription);

    localStorage.setItem(timeStamp, sectionDescriptio);
});

for (let i = 0; i < currentHour.length; i ++) {
    console.log("timeStamp", currentHour[i])

    var id = "#" + currentHour[i].split(":")[0];

    $(id).val(locaStorage.getItem(currentHour[i]))
}



setDate();