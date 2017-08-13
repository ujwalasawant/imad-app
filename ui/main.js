console.log('Loaded!');

var counter=0;

var button=document.getElementById("counter");
button.onClick=function(){
    debugger;
    counter=counter+1;
    var count=document.getElementById("count");
    
    count.innerHtml=counter.toString();
}