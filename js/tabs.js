// Default opened tab
document.getElementById("defaultOpen").click();

function openTab(evt, tab) {
    var i, tabcontent, tablinks;

    // Get tabcontent elements and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get elements with class tablinks and remove the active class
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show current tab and add active class to the link that opened the tab
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
}