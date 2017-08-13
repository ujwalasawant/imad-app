console.log('Loaded!');



var button=document.getElementById("counter");
button.onclick=function(){
  
  var req=new XMLHttpRequest();
  
  req.onreadtstatechange=function()
  {
      if(req.readyState===XMLHttpRequest.DONE)
      {
          if(req.status===200)
          {
                var counter=req.responseText;
                var count=document.getElementById("count");
                console.log(counter);  
                count.innerHTML=counter.toString();
          }
      }
  };
  
  req.open("GET","http://ujwala1512.imad.hasura-app.io/counter",true);
  req.send(null);
   
}