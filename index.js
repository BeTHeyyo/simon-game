$(".btn").click(function(){
        buttonPressed($(this));
});

function buttonPressed(btn){
    btn.addClass("pressed");
    setTimeout(function(){
        btn.removeClass("pressed");
    }, 100);

    var btnColor = btn.attr("class")[0];
    switch(btnColor){
        case 'b':
            var audio = new Audio("sounds/blue.mp3");
            audio.play();
            break;
        case 'g':
            var audio = new Audio("sounds/green.mp3");
            audio.play();
            break;
        case 'r':
            var audio = new Audio("sounds/red.mp3");
            audio.play();
            break;
        case 'y':
            var audio = new Audio("sounds/yellow.mp3");
            audio.play();
            break;
        default:
            break;
    }

}