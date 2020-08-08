//All modern browsers support the following 140 color names.
const colors = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", 
                "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", 
                "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", 
                "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", 
                "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", 
                "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", 
                "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", 
                "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", 
                "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", 
                "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", 
                "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", 
                "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", 
                "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", 
                "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", 
                "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", 
                "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", 
                "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", 
                "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", 
                "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", 
                "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", 
                "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", 
                "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", 
                "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", 
                "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];

const button = document.getElementById("change-btn");
const color = document.querySelector(".color");

button.addEventListener("click", function() {

    // Gets a random number between 0 and 2.
    // NOTE: Incldes decimals.
    // const randomNum = 2;
    const randomNum = getRandomNumber(colors);
    // console.log(randomNum);

    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];
});

// Accepts a list and returns a random index number within the list.
function getRandomNumber(color_list) {
    return Math.floor(Math.random() * color_list.length);
}

//----------------------
// Randomized color-type feature

// A list of colors similar to Red.
const reds = ["Red"];
// A list of colors similar to Blue.
const blues = ["Blue"];
/ A list of colors similar to Yellow.
const yellows = ["Yellow"];

const color_btns = document.querySelectorAll(".color-btn");

color_btns.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        const btn_classes = event.currentTarget.classList;
        if(btn_classes.contains("Red")) {
            // NOTE: Remember to add highlighted-class to button.
            
            const randomNum = getRandomNumber(reds);
            document.body.style.backgroundColor = reds[randomNum];
        }
        else if(btn_classes.contains("Blue")) {
            // NOTE: Remember to add highlighted-class to button.
            
            const randomNum = getRandomNumber(blues);
            document.body.style.backgroundColor = blues[randomNum];
        }
        else if(btn_classes.contains("Yellow")) {
            // NOTE: Remember to add highlighted-class to button.
            
            const randomNum = getRandomNumber(yellows);
            document.body.style.backgroundColor = yellows[randomNum];
        }
    }):
});
