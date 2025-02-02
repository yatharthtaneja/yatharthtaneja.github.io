function addHoverEffect(imgElement, gifSrc, imgSrc) {
  imgElement.addEventListener('mouseover', function() {
    imgElement.src = gifSrc;
  });

  imgElement.addEventListener('mouseout', function() {
    imgElement.src = imgSrc;
  });
}

// Initialize hover effects for images
document.addEventListener('DOMContentLoaded', function() {
  const khayaalImage = document.getElementById('khayaalImage');
  addHoverEffect(khayaalImage, 'assets/banners/khayaal-gif.gif', 'assets/banners/Khayaal-image.png');
  const shutterBiteImage = document.getElementById('shutterBiteImage');
  addHoverEffect(shutterBiteImage, 'assets/banners/ShutterBite.gif', 'assets/banners/ShutterBite.png');
  const kathputliImage = document.getElementById('kathputliImage');
  addHoverEffect(kathputliImage, 'assets/banners/Kathputli.gif', 'assets/banners/Kathputli.png');
  const kawachImage = document.getElementById('kawachImage');
  addHoverEffect(kawachImage, 'assets/banners/Kawach.gif', 'assets/banners/Kawach.png');
  const ankahaiImage = document.getElementById('ankahaiImage');
  addHoverEffect(ankahaiImage, 'assets/banners/Ankahai.gif', 'assets/banners/Ankahai.png');
  const eksoITImage = document.getElementById('eksoITImage');
  addHoverEffect(eksoITImage, 'assets/banners/EksoIT.gif', 'assets/banners/EksoIT.png');


});