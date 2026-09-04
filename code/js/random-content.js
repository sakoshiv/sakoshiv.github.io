const randomContent = [

    {
        gif: "media/img/neko.gif",
        width: 498,
        height: 373,
        text: "Catgirls are real BTW."
    },

    {
        gif: "media/img/mako.jpg",
        width: 640,
        height: 480,
        text: "ぐぬぬ..."
    },

    {
        gif: "media/img/mako_killdozer.png",
        width: 500,
        height: 500,
        text: "BREAKING NEWS"
    },

    {
        gif: "media/img/mako_jump.gif",
        width: 760,
        height: 420,
        text: "I should blow my shit smoove off."
    },

    {
        gif: "media/img/bokodeath.gif",
        width: 340,
        height: 432,
        text: "Look at what you fucking did."
    },

    {
        gif: "media/img/mako_ride.gif",
        width: 340,
        height: 454,
        text: "Give this a gander."
    },
    
    {
        gif: "media/img/damn_bro.webp",
        width: 1920,
        height: 957,
        text: "Why did you say that?"
    },

    {
        gif: "media/img/huh.png",
        width: 616,
        height: 389,
        text: "Is the name Sako is familiar?"
    },

    {
        gif: "media/img/miho_lurk.png",
        width: 605,
        height: 340,
        text: "Hello."
    }

];


const selection = randomContent[
    Math.floor(Math.random() * randomContent.length)
];


document.getElementById("random-gif").src = selection.gif;
document.getElementById("random-gif").width = selection.width;
document.getElementById("random-gif").height = selection.height;
document.getElementById("random-text").textContent = selection.text;
