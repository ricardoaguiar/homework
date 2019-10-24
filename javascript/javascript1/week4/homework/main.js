console.log('voice assistant');





// let response = window.speechSynthesis;



if ('speechSynthesis' in window) {
    var synthesis = window.speechSynthesis;
    
    var langRegex = /^en(-[a-z]{2})?$/i;
    var voices = synthesis.getVoices().filter(voice => langRegex.test(voice.lang));

    voices.forEach(function(voice) {
        console.log({
          name: voice.name,
          lang: voice.lang,
          uri: voice.voiceURI,
          local: voice.localService,
          default: voice.default
        })
      });

      var voice = synthesis.getVoices().filter(function(voice) {
        return voice.lang === 'en';
      })[0];
    
   
          var utterance = new SpeechSynthesisUtterance('Hi');  

      
      // Create an utterance object
    
      // Set utterance properties
      utterance.voice = voice;
      utterance.pitch = 1.5;
      utterance.rate = 1.25;
      utterance.volume = 0.8;
    
      // Speak the utterance
      synthesis.speak(utterance);
    

  } else {
    console.log('Text-to-speech not supported.');
  }




if (command == 'Hello my name is Benjamin', "Agnes", {rate: 0.5, pitch: 2}) {
    response.speak = 'Nice to meet you Benjamin';
} else if (command == 'What is my name?') {
    response.speak = 'Your name is Bejamin';
}
}

/*
$('#queen').on('click', function(){
    responsiveVoice.speak("well, pip pip, come along now or, by jove, i dare say we'll have upset the jollyhockey-sticks", "UK English Male", {rate: 0.5, pitch: 2});
  })
  
  $('#australia').on('click', function(){
    responsiveVoice.speak("fancy a sausage roll and a breky pie with tomato sauce on our way to the footie match?", "Australian Female", { pitch: 0.2, rate: 0.5});
  })

*/

console.log(getReply('Hello my name is Benjamin')); // "Nice to meet you benjamin"
console.log(getReply('What is my name?')); // "Your name is Benjamin"
// console.log(getReply('Add Bike ride the 3/5-2019 to my calendar')); // "Bike ride added to your calendar"


//create a function called getReply(command)

function getReply(command) {
    console.log(command);


//the function should return a response that correspond to the commands:

const cmds = ['Hello my name is Benjamin', 
                'What is my name', 
                'Add fishing to my todo',
                'Add singing in the shower to my todo',
                'Remove fishing from my todo',
                'What is on my todo?',
                'What day is it today?',
                'My favorite dish is lasagne',
                'What is my favorite dish',
                'Set a timer for 4 minutes',
                'Add Bike ride the 3/5/2019 to my calendar',
                'What am I doing this week?',
                'What are you learning now?'
            ];

