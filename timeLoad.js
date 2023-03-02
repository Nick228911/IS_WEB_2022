let time_transition_to_page = new Date().getTime()

window.onload = function (){
    document.getElementById("timeOfLoading").innerHTML = " Time of loading is <b>" +
        (new Date().getTime() - time_transition_to_page) / 1000 + "</b> sec";
}