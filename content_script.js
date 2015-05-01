console.log("foo");
walk(document.body);

/** 
 * http://is.gd.mxZp7E
 * https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js
 */
function walk(node) {
    var child, next;

    switch (node.nodeType) {
        case Node.ELEMENT_NODE:
        case Node.DOCUMENT_NODE:
        case Node.DOCUMENT_FRAGMENT_NODE:
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case Node.TEXT_NODE:
            handleText(node);
            break;
    }
}

function handleText(textNode) {
    var v = textNode.nodeValue;

    v = v.replace(/\bLadies and gentlemen\b/g, "Ladies and gentlemen. . . and Tim");
    v = v.replace(/\bladies and gentlemen\b/g, "ladies and gentlemen. . . and Tim");

    textNode.nodeValue = v;
}
