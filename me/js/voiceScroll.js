var targetId = ["home", "projects"];
if (annyang) {
    var binaryblood = function(target) {
            console.log(target);
            var len = targetId.length;
            for (var i = 0; i < len; i++) {
              if (targetId[i] == target) {
                var elm = document.getElementById(target);
                console.log(target);
                elm.scrollIntoView(true);
                break;
              }
            }
          }
          var abt = function() {
            // alert('Hello to you too VISITOR');
            // document.getElementById('hidden-hello').style.display='flex';
            var msg = new SpeechSynthesisUtterance();
            msg.text = "Hi,I am Yatharth Taneja, Undergrad Student, currently pursuing BTech in Computer Science and Design from Indraprastha Institute of Information Technology , Delhi.";
            window.speechSynthesis.speak(msg);
          }

    var helloer = function() {
            // alert('Hello to you too VISITOR');
            document.getElementById('hidden-hello').style.display='flex';
            var msg = new SpeechSynthesisUtterance();
            msg.text = "Hello!";
            window.speechSynthesis.speak(msg);
            setTimeout(function(){ 
            document.getElementById('hidden-hello').style.display='none'; 
              }, 5000);
          }
  var bye = function() {
    // alert('Hello to you too VISITOR');
    document.getElementById('hidden-hello').style.display='flex';
    var msg = new SpeechSynthesisUtterance();
    msg.text = "goodbye!";
    window.speechSynthesis.speak(msg);
    setTimeout(function(){ 
    document.getElementById('hidden-hello').style.display='none'; 
      }, 5000);
  }
  var gm = function() {
    // alert('Hello to you too VISITOR');
    document.getElementById('hidden-morning').style.display='flex';
    var msg = new SpeechSynthesisUtterance();
    msg.text = "Good Morning!";
    window.speechSynthesis.speak(msg);
    setTimeout(function(){ 
    document.getElementById('hidden-morning').style.display='none'; 
      }, 5000);
  }
  var gn = function() {
    // alert('Hello to you too VISITOR');
    document.getElementById('hidden-moon').style.display='flex';
    var msg = new SpeechSynthesisUtterance();
    msg.text = "Good Night!";
    window.speechSynthesis.speak(msg);
    setTimeout(function(){ 
    document.getElementById('hidden-moon').style.display='none'; 
      }, 5000);
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
    var roblox = function() {
      window.open("https://www.roblox.com/games/5435169797/IIITD-Phase-1")
    }
    var bold = function() {
      window.open("https://www.behance.net/gallery/98429045/BOLD-Playing-Cards")
    }
    var streambubble = function() {
      window.open("https://yatharthtaneja.github.io/streamBubble/")
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
      'hello': helloer,
      'namaste': namaste1,
      'show me design projects': op,
      'behance': op,
      'show me CS projects':op2,
      'github': op2,
      'good morning': gm,
      'good night': gn,
      'bye': bye,
      'good bye': bye,
      'see you': bye,
      'roblox': roblox,
      'stream bubble': streambubble,
      'bold': bold,
      'tell me about yourself': abt,
      'who are you': abt


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