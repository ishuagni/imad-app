var counter = document.getElementById('counter');
var c = 0;
counter.onclick = function() {
    var count = document.getElementById('count');
    c += 1;
    count.innerHtml = c.toString();
};