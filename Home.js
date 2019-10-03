function change(num) {
    var reviewPar = document.getElementsByName("review");
    var active = 0;
    for (var i = 0; i < reviewPar.length; i++) {
        if (reviewPar[i].className == "reviewActive") {
            active = i;
        }
    }
    console.log(active);
    console.log(reviewPar);
    reviewPar[active].classList.replace("reviewActive", "reviewInactive");
    // reviewPar[active].classList.remove("reviewActive");
    if (active + num >= reviewPar.length) {
        reviewPar[0].classList.replace("reviewInactive", "reviewActive");
    }
    else if (active + num < 0) {
        reviewPar[reviewPar.length - 1].classList.replace("reviewInactive", "reviewActive");
    }
    else {
        reviewPar[active + num].classList.replace("reviewInactive", "reviewActive");
    }
}