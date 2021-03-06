
  $(".project-1").mouseenter(function() {
      // var tag = document.getElementById('sketch-container');
      // tag.src='img/IIITD.png'
  document.getElementById('sketch-container').style.display='block';
    }).mouseleave(function() {
  document.getElementById('sketch-container').style.display='none';
  });
    $(".project-2").hover(function() {
      // var tag = document.getElementById('image-move');
      // tag.src='img/weeknd.png'
  
      // console.log("heree")
    document.getElementById('set-card').style.display='block';


    }).mouseleave(function() {
  document.getElementById('set-card').style.display='none';

  });
    $(".project-3").hover(function() {

      var tag = document.getElementById('image-move');
      tag.src='img/IIITD.png'

  
      // console.log("heree")
    document.getElementById('image-move').style.display='block';
    document.getElementById('image-move').style.transform="translate(-20%,-30%)";
    }).mouseleave(function() {
  document.getElementById('image-move').style.display='none';
  document.getElementById('image-move').style.transform="translate(0%,0%)";
  });
    $(".project-4").hover(function() {
      // $(".project-preview").css({ "background-image": "url(img/yatharth.png)" });
      var tag = document.getElementById('image-move');
      tag.src='img/weeknd.png'
  
      // console.log("heree")
    document.getElementById('image-move').style.display='block';
    document.getElementById('image-move').style.transform="translate(-20%,-30%)";

    }).mouseleave(function() {
  document.getElementById('image-move').style.display='none';
  document.getElementById('image-move').style.transform="translate(0%,0%)";

  });

    // img.src = 'http://files.myopera.com/lengoc89/albums/317185/3133~Kitty-Posters.jpg';
    document.addEventListener('mousemove', function(e) {
      var tag = document.getElementById('image-move');

      tag.style.top = (e.pageY || e.clientY) + 'px';
      tag.style.left = (e.pageX ||  e.clientX) + 'px';
  
      let parentimage = document.getElementById("project-preview-wrapper");
      let projectimage = document.getElementById('project-preview');
      let left1 = parentimage.x;
      let top1 = parentimage.y;
      let left = e.pageX;
      let top = e.pageY;
      projectimage.style.left = left+ document.body.scrollLeft  -left1 + 'px';
      projectimage.style.top = top +document.body.scrollTop -top1 + 'px' ;
  
      
    });

    document.addEventListener('mousemove', function(e) {
      var tag = document.getElementById('sketch-container');

      tag.style.top = (e.pageY || e.clientY) + 'px';
      tag.style.left = (e.pageX ||  e.clientX) + 'px';
  
      let parentimage = document.getElementById("project-preview-wrapper");
      let projectimage = document.getElementById('project-preview');
      let left1 = parentimage.x;
      let top1 = parentimage.y;
      let left = e.pageX;
      let top = e.pageY;
      projectimage.style.left = left+ document.body.scrollLeft  -left1 + 'px';
      projectimage.style.top = top +document.body.scrollTop -top1 + 'px' ;
  
      
    });
  

  $(".info_image").mouseover(function(){
      $(this).attr('src',$(this).attr("src").replace("img/weeknd.png","img/WALLPAPER.png"));
  }).mouseout(function(){
    $(this).attr('src',$(this).attr("src").replace("img/WALLPAPER.png","img/weeknd.png"));

  })

  document.addEventListener("mousemove", e =>{
    gsap.to(".car",{
      x : e.clientX-120,
      y : e.clientY-80,
      stagger: -0.1
    })
  })