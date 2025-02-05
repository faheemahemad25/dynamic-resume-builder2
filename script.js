  
if (window.matchMedia('(max-width: 768px)').matches) { 
    
// Stop event propagation.   when child click then parent eventlistner runs. so we dont want when child click then parent event fires.
resumeCategoryMenu.addEventListener('click',(e)=>{
   e.stopPropagation();
})

setInterval(() => {
    slidexController(1); 
}, 20888800);oScrollMove();
},4000)

// Hide all cards initially
// 📗🔖
for(let card of cards){
    count = count + numb;
    console.log(count);
   
    
    if(count === cards.length){    
      count = 0;
    }

    if(count < 0){
        count = cards.length-1;
    }
    
slideControllerY(count)














  





