// =============================================================================================== 
//  header nav Section 
// ================================================================================================ 

// ----- mobile nav bar --------
var barIcon = document.querySelector('.bar-icon');
const mobileNavBar = document.querySelector('.mobile-navBar')

barIcon.addEventListener('click', ()=>{

    if(barIcon.classList.contains('fa-xmark')){ //NOTE: it runs second time. means elifse part runs second time need.
        barIcon.classList.remove('fa-xmark')
        mobileNavBar.classList.add('hidden');
    }else{ //📗🔖NOTE: first time it runs. means else part runs firstly.
        barIcon.classList.add('fa-xmark') //REMEMBER📗🔖📗🔖 we remove fa-bars indirectly meaas add fa-xmark now show X mark. we explicity didnt remive() baricon just add another fa-xmark this class.
        mobileNavBar.classList.remove('hidden');

    }

})

// this is tempory solution bcz new page dont have and same page when mobile not go feel
function movetoDestination(){
    mobileNavBar.classList.add('hidden');
    barIcon.classList.remove('fa-xmark')
}

// ----- mobile nav bar category opend --------

const resumeCategoryIsopened = document.querySelector('.resumeCategoryIsopened');
const resumeCategoryMenu = document.querySelector('.resumeCategoryMenu');

resumeCategoryIsopened.addEventListener('click', (e)=>{
    
    // resumeCategoryMenu.classList.toggle('hidden') OR
    if(resumeCategoryMenu.classList.contains('hidden')){
        resumeCategoryMenu.classList.remove('hidden') // here if runs firstly.
    }else{
        resumeCategoryMenu.classList.add('hidden')
    }
})

// 📗🔖📗🔖 Stop event propagation.   when child click then parent eventlistner runs. so we dont want when child click then parent event fires.
resumeCategoryMenu.addEventListener('click',(e)=>{
   e.stopPropagation();
})


// ----- active nav link or active tab --------

// let navMenus = document.querySelectorAll('.activeTab')
// console.log("navMenus",navMenus);

// navMenus.forEach(navMenu =>{
//     navMenu.addEventListener('click', (e)=>{
//         navMenus.forEach(nvMn=>{
//             nvMn.classList.remove('activeNav')
//         });
//         navMenu.classList.add('activeNav'); //OR📗🔖e.target to directly reference the clicked element. which element is clicked.
//     })
// });






//  =============================================================================================== 
// Resume Templates Slider section
// ================================================================================================ 
//📗🔖📗🔖 matchMedia() method of window object  used to media queries in js
let scrollContainer = document.querySelector('.templatesDesign-wrapper')
const nextButton = document.querySelector('.nextBtn')
const backButton = document.querySelector('.backBtn')

nextButton.addEventListener('click', ()=>{
    const scrollAmount = scrollContainer.offsetWidth;
    console.log(scrollAmount); 
     
    //🔖📗  ----------- resoinsive js -------------
    if (window.matchMedia('(max-width: 768px)').matches) { 
        // scrollContainer.scrollLeft = scrollContainer.scrollLeft + scrollAmount / 1;     OR
        scrollContainer.scrollLeft = scrollContainer.scrollLeft + scrollAmount * 97 / 100; // 97% i moved so next can visible.  
    }else{
        scrollContainer.scrollLeft = scrollContainer.scrollLeft + scrollAmount / 4; //🔖📗 firstly and mainly this execute after reaching at last then if condition line of code execute.
    } 

    //🔖📗  ----------- normal js -------------
    // scrollContainer.scrollLeft = scrollContainer.scrollLeft + scrollAmount / 1;
    // scrollContainer.scrollLeft = scrollContainer.scrollLeft + scrollAmount / 4;
    // 100% / 4 = 25% scroll move.
    //📗🔖 += operator 2nd time real usecase. f1st time see in string concat.(resume templat form data into resume design)
    
})

backButton.addEventListener('click', ()=>{
    const scrollAmount = scrollContainer.offsetWidth;
    console.log(scrollAmount);
    //🔖📗  ----------- resoinsive js -------------
    if (window.matchMedia('(max-width: 768px)').matches) {
        // scrollContainer.scrollLeft = scrollContainer.scrollLeft - scrollAmount / 1;     OR 
        scrollContainer.scrollLeft = scrollContainer.scrollLeft - scrollAmount * 97 / 100; // 97% i moved so next can visible. 
    }else{
        scrollContainer.scrollLeft = scrollContainer.scrollLeft - scrollAmount / 4; //🔖📗 firstly and mainly this execute after reaching at last then if condition line of code execute.
    } 

    //🔖📗  ----------- normal js -------------
     // scrollContainer.scrollLeft = scrollContainer.scrollLeft + scrollAmount / 1;
     // scrollContainer.scrollLeft = scrollContainer.scrollLeft - scrollAmount / 4;
    // 100% / 4 = 25% scroll move.
    // += operator 2nd time real usecase. 
    
})

//Problem:  scrollContainer.scrollLeft is not reaching greather than totalScrollLeft thats why not begining work. 
function autoScrollMove() {
    const scrollAmount = scrollContainer.offsetWidth;
    console.log("scrollAmountttttttttttttt",scrollAmount);
    const totalScrollLeft = scrollContainer.scrollWidth - scrollAmount; //📗🔖.scrollWidth js property represents the total width of an element's content, including the parts that are not visible due to overflow. It essentially tells you the full width of the scrollable content inside an element.
    console.log("maxxxxxxxxxxScrollLeffffffffffffft",totalScrollLeft);

    console.log("scrollContainer.scrollLeft",scrollContainer.scrollLeft);
    
    
    if (scrollContainer.scrollLeft >= totalScrollLeft) {
          scrollContainer.scrollLeft = 0; // Reset to the beginning
    } else{
        // ----------- normal js before-------------
        // scrollContainer.scrollLeft = scrollContainer.scrollLeft + scrollAmount / 4;
        // scrollContainer.scrollLeft = scrollContainer.scrollLeft + scrollAmount / 1;

        // ----------- responsive js now-------------
        if (window.matchMedia('(max-width: 768px)').matches) {
            // scrollContainer.scrollLeft = scrollContainer.scrollLeft + scrollAmount / 1;
            scrollContainer.scrollLeft = scrollContainer.scrollLeft + scrollAmount * 97 / 100;
        }else{
            scrollContainer.scrollLeft = scrollContainer.scrollLeft + scrollAmount / 4; //🔖📗 firstly and mainly this execute after reaching at last then if condition line of code execute.

        }    
    }
}
setInterval(()=>{
    autoScrollMove();
},4000)









//  =============================================================================================== 
// Template-Categories Section 
// ================================================================================================ 

// document.getElementById('defaultCategory').click()

let displayCategory=(categoryName)=>{
    let AllCategories = document.querySelectorAll('.category')

    AllCategories.forEach((category)=>{
        category.style.display="none";
    })

    // document.getElementById(categoryName).style.display="block"; // to be show 
    document.getElementById(categoryName).style.display="flex"; //🔖📗
    
}
displayCategory('All-templates'); //🔖📗 Trigger the default category display instead of giving default


// ----- active tab --------

const filterstabs = document.querySelectorAll('.templates-categories-filters button')
console.log(filterstabs);

filterstabs.forEach(tb=>{
    console.log(tb);
    tb.addEventListener('click', (e)=>{  //📗🔖forEach() method itself does not "wait" for each clicks— but foreach() just sets up the event listeners for all buttons.
        filterstabs.forEach(tab=>{
            tab.classList.remove('active')
        });
        tb.classList.add('active'); //OR 📗🔖e.target to directly reference the clicked element. which element is clicked.
    })
    
    
});

// =============================================================================================== 
// Testimonial section 
// ================================================================================================ 
const cards = document.querySelectorAll('.review-Card')

// Hide all cards initially
// 📗🔖
for(let card of cards){
    card.style.display="none";
};

 let count = 0;

 let slideController=(numb)=>{
    
    //📗🔖 hide the element
    // 👇this is for second time array runs -> its purpose when first time then in array we adds block then that block again cannot show that why.
    cards[count].style.display = "none"; 
    // or
    // cards[count].style.opacity = '0';
    
    //📗🔖 remove class active named 
    // 👇this is for second time array runs ->   its purpose is after first array  completed that add class and exist always already thats why second time transform not feel like worling.
    cards[count].classList.remove('active');
    

    count = count + numb;
    console.log(count);
   
    
    if(count === cards.length){    
      count = 0;
    }

    if(count < 0){
        count = cards.length-1;
    }
    
    
    //  add class 
     setTimeout(()=>{
        cards[count].classList.add('active'); 
    }, 100) //📗🔖The 100ms is often chosen because it's short enough to be imperceptible to users but long enough to ensure the transition works as intended. It's not a fixed rule—you could adjust this value based on your specific use case and CSS transition timings.
    
    // show the element
    cards[count].style.display = "block"; 
    // or
    // cards[count].style.opacity = '1';   
}

slideController(count)


//📗🔖 function run automatically like in css animation and @keyframes{} same in javascript setInterval()
setInterval(() => {
    slideController(1); 
}, 2000);



//  =============================================================================================== 
// FAQ section
// ================================================================================================ 

const faqwrappers = document.querySelectorAll('.faq-wrapper')
// const answereEl = document.querySelector('.answere')

faqwrappers.forEach(faqwrapper=>{
    faqwrapper.addEventListener('click', function(){
        const ansEle = faqwrapper.querySelector('.answere')
        const iconEle = faqwrapper.querySelector('.icon')
        
        if(ansEle.classList.contains('active')){
            ansEle.classList.remove('active') 
            iconEle.classList.remove('iconActive') 
        }else{
            ansEle.classList.add('active')
            iconEle.classList.add('iconActive')
        }
    })
})








  





