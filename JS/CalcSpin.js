// JavaScript source code
$(document).ready(function () {
    $("#Goodbye").hide();
    $("#spin").click(function () {
        for (var i = 0; i < 10; i++) {
            var result = Math.floor(Math.random() * 10);
            if (result == 0 || result > 3) {
                continue;
            }
            else if (result == 1) {
                $("#selector-one").removeClass("one two three");
                $("#selector-one").addClass("one");
                break;
            }
            else if (result == 2) {
                $("#selector-one").removeClass("one two three");
                $("#selector-one").addClass("two");
                break;
            }
            else if (result == 3) {
                $("#selector-one").removeClass("one two three");
                $("#selector-one").addClass("three");
                break;
            }
        }

        for (var i = 0; i < 10; i++) {
            var result = Math.floor(Math.random() * 10);
            if (result == 0 || result > 3) {
                continue;
            }
            else if (result == 1) {
                $("#selector-two").removeClass("one two three");
                $("#selector-two").addClass("one");
                break;
            }
            else if (result == 2) {
                $("#selector-two").removeClass("one two three");
                $("#selector-two").addClass("two");
                break;
            }
            else if (result == 3) {
                $("#selector-two").removeClass("one two three");
                $("#selector-two").addClass("three");
                break;
            }
        }
        for (var i = 0; i < 10; i++) {
            var a = Math.floor(Math.random() * 10);
            if (result == 0 || a > 3) {
                continue;
            }
            else if (result == 1) {
                $("#selector-three").removeClass("one two three");
                $("#selector-three").addClass("one");
                break;
            }
            else if (result == 2) {
                $("#selector-three").removeClass("one two three");
                $("#selector-three").addClass("two");
                break;
            }
            else if (result == 3) {
                $("#selector-three").removeClass("one two three");
                $("#selector-three").addClass("three");
                break;
            }
        }
        var b1 = $("#selector-one").attr("class");
        var b2 = $("#selector-two").attr("class");
        var b3 = $("#selector-three").attr("class");
        var winmsg = "Congratulations, you won!";
        var nowinmsg = "Sorry, try again";
        //$("#msg").text(b1);


        if (b1 == b2 && b1 == b3) {
            $("#msg").text(winmsg);


        }
        else {
            $("#msg").text(nowinmsg);
        }
        
    });
    $("button").hover(function () {
        $(this).css("background-color", "rgb(0, 153, 51)");
        $(this).css("font-size", "20px");
    }, function () {
        $(this).css("background-color", "lightgreen");
        $(this).css("font-size", "13.3333px");
        });
    $("#spin2").click(function () {
        $(this).fadeOut(2000);
        $("#Goodbye").fadeIn(2000);
    });
});


