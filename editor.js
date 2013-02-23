var matrix = new Array(); // Reference level matrix
var Q; // Global Quintus
function getOptions() {
    return {
        'levelWidth': $('.level-width').val(),
        'levelHeight': $('.level-height').val(),
        'tileWidth': $('.tile-width').val(),
        'tileHeight': $('.tile-height').val(),
        'tileUrl': $('.tile-url').val(),
        'tileSize': $('.tile-size').val()
    }
}

function createLevel() {
    // Gettint options
    var options = getOptions();
    // Clean previous matrices
    matrix = new Array();
    // Calculate the editor sized based on tilse size
    $('#editor').css({
        'width': options.levelWidth*options.tileWidth,
        'height': options.levelHeight*options.tileHeight
    });
    // Initialize Quintus.js with modules
    Q = new Quintus().include(
        Quintus.Sprites, 
        Quintus.Input, 
        Quintus.Scenes, 
        Quintus.UI
        );   
}

$(document).ready(function() {
    // Setup canvas with editor options
    $('.create-level').click(function() {
        createLevel();
    });
    
    // Tracking clicks on canvas to add tiles
    
    // Export canvas to json
    
    // Import json to canvas
    
    // Test the game
    
})