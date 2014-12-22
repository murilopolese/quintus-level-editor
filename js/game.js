$( document ).ready( function() {
	var editor = Object.create( Editor );
	$( '.create-game' ).on( 'click', function( e ) {
		e.preventDefault();
		editor.setOptions( $ );
		if( editor.collisionLayer.length ) {
			editor.resizeCollisionLayerArray(
				editor.level.width,
				editor.level.height
			);
		} else {
			editor.updateCollisionLayerArray();
		}
		console.log( editor );
		return false;
	});
});