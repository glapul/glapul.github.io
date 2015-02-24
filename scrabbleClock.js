var num_of_players = 0;
var current_player = 0;
var INITIAL_TIME = 60 * 10;
var time_remaining = [];
var started = 0;

var $ = document.getElementById;
function f() {
    var player_input = document.getElementById("player_input");
    create_player(player_input.value);
    player_input.value = "";
    return false;
}
function create_player(name) {
    var ul = document.getElementById("player_list");
    var li = document.createElement("li");
    var name_paragraph = document.createElement("p");
    var time_paragraph = document.createElement("p");
    var float_reset_paragraph = document.createElement("p");

    float_reset_paragraph.setAttribute("style","clear: both;");
    name_paragraph.setAttribute("class", "alignleft");
    time_paragraph.setAttribute("class", "alignright");

    li.setAttribute("id","li"+num_of_players);
    time_paragraph.setAttribute("id", "time"+num_of_players);

    name_paragraph.appendChild(document.createTextNode(name));
    time_paragraph.appendChild(document.createTextNode(convert_to_time(INITIAL_TIME)));

    li.appendChild(name_paragraph);
    li.appendChild(time_paragraph);
    li.appendChild(float_reset_paragraph);

    ul.appendChild(li);
    //alert(li.id);
    time_remaining[num_of_players] = INITIAL_TIME;
    num_of_players += 1
}

var tick = function () {
    time_remaining[current_player] -= 1;
    var time_paragraph = document.getElementById("time"+current_player);
    time_paragraph.innerHTML = convert_to_time(time_remaining[current_player]);
}

function next() {
    if(started == 0) {
        document.getElementById("btn_text").innerHTML = "NEXT";
        setInterval(tick, 1000);
        started = 1;
    }
    else
        current_player = (current_player + 1) % num_of_players;
}

function convert_to_time(seconds) {
    if(seconds < 0)
        return "0 : 00 : 00";
    var s = seconds % 60;
    seconds -= s;
    seconds /= 60;
    var m = seconds % 60;
    seconds -= m;
    seconds /= 60;
    return "" + m + "m  " + s + "s";
}




