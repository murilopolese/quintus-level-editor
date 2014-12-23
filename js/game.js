
$( document ).ready( function() {
	var editor = Object.create( Editor );
	$( '.create-game' ).on( 'click', function( e ) {
		e.preventDefault();
		// Fetch form data and set to object
		editor.setOptions( $ );
		// Create / Resize collision layer array
		if( editor.collisionLayer.length ) {
			editor.resizeCollisionLayerArray(
				editor.level.width,
				editor.level.height
			);
		} else {
			editor.updateCollisionLayerArray();
		}
		// Resize canvas element
		$( '#game' ).attr({
			'width': editor.level.width * editor.sprite.tileWidth + 'px',
			'height': editor.level.height * editor.sprite.tileHeight + 'px'
		});
		// Fake initial sprite
		editor.collisionLayer[ 0 ][ 0 ] = 0;
		editor.collisionLayer[ 0 ][ 1 ] = 1;
		editor.collisionLayer[ 0 ][ 2 ] = 2;
		// Start editor
		start( editor );
		return false;
	});
});

var start = function( editor ) {
	var Q = window.Q = Quintus()
	.include( "Sprites, Scenes, 2D" )
	.setup( 'game', 
		{
			maximize: false,
			imagePath: ""
		}
	);
	Q.scene( "level1",function( stage ) {
		console.log( 'level1' );
		stage.collisionLayer( 
			new Q.TileLayer({
				dataAsset: editor.collisionLayer,
				sheet: 'level'
			}
		));
	});

	Q.load( editor.sprite.url, function() {
		Q.sheet( 
			"level", editor.sprite.url, 
			{ tilew: 32, tileh: 32 } 
		);
		Q.stageScene( "level1" );
	});
}