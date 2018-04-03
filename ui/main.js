var counter = document.getElementById('counter');

counter.onclick = function() {
    var request = new XMLHttpRequest();
    
    request.onreadyStateChange = function(){
        if(request.readyState === DONE){
            if(request.status === 200){
                var c = request.responseText();
                var count = document.getElementById('count');
                count.innerHtml = c.toString();
            }
        }
    };
    request.open('GET','http://ishuagnihotri20.imad.hasura-app.io/counter',true);
    request.send();
};