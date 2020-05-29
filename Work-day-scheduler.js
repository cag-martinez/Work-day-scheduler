
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

        function timeOfDay(){
    
            $("#time-block").each(function () {
                var currentHour = new Date().getHours()
                var elem = parseInt($(this).attr("id"))
                if (elem === currentHour) {
                    $(this).addClass('current')
                }
                else if (elem < currentHour) {
                    $(this).addClass('past')
                }else {
                    $(this).addClass("future")
                } 
            })
        }
        timeOfDay();
    
}
renderTime();


$('textarea').on("keyup", function(e){
    var userEvent = $("<textarea class='list-group-item list-group-item-action list-group-item-success'></textarea>").text($("textarea").val());
    var save = $("<i class='fas fa-save'></i>").click(function(){
        console.log(testarea);
    });
});

//userEvent.append(textarea);


var entries = []
$( ".btn" ).on( "click", function() {
    //event.preventDefault();
    console.log($(this).attr("name"));
    console.log($("#textarea-" + $(this).attr("name")).val());
    var time = $(this).attr("name")
    var newEntrie = {[time]:$("#textarea-" + $(this).attr("name")).val()}
    
    entries.push(newEntrie)
    console.log(entries);
    saveToLocalStorage();
});

function saveToLocalStorage() {

    var strEntries = JSON.stringify(entries)
    localStorage.setItem('entries', strEntries)
}


function readLocalStorage() {
    var parsedEntries = JSON.parse(localStorage.getItem("entries"))
    if (parsedEntries) {
        entries = parsedEntries
    }
    
    // console.log('unparsed localStorage.getItem("entries")', localStorage.getItem("entries"))
    // console.log('WE R READING THE LOCAL STOREAGE!!!',parsedEntries)
    for (var i = 0; i< parsedEntries.length; i++){
        // console.log("lloping?", parsedEntries[i])
        // console.log('just the text~!~!!!!!', parsedEntries[i][Object.keys(parsedEntries[i])[0]])
        // console.log('num we r trying to rock with ', Object.keys(parsedEntries[i])[0])



        $("#textarea-" + Object.keys(parsedEntries[i])[0]).val(parsedEntries[i][Object.keys(parsedEntries[i])[0]])
    }
}

readLocalStorage()










