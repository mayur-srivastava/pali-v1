var clearChildrenAndGet = function(name) {
	var node = document.getElementById(name);
	while (node.firstChild) {
		node.removeChild(node.firstChild);
	}
	return node;
}
