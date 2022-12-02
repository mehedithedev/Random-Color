
// Change if user hover over the button
let changes=document.querySelector("button")
changes.addEventListener("click", function(){
   let r= Math.floor(Math.random()*255)
   let g= Math.floor(Math.random()*255)
   let b= Math.floor(Math.random()*255)
   let a= Math.floor(Math.random()*255)
   let c= Math.floor(Math.random()*255)
   let newColor= `rgb(${r},${g},${b})`
   document.body.style.backgroundColor=newColor
// Change the color of the heading randomly
   let heading_color=`rgb(${g},${r},${a})`
   document.querySelector("h1").style.color=heading_color
// Change the color of the sub-heading randomly
   let subHeadColor=`rgb(${b}, ${g}, ${c})`
   document.querySelector('h2').style.color=subHeadColor
// Change the button color randomly
   let btnColor=`rgba(${a}, ${c}, ${g})`
   document.querySelector("button").style.backgroundColor=btnColor
})

// Change if user click on the button

