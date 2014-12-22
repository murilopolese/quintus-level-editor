(function() {
	var root, Game;
	root = this;
	
	Game = {
		level: {
			width: 20,
			height: 10
		},
		sprite: {
			url: 'https://raw.github.com/murilopolese/Quintus/master/examples/platformer/images/tiles.png',
			size: 3,
			tileWidth: 32,
			tileHeight: 32,
		},
		collisionLayer: [],
		getOptions: function( $ ) {
			return {
				level: {
					width: parseInt( $( '.level-width' ).val() ),
					height: parseInt( $( '.level-height' ).val() )
				},
				sprite: {
					url: $( '.sprite-url' ).val() + '', // Hack casting
				size: parseInt( $( '.sprite-size' ).val() ),
				tileWidth: parseInt( $( '.tile-width' ).val() ),
				tileHeight: parseInt( $( '.tile-height' ).val() )
				}
			}
		},
		setOptions: function( opts ) {
			this.level = {
				width: parseInt( $( '.level-width' ).val() ),
				height: parseInt( $( '.level-height' ).val() )
			},
			this.sprite = {
				url: $( '.sprite-url' ).val() + '', // Hack casting
				size: parseInt( $( '.sprite-size' ).val() ),
				tileWidth: parseInt( $( '.tile-width' ).val() ),
				tileHeight: parseInt( $( '.tile-height' ).val() )
			};
		},
		updateCollisionLayerArray: function() {
			var arr = [];
			for( var line = 0; line < this.level.height; line++ ) {
				arr[ line ] = [];
				for( var row = 0; row < this.level.width; row++ ) {
					// If there is already a value, use it
					if( this.collisionLayer[ line ] != undefined 
						&& this.collisionLayer[ line ][ row ] != undefined ) {
						arr[ line ][ row ] = this.collisionLayer[ line ][ row ];
					} else {
						arr[ line ][ row ] = 0;
					}
				}
			}
			this.collisionLayer = arr;
		}
	};

	// Node.js
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = Game;
	}
	// AMD / RequireJS
	else if (typeof define !== 'undefined' && define.amd) {
		define([], function () {
			return Game;
		});
	}
	// included directly via <script> tag
	else {
		root.Game = Game;
	}

})();

// var matrix = new Array(); // Reference level matrix
// var Q; // Global Quintus
// function getOptions() {
//     return {
//         'levelWidth': parseInt($('.level-width').val()),
//         'levelHeight': parseInt($('.level-height').val()),
//         'tileWidth': parseInt($('.tile-width').val()),
//         'tileHeight': parseInt($('.tile-height').val()),
//         'tileSize': parseInt($('.tile-size').val()),
//         'tileUrl': $('.tile-url').val()
//     }
// }
// function initMatrix(options) {
//     for(var i = 0; i < options.levelHeight; i++) {
//         matrix[i] = new Array();
//         for(var j = 0; j < options.levelWidth; j++) {
//             matrix[i][j] = 0;
//         }
//     }
// }
// function createLevel(options) {
//     // Calculate the editor size based on tile size
//     $('#editor').attr({
//         'width': options.levelWidth*options.tileWidth,
//         'height': options.levelHeight*options.tileHeight
//     });
//     // Clean old instances if exists
//     Q = null;
//     // Initialize Quintus.js with modules
//     Q =  Quintus({
//         imagePath: "" // this allows request asset from remote urls
//     })
//     .include("Sprites,Scenes,2D")
//     .setup('editor');
//     // Creating scene
//     Q.scene('editor', function(stage) {
//         stage.collisionLayer(new Q.TileLayer({
//             dataAsset: matrix,
//             sheet:     'level'
//         }));
//     });
//     // Load assets and stage scene
//     Q.load(options.tileUrl, function() {
//         Q.sheet('level', options.tileUrl, {
//             tilew: options.tileWidth,
//             tileh: options.tileHeight
//         }); 
//         Q.stageScene('editor');
//     });
// }
// function exportLevel() {
//     matrixJson = JSON.stringify(matrix);
//     $('textarea.export').val(matrixJson);
// }

// $(document).ready(function() {
//     // Setup canvas with editor options
//     $('.create-level').click(function() {
//         // Initialize matrix with all 0 by default
//         initMatrix(getOptions());
//         createLevel(getOptions());
//         // Export canvas to json
//         exportLevel();
//     });
	
//     // Tracking clicks on canvas to add tiles
//     $('#editor').click(function(e) {
//         var x = Math.floor(e.offsetX/getOptions().tileWidth);
//         var y = Math.floor(e.offsetY/getOptions().tileHeight);
//         matrix[y][x] = (matrix[y][x]+1)%getOptions().tileSize;
//         createLevel(getOptions());
//         exportLevel();
//     });
	
//     // Import json to canvas
//     $('.import-level').click(function() {
//         matrix = eval($('textarea.import').val());
//         $('.level-width').val(matrix[0].length);
//         $('.level-height').val(matrix.length);
//         createLevel(getOptions());
//         exportLevel();
//     })
	
// // Test the game
	
// })