// ===============================
// KISANSAATHI AI - MAIN SCRIPT
// ===============================

const askButton = document.getElementById("askButton");
const voiceButton = document.getElementById("voiceButton");
const speakButton = document.getElementById("speakButton");

const question = document.getElementById("question");
const answerText = document.getElementById("answerText");
const language = document.getElementById("language");


// ===============================
// LANGUAGE HELPER
// ===============================

function getLanguageCode(selectedLanguage) {

    if (selectedLanguage === "kannada") return "kn-IN";
    if (selectedLanguage === "hindi") return "hi-IN";
    if (selectedLanguage === "tamil") return "ta-IN";
    if (selectedLanguage === "telugu") return "te-IN";
    if (selectedLanguage === "marathi") return "mr-IN";
    if (selectedLanguage === "bengali") return "bn-IN";
    if (selectedLanguage === "gujarati") return "gu-IN";
    if (selectedLanguage === "punjabi") return "pa-IN";

    return "en-IN";
}


// ===============================
// ASK KISANSAATHI
// ===============================

askButton.addEventListener("click", function () {

    const userQuestion = question.value.toLowerCase().trim();
    const selectedLanguage = language.value;

    if (userQuestion === "") {

        const emptyAnswers = {

            english: "Please ask a farming question.",

            kannada: "ದಯವಿಟ್ಟು ಕೃಷಿ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ.",

            hindi: "कृपया कृषि प्रश्न पूछें।",

            tamil: "தயவுசெய்து விவசாய கேள்வியை கேளுங்கள்.",

            telugu: "దయచేసి వ్యవసాయ ప్రశ్న అడగండి.",

            marathi: "कृपया शेतीविषयक प्रश्न विचारा.",

            bengali: "দয়া করে কৃষি প্রশ্ন জিজ্ঞাসা করুন।",

            gujarati: "કૃપા કરીને કૃષિ પ્રશ્ન પૂછો.",

            punjabi: "ਕਿਰਪਾ ਕਰਕੇ ਖੇਤੀਬਾੜੀ ਸਵਾਲ ਪੁੱਛੋ."

        };

        answerText.textContent =
            emptyAnswers[selectedLanguage];

        return;
    }


    // ===============================
    // TOMATO / YELLOW LEAVES
    // ===============================

    if (
        userQuestion.includes("tomato") ||
        userQuestion.includes("yellow") ||
        userQuestion.includes("yellow leaves")
    ) {

        const answers = {

            english:
                "Yellow leaves may be due to overwatering or nutrient deficiency. Check soil moisture.",

            kannada:
                "ಹಳದಿ ಎಲೆಗಳು ಹೆಚ್ಚು ನೀರು ಅಥವಾ ಪೋಷಕಾಂಶಗಳ ಕೊರತೆಯಿಂದ ಉಂಟಾಗಬಹುದು. ಮಣ್ಣಿನ ತೇವಾಂಶ ಪರಿಶೀಲಿಸಿ.",

            hindi:
                "पीली पत्तियां अधिक पानी या पोषक तत्वों की कमी के कारण हो सकती हैं। मिट्टी की नमी जांचें।",

            tamil:
                "மஞ்சள் இலைகள் அதிக நீர் அல்லது ஊட்டச்சத்து குறைபாட்டால் ஏற்படலாம். மண் ஈரப்பதத்தை சரிபார்க்கவும்.",

            telugu:
                "పసుపు ఆకులు అధిక నీరు లేదా పోషక లోపం వల్ల రావచ్చు. నేల తేమను పరిశీలించండి.",

            marathi:
                "पिवळी पाने जास्त पाणी किंवा पोषक तत्वांच्या कमतरतेमुळे होऊ शकतात. मातीतील ओलावा तपासा.",

            bengali:
                "হলুদ পাতা অতিরিক্ত জল বা পুষ্টির অভাবে হতে পারে। মাটির আর্দ্রতা পরীক্ষা করুন।",

            gujarati:
                "પીળા પાંદડા વધારે પાણી અથવા પોષક તત્વોની ઉણપને કારણે થઈ શકે છે. જમીનની ભેજ તપાસો.",

            punjabi:
                "ਪੀਲੇ ਪੱਤੇ ਜ਼ਿਆਦਾ ਪਾਣੀ ਜਾਂ ਪੌਸ਼ਟਿਕ ਤੱਤਾਂ ਦੀ ਘਾਟ ਕਾਰਨ ਹੋ ਸਕਦੇ ਹਨ। ਮਿੱਟੀ ਦੀ ਨਮੀ ਜਾਂਚੋ."

        };

        answerText.textContent = answers[selectedLanguage];

        return;
    }


    // ===============================
    // WATER / IRRIGATION
    // ===============================

    if (
        userQuestion.includes("water") ||
        userQuestion.includes("irrigation") ||
        userQuestion.includes("watering") ||
        userQuestion.includes("నీరు")
    ) {

        const answers = {

            english:
                "Check soil moisture before watering. Avoid overwatering.",

            kannada:
                "ನೀರು ಹಾಕುವ ಮೊದಲು ಮಣ್ಣಿನ ತೇವಾಂಶ ಪರಿಶೀಲಿಸಿ. ಹೆಚ್ಚು ನೀರು ಹಾಕಬೇಡಿ.",

            hindi:
                "पानी देने से पहले मिट्टी की नमी जांचें। अधिक पानी न दें।",

            tamil:
                "நீர் கொடுப்பதற்கு முன் மண் ஈரப்பதத்தை சரிபார்க்கவும். அதிக நீர் கொடுக்க வேண்டாம்.",

            telugu:
                "నీరు పెట్టే ముందు నేల తేమను పరిశీలించండి. అధికంగా నీరు పెట్టవద్దు.",

            marathi:
                "पाणी देण्यापूर्वी मातीतील ओलावा तपासा. जास्त पाणी देऊ नका.",

            bengali:
                "জল দেওয়ার আগে মাটির আর্দ্রতা পরীক্ষা করুন। অতিরিক্ত জল দেবেন না।",

            gujarati:
                "પાણી આપતા પહેલા જમીનની ભેજ તપાસો. વધારે પાણી ન આપો.",

            punjabi:
                "ਪਾਣੀ ਦੇਣ ਤੋਂ ਪਹਿਲਾਂ ਮਿੱਟੀ ਦੀ ਨਮੀ ਜਾਂਚੋ। ਜ਼ਿਆਦਾ ਪਾਣੀ ਨਾ ਦਿਓ."

        };

        answerText.textContent = answers[selectedLanguage];

        return;
    }


    // ===============================
    // PEST / INSECT
    // ===============================

    if (
        userQuestion.includes("pest") ||
        userQuestion.includes("insect") ||
        userQuestion.includes("bug") ||
        userQuestion.includes("कीट") ||
        userQuestion.includes("ಕೀಟ")
    ) {

        const answers = {

            english:
                "Identify the pest first. Remove affected leaves and seek expert advice if needed.",

            kannada:
                "ಮೊದಲು ಕೀಟವನ್ನು ಗುರುತಿಸಿ. ಹಾನಿಗೊಳಗಾದ ಎಲೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ ಮತ್ತು ಅಗತ್ಯವಿದ್ದರೆ ತಜ್ಞರ ಸಲಹೆ ಪಡೆಯಿರಿ.",

            hindi:
                "पहले कीट की पहचान करें। प्रभावित पत्तियां हटाएं और जरूरत होने पर विशेषज्ञ की सलाह लें।",

            tamil:
                "முதலில் பூச்சியை அடையாளம் காணவும். பாதிக்கப்பட்ட இலைகளை அகற்றி தேவையானால் நிபுணர் ஆலோசனை பெறவும்.",

            telugu:
                "ముందుగా పురుగును గుర్తించండి. ప్రభావిత ఆకులను తొలగించి అవసరమైతే నిపుణుల సలహా తీసుకోండి.",

            marathi:
                "प्रथम किडीची ओळख करा. बाधित पाने काढा आणि गरज असल्यास तज्ज्ञांचा सल्ला घ्या.",

            bengali:
                "প্রথমে পোকা শনাক্ত করুন। আক্রান্ত পাতা সরিয়ে প্রয়োজনে বিশেষজ্ঞের পরামর্শ নিন।",

            gujarati:
                "પહેલા જીવાતને ઓળખો. અસરગ્રસ્ત પાંદડા દૂર કરો અને જરૂર પડે તો નિષ્ણાતની સલાહ લો.",

            punjabi:
                "ਪਹਿਲਾਂ ਕੀੜੇ ਦੀ ਪਛਾਣ ਕਰੋ। ਪ੍ਰਭਾਵਿਤ ਪੱਤੇ ਹਟਾਓ ਅਤੇ ਲੋੜ ਪੈਣ 'ਤੇ ਮਾਹਿਰ ਦੀ ਸਲਾਹ ਲਓ."

        };

        answerText.textContent = answers[selectedLanguage];

        return;
    }


    // ===============================
    // SOIL
    // ===============================

    if (
        userQuestion.includes("soil") ||
        userQuestion.includes("mud") ||
        userQuestion.includes("ಮಣ್ಣು") ||
        userQuestion.includes("मिट्टी")
    ) {

        const answers = {

            english:
                "Test the soil before planting. Good soil should have proper nutrients and moisture.",

            kannada:
                "ಬಿತ್ತನೆಗೆ ಮೊದಲು ಮಣ್ಣನ್ನು ಪರೀಕ್ಷಿಸಿ. ಉತ್ತಮ ಮಣ್ಣಿನಲ್ಲಿ ಸರಿಯಾದ ಪೋಷಕಾಂಶ ಮತ್ತು ತೇವಾಂಶ ಇರಬೇಕು.",

            hindi:
                "बुवाई से पहले मिट्टी की जांच करें। अच्छी मिट्टी में सही पोषक तत्व और नमी होनी चाहिए।",

            tamil:
                "நடவு செய்வதற்கு முன் மண்ணை பரிசோதிக்கவும். நல்ல மண்ணில் சரியான ஊட்டச்சத்து மற்றும் ஈரப்பதம் இருக்க வேண்டும்.",

            telugu:
                "విత్తే ముందు నేలను పరీక్షించండి. మంచి నేలలో సరైన పోషకాలు మరియు తేమ ఉండాలి.",

            marathi:
                "पेरणीपूर्वी मातीची तपासणी करा. चांगल्या मातीत योग्य पोषक तत्वे आणि ओलावा असावा.",

            bengali:
                "রোপণের আগে মাটি পরীক্ষা করুন। ভালো মাটিতে সঠিক পুষ্টি ও আর্দ্রতা থাকা উচিত।",

            gujarati:
                "વાવણી પહેલાં જમીનની તપાસ કરો. સારી જમીનમાં યોગ્ય પોષક તત્વો અને ભેજ હોવો જોઈએ.",

            punjabi:
                "ਬਿਜਾਈ ਤੋਂ ਪਹਿਲਾਂ ਮਿੱਟੀ ਦੀ ਜਾਂਚ ਕਰੋ। ਚੰਗੀ ਮਿੱਟੀ ਵਿੱਚ ਸਹੀ ਪੌਸ਼ਟਿਕ ਤੱਤ ਅਤੇ ਨਮੀ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ."

        };

        answerText.textContent = answers[selectedLanguage];

        return;
    }


    // ===============================
    // FERTILIZER
    // ===============================

    if (
        userQuestion.includes("fertilizer") ||
        userQuestion.includes("fertiliser") ||
        userQuestion.includes("manure") ||
        userQuestion.includes("ಗೊಬ್ಬರ") ||
        userQuestion.includes("खाद")
    ) {

        const answers = {

            english:
                "Use fertilizer according to the crop and soil needs. Avoid excessive use.",

            kannada:
                "ಬೆಳೆ ಮತ್ತು ಮಣ್ಣಿನ ಅಗತ್ಯಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಗೊಬ್ಬರ ಬಳಸಿ. ಹೆಚ್ಚು ಬಳಸಬೇಡಿ.",

            hindi:
                "फसल और मिट्टी की जरूरत के अनुसार खाद का उपयोग करें। अधिक उपयोग न करें।",

            tamil:
                "பயிர் மற்றும் மண் தேவைக்கேற்ப உரத்தை பயன்படுத்தவும். அதிகமாக பயன்படுத்த வேண்டாம்.",

            telugu:
                "పంట మరియు నేల అవసరానికి అనుగుణంగా ఎరువులు వాడండి. అధికంగా వాడవద్దు.",

            marathi:
                "पिक आणि मातीच्या गरजेनुसार खत वापरा. जास्त वापर टाळा.",

            bengali:
                "ফসল ও মাটির প্রয়োজন অনুযায়ী সার ব্যবহার করুন। অতিরিক্ত ব্যবহার করবেন না।",

            gujarati:
                "પાક અને જમીનની જરૂરિયાત મુજબ ખાતર વાપરો. વધુ પડતું વાપરશો નહીં.",

            punjabi:
                "ਫਸਲ ਅਤੇ ਮਿੱਟੀ ਦੀ ਲੋੜ ਅਨੁਸਾਰ ਖਾਦ ਵਰਤੋ। ਜ਼ਿਆਦਾ ਵਰਤੋਂ ਨਾ ਕਰੋ."

        };

        answerText.textContent = answers[selectedLanguage];

        return;
    }


    // ===============================
    // WEATHER
    // ===============================

    if (
        userQuestion.includes("weather") ||
        userQuestion.includes("rain") ||
        userQuestion.includes("temperature") ||
        userQuestion.includes("ಮಳೆ") ||
        userQuestion.includes("बारिश")
    ) {

        const answers = {

            english:
                "Check the local weather forecast before irrigation or spraying.",

            kannada:
                "ನೀರಾವರಿ ಅಥವಾ ಸಿಂಪಡಣೆ ಮಾಡುವ ಮೊದಲು ಸ್ಥಳೀಯ ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ ಪರಿಶೀಲಿಸಿ.",

            hindi:
                "सिंचाई या छिड़काव से पहले स्थानीय मौसम की जानकारी जांचें।",

            tamil:
                "நீர்ப்பாசனம் அல்லது தெளிப்பதற்கு முன் உள்ளூர் வானிலை முன்னறிவிப்பை சரிபார்க்கவும்.",

            telugu:
                "నీటిపారుదల లేదా పిచికారీకి ముందు స్థానిక వాతావరణ సూచనను పరిశీలించండి.",

            marathi:
                "सिंचन किंवा फवारणीपूर्वी स्थानिक हवामानाचा अंदाज तपासा.",

            bengali:
                "সেচ বা স্প্রে করার আগে স্থানীয় আবহাওয়ার পূর্বাভাস পরীক্ষা করুন।",

            gujarati:
                "સિંચાઈ અથવા છંટકાવ કરતા પહેલા સ્થાનિક હવામાનની આગાહી તપાસો.",

            punjabi:
                "ਸਿੰਚਾਈ ਜਾਂ ਛਿੜਕਾਅ ਤੋਂ ਪਹਿਲਾਂ ਸਥਾਨਕ ਮੌਸਮ ਦੀ ਭਵਿੱਖਬਾਣੀ ਜਾਂਚੋ."

        };

        answerText.textContent = answers[selectedLanguage];

        return;
    }


    // ===============================
    // DEFAULT ANSWER
    // ===============================

    const defaultAnswers = {

        english:
            "Ask about crops, soil, water, pests, fertilizer, or weather.",

        kannada:
            "ಬೆಳೆ, ಮಣ್ಣು, ನೀರು, ಕೀಟ, ಗೊಬ್ಬರ ಅಥವಾ ಹವಾಮಾನದ ಬಗ್ಗೆ ಕೇಳಿ.",

        hindi:
            "फसल, मिट्टी, पानी, कीट, खाद या मौसम के बारे में पूछें।",

        tamil:
            "பயிர், மண், நீர், பூச்சி, உரம் அல்லது வானிலை பற்றி கேளுங்கள்.",

        telugu:
            "పంట, నేల, నీరు, పురుగులు, ఎరువులు లేదా వాతావరణం గురించి అడగండి.",

        marathi:
            "पिके, माती, पाणी, कीड, खत किंवा हवामानाबद्दल विचारा.",

        bengali:
            "ফসল, মাটি, জল, পোকা, সার বা আবহাওয়া সম্পর্কে জিজ্ঞাসা করুন।",

        gujarati:
            "પાક, જમીન, પાણી, જીવાત, ખાતર અથવા હવામાન વિશે પૂછો.",

        punjabi:
            "ਫਸਲ, ਮਿੱਟੀ, ਪਾਣੀ, ਕੀੜੇ, ਖਾਦ ਜਾਂ ਮੌਸਮ ਬਾਰੇ ਪੁੱਛੋ."

    };

    answerText.textContent =
        defaultAnswers[selectedLanguage];

});


// ===============================
// VOICE INPUT
// ===============================

voiceButton.addEventListener("click", function () {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    if (!SpeechRecognition) {

        alert(
            "Voice input is not supported in this browser. Please try Google Chrome."
        );

        return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang =
        getLanguageCode(language.value);

    recognition.start();

    voiceButton.textContent =
        "🎙️ Listening...";


    recognition.onresult = function (event) {

        const transcript =
            event.results[0][0].transcript;

        question.value = transcript;

        voiceButton.textContent =
            "🎤 Tap to Speak";

    };


    recognition.onerror = function () {

        voiceButton.textContent =
            "🎤 Tap to Speak";

        alert(
            "Unable to recognize voice. Please check your microphone."
        );

    };


    recognition.onend = function () {

        voiceButton.textContent =
            "🎤 Tap to Speak";

    };

});


// ===============================
// TEXT TO SPEECH
// ===============================

speakButton.addEventListener("click", function () {

    // STOP VOICE

    if (window.speechSynthesis.speaking) {

        window.speechSynthesis.cancel();

        speakButton.textContent =
            "🔊 Listen to Answer";

        return;
    }


    const text =
        answerText.textContent;


    if (
        text.trim() === "" ||
        text === "Your answer will appear here."
    ) {

        alert(
            "Please ask a farming question first."
        );

        return;
    }


    const speech =
        new SpeechSynthesisUtterance(text);


    speech.lang =
        getLanguageCode(language.value);

    speech.rate = 0.9;
    speech.pitch = 1;


    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(speech);


    speakButton.textContent =
        "⏹ Stop Voice";


    speech.onend = function () {

        speakButton.textContent =
            "🔊 Listen to Answer";

    };

});


// ===============================
// OPEN AGRICULTURE VIDEOS
// ===============================

function openVideo(videoLink) {

    window.open(
        videoLink,
        "_blank"
    );

}