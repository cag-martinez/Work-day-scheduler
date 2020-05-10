
function renderTime() {
    //date
    var mydate = new Date();
    var year = mydate.getFullYear();
    if(year < 1000) {
        year += 1900
    }

    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray =["Sunday,", "Monday,", "Tuesday,", "Wednesday,", "Thursday,", "Friday,", "Saturday,"];
    var montharray =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //time
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
        if(h == 24){
            h = 0;
        } else if(h > 12){
            h = h - 0;
        }
        
        if(h < 10){
            h = "0" + h;
        }
        if(m < 10){
            m = "0" + m;
        }

        if(s < 10){
            s = "0" + s;
        }

        var myClock = document.getElementById("clockDisplay");
        myClock.textContent = " " +dayarray [day]+ " " +daym+ " " +montharray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;
        
        myClock.innerText = " " +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;

        setTimeout("renderTime()", 1000);
    }
renderTime();

var userInput = localstorage.getItem("#row1");
var saveBtn = document.querySelector("#saveBtn");
var workdayHours = [ "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm","5pm"]

function displayMessage(type, textarea) {

saveBtn.addEventListener("click", function(event) {
  event.preventDefault();

  var userInput = document.querySelector("#row1").value;

 // localStorage.setItem("textarea", userInput);
    
  });
}
console.log();

//localStorage.setItem('key', 'value')
