/* Any JavaScript here will be loaded for all users on every page load. */

// Importando código para ativar o WikiMiniAtlas na Wikiversidade (2012-11-01)
// Refs:
// http://meta.wikimedia.org/wiki/WikiMiniAtlas
// http://meta.wikimedia.org/w/index.php?title=Talk:WikiMiniAtlas&diff=next&oldid=4396354
//
( function ( $, mw ) {
    $( document ).ready( function() {
      var require_wikiminiatlas = !!$( 'div.kmldata' ).length;
      var coord_filter = /geohack/;
      $( 'a.external.text' ).each( function( key, link ) {
            if ( link.href && coord_filter.test( link.href ) ) {
                require_wikiminiatlas = true;
                // break from loop
                return false;
            }
        } );
        if ( require_wikiminiatlas ) {
            mw.loader.load( '//meta.wikimedia.org/w/index.php?title=MediaWiki:Wikiminiatlas.js&action=raw&ctype=text/javascript' );
        }
    } );
} )( jQuery, mediaWiki );

// Importando código para ativar a interface MOOC na Wikiversidade (2017-10-18)
// Referência:
// https://en.wikiversity.org/wiki/MediaWiki:Common.js
//

/* deprecated */
var	hasClass = function(e, c) { return $(e).hasClass(c); },
	import_script = importScript;

importScript("MediaWiki:Navigation.js");				// collapsible tables and dynamic navigation
importScript("MediaWiki:ExtraTabs.js");					// additional tabs for the toolbox
importScript("MediaWiki:Sidebar.js");					// customize sidebar
//importScript("MediaWiki:Purge.js");                     // add Purge option to More menu
importScript("MediaWiki:EditToolbar.js");				// additional edit tools
importScript("MediaWiki:Displayname.js");				// change the namespace tab and the display title
importScript("MediaWiki:Tables.js");					// change style of some tables
importScript("MediaWiki:DebateTree.js");				// wikidebate initialization script
importScript("MediaWiki:Common.js/WatchlistNotice.js");	// watchlist notification
importScript("MediaWiki:Common.js/Slideshows.js");		// interactive slideshows
importScript("MediaWiki:Common.js/addin-mooc.js");		// MOOC interface

/**
 * @source https://www.mediawiki.org/wiki/Snippets/Load_JS_and_CSS_by_URL
 * @revision 2016-03-26
 */
mw.loader.using( ['mediawiki.util', 'mediawiki.notify'], function () {
	var extraCSS = mw.util.getParamValue( 'withCSS' ),
		extraJS = mw.util.getParamValue( 'withJS' ),
		extraModule = mw.util.getParamValue( 'withModule' );

	if ( extraCSS ) {
		if ( /^MediaWiki:[^&<>=%#]*\.css$/.test( extraCSS ) ) {
			mw.loader.load( '/w/index.php?title=' + extraCSS + '&action=raw&ctype=text/css', 'text/css' );
		} else {
			mw.notify( 'Only pages from the MediaWiki namespace are allowed.', { title: 'Invalid withCSS value' } );
		}
	}

	if ( extraJS ) {
		if ( /^MediaWiki:[^&<>=%#]*\.js$/.test( extraJS ) ) {
			mw.loader.load( '/w/index.php?title=' + extraJS + '&action=raw&ctype=text/javascript' );
		} else {
			mw.notify( 'Only pages from the MediaWiki namespace are allowed.', { title: 'Invalid withJS value' } );
		}
	}

	if ( extraModule ) {
		if ( /^ext\.gadget\.[^,\|]+$/.test( extraModule ) ) {
			mw.loader.load( extraModule );
		} else {
			mw.notify( 'Only gadget modules are allowed.', { title: 'Invalid withModule value' } );
		}
	}
});
