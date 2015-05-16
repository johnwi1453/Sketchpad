// Javascript / JQuery file for Odin Project 3, Sketchpad - http://www.theodinproject.com/web-development-101/javascript-and-jquery

userSize = parseInt(prompt("Please enter a number less than 100"))


$(document).ready(function() {
    if( userSize > 2 && userSize <= 100 ) {
        for(var j = 1; j < userSize; j++) {
            for(var i = 1; i < userSize; i++) {
                $('#sketch-wrapper').append("<div class='grid'></div>");
            };
            $('#sketch-wrapper').append("<div class='linebreak'></div>");
        };
    
        squareSize = 480/(userSize)-2
        $('.grid').width(squareSize);
        $('.grid').height(squareSize);
    }else {
        alert("That is an invalid size. Please try again.")
    };
    
});

$(document).ready(function() {
    
    $('#wrapper > a').click(function() {
        $(this).css("border", "yellow 2px solid")
        $(this).fadeOut("fast")
        $(this).css("border", "black 2px solid").fadeIn("fast")
    }) 
});