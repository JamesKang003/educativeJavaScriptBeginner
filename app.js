// Show a DOM object's child node
// "node" is the DOM object
// "index" is the index of the child node
//-------
// For Cases of Wrong node Type , return "Wrong Node Type" String
// For Cases of Incorrect Index, return "Wrong Index" String
// For Correct Cases, return the "nodeName" property of that node

function showChild(node, index) {
  //Write your code here
  if (!(node instanceof Element)) return "Wrong Node Type";
  var c = node.children;
  if (index < 0 || index >= c.length) return "Wrong Index";
  else {
    return node.childNodes[index].nodeName;
  }
}
