function changeBg(){
  var x=window.scrollY;
  var jsnav=document.getElementById('jsnavbar');
  var js1=document.getElementById('link1');
  var js2=document.getElementById('link2');
  var js3=document.getElementById('link3');
  var js4=document.getElementById('link4');
  var navImage=document.getElementById('image-nav');
  var image=document.getElementById('main-image1');
 

  if(x<250){
    jsnav.classList.remove('navjs');
    jsnav.classList.add('navjs1');
    js1.classList.add('link-color');
    js1.classList.remove('link-black');
    js2.classList.add('link-color');
    js2.classList.remove('link-black');
    js3.classList.add('link-color');function changeBg(){
      var x=window.scrollY;
      var jsnav=document.getElementById('jsnavbar');
      var js1=document.getElementById('link1');
      var js2=document.getElementById('link2');
      var js3=document.getElementById('link3');
      var js4=document.getElementById('link4');
      var navImage=document.getElementById('image-nav');
      var image=document.getElementById('main-image1');
      var menucolor=document.getElementById('menu-color-bar');
     console.log(menucolor)
      if(x<50){
        jsnav.classList.remove('navjs');
        jsnav.classList.add('navjs1');
        js1.classList.add('link-color');
        js1.classList.remove('link-black');
        js2.classList.add('link-color');
        js2.classList.remove('link-black');
        js3.classList.add('link-color');
        js3.classList.remove('link-black');
        js4.classList.add('link-color');
        js4.classList.remove('link-black');
        navImage.classList.remove('navbar-image2');
        image.classList.remove('main-image');
        menucolor.style.color="white";
      }
      else{
        jsnav.classList.add('navjs');
        jsnav.classList.remove('navjs1');
        js1.classList.remove('link-color');
        js1.classList.add('link-black');
        js2.classList.remove('link-color');
        js2.classList.add('link-black');
        js3.classList.remove('link-color');
        js3.classList.add('link-black');
        js4.classList.remove('link-color');
        js4.classList.add('link-black');
        navImage.classList.add('navbar-image2');
        image.classList.add('main-image');
        menucolor.style.color="black";
      }
    }
    
    window.addEventListener('scroll',changeBg)
    
    
    js3.classList.remove('link-black');
    js4.classList.add('link-color');
    js4.classList.remove('link-black');
    navImage.classList.remove('navbar-image2');
    image.classList.remove('main-image');
  }
  else{
    jsnav.classList.add('navjs');
    jsnav.classList.remove('navjs1');
    js1.classList.remove('link-color');
    js1.classList.add('link-black');
    js2.classList.remove('link-color');
    js2.classList.add('link-black');
    js3.classList.remove('link-color');
    js3.classList.add('link-black');
    js4.classList.remove('link-color');
    js4.classList.add('link-black');
    navImage.classList.add('navbar-image2');
    image.classList.add('main-image');
  }
}

window.addEventListener('scroll',changeBg)

