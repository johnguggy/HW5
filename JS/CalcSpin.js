$(document).ready(function () {
    $("#Goodbye").hide();
});

$("button").hover(function () {
    $(this).css("background-color", "rgb(0, 153, 51)");
    $(this).css("font-size", "20px");
    if (this == document.getElementById("spin")) {
        this.innerText = "SPIN NOW";
    }
}, function () {
    $(this).css("background-color", "lightgreen");
    $(this).css("font-size", "13.3333px");
    if (this == document.getElementById("spin")) {
        this.innerText = "Spin Again";
    }
    if (this == document.getElementById("quit")) {
        $(this).css("background-color", "#f2f2f2");
    }
});

$("#spin").click(function () {
    startProcess();
});

$("#quit").click(function () {
    $(this).fadeOut(2000);
    $("#Goodbye").fadeIn(2000);
});

function startProcess() {
    spin("box1");
    spin("box2");
    spin("box3");
    CheckMatchingBoxes();
}

function spin(boxID) {
    for (var counter = 0; counter < 10; counter++) {
        var result = Math.floor(Math.random() * 10);
        var box = document.getElementById(boxID);
        if ((result == 0) || (result > 3)) {
            continue;
        }
        else if (result == 1) {
            box.className = "one";
            break;
        }
        else if (result == 2) {
            box.className = "two";
            break;
        }
        else if (result == 3) {
            box.className = "three";
            break;
        }
    }
}

function CheckMatchingBoxes() {
    var b1 = $("#box1").attr("class");
    var b2 = $("#box2").attr("class");
    var b3 = $("#box3").attr("class");
    var MsgWin = "Congratulations, you won!";
    var MsgNoWin = "Sorry, try again";

    if (b1 == b2 && b1 == b3) {
        $("#msg").text(MsgWin);
    }
    else {
        $("#msg").text(MsgNoWin);
    }
}