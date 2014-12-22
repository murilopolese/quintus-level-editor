var Game = require( '../js/game.js' );
var assert = require( 'assert' );
// Mock jquery
var $ = function( selector ) {
	selector = selector || '';
	this.resp = undefined;
	switch( selector ) {
		case '.sprite-url':
			this.resp = 'www.google.com.br';
			break;
		case '.sprite-size':
			this.resp = 13;
			break;
		case '.tile-width':
			this.resp = 13;
			break;
		case '.tile-height':
			this.resp = 13;
			break;
		case '.level-width':
			this.resp = 13;
			break;
		case '.level-height':
			this.resp = 13;
			break;
		default:
			break;
	}
	this.val = function() { return this.resp };
	return this;
}

describe( 'Structure integrity', function() {
	var game = Object.create( Game );
	describe( 'Level properties', function() {
		it( 'Level defined', function() {
			assert.notEqual( game.level, undefined );
		});
		it( 'Level width defined', function() {
			assert.notEqual( game.level.width, undefined );
		});
		it( 'Level width is a number', function() {
			assert.equal( typeof game.level.width, 'number' );
		});
		it( 'Level height defined', function() {
			assert.notEqual( game.level.height, undefined );
		});
		it( 'Level height is a number', function() {
			assert.equal( typeof game.level.height, 'number' );
		});
	});
	describe( 'Sprite properties', function() {
		it( 'Sprite defined', function() {
			assert.notEqual( game.sprite, undefined );
		});
		it( 'Sprite size defined', function() {
			assert.notEqual( game.sprite.size, undefined );
		});
		it( 'Sprite size is a number', function() {
			assert.equal( typeof game.sprite.size, 'number' )
		});
		it( 'Sprite  url defined', function() {
			assert.notEqual( game.sprite.url, undefined );
		});
		it( 'Sprite url is a string', function() {
			assert.equal( typeof game.sprite.url, 'string' );
		});
		it( 'Tile width defined', function() {
			assert.notEqual( game.sprite.tileWidth, undefined );
		});
		it( 'Tile width is a number', function() {
			assert.equal( typeof game.sprite.tileWidth, 'number' );
		});
		it( 'Tile Height defined', function() {
			assert.notEqual( game.sprite.tileHeight, undefined );
		});
		it( 'Tile Height is a number', function() {
			assert.equal( typeof game.sprite.tileHeight, 'number' );
		});
	});
	describe( 'Collision layer array', function() {
		it( 'Collision Layer Array defined', function() {
			assert.notEqual( game.collisionLayer, undefined );
		});
	});
});

describe( 'Get options', function() {
	var game = Object.create( Game );
	var opts = game.getOptions( $ );
	it( 'Sprite url', function() {
		assert.equal( opts.sprite.url, $( '.sprite-url' ).val() );
	});
	it( 'Sprite size', function() {
		assert.equal( opts.sprite.size, $( '.sprite-size' ).val() );
	});
	it( 'Tile width', function() {
		assert.equal( opts.sprite.tileWidth, $( '.tile-width').val() );
	});
	it( 'Tile height', function() {
		assert.equal( opts.sprite.tileHeight, $( '.tile-height').val() );
	});
	it( 'Level width', function() {
		assert.equal( opts.level.width, $( '.level-width' ).val() );
	});
	it( 'Level height', function() {
		assert.equal( opts.level.height, $( '.level-height' ).val() );
	})
});

describe( 'Set options', function() {
	var game = Object.create( Game );
	game.setOptions( $ );
	it( 'Sprite url', function() {
		assert.equal( game.sprite.url, $( '.sprite-url' ).val() );
	});
	it( 'Sprite size', function() {
		assert.equal( game.sprite.size, $( '.sprite-size' ).val() );
	});
	it( 'Tile width', function() {
		assert.equal( game.sprite.tileWidth, $( '.tile-width').val() );
	});
	it( 'Tile height', function() {
		assert.equal( game.sprite.tileHeight, $( '.tile-height').val() );
	});
	it( 'Level width', function() {
		assert.equal( game.level.width, $( '.level-width' ).val() );
	});
	it( 'Level height', function() {
		assert.equal( game.level.height, $( '.level-height' ).val() );
	})
});

describe( 'Collision layer array', function() {
	it( 'Array "height"', function() {
		var game = Object.create( Game );
		game.updateCollisionLayerArray();
		assert.equal( game.collisionLayer.length, game.level.height );
	});
	it( 'Array "width"', function() {
		var game = Object.create( Game );
		game.updateCollisionLayerArray();
		game.collisionLayer.forEach( function( line ) {
			assert.equal( line instanceof Array, true );
			assert.equal( line.length, game.level.width );
		})
	});
	it( 'Toggle tile', function() {
		var game = Object.create( Game );
		game.updateCollisionLayerArray();
		game.sprite.size = 3;
		assert.equal( game.collisionLayer[ 0 ][ 0 ], 0 );
		game.toggleTile( 0, 0 );
		assert.equal( game.collisionLayer[ 0 ][ 0 ], 1 );
		game.toggleTile( 0, 0 );
		assert.equal( game.collisionLayer[ 0 ][ 0 ], 2 );
		game.toggleTile( 0, 0 );
		assert.equal( game.collisionLayer[ 0 ][ 0 ], 0 );
	});
	it( 'Resize array', function() {
		var game = Object.create( Game );
		game.updateCollisionLayerArray();

	})
});