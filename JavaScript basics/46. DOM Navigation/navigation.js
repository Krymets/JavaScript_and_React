console.log(document.body);
console.log(document.head);
console.log(document.documentElement);
console.log(document.body.childNodes); // all nodes
console.log(document.body.firstChild); // first node
console.log(document.body.lastChild); // last node

console.log(document.body.firstElementChild); // first element
console.log(document.body.lastElementChild); // last element

console.log(document.querySelector('#current').parentNode); // parent node
console.log(document.querySelector('#current').parentNode.parentNode); // parent parent node

console.log(document.querySelector('[data-current="3"]').nextSibling); // next neighbor node
console.log(document.querySelector('[data-current="3"]').previousSibling); // previous neighbor node

console.log(document.querySelector('[data-current="3"]').nextElementSibling); // next neighbor element
console.log(document.querySelector('[data-current="3"]').previousElementSibling); // previous neighbor element

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}
