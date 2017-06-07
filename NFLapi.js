/* Uses AJAX to query an internet data source for zip codes@
param { string } numId The element id that has the number */
function findInfo(typeId, teamId) {
    var type = document.getElementById(typeId).value;
    var team = document.getElementById(teamId).value;
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                displayResponse(this.responseText);
            }
            else if (this.status === 404) {
                displayResponse("none");
            }
            else {
                console.log("We have a problem...server responded with code: " + this.status);
            }
        }
        else {}
    };
    var url = "http://nflarrest.com/api/v1/team/" + type + "/" + team;
    httpRequest.open("GET", url, true);
    httpRequest.send();
}
/* Displays the zip code place given the JSON data@
param { string } data JSON data representing place for given response */
function displayResponse(data) {
    var info = JSON.parse(data);
    if (data == "none") {
        document.getElementById("info").classInfo = "alert alert-danger";
        document.getElementById("info").innerHTML = "No Trivia Found";
    }
    else {
        document.getElementById("info").classInfo = "alert alert-success";
        document.getElementById("info").innerHTML = " Name: " + info[0].Name + "<br/>" + " Category: " + info[0].Category + "<br/>" + "Arrest Count: " + info[0].arrest_count + "<br/>" + "<br/>" + " Name: " + info[1].Name + "<br/>" + " Category: " + info[1].Category + "<br/>" + "Arrest Count: " + info[1].arrest_count + "<br/>" + "<br/>" + " Name: " + info[2].Name + "<br/>" + " Category: " + info[2].Category + "<br/>" + "Arrest Count: " + info[2].arrest_count + "<br/>" + "<br/>" + " Name: " + info[3].Name + "<br/>" + " Category: " + info[3].Category + "<br/>" + "Arrest Count: " + info[3].arrest_count + "<br/>" + "<br/>" + " Name: " + info[4].Name + "<br/>" + " Category: " + info[4].Category + "<br/>" + "Arrest Count: " + info[4].arrest_count;
    }
}
