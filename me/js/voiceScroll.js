var targetId = ["home", "project"];
if (annyang) {
    var binaryblood = function(target) {
            console.log(target);
            var len = targetId.length;
            for (var i = 0; i < len; i++) {
              if (targetId[i] == target) {
                var elm = document.getElementById(target);
                console.log(target);
                // var currx = window.screenX;
                // $(window).scrollTop($('#projects').offset().top);
                // elm.scrollIntoView({behaviour: 'smooth' , block: 'top'});
                elm.scrollIntoView(true);
                break;
              }
            }
          }

    var helloer = function() {
            alert('Hello to you too VISITOR');
          }
    var namaste1 = function() {
      // alert('namaste');
      document.getElementById('hidden-namaste').style.display='flex';
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Namastey!";
      window.speechSynthesis.speak(msg);
      setTimeout(function(){ 
      document.getElementById('hidden-namaste').style.display='none';

        
        }, 5000);
    }
    var op = function() {
      window.open("https://www.behance.net/yath_art_h")
    }
    var op2 = function() {
      window.open("https://github.com/yatharthtaneja/")
    }

   var op3 = function() {
     var msg = new SpeechSynthesisUtterance();
    msg.text = "Hey!";
    window.speechSynthesis.speak(msg);
  }
    var pause = function() {
      annyang.pause(); 
      document.getElementById('speechStatus').innerHTML = "MIC has been turned OFF, audio commands not being accepted";
    }

    var resume = function() {
      annyang.resume();
      document.getElementById('speechStatus').innerHTML = "MIC has been turned ON, auido commands are accepted";
    }

    var commands = {
      'go to *target': binaryblood,
      'hello': op3,
      'namaste': namaste1,
      'show me design projects': op,
      'behance': op,
      'show me CS projects':op2,
      'github': op2


    };

    // annyang.debug();
    annyang.addCommands(commands);
    annyang.start();
}
if ('speechSynthesis' in window) {
  console.log('Speech recognition supported 😊');
  // code to handle recognition here
} else {
  console.log('Speech recognition not supported 😢');
  // code to handle error
}
// var pauseBtn = function() {
//   annyang.pause(); 
//   document.getElementById('speechStatus').innerHTML = "MIC has been turned OFF, audio commands not being accepted";
// }

// var resumeBtn = function() {
//   annyang.resume();
//   document.getElementById('speechStatus').innerHTML = "MIC has been turned ON, auido commands are accepted";
// }