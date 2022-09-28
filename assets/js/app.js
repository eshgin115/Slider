var left=document.querySelector('#left');
var right =document.querySelector('#right');
var section=document.querySelector('.section')
var div=document.createElement('div')
div.className='span-block'
section.appendChild(div)
// right.onclick=function(){

// }


var SliderImages=[
   "assets/Image/2-imgdinosaurs_base.jpg",
    "assets/Image/c8.jpg",
    "assets/Image/c8.jpg",
    "assets/Image/2-imgdinosaurs_base.jpg"
]
var img =document.querySelector('.section img')
img.src = SliderImages[0];
var index=0
var count=0;
right.onclick=function(){
    img.src=SliderImages[index]
    if(index>=SliderImages.length-1){
        index=0;
        
    }else{
        index++;
        if(count<=0){
            var text =document.createElement('span')
            text.id=index;
            text.innerHTML=`${'.'}`
            div.appendChild(text);
            text.addEventListener('click', ()=>{
                img.src=SliderImages[text.id-1]
            })
            // console.log(text);
        }
        if(index==3){
            count++;
        }
        
    }   

}
left.onclick=function(){
    img.src=SliderImages[index]
    if(index<=0){
        index=SliderImages.length-1
    }
    else{
        index--;
    }
}

