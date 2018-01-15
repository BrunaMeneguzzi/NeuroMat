function add_user_tab(url, name, id)
{
  if (mw.config.get('skin') !== "monobook") return;
 
  var na = document.createElement('a').appendChild(document.createTextNode(name)).parentNode;
  na.setAttribute('href', url);
 
  var li = document.createElement('li').appendChild(na).parentNode;
  if (id) li.id = id;
 
  var c1 = document.getElementById('column-one');
  var tabs = c1.getElementsByTagName('div')[0].getElementsByTagName('ul')[0];
  tabs.appendChild(li);
}
 
function add_all_tabs()
{
  if (mw.config.get('wgNamespaceNumber') != 2 && mw.config.get('wgNamespaceNumber') != 3) return;
 
  var username = mw.config.get('wgTitle').split("/")[0];
  var project = mw.config.get('wgServer').replace("http://", "");
 
  add_user_tab('http://tools.wikimedia.de/~daniel/WikiSense/UntaggedImages.php?wiki=' + project + '&img_user_text=' + username , 'untagged', 'ca-untagged');
}
 
$(add_all_tabs);
