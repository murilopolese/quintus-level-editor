var game = require( '../js/game.js' );
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
			this.resp = 3;
			break;
		case '.tile-width':
			this.resp = 32;
			break;
		case '.tile-height':
			this.resp = 32;
			break;
		case '.level-width':
			this.resp = 20;
			break;
		case '.level-height':
			this.resp = 10;
			break;
		default:
			break;
	}
	this.val = function() { return this.resp };
	return this;
}

describe( 'Structure integrity', function() {
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
});

describe( 'Get options', function() {
	var opts = game.getOptions( $ );
	it( 'Sprite url', function() {
		assert.equal( opts.sprite.url, 'www.google.com.br' );
	});
	it( 'Sprite size', function() {
		assert.equal( opts.sprite.size, 3 );
	});
	it( 'Tile width', function() {
		assert.equal( opts.sprite.tileWidth, 32 );
	});
	it( 'Tile height', function() {
		assert.equal( opts.sprite.tileHeight, 32 );
	});
	it( 'Level width', function() {
		assert.equal( opts.level.width, 20 );
	});
	it( 'Level height', function() {
		assert.equal( opts.level.height, 10 );
	})
});