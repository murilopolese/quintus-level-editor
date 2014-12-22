var game = require( '../js/game.js' );
var assert = require( 'assert' );

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