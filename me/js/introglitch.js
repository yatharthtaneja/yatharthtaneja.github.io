// opensource library : https://github.com/hmongouachon/rgbKineticSlider

const images = ["img/yatharth2.png", "img/yatharth-sketch2.png"];
const texts = [["", "Yatharth Taneja"], ["","@Yath_art_h"]];

rgbKineticSlider = new rgbKineticSlider({
    slideImages: images,
    itemsTitles: texts,

    backgroundDisplacementSprite:
        "img/map-9.jpg",
    cursorDisplacementSprite:
        "img/displace-circle.png",
    cursorScaleIntensity: 0.6,
    cursorMomentum: 0.14,
    cursorTextEffect : true, 
    swipe: true,
    swipeDistance: window.innerWidth * 0.4,
    swipeScaleIntensity: 2,

    slideTransitionDuration: 0.8,
    transitionScaleIntensity: 30,
    transitionScaleAmplitude: 160,

    nav: true,
    navElement: ".main-nav",

    imagesRgbEffect: true,
    imagesRgbIntensity: 0.9,
    navImagesRgbIntensity: 120,

    textsDisplay: true,
    textTitleSize: 100,
    textsTiltEffect: true,
    textsSubTitleDisplay : true, // show subtitles

    textTitleColor : '0x87C232',
    googleFonts: ["Raleway: 200",'Krona One:400'],
    textsRgbEffect: true,
    textsRgbIntensity: 1,
    textTitleLetterspacing : 90,
    textSubTitleSize : 100, // subtitle size
    mobileTextSubTitleSize : 21, // mobile subtitle size
    textSubTitleLetterspacing : 2, // subtitle letter spacing
    mobileTextSubTitleOffsetTop : 90, // mobile subtitle offset top
});