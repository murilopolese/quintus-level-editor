(function() {
	var root, Editor;
	root = this;

	Editor = function() {
		var level = {
			width: 20,
			height: 10
		};
		var sprite = {
			url: 'https://raw.github.com/murilopolese/Quintus/master/examples/platformer/images/tiles.png',
			size: 3,
			tileWidth: 32,
			tileHeight: 32,
		};
		var collisionLayer = [];
		var getOptions = function( $ ) {
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
		};
		var setOptions = function( $ ) {
			var opts = this.getOptions( $ );
			this.level = {
				width: opts.level.width,
				height: opts.level.height
			},
			this.sprite = {
				url: opts.sprite.url,
				size: opts.sprite.size,
				tileWidth: opts.sprite.tileWidth,
				tileHeight: opts.sprite.tileHeight
			};
		};
		var updateCollisionLayerArray = function() {
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
		};
		var toggleTile = function( line, row ) {
			line = parseInt( line );
			row = parseInt( row );
			if( this.collisionLayer[ line ] != undefined 
				&& this.collisionLayer[ line ][ row ] != undefined ) {
				this.collisionLayer[ line ][ row ] =
					( this.collisionLayer[ line ][ row ] + 1 ) % this.sprite.size;
			}
		};
		var resizeCollisionLayerArray = function( width, height ) {
			width = parseInt( width );
			height = parseInt( height );
			this.level = {
				width: width,
				height: height
			};
			this.updateCollisionLayerArray();
		}
		return {
			level: level,
			sprite: sprite,
			collisionLayer: collisionLayer,
			getOptions: getOptions,
			setOptions: setOptions,
			updateCollisionLayerArray: updateCollisionLayerArray,
			toggleTile: toggleTile,
			resizeCollisionLayerArray: resizeCollisionLayerArray
		}
	}();

	// Node.js
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = Editor;
	}
	// AMD / RequireJS
	else if (typeof define !== 'undefined' && define.amd) {
		define([], function () {
			return Editor;
		});
	}
	// included directly via <script> tag
	else {
		root.Editor = Editor;
	}

})();