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
    
    
    
    
    
    
    
    
    
            
        
    
    
    // Binding click on level construction block
    $('body').on('click', '.block', function() {
        var col = $(this).data('col');
        var row = $(this).data('row');
        var bgpos = $(this).css('background-position');
        // Toggle between the tiles
        matrix[col][row] = (matrix[col][row]+1)%$('.tile-size').val();
        $(this).css('background-position', '-=32px');
        // Write the JSON in the "export" textarea
        var myJson = JSON.stringify(matrix);
        $('.export textarea').val(myJson);
    })
                
    $('.generate').click(function() {
        // Get the values from form
        var levelWidth = $('.level-width').val();
        var levelHeight = $('.level-height').val();
        var tileWidth = $('.tile-width').val();
        var tileHeight = $('.tile-height').val();
        var tileUrl = $('.tile-url').val();
        var tileSize = $('.tile-size').val();
        // Clean previous matrices
        matrix = new Array();
        // Clean previous level
        $('.editor').html('');
        // Calculate the editor sized based on tilse size
        $('.editor').css({
            'width': levelWidth*tileWidth,
            'height': levelHeight*tileHeight
        })
        // Populate the editor with empty level constructions blocks
        for(var i = 0; i < levelHeight; i++) {
            // Initialize array line
            matrix[i] = new Array(); 
            for(var j = 0; j < levelWidth; j++) {
                $('.editor').append('<div class="block" data-row="'+j+'" data-col="'+i+'"></div>');
                // Set the first tile as default
                matrix[i][j] = 0; 
            }
        }
        // After added, set default style properties to level construction
        // blocks based on options form
        $('.block').css({
            'width': tileWidth,
            'height': tileHeight,
            'background-image': "url('"+tileUrl+"')",
            'background-position': '0px'
        })
    })
})