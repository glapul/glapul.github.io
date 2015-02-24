var num_of_players = 0;
var current_player = 0;
var INITIAL_TIME = "0:10:00"

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
    time_paragraph.appendChild(document.createTextNode(INITIAL_TIME));

    li.appendChild(name_paragraph);
    li.appendChild(time_paragraph);
    li.appendChild(float_reset_paragraph);

    ul.appendChild(li);
    //alert(li.id);
    num_of_players += 1
}

