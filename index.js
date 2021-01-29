// An object to store the strings for the locations of the images
const imageLocations = {
    paws: "/src/CrossPaws.jpg",
    haircut: "/src/Haircut.jpeg",
    stand: "/src/Stand.jpg",
    yawn: "/src/Yawn.jpg",
    nap: "/src/Nap.jpg"
}

class Cat {

    constructor(name, age, personality) {
        this.name = name;
        this.age = age;
        this.personality = personality;
    }

    // Declared Function 
    stand() {
        $("#mainImage").attr("src", imageLocations.stand)
    }

    yawn() {
        $("#mainImage").attr("src", imageLocations.yawn)
    }

    nap() {
        $("#mainImage").attr("src", imageLocations.nap)
    }

    crossPaws() {
        $("#mainImage").attr("src", imageLocations.paws)
    }

    haircut() {
        $("#mainImage").attr("src", imageLocations.haircut)
    }
}

// Initialize the cat object and add event listeners
$(document).ready(function() {

    let francis = new Cat("Francis", "2 Years", "Mischievous")

    $("#catName").text(francis.name);
    $("#catAge").text(francis.age);
    $("#catPersonality").text(francis.personality);

    $("#stand").click(function(){
        francis.stand();
    });

    $("#yawn").click(function(){
        francis.yawn();
    });

    $("#nap").click(function(){
        francis.nap();
    });

    $("#paws").click(function(){
        francis.crossPaws();
    });

    $("#haircut").click(function(){
        francis.haircut();
    });
});
