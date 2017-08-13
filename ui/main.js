console.log('Loaded!');

var counter=0;

var button=document.getElementById("counter");
button.onclick=function(){
   alert("Hello");
    counter=counter+1;
    var count=document.getElementById("count");
    
    count.innerHtml=counter.toString();
}