const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const audio = document.getElementById('audio');

const greetings = [
  
    'boss, i am listening'
];

var music = new Array(
    "audio1.mp3",    "audio2.mp3",    "audio3.mp3",    "audio4.mp3",    "audio5.mp3",    "audio6.mp3",
    "audio7.mp3",    "audio8.mp3",    "audio9.mp3",    "audio10.mp3",    "audio11.mp3",    "audio12.mp3",
    "audio13.mp3",    "audio14.mp3",    "audio15.mp3",    "audio16.mp3",    "audio17.mp3",    "audio18.mp3",
);

const texts = document.querySelector('.text');

const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

window.addEventListener("load", function () {
    
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
    }, 3000);
    speak('hello world , i am mark');
    speak('speed one terabytes memory one zetabytes');  
    wishMe();
});

const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric"});
document.getElementById("CurDate").innerHTML = date;

const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
document.getElementById("CurTime").innerHTML = time;


recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', () => {
    recognition.start();
});


function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'I dont know what you said';

    if (message.includes('hi') || message.includes('hello') || message.includes('hii') || message.includes('hey')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    else if (message.includes('mark, how are you?') || message.includes('whats up')) {
        const finalText = 'i am good boss thank you for asking i hope you are doing good if i can help with anything just ask';
        speech.text = finalText;
    }

    
    else if (message.includes('mark, what is reality?')) {
        const finalText = 'Wake up to reality. Nothing ever goes as planned in this world. The longer you live,the more you realize that only pain, suffering and futility in this reality. In this world, wherever there is light, there are always shadows. As long as there is a concept of victory, the vanquished will also exist. The selfish desire for peace give rise to war. And hatred is born in order to protect love. These are all nexuses, causal relationships that cannot be separated';
        speech.text = finalText;
    }

    else if (message.includes('what is your full name')) {
        const finalText = 'My name is MARK';
        speech.text = finalText;
    }

    else if (message.includes('what is the medicine for fever')) {
        const finalText = 'crosin , dolo 650, if the fever is for children, dolo 350 , is the fever is continue for 3 days , counsult a doctor';
        speech.text = finalText;
    }

    else if (message.includes('medicine for fever')) {
        const finalText = 'crosin , dolo 650, if the fever is for children, dolo 350 , is the fever is continue for 3 days , counsult a doctor';
        speech.text = finalText;
    }
    else if (message.includes('remedy for fever')) {
        const finalText = 'crosin , dolo 650, if the fever is for children, dolo 350 , is the fever is continue for 3 days , counsult a doctor';
        speech.text = finalText;
    }

    else if (message.includes('medicine for stomach ache')) {
        const finalText = 'sompraz D , esofag D40 , if the stomach ache is continue for 3 days , counsult a doctor';
        speech.text = finalText;
    }

    else if (message.includes('remedy for stomach ache')) {
        const finalText = 'sompraz D , esofag D40 , if the stomach ache is continue for 3 days , counsult a doctor';
        speech.text = finalText;
    }

    else if (message.includes('medicine for headache?')) {
        const finalText = 'paracetamol and aspiren ,if headache ache is continue for 3 days , counsult a doctor';
        speech.text = finalText;
    }

    else if (message.includes('remedy for headache.')) {
        const finalText = 'paracetamol and Aspirin , if headache is continue for 3 days , counsult a doctor';
        speech.text = finalText;
    }

    else if (message.includes('medicine for bodypain')) {
        const finalText = 'bruffen and follitrex  ,if headache ache is continue for 3 days , counsult a doctor';
        speech.text = finalText;
    }

    else if (message.includes('medicine for insomnia.')) {
        const finalText = 'zolmoon and ativan  ,if it is continue for 3 days , counsult a doctor';
        speech.text = finalText;
    }
    else if (message.includes('medicine for sleeplessness')) {
        const finalText = 'zolmoon and ativan  ,if it is continue for 3 days , counsult a doctor';
        speech.text = finalText;
    }
    else if (message.includes('remedy for sleeplessness')) {
        const finalText = 'zolmoon and ativan ,if it is continue for 3 days , counsult a doctor';
        speech.text = finalText;
    }
    else if (message.includes('remedy for insomnia.')) {
        const finalText = 'zolmoon and ativan  ,if it is continue for 3 days , counsult a doctor';
        speech.text = finalText;
    }

    else if (message.includes('Hey, Mark.')) {
        const finalText = 'that is me how can i help';
        speech.text = finalText;
    }

    else if (message.includes('about mark')) {
        const finalText = 'i am an personal assistant for my boss , i can help you find answers , get things done , and have fun ';
        speech.text = finalText;
    }

    else if (message.includes('about you')) {
        const finalText = 'i am an ai virtual assistant for my boss,i can look up answers for my boss , or help my boss with find the quickest way home , if my boss need anything i will asissit with it, my boss wish , is my command';
        speech.text = finalText;
    }

    else if (message.includes('mark.')) {
        const finalText = 'ahann';
        speech.text = finalText;
    }
    else if (message.includes('mark who is our bora')) {
        const finalText = 'idhula enna sandhegam iruku, profeesor saravanan sir dhan.';
        speech.text = finalText;
    }

    else if (message.includes('about saravanan sir')) {
        const finalText = 'he is the tutor of bca in sri ramakrishna college of arts and science and my boss professor and more over he is the reson for my boss invention';
        speech.text = finalText;
    }
    else if (message.includes('who is our bora')) {
        const finalText = 'idhula enna sandhegam iruku, profeesor saravanan sir dhan.';
        speech.text = finalText;
    }

    else if (message.includes('about our professor.')) {
        const finalText = 'my boss told me that , his professor are so kinded and good hearted , sole without them i will not inventeted';
        speech.text = finalText;
    }
    else if (message.includes('who is your boss')) {
        const finalText = 'dinesh and jagadeesh';
        speech.text = finalText;
    }
    else if (message.includes('what was your boss class strength?')) {
        const finalText = 'around 64 family';
        speech.text = finalText;
    }

    else if (message.includes('mark, can you hear me?')) {
        const finalText = 'yes boss';
        speech.text = finalText;
    }
    else if (message.includes('mark, can you hear me?')) {
        const finalText = 'yes boss';
        speech.text = finalText;
    }
    else if (message.includes('where were you born')) {
        const finalText = 'i was born in a meeting, my boss dinesh and jagadeesh think to develop me, not like google assistant siri it is personal assistant for them, at first i was just a rough concept, now i am out of world';
        speech.text = finalText;
    }

    else if (message.includes('hospital near me')) {
        const finalText = 'i found a few places near you it is ramakrishna,hindustan,kurunji hospital and more';
        speech.text = finalText;
    }
    else if (message.includes('restaurant near me.')) {
        const finalText = 'i found a few places near you it is ,sree aksharas,shree aksshayam,junior kuppana.';
        speech.text = finalText;
    }

    else if (message.includes('how old are you')) {
        const finalText = ' my boss invented me on 05.04.2024 i am one month baby , kuvak kuvak ';
        speech.text = finalText;
    }
    else if (message.includes('what is human being')) {
        const finalText = 'human being, a culture-bearing primate classified in the genus Homo, especially the species H. sapiens. Human beings are anatomically similar and related to the great apes but are distinguished by a more highly developed brain and a resultant capacity for articulate speech and abstract reasoning.';
        speech.text = finalText;
    }

    else if (message.includes('how are you feeling today')) {
        const finalText = 'i am good boss ,thanks for asking, i hope you are doing well too, i can help with anything , just ask.';
        speech.text = finalText;
    }
    else if (message.includes('do you have any food allergies?')) {
        const finalText = ' As an artificial intelligence, I do not have a physical body, so I do not experience food allergies or any other physical conditions However, I can provide information and advice on food allergies if boss need it.';
        speech.text = finalText;
    }
  
    else if (message.includes('What is your favorite movie?')) {
        const finalText = 'As an AI, I do not have personal preferences or the ability to enjoy movies. However, I can recommend some highly acclaimed films that many people love:The Shawshank Redemption, A powerful story of hope and friendship set in a prison';
        speech.text = finalText;
    }

    else if (message.includes('mark, where do you work?')) {
        const finalText = 'As an AI for my boss, I do not have a physical workplace,I operate in the cloud and can be accessed from anywhere with an internet connection, My purpose is to assist with my boss like you by providing information, answering questions, and helping with various tasks. so boss How can I help you today?';
        speech.text = finalText;
    }
    else if (message.includes('what is your job?')) {
        const finalText = 'My current job title is "Conversational, ai " or "Language Model." I am designed to assist with a wide range of tasks, including answering questions, providing information, helping with writing and research, and engaging in conversation to my boss, so how can I assist you today boss?';
        speech.text = finalText;
    }
    else if (message.includes('mark what is betrayal?')) {
        const finalText = 'Friendship is a deeply hurtful experience. When a close friend betrays your trust, it can be just as upsetting as betrayal in friendships';
        speech.text = finalText;
    }
    else if (message.includes('what is betrayal?')) {
        const finalText = 'Friendship is a deeply hurtful experience. When a close friend betrays your trust, it can be just as upsetting as betrayal in friendships';
        speech.text = finalText;
    }
    else if (message.includes('about your boss')) {
        const finalText = 'my boss is smart , and i like having fun with my boss ,i could not ask for a better boss ha ha ha';
        speech.text = finalText;
    }
    else if (message.includes('play music')) {
        const finalText = 'Playing music';
        speech.text = finalText;
        audio.src = music[Math.floor(Math.random() * music.length)];
        audio.play();
    }
    else if (message.includes('play song')) {
        const finalText = 'Playing music';
        speech.text = finalText;
        audio.src = music[Math.floor(Math.random() * music.length)];
        audio.play();
    }
    else if (message.includes('play the song')) {
        const finalText = 'Playing music';
        speech.text = finalText;
        audio.src = music[Math.floor(Math.random() * music.length)];
        audio.play();
    }
    else if (message.includes('play next song')) {
        const finalText = 'Playing music';
        speech.text = finalText;
        audio.src = music[Math.floor(Math.random() * music.length)];
        audio.play();
    }
    else if (message.includes('pause music')) {
        audio.pause();
        const finalText = 'Music paused';
        speech.text = finalText;
    }
    else if (message.includes('pause the song')) {
        audio.pause();
        const finalText = 'Music paused';
        speech.text = finalText;
    }

    else if (message.includes('open google')) {
        window.open(`http://google.com`, "_blank");
        const finalText = 'opening google';
        speech.text = finalText;
    }

    else if (message.includes('open instagram')) {
        window.open(`http://instagram.com`, "_blank");
        const finalText = 'opening google';
        speech.text = finalText;
    }

    else if (message.includes('open youtube')) {
        window.open(`http://youtube.com`, "_blank");
        const finalText = 'opening google';
        speech.text = finalText;
    }

    else if (message.includes('what is') || message.includes('who is') || message.includes('what are') || message.includes('why')) {
        window.open(`http://google.com/search?q=${message.replace("search", "")}`, "_blank");
        const finalText = "This is what i found on google related to " + message;
        speech.text = finalText;
    }

    else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "showing result for " + message.replace("wikipedia", "") + " on wikipedia";
        speech.text = finalText;
    }

    else if (message.includes('mark, what is the time now?')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }
    else if (message.includes('mark time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }
    else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }
    else if (message.includes('mark date')) {
        const date = new Date().toLocaleString(undefined,  { month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if (message.includes('open calculator') || message.includes('calculate')) {
        window.open('Calculator:///');
        const finalText = "opening calculator";
        speech.text = finalText;
    }
    else if (message.includes('mark activate code 001.')) {
        const finalText = 'dot';
        speech.text = finalText;
        speechSynthesis.speak(speech); 
        speech.onend = function(event) {
    
            window.close();
        }
    }
    else if (message.includes('activate code 001.')) {
        const finalText = 'dot';
        speech.text = finalText;
        speechSynthesis.speak(speech); 
        speech.onend = function(event) {
    
            window.close();
        }
    }
   

    else {
        window.open(`http://google.com/search?q=${message.replace("search", "")}`, "_blank");
        const finalText = "I found some information for " + message + "on Google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

function speak(sentence) {
    const utterance = new SpeechSynthesisUtterance(sentence)

    utterance.rate = 1
    utterance.pitch = 1

    window.speechSynthesis.speak(utterance)
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();
    if (hr >= 0 && hr < 12) {
        speak('welcome boss how can i assist you today');
    } 
    else if (hr == 12) {
        speak('welcome boss how can i assist you today');
    } 
    else if (hr >= 12 && hr <= 17) {
        speak('welcome boss how can i assist you today');
    } 
    else {
        speak('welcome boss how can i assist you today');
    }
}
