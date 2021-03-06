/**
 * Initialization script for DebateTree
 * Documentation at https://commons.wikimedia.org/wiki/Help:DebateTree
 */

// Only load on debate pages
if ( $( '.debatetree' ).length ) {

	// Load the CSS directly from Commons
	mw.loader.load( '//commons.wikimedia.org/w/index.php?title=MediaWiki:DebateTree.css&action=raw&ctype=text/css', 'text/css' );

	// Only load the script when viewing or previewing
	var action = mw.config.get( 'wgAction' );
	if ( action === 'view' || action === 'submit' ) {
		mw.loader.load( '//commons.wikimedia.org/w/index.php?title=MediaWiki:DebateTree.js&action=raw&ctype=text/javascript' );
	}
}
