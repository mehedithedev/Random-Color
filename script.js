// Change if user click over the button
let changes=document.querySelector("button")
changes.addEventListener("click", function(){
// Producing random color palate:
   let r= Math.floor(Math.random()*255)
   let g= Math.floor(Math.random()*255)
   let b= Math.floor(Math.random()*255)
   let a= Math.floor(Math.random()*255)
   let c= Math.floor(Math.random()*255)
   let d= Math.floor(Math.random()*255)

// Change the background color randomly
   let newColor= `rgb(${r},${g},${b})`
   document.body.style.backgroundColor=newColor
// Change the color of the heading randomly
   let heading_color=`rgb(${d},${r},${a})`
   document.querySelector("h1").style.color=heading_color
// Change the color of the sub-heading randomly
   let subHeadColor=`rgb(${b}, ${g}, ${c})`
   document.querySelector('h2').style.color=subHeadColor
// Change the button color randomly
   let btnColor=`rgba(${a}, ${c}, ${g})`
   document.querySelector("button").style.backgroundColor=btnColor
// Change the font color of the button randomly
   let fontBtn=`rgb(${d},${a},${r})`
   document.querySelector("button").style.color=fontBtn
})


