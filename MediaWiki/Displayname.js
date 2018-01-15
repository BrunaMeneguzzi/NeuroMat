function change_displaytitle()
{
  var dstitle = document.getElementById("displaytitle");
  var ntab = document.getElementById("p-cactions");
  var text, title, titlename;
 
  if (dstitle && ntab) {
    ntab = ntab.getElementsByTagName("a");
 
    if (ntab) ntab = ntab[0].firstChild;
    if (!ntab) return;
    if (dstitle.hasAttribute("title")) {
      text = dstitle.getAttribute("title");
    } else {
      text = dstitle.firstChild;
 
      while (text != null) {
        if (text.nodeType == Node.TEXT_NODE) {
          text = text.nodeValue;
          break;
        }
        text = text.firstChild || text.nextSibling || (text.parentNode != dstitle ? text.parentNode.nextSilbing : null);
      }
      if (typeof text != "string")
        return;
    }
 
    text = text.match("(?:tab:\\s*([^|]+)\\|?)?\\s*(?:title:\\s*(.+))?");
    if (text && text[1])
      ntab.nodeValue = text[1];
    if (!text || !text[2])
      return;
    title = document.getElementsByTagName("h1");
    for (var i = 0; i < title.length; i++) {
      if (hasClass(title[i], "firstHeading") || hasClass(title[i], "pagetitle")) {
        titlename = title[i].firstChild;
        while (titlename != null) {
          if (titlename.nodeType == Node.TEXT_NODE) {
            titlename.nodeValue = text[2];
            return;
          }
          titlename = titlename.firstChild || titlename.nextSibling || (titlename.parentNode != title[i] ? titlename.parentNode.nextSilbing : null);
        }
        break;
      }
    }
  }
}
 
$(change_displaytitle);
