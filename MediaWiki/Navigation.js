// BEGIN Collapsible tables 
// Description: Allows tables to be collapsed, showing only the header.
// See Wikipedia:NavFrame.
// Maintainers: User:R. Koot
 
var autoCollapse = 2;
var collapseCaption = "esconder";
var expandCaption = "mostrar"; 
 
function collapseTable( tableIndex )
{
    var Button = document.getElementById( "collapseButton" + tableIndex );
    var Table = document.getElementById( "collapsibleTable" + tableIndex );
 
    if ( !Table || !Button ) {
        return false;
    }
 
    var Rows = Table.getElementsByTagName( "tr" ); 
 
    if ( Button.firstChild.data == collapseCaption ) {
        for ( var i = 1; i < Rows.length; i++ ) {
            Rows[i].style.display = "none";
        }
        Button.firstChild.data = expandCaption;
    } else {
        for ( var i = 1; i < Rows.length; i++ ) {
            Rows[i].style.display = Rows[0].style.display;
        }
        Button.firstChild.data = collapseCaption;
    }
}
 
function createCollapseButtons()
{
    var tableIndex = 0;
    var NavigationBoxes = new Object();
    var Tables = document.getElementsByTagName( "table" );
 
    for ( var i = 0; i < Tables.length; i++ ) {
        if ( $(Tables[i]).hasClass("collapsible" ) ) {
            NavigationBoxes[ tableIndex ] = Tables[i];
            Tables[i].setAttribute( "id", "collapsibleTable" + tableIndex );
 
            var Button     = document.createElement( "span" );
            var ButtonLink = document.createElement( "a" );
            var ButtonText = document.createTextNode( collapseCaption );
 
            Button.style.styleFloat = "right";
            Button.style.cssFloat = "right";
            Button.style.fontWeight = "normal";
            Button.style.textAlign = "right";
            Button.style.width = "6em";
 
            ButtonLink.setAttribute( "id", "collapseButton" + tableIndex );
            ButtonLink.setAttribute( "href", "javascript:collapseTable(" + tableIndex + ");" );
            ButtonLink.appendChild( ButtonText );
 
            Button.appendChild( document.createTextNode( "[" ) );
            Button.appendChild( ButtonLink );
            Button.appendChild( document.createTextNode( "]" ) );
 
            var Header = Tables[i].getElementsByTagName( "tr" )[0].getElementsByTagName( "th" )[0];
            /* only add button and increment count if there is a header row to work with */
            if (Header) {
                Header.insertBefore( Button, Header.childNodes[0] );
                tableIndex++;
            }
        }
    }
 
    for ( var i = 0;  i < tableIndex; i++ ) {
        if ( $(NavigationBoxes[i]).hasClass("collapsed" ) || ( tableIndex >= autoCollapse && $(NavigationBoxes[i]).hasClass("autocollapse" ) ) ) {
            collapseTable( i );
        }
    }
}
 
$( createCollapseButtons );
 
// Dynamic Navigation Bars
 
// set up the words in your language
var NavigationBarHide = '[ Esconder ▲ ]';
var NavigationBarShow = '[ Expandir ▼ ]'; 
 
// shows and hides content and picture (if available) of navigation bars
function toggleNavigationBar(e)
{
  e = e || window.event;
  var NavToggle = e.target || e.srcElement;
  var NavFrame = NavToggle.parentNode.parentNode;
 
  if (NavToggle.firstChild.data == NavigationBarHide) {
    for (var NavChild=NavFrame.firstChild; NavChild != null; NavChild=NavChild.nextSibling) {
      if ($(NavChild).hasClass('NavContent') || $(NavChild).hasClass('NavPic'))
        NavChild.style.display = 'none';
    }
    NavToggle.firstChild.data = NavigationBarShow;
  } else if (NavToggle.firstChild.data == NavigationBarShow) {
     for (var NavChild = NavFrame.firstChild; NavChild != null; NavChild = NavChild.nextSibling) {
       if ($(NavChild).hasClass('NavContent') || $(NavChild).hasClass('NavPic'))
         NavChild.style.display = 'block';
     }
     NavToggle.firstChild.data = NavigationBarHide;
  }
}
 
// adds show/hide-button to navigation bars
function createNavigationBarToggleButton()
{
  // iterate over all <div> elements
  var NavFrame=document.getElementsByTagName("div");
 
  for (var i=0; i < NavFrame.length; i++)
  {
    if ($(NavFrame[i]).hasClass("NavFrame")) {
      var NavToggle = document.createElement("a");
      var NavToggleText = document.createTextNode($(NavFrame[i]).hasClass("selected") ? NavigationBarShow : NavigationBarHide);
 
      NavToggle.className = 'NavToggle';
      NavToggle.onclick = toggleNavigationBar;
      NavToggle.appendChild(NavToggleText);
 
      // add NavToggle-Button as element in <div class="NavFrame">
      for (var j=0; j < NavFrame[i].childNodes.length; j++) {
        if ($(NavFrame[i].childNodes[j]).hasClass("NavHead")) {
          NavFrame[i].childNodes[j].appendChild(NavToggle);
        }
      }
 
      if (document.createEvent) { // DOM 2 and DOM 3 compliant browsers
        var e = document.createEvent("MouseEvents");
        e.initMouseEvent("click", true,true, window, 0,0,0,0,0, false,false,false,false, 0, null);
        NavToggle.dispatchEvent(e);
      } else if (NavToggle.fireEvent) { // IE
        NavToggle.fireEvent("onclick");
      }
    }
  }
}
 
$( createNavigationBarToggleButton );
