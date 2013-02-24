var matrix = new Array(); // Reference level matrix
var Q; // Global Quintus
function getOptions() {
    return {
        'levelWidth': parseInt($('.level-width').val()),
        'levelHeight': parseInt($('.level-height').val()),
        'tileWidth': parseInt($('.tile-width').val()),
        'tileHeight': parseInt($('.tile-height').val()),
        'tileSize': parseInt($('.tile-size').val()),
        'tileUrl': $('.tile-url').val()
    }
}
function initMatrix() {
    // Clean previous matrices
    matrix = new Array();
    for(var i = 0; i < options.levelHeight; i++) {
        matrix[i] = new Array();
        for(var j = 0; j < options.levelWidth; j++) {
            matrix[i][j] = 0;
        }
    }
}
function createLevel() {
    // Get options from form
    var options = getOptions();
    // Initialize reference matrix
    initMatrix();
    // Calculate the editor size based on tile size
    $('#editor').attr({
        'width': options.levelWidth*options.tileWidth,
        'height': options.levelHeight*options.tileHeight
    });
    // Initialize Quintus.js with modules
    Q =  Quintus({
        imagePath: "" // this allows request asset from remote urls
    })
    .include("Sprites,Scenes,2D")
    .setup('editor');
    // Creating scene
    Q.scene('editor', function(stage) {
        stage.collisionLayer(new Q.TileLayer({
            dataAsset: matrix,
            sheet:     'level'
        }));
    });
    // Load assets and stage scene
    Q.load(options.tileUrl, function() {
        Q.sheet('level', options.tileUrl, {
            tilew: options.tileWidth,
            tileh: options.tileHeight
        }); 
        Q.stageScene('editor');
    });
}

$(document).ready(function() {
    // Setup canvas with editor options
    $('.create-level').click(function() {
        Q = null;
        createLevel();
    });
    
// Tracking clicks on canvas to add 
    
    
// Export canvas to json
    
// Import json to canvas
    
// Test the game
    
})