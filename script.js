document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       LANGUAGE DATA
    ===================================================== */

    const T = {

        english: {
            tagline: "Technology that speaks the farmer's language",
            farmerMode: "👨‍🌾 Farmer Mode",

            profileTitle: "👨‍🌾 Farmer Profile",
            profileDescription: "Tell KisanSaathi a little about yourself.",
            name: "Enter your name",
            crop: "🌱 Select your main crop",
            save: "💾 Save Profile",
            saved: "Profile saved successfully! 🌱",

            dashboard: "My Farming Dashboard",
            dashboardWelcome: "Your personal farming assistant at a glance.",
            welcome: "Welcome",
            farmer: "Farmer",
            mainCrop: "Main Crop",
            notSelected: "Not selected",
            assistant: "Assistant",
            ready: "Ready to help you",
            todayTip: "Today's Tip",
            lastQuestion: "Last Question",
            noQuestion: "No question asked yet.",
            recommendation: "Smart Recommendation",
            askRecommendation: "Ask a question to receive a recommendation.",

            mainTitle: "🤖 How can I help you?",
            mainDescription: "Ask your farming question in your preferred language.",
            language: "Select your language:",
            question: "Type your farming question here...",
            voice: "🎤 Tap to Speak",
            ask: "Ask KisanSaathi",
            exampleLabel: "⭐ Not sure what to ask?",
            example: "🌱 Try an Example",
            answer: "🤖 KisanSaathi's Answer",
            answerDefault: "Your answer will appear here.",
            listen: "🔊 Listen to Answer",

            smartTitle: "🧠 Smart Recommendation",
            smartDescription: "Get simple recommendations based on your farming question.",
            smartDefault: "Ask a farming question to receive recommendations.",

            quickTitle: "🌱 Quick Help",
            quickDescription: "Choose a topic to quickly ask KisanSaathi.",
            cropProblem: "Crop Problem",
            cropText: "Ask about crop health.",
            pestAttack: "Pest Attack",
            pestText: "Ask about insects and pests.",
            watering: "Watering",
            waterText: "Get irrigation guidance.",
            fertilizer: "Fertilizer",
            fertilizerText: "Learn about plant nutrients.",
            weather: "Weather",
            weatherText: "Get weather-related advice.",

            demoTitle: "🎤 Try KisanSaathi",
            demoDescription: "Tap a question and KisanSaathi will answer it automatically.",
            demoCrop: "🍅 Yellow Tomato Leaves",
            demoPest: "🐛 Pest Attack",
            demoWater: "💧 Watering Advice",
            demoFertilizer: "🌾 Fertilizer Advice",

            imageTitle: "📸 Crop Image Analysis",
            imageDescription: "Upload a crop image for AI-based disease detection.",
            imageButton: "📷 Upload Crop Image",
            imageMessage: "Image received! AI crop disease analysis will be added in the future. 🌱",

            videosTitle: "🎥 Learn Farming Visually",
            videosDescription: "Learn useful farming techniques through simple videos.",
            tomatoTitle: "🌱 Tomato Crop Care",
            tomatoDescription: "Learn about tomato farming and crop care.",
            pestVideoTitle: "🐛 Pest Management",
            pestVideoDescription: "Learn how to identify and manage common crop pests.",
            irrigationTitle: "💧 Smart Irrigation",
            irrigationDescription: "Learn about irrigation and water-saving techniques.",
            watch: "Watch Video",

            tipTitle: "💡 Today's Smart Farming Tip",
            tip: "Check the soil moisture before watering your crops.",

            footer: "🌾 KisanSaathi AI | Empowering Farmers, One Voice at a Time",

            listening: "🎤 Listening... Speak now.",
            unsupported: "Voice input is not supported in this browser.",
            enterQuestion: "Please enter a farming question.",
            thinking: "🤔 KisanSaathi is thinking...",

            crops: {
                Tomato: "🍅 Tomato",
                Rice: "🌾 Rice",
                Ragi: "🌾 Ragi",
                Wheat: "🌾 Wheat",
                Maize: "🌽 Maize",
                Sugarcane: "🎋 Sugarcane",
                Other: "🌱 Other"
            }
        },


        kannada: {
            tagline: "ರೈತನ ಭಾಷೆಯಲ್ಲಿ ಮಾತನಾಡುವ ತಂತ್ರಜ್ಞಾನ",
            farmerMode: "👨‍🌾 ರೈತ ಮೋಡ್",

            profileTitle: "👨‍🌾 ರೈತರ ಪ್ರೊಫೈಲ್",
            profileDescription: "ನಿಮ್ಮ ಬಗ್ಗೆ KisanSaathiಗೆ ಸ್ವಲ್ಪ ತಿಳಿಸಿ.",
            name: "ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
            crop: "🌱 ನಿಮ್ಮ ಮುಖ್ಯ ಬೆಳೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
            save: "💾 ಪ್ರೊಫೈಲ್ ಉಳಿಸಿ",
            saved: "ಪ್ರೊಫೈಲ್ ಯಶಸ್ವಿಯಾಗಿ ಉಳಿಸಲಾಗಿದೆ! 🌱",

            dashboard: "ನನ್ನ ಕೃಷಿ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
            dashboardWelcome: "ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಕೃಷಿ ಸಹಾಯಕ.",
            welcome: "ಸ್ವಾಗತ",
            farmer: "ರೈತ",
            mainCrop: "ಮುಖ್ಯ ಬೆಳೆ",
            notSelected: "ಆಯ್ಕೆ ಮಾಡಿಲ್ಲ",
            assistant: "ಸಹಾಯಕ",
            ready: "ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ಸಿದ್ಧವಾಗಿದೆ",
            todayTip: "ಇಂದಿನ ಸಲಹೆ",
            lastQuestion: "ಕೊನೆಯ ಪ್ರಶ್ನೆ",
            noQuestion: "ಇನ್ನೂ ಯಾವುದೇ ಪ್ರಶ್ನೆ ಕೇಳಲಾಗಿಲ್ಲ.",
            recommendation: "ಸ್ಮಾರ್ಟ್ ಶಿಫಾರಸು",
            askRecommendation: "ಶಿಫಾರಸು ಪಡೆಯಲು ಪ್ರಶ್ನೆ ಕೇಳಿ.",

            mainTitle: "🤖 ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
            mainDescription: "ನಿಮ್ಮ ಇಷ್ಟದ ಭಾಷೆಯಲ್ಲಿ ಕೃಷಿ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ.",
            language: "ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ:",
            question: "ನಿಮ್ಮ ಕೃಷಿ ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ...",
            voice: "🎤 ಮಾತನಾಡಲು ಒತ್ತಿರಿ",
            ask: "KisanSaathiಗೆ ಕೇಳಿ",
            exampleLabel: "⭐ ಏನು ಕೇಳಬೇಕೆಂದು ತಿಳಿಯುತ್ತಿಲ್ಲವೇ?",
            example: "🌱 ಉದಾಹರಣೆ ಪ್ರಯತ್ನಿಸಿ",
            answer: "🤖 KisanSaathi ಉತ್ತರ",
            answerDefault: "ನಿಮ್ಮ ಉತ್ತರ ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ.",
            listen: "🔊 ಉತ್ತರವನ್ನು ಕೇಳಿ",

            smartTitle: "🧠 ಸ್ಮಾರ್ಟ್ ಶಿಫಾರಸು",
            smartDescription: "ನಿಮ್ಮ ಕೃಷಿ ಪ್ರಶ್ನೆಯ ಆಧಾರದ ಮೇಲೆ ಸರಳ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ.",
            smartDefault: "ಶಿಫಾರಸು ಪಡೆಯಲು ಕೃಷಿ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ.",

            quickTitle: "🌱 ತ್ವರಿತ ಸಹಾಯ",
            quickDescription: "KisanSaathiಗೆ ತ್ವರಿತವಾಗಿ ಪ್ರಶ್ನೆ ಕೇಳಲು ವಿಷಯ ಆಯ್ಕೆಮಾಡಿ.",
            cropProblem: "ಬೆಳೆ ಸಮಸ್ಯೆ",
            cropText: "ಬೆಳೆಯ ಆರೋಗ್ಯದ ಬಗ್ಗೆ ಕೇಳಿ.",
            pestAttack: "ಕೀಟ ದಾಳಿ",
            pestText: "ಕೀಟಗಳ ಬಗ್ಗೆ ಕೇಳಿ.",
            watering: "ನೀರಾವರಿ",
            waterText: "ನೀರಾವರಿ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ.",
            fertilizer: "ರಸಗೊಬ್ಬರ",
            fertilizerText: "ಸಸ್ಯ ಪೋಷಕಾಂಶಗಳ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ.",
            weather: "ಹವಾಮಾನ",
            weatherText: "ಹವಾಮಾನಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಸಲಹೆ ಪಡೆಯಿರಿ.",

            demoTitle: "🎤 KisanSaathi ಪ್ರಯತ್ನಿಸಿ",
            demoDescription: "ಪ್ರಶ್ನೆಯನ್ನು ಒತ್ತಿ ಮತ್ತು KisanSaathi ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಉತ್ತರಿಸುತ್ತದೆ.",
            demoCrop: "🍅 ಟೊಮೇಟೊ ಎಲೆಗಳು ಹಳದಿಯಾಗುತ್ತಿವೆ",
            demoPest: "🐛 ಕೀಟ ದಾಳಿ",
            demoWater: "💧 ನೀರಾವರಿ ಸಲಹೆ",
            demoFertilizer: "🌾 ರಸಗೊಬ್ಬರ ಸಲಹೆ",

            imageTitle: "📸 ಬೆಳೆ ಚಿತ್ರ ವಿಶ್ಲೇಷಣೆ",
            imageDescription: "AI ಆಧಾರಿತ ರೋಗ ಪತ್ತೆಗಾಗಿ ಬೆಳೆ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
            imageButton: "📷 ಬೆಳೆ ಚಿತ್ರ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
            imageMessage: "ಚಿತ್ರ ಸ್ವೀಕರಿಸಲಾಗಿದೆ! AI ಬೆಳೆ ರೋಗ ವಿಶ್ಲೇಷಣೆಯನ್ನು ಭವಿಷ್ಯದಲ್ಲಿ ಸೇರಿಸಲಾಗುತ್ತದೆ. 🌱",

            videosTitle: "🎥 ದೃಶ್ಯವಾಗಿ ಕೃಷಿ ಕಲಿಯಿರಿ",
            videosDescription: "ಸರಳ ವೀಡಿಯೊಗಳ ಮೂಲಕ ಉಪಯುಕ್ತ ಕೃಷಿ ತಂತ್ರಗಳನ್ನು ಕಲಿಯಿರಿ.",
            tomatoTitle: "🌱 ಟೊಮೇಟೊ ಬೆಳೆ ಆರೈಕೆ",
            tomatoDescription: "ಟೊಮೇಟೊ ಕೃಷಿ ಮತ್ತು ಬೆಳೆ ಆರೈಕೆಯ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ.",
            pestVideoTitle: "🐛 ಕೀಟ ನಿರ್ವಹಣೆ",
            pestVideoDescription: "ಸಾಮಾನ್ಯ ಬೆಳೆ ಕೀಟಗಳನ್ನು ಗುರುತಿಸಿ ನಿರ್ವಹಿಸುವುದನ್ನು ಕಲಿಯಿರಿ.",
            irrigationTitle: "💧 ಸ್ಮಾರ್ಟ್ ನೀರಾವರಿ",
            irrigationDescription: "ನೀರಾವರಿ ಮತ್ತು ನೀರು ಉಳಿಸುವ ವಿಧಾನಗಳ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ.",
            watch: "ವೀಡಿಯೊ ನೋಡಿ",

            tipTitle: "💡 ಇಂದಿನ ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಸಲಹೆ",
            tip: "ಬೆಳೆಗಳಿಗೆ ನೀರು ಹಾಕುವ ಮೊದಲು ಮಣ್ಣಿನ ತೇವಾಂಶವನ್ನು ಪರಿಶೀಲಿಸಿ.",

            footer: "🌾 KisanSaathi AI | ರೈತರನ್ನು ಸಬಲಗೊಳಿಸುವ ತಂತ್ರಜ್ಞಾನ",

            listening: "🎤 ಕೇಳಲಾಗುತ್ತಿದೆ... ಈಗ ಮಾತನಾಡಿ.",
            unsupported: "ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಧ್ವನಿ ಇನ್‌ಪುಟ್ ಲಭ್ಯವಿಲ್ಲ.",
            enterQuestion: "ದಯವಿಟ್ಟು ಕೃಷಿ ಪ್ರಶ್ನೆಯನ್ನು ನಮೂದಿಸಿ.",
            thinking: "🤔 KisanSaathi ಯೋಚಿಸುತ್ತಿದೆ...",

            crops: {
                Tomato: "🍅 ಟೊಮೇಟೊ",
                Rice: "🌾 ಅಕ್ಕಿ",
                Ragi: "🌾 ರಾಗಿ",
                Wheat: "🌾 ಗೋಧಿ",
                Maize: "🌽 ಮೆಕ್ಕೆಜೋಳ",
                Sugarcane: "🎋 ಕಬ್ಬು",
                Other: "🌱 ಇತರೆ"
            }
        },


        hindi: {
            tagline: "किसान की भाषा में बात करने वाली तकनीक",
            farmerMode: "👨‍🌾 किसान मोड",

            profileTitle: "👨‍🌾 किसान प्रोफ़ाइल",
            profileDescription: "KisanSaathi को अपने बारे में थोड़ा बताएं।",
            name: "अपना नाम दर्ज करें",
            crop: "🌱 अपनी मुख्य फसल चुनें",
            save: "💾 प्रोफ़ाइल सेव करें",
            saved: "प्रोफ़ाइल सफलतापूर्वक सेव हो गई! 🌱",

            dashboard: "मेरा कृषि डैशबोर्ड",
            dashboardWelcome: "आपका व्यक्तिगत कृषि सहायक।",
            welcome: "स्वागत है",
            farmer: "किसान",
            mainCrop: "मुख्य फसल",
            notSelected: "चयन नहीं किया गया",
            assistant: "सहायक",
            ready: "आपकी मदद के लिए तैयार",
            todayTip: "आज की सलाह",
            lastQuestion: "आखिरी सवाल",
            noQuestion: "अभी कोई सवाल नहीं पूछा गया है।",
            recommendation: "स्मार्ट सुझाव",
            askRecommendation: "सुझाव पाने के लिए सवाल पूछें।",

            mainTitle: "🤖 मैं आपकी कैसे मदद कर सकता हूँ?",
            mainDescription: "अपनी पसंदीदा भाषा में खेती से जुड़ा सवाल पूछें।",
            language: "अपनी भाषा चुनें:",
            question: "अपना कृषि सवाल यहाँ लिखें...",
            voice: "🎤 बोलने के लिए दबाएँ",
            ask: "KisanSaathi से पूछें",
            exampleLabel: "⭐ क्या पूछना है समझ नहीं आ रहा?",
            example: "🌱 एक उदाहरण आज़माएँ",
            answer: "🤖 KisanSaathi का उत्तर",
            answerDefault: "आपका उत्तर यहाँ दिखाई देगा।",
            listen: "🔊 उत्तर सुनें",

            smartTitle: "🧠 स्मार्ट सुझाव",
            smartDescription: "अपने कृषि सवाल के आधार पर सरल सुझाव प्राप्त करें।",
            smartDefault: "सुझाव पाने के लिए कृषि सवाल पूछें।",

            quickTitle: "🌱 त्वरित सहायता",
            quickDescription: "जल्दी सवाल पूछने के लिए एक विषय चुनें।",
            cropProblem: "फसल समस्या",
            cropText: "फसल के स्वास्थ्य के बारे में पूछें।",
            pestAttack: "कीट हमला",
            pestText: "कीटों के बारे में पूछें।",
            watering: "सिंचाई",
            waterText: "सिंचाई की जानकारी पाएँ।",
            fertilizer: "उर्वरक",
            fertilizerText: "पौधों के पोषक तत्वों के बारे में जानें।",
            weather: "मौसम",
            weatherText: "मौसम से जुड़ी सलाह पाएँ।",

            demoTitle: "🎤 KisanSaathi आज़माएँ",
            demoDescription: "सवाल पर टैप करें और KisanSaathi अपने आप जवाब देगा।",
            demoCrop: "🍅 टमाटर के पत्ते पीले हो रहे हैं",
            demoPest: "🐛 कीट हमला",
            demoWater: "💧 सिंचाई सलाह",
            demoFertilizer: "🌾 उर्वरक सलाह",

            imageTitle: "📸 फसल छवि विश्लेषण",
            imageDescription: "AI आधारित रोग पहचान के लिए फसल की तस्वीर अपलोड करें।",
            imageButton: "📷 फसल की तस्वीर अपलोड करें",
            imageMessage: "तस्वीर प्राप्त हुई! AI फसल रोग विश्लेषण भविष्य में जोड़ा जाएगा। 🌱",

            videosTitle: "🎥 खेती को वीडियो के माध्यम से सीखें",
            videosDescription: "सरल वीडियो के माध्यम से उपयोगी कृषि तकनीक सीखें।",
            tomatoTitle: "🌱 टमाटर की फसल देखभाल",
            tomatoDescription: "टमाटर की खेती और फसल देखभाल के बारे में जानें।",
            pestVideoTitle: "🐛 कीट प्रबंधन",
            pestVideoDescription: "सामान्य फसल कीटों को पहचानना और नियंत्रित करना सीखें।",
            irrigationTitle: "💧 स्मार्ट सिंचाई",
            irrigationDescription: "सिंचाई और पानी बचाने की तकनीक सीखें।",
            watch: "वीडियो देखें",

            tipTitle: "💡 आज की स्मार्ट खेती सलाह",
            tip: "फसल में पानी देने से पहले मिट्टी की नमी जांचें।",

            footer: "🌾 KisanSaathi AI | किसानों को सशक्त बनाने की दिशा में एक कदम",

            listening: "🎤 सुन रहा हूँ... अब बोलें।",
            unsupported: "इस ब्राउज़र में वॉइस इनपुट उपलब्ध नहीं है।",
            enterQuestion: "कृपया कृषि सवाल दर्ज करें।",
            thinking: "🤔 KisanSaathi सोच रहा है...",

            crops: {
                Tomato: "🍅 टमाटर",
                Rice: "🌾 चावल",
                Ragi: "🌾 रागी",
                Wheat: "🌾 गेहूँ",
                Maize: "🌽 मक्का",
                Sugarcane: "🎋 गन्ना",
                Other: "🌱 अन्य"
            }
        },


        tamil: {
            tagline: "விவசாயியின் மொழியில் பேசும் தொழில்நுட்பம்",
            farmerMode: "👨‍🌾 விவசாயி முறை",

            profileTitle: "👨‍🌾 விவசாயி சுயவிவரம்",
            profileDescription: "உங்களைப் பற்றி KisanSaathiக்கு சிறிது சொல்லுங்கள்.",
            name: "உங்கள் பெயரை உள்ளிடுங்கள்",
            crop: "🌱 உங்கள் முக்கிய பயிரை தேர்ந்தெடுக்கவும்",
            save: "💾 சுயவிவரத்தை சேமிக்கவும்",
            saved: "சுயவிவரம் வெற்றிகரமாக சேமிக்கப்பட்டது! 🌱",

            dashboard: "எனது விவசாய டாஷ்போர்டு",
            dashboardWelcome: "உங்களுக்கான தனிப்பயன் விவசாய உதவியாளர்.",
            welcome: "வரவேற்கிறோம்",
            farmer: "விவசாயி",
            mainCrop: "முக்கிய பயிர்",
            notSelected: "தேர்ந்தெடுக்கப்படவில்லை",
            assistant: "உதவியாளர்",
            ready: "உங்களுக்கு உதவ தயாராக உள்ளது",
            todayTip: "இன்றைய ஆலோசனை",
            lastQuestion: "கடைசி கேள்வி",
            noQuestion: "இதுவரை எந்த கேள்வியும் கேட்கப்படவில்லை.",
            recommendation: "ஸ்மார்ட் பரிந்துரை",
            askRecommendation: "பரிந்துரை பெற கேள்வி கேளுங்கள்.",

            mainTitle: "🤖 நான் உங்களுக்கு எப்படி உதவலாம்?",
            mainDescription: "உங்களுக்கு விருப்பமான மொழியில் விவசாய கேள்வியைக் கேளுங்கள்.",
            language: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்:",
            question: "உங்கள் விவசாய கேள்வியை இங்கே எழுதுங்கள்...",
            voice: "🎤 பேச அழுத்தவும்",
            ask: "KisanSaathiயிடம் கேளுங்கள்",
            exampleLabel: "⭐ என்ன கேட்பது என்று தெரியவில்லையா?",
            example: "🌱 ஒரு உதாரணத்தை முயற்சிக்கவும்",
            answer: "🤖 KisanSaathiயின் பதில்",
            answerDefault: "உங்கள் பதில் இங்கே தோன்றும்.",
            listen: "🔊 பதிலைக் கேளுங்கள்",

            smartTitle: "🧠 ஸ்மார்ட் பரிந்துரை",
            smartDescription: "உங்கள் விவசாய கேள்வியின் அடிப்படையில் எளிய பரிந்துரைகளைப் பெறுங்கள்.",
            smartDefault: "பரிந்துரை பெற விவசாய கேள்வியைக் கேளுங்கள்.",

            quickTitle: "🌱 விரைவு உதவி",
            quickDescription: "விரைவாக கேள்வி கேட்க ஒரு தலைப்பைத் தேர்ந்தெடுக்கவும்.",
            cropProblem: "பயிர் பிரச்சனை",
            cropText: "பயிர் ஆரோக்கியத்தைப் பற்றி கேளுங்கள்.",
            pestAttack: "பூச்சி தாக்குதல்",
            pestText: "பூச்சிகளைப் பற்றி கேளுங்கள்.",
            watering: "நீர்ப்பாசனம்",
            waterText: "நீர்ப்பாசன வழிகாட்டுதலைப் பெறுங்கள்.",
            fertilizer: "உரம்",
            fertilizerText: "தாவர ஊட்டச்சத்துகளைப் பற்றி அறியுங்கள்.",
            weather: "வானிலை",
            weatherText: "வானிலை தொடர்பான ஆலோசனையைப் பெறுங்கள்.",

            demoTitle: "🎤 KisanSaathiயை முயற்சிக்கவும்",
            demoDescription: "ஒரு கேள்வியைத் தேர்ந்தெடுக்கவும்; KisanSaathi தானாக பதிலளிக்கும்.",
            demoCrop: "🍅 தக்காளி இலைகள் மஞ்சளாகின்றன",
            demoPest: "🐛 பூச்சி தாக்குதல்",
            demoWater: "💧 நீர்ப்பாசன ஆலோசனை",
            demoFertilizer: "🌾 உர ஆலோசனை",

            imageTitle: "📸 பயிர் பட பகுப்பாய்வு",
            imageDescription: "AI அடிப்படையிலான நோய் கண்டறிதலுக்காக பயிர் படத்தை பதிவேற்றவும்.",
            imageButton: "📷 பயிர் படத்தை பதிவேற்றவும்",
            imageMessage: "படம் பெறப்பட்டது! AI பயிர் நோய் பகுப்பாய்வு எதிர்காலத்தில் சேர்க்கப்படும். 🌱",

            videosTitle: "🎥 காணொளி மூலம் விவசாயம் கற்றுக்கொள்ளுங்கள்",
            videosDescription: "எளிய காணொளிகள் மூலம் பயனுள்ள விவசாய முறைகளை கற்றுக்கொள்ளுங்கள்.",
            tomatoTitle: "🌱 தக்காளி பயிர் பராமரிப்பு",
            tomatoDescription: "தக்காளி விவசாயம் மற்றும் பயிர் பராமரிப்பு பற்றி அறியுங்கள்.",
            pestVideoTitle: "🐛 பூச்சி மேலாண்மை",
            pestVideoDescription: "பொதுவான பயிர் பூச்சிகளை அடையாளம் கண்டு கட்டுப்படுத்த கற்றுக்கொள்ளுங்கள்.",
            irrigationTitle: "💧 ஸ்மார்ட் நீர்ப்பாசனம்",
            irrigationDescription: "நீர்ப்பாசனம் மற்றும் நீர் சேமிப்பு முறைகளை கற்றுக்கொள்ளுங்கள்.",
            watch: "காணொளியைப் பார்க்கவும்",

            tipTitle: "💡 இன்றைய ஸ்மார்ட் விவசாய ஆலோசனை",
            tip: "பயிர்களுக்கு நீர் ஊற்றுவதற்கு முன் மண்ணின் ஈரப்பதத்தை சரிபார்க்கவும்.",

            footer: "🌾 KisanSaathi AI | விவசாயிகளை முன்னேற்றும் தொழில்நுட்பம்",

            listening: "🎤 கேட்கிறது... இப்போது பேசுங்கள்.",
            unsupported: "இந்த உலாவியில் குரல் உள்ளீடு ஆதரிக்கப்படவில்லை.",
            enterQuestion: "தயவுசெய்து விவசாய கேள்வியை உள்ளிடுங்கள்.",
            thinking: "🤔 KisanSaathi யோசிக்கிறது...",

            crops: {
                Tomato: "🍅 தக்காளி",
                Rice: "🌾 அரிசி",
                Ragi: "🌾 கேழ்வரகு",
                Wheat: "🌾 கோதுமை",
                Maize: "🌽 மக்காச்சோளம்",
                Sugarcane: "🎋 கரும்பு",
                Other: "🌱 மற்றவை"
            }
        },


        telugu: {
            tagline: "రైతు భాషలో మాట్లాడే సాంకేతికత",
            farmerMode: "👨‍🌾 రైతు మోడ్",

            profileTitle: "👨‍🌾 రైతు ప్రొఫైల్",
            profileDescription: "మీ గురించి KisanSaathiకి కొంచెం చెప్పండి.",
            name: "మీ పేరు నమోదు చేయండి",
            crop: "🌱 మీ ప్రధాన పంటను ఎంచుకోండి",
            save: "💾 ప్రొఫైల్ సేవ్ చేయండి",
            saved: "ప్రొఫైల్ విజయవంతంగా సేవ్ చేయబడింది! 🌱",

            dashboard: "నా వ్యవసాయ డ్యాష్‌బోర్డ్",
            dashboardWelcome: "మీ వ్యక్తిగత వ్యవసాయ సహాయకుడు.",
            welcome: "స్వాగతం",
            farmer: "రైతు",
            mainCrop: "ప్రధాన పంట",
            notSelected: "ఎంచుకోలేదు",
            assistant: "సహాయకుడు",
            ready: "మీకు సహాయం చేయడానికి సిద్ధంగా ఉంది",
            todayTip: "నేటి సూచన",
            lastQuestion: "చివరి ప్రశ్న",
            noQuestion: "ఇంకా ఎలాంటి ప్రశ్న అడగలేదు.",
            recommendation: "స్మార్ట్ సిఫార్సు",
            askRecommendation: "సిఫార్సు కోసం ప్రశ్న అడగండి.",

            mainTitle: "🤖 నేను మీకు ఎలా సహాయం చేయగలను?",
            mainDescription: "మీకు నచ్చిన భాషలో వ్యవసాయ ప్రశ్న అడగండి.",
            language: "మీ భాషను ఎంచుకోండి:",
            question: "మీ వ్యవసాయ ప్రశ్నను ఇక్కడ టైప్ చేయండి...",
            voice: "🎤 మాట్లాడటానికి నొక్కండి",
            ask: "KisanSaathiని అడగండి",
            exampleLabel: "⭐ ఏమి అడగాలో తెలియడం లేదా?",
            example: "🌱 ఒక ఉదాహరణ ప్రయత్నించండి",
            answer: "🤖 KisanSaathi సమాధానం",
            answerDefault: "మీ సమాధానం ఇక్కడ కనిపిస్తుంది.",
            listen: "🔊 సమాధానం వినండి",

            smartTitle: "🧠 స్మార్ట్ సిఫార్సు",
            smartDescription: "మీ వ్యవసాయ ప్రశ్న ఆధారంగా సరళమైన సిఫార్సులు పొందండి.",
            smartDefault: "సిఫార్సు పొందడానికి వ్యవసాయ ప్రశ్న అడగండి.",

            quickTitle: "🌱 త్వరిత సహాయం",
            quickDescription: "త్వరగా ప్రశ్న అడగడానికి ఒక అంశాన్ని ఎంచుకోండి.",
            cropProblem: "పంట సమస్య",
            cropText: "పంట ఆరోగ్యం గురించి అడగండి.",
            pestAttack: "పురుగు దాడి",
            pestText: "పురుగుల గురించి అడగండి.",
            watering: "నీరు పెట్టడం",
            waterText: "నీటిపారుదల మార్గదర్శకత్వం పొందండి.",
            fertilizer: "ఎరువులు",
            fertilizerText: "మొక్కల పోషకాల గురించి తెలుసుకోండి.",
            weather: "వాతావరణం",
            weatherText: "వాతావరణానికి సంబంధించిన సలహా పొందండి.",

            demoTitle: "🎤 KisanSaathiని ప్రయత్నించండి",
            demoDescription: "ప్రశ్నను ఎంచుకోండి; KisanSaathi స్వయంచాలకంగా సమాధానం ఇస్తుంది.",
            demoCrop: "🍅 టమాటా ఆకులు పసుపుగా మారుతున్నాయి",
            demoPest: "🐛 పురుగు దాడి",
            demoWater: "💧 నీటిపారుదల సలహా",
            demoFertilizer: "🌾 ఎరువుల సలహా",

            imageTitle: "📸 పంట చిత్ర విశ్లేషణ",
            imageDescription: "AI ఆధారిత వ్యాధి గుర్తింపు కోసం పంట చిత్రాన్ని అప్‌లోడ్ చేయండి.",
            imageButton: "📷 పంట చిత్రాన్ని అప్‌లోడ్ చేయండి",
            imageMessage: "చిత్రం అందింది! AI పంట వ్యాధి విశ్లేషణ భవిష్యత్తులో జోడించబడుతుంది. 🌱",

            videosTitle: "🎥 వీడియోల ద్వారా వ్యవసాయం నేర్చుకోండి",
            videosDescription: "సులభమైన వీడియోల ద్వారా ఉపయోగకరమైన వ్యవసాయ పద్ధతులను నేర్చుకోండి.",
            tomatoTitle: "🌱 టమాటా పంట సంరక్షణ",
            tomatoDescription: "టమాటా సాగు మరియు పంట సంరక్షణ గురించి తెలుసుకోండి.",
            pestVideoTitle: "🐛 పురుగు నిర్వహణ",
            pestVideoDescription: "సాధారణ పంట పురుగులను గుర్తించడం మరియు నియంత్రించడం నేర్చుకోండి.",
            irrigationTitle: "💧 స్మార్ట్ నీటిపారుదల",
            irrigationDescription: "నీటిపారుదల మరియు నీటిని ఆదా చేసే పద్ధతులను నేర్చుకోండి.",
            watch: "వీడియో చూడండి",

            tipTitle: "💡 నేటి స్మార్ట్ వ్యవసాయ సూచన",
            tip: "పంటలకు నీరు పెట్టే ముందు నేల తేమను తనిఖీ చేయండి.",

            footer: "🌾 KisanSaathi AI | రైతులను శక్తివంతం చేసే సాంకేతికత",

            listening: "🎤 వింటున్నాను... ఇప్పుడు మాట్లాడండి.",
            unsupported: "ఈ బ్రౌజర్‌లో వాయిస్ ఇన్‌పుట్ అందుబాటులో లేదు.",
            enterQuestion: "దయచేసి వ్యవసాయ ప్రశ్నను నమోదు చేయండి.",
            thinking: "🤔 KisanSaathi ఆలోచిస్తోంది...",

            crops: {
                Tomato: "🍅 టమాటా",
                Rice: "🌾 వరి",
                Ragi: "🌾 రాగి",
                Wheat: "🌾 గోధుమ",
                Maize: "🌽 మొక్కజొన్న",
                Sugarcane: "🎋 చెరకు",
                Other: "🌱 ఇతర"
            }
        },


        marathi: {
            tagline: "शेतकऱ्याच्या भाषेत बोलणारे तंत्रज्ञान",
            farmerMode: "👨‍🌾 शेतकरी मोड",

            profileTitle: "👨‍🌾 शेतकरी प्रोफाइल",
            profileDescription: "KisanSaathi ला तुमच्याबद्दल थोडे सांगा.",
            name: "तुमचे नाव टाका",
            crop: "🌱 तुमचे मुख्य पीक निवडा",
            save: "💾 प्रोफाइल सेव्ह करा",
            saved: "प्रोफाइल यशस्वीरित्या सेव्ह झाले! 🌱",

            dashboard: "माझा शेती डॅशबोर्ड",
            dashboardWelcome: "तुमचा वैयक्तिक शेती सहाय्यक.",
            welcome: "स्वागत आहे",
            farmer: "शेतकरी",
            mainCrop: "मुख्य पीक",
            notSelected: "निवडलेले नाही",
            assistant: "सहाय्यक",
            ready: "तुम्हाला मदत करण्यासाठी तयार",
            todayTip: "आजची सूचना",
            lastQuestion: "शेवटचा प्रश्न",
            noQuestion: "अजून कोणताही प्रश्न विचारलेला नाही.",
            recommendation: "स्मार्ट शिफारस",
            askRecommendation: "शिफारस मिळवण्यासाठी प्रश्न विचारा.",

            mainTitle: "🤖 मी तुम्हाला कशी मदत करू शकतो?",
            mainDescription: "तुमच्या पसंतीच्या भाषेत शेतीचा प्रश्न विचारा.",
            language: "तुमची भाषा निवडा:",
            question: "तुमचा शेतीचा प्रश्न येथे लिहा...",
            voice: "🎤 बोलण्यासाठी दाबा",
            ask: "KisanSaathi ला विचारा",
            exampleLabel: "⭐ काय विचारावे हे समजत नाही?",
            example: "🌱 उदाहरण वापरून पहा",
            answer: "🤖 KisanSaathi चे उत्तर",
            answerDefault: "तुमचे उत्तर येथे दिसेल.",
            listen: "🔊 उत्तर ऐका",

            smartTitle: "🧠 स्मार्ट शिफारस",
            smartDescription: "तुमच्या शेतीच्या प्रश्नावर आधारित सोप्या शिफारसी मिळवा.",
            smartDefault: "शिफारस मिळवण्यासाठी शेतीचा प्रश्न विचारा.",

            quickTitle: "🌱 जलद मदत",
            quickDescription: "जलद प्रश्न विचारण्यासाठी विषय निवडा.",
            cropProblem: "पीक समस्या",
            cropText: "पिकाच्या आरोग्याबद्दल विचारा.",
            pestAttack: "कीड हल्ला",
            pestText: "किडींबद्दल विचारा.",
            watering: "पाणी देणे",
            waterText: "सिंचन मार्गदर्शन मिळवा.",
            fertilizer: "खत",
            fertilizerText: "वनस्पतींच्या पोषक घटकांबद्दल जाणून घ्या.",
            weather: "हवामान",
            weatherText: "हवामानाशी संबंधित सल्ला मिळवा.",

            demoTitle: "🎤 KisanSaathi वापरून पहा",
            demoDescription: "प्रश्नावर टॅप करा आणि KisanSaathi आपोआप उत्तर देईल.",
            demoCrop: "🍅 टोमॅटोची पाने पिवळी होत आहेत",
            demoPest: "🐛 कीड हल्ला",
            demoWater: "💧 सिंचन सल्ला",
            demoFertilizer: "🌾 खत सल्ला",

            imageTitle: "📸 पीक प्रतिमा विश्लेषण",
            imageDescription: "AI आधारित रोग शोधण्यासाठी पिकाची प्रतिमा अपलोड करा.",
            imageButton: "📷 पीक प्रतिमा अपलोड करा",
            imageMessage: "प्रतिमा प्राप्त झाली! AI पीक रोग विश्लेषण भविष्यात जोडले जाईल. 🌱",

            videosTitle: "🎥 व्हिडिओद्वारे शेती शिका",
            videosDescription: "सोप्या व्हिडिओद्वारे उपयुक्त शेती तंत्रे शिका.",
            tomatoTitle: "🌱 टोमॅटो पीक काळजी",
            tomatoDescription: "टोमॅटो शेती आणि पीक काळजीबद्दल जाणून घ्या.",
            pestVideoTitle: "🐛 कीड व्यवस्थापन",
            pestVideoDescription: "सामान्य पिकांवरील किडी ओळखणे आणि नियंत्रित करणे शिका.",
            irrigationTitle: "💧 स्मार्ट सिंचन",
            irrigationDescription: "सिंचन आणि पाणी बचतीच्या पद्धती शिका.",
            watch: "व्हिडिओ पहा",

            tipTitle: "💡 आजची स्मार्ट शेती सूचना",
            tip: "पिकांना पाणी देण्यापूर्वी जमिनीतील ओलावा तपासा.",

            footer: "🌾 KisanSaathi AI | शेतकऱ्यांना सक्षम करणारे तंत्रज्ञान",

            listening: "🎤 ऐकत आहे... आता बोला.",
            unsupported: "या ब्राउझरमध्ये व्हॉइस इनपुट उपलब्ध नाही.",
            enterQuestion: "कृपया शेतीचा प्रश्न लिहा.",
            thinking: "🤔 KisanSaathi विचार करत आहे...",

            crops: {
                Tomato: "🍅 टोमॅटो",
                Rice: "🌾 तांदूळ",
                Ragi: "🌾 नाचणी",
                Wheat: "🌾 गहू",
                Maize: "🌽 मका",
                Sugarcane: "🎋 ऊस",
                Other: "🌱 इतर"
            }
        },


        bengali: {
            tagline: "কৃষকের ভাষায় কথা বলা প্রযুক্তি",
            farmerMode: "👨‍🌾 কৃষক মোড",

            profileTitle: "👨‍🌾 কৃষক প্রোফাইল",
            profileDescription: "KisanSaathi-কে আপনার সম্পর্কে কিছু বলুন।",
            name: "আপনার নাম লিখুন",
            crop: "🌱 আপনার প্রধান ফসল নির্বাচন করুন",
            save: "💾 প্রোফাইল সংরক্ষণ করুন",
            saved: "প্রোফাইল সফলভাবে সংরক্ষিত হয়েছে! 🌱",

            dashboard: "আমার কৃষি ড্যাশবোর্ড",
            dashboardWelcome: "আপনার ব্যক্তিগত কৃষি সহায়ক।",
            welcome: "স্বাগতম",
            farmer: "কৃষক",
            mainCrop: "প্রধান ফসল",
            notSelected: "নির্বাচন করা হয়নি",
            assistant: "সহায়ক",
            ready: "আপনাকে সাহায্য করতে প্রস্তুত",
            todayTip: "আজকের পরামর্শ",
            lastQuestion: "শেষ প্রশ্ন",
            noQuestion: "এখনও কোনো প্রশ্ন করা হয়নি।",
            recommendation: "স্মার্ট সুপারিশ",
            askRecommendation: "সুপারিশ পেতে প্রশ্ন করুন।",

            mainTitle: "🤖 আমি কীভাবে আপনাকে সাহায্য করতে পারি?",
            mainDescription: "আপনার পছন্দের ভাষায় কৃষি প্রশ্ন করুন।",
            language: "আপনার ভাষা নির্বাচন করুন:",
            question: "আপনার কৃষি প্রশ্ন এখানে লিখুন...",
            voice: "🎤 কথা বলতে চাপুন",
            ask: "KisanSaathi-কে জিজ্ঞাসা করুন",
            exampleLabel: "⭐ কী জিজ্ঞাসা করবেন বুঝতে পারছেন না?",
            example: "🌱 একটি উদাহরণ চেষ্টা করুন",
            answer: "🤖 KisanSaathi-এর উত্তর",
            answerDefault: "আপনার উত্তর এখানে দেখা যাবে।",
            listen: "🔊 উত্তর শুনুন",

            smartTitle: "🧠 স্মার্ট সুপারিশ",
            smartDescription: "আপনার কৃষি প্রশ্নের ভিত্তিতে সহজ সুপারিশ পান।",
            smartDefault: "সুপারিশ পেতে কৃষি প্রশ্ন করুন।",

            quickTitle: "🌱 দ্রুত সাহায্য",
            quickDescription: "দ্রুত প্রশ্ন করতে একটি বিষয় নির্বাচন করুন।",
            cropProblem: "ফসলের সমস্যা",
            cropText: "ফসলের স্বাস্থ্য সম্পর্কে জিজ্ঞাসা করুন।",
            pestAttack: "পোকামাকড়ের আক্রমণ",
            pestText: "পোকামাকড় সম্পর্কে জিজ্ঞাসা করুন।",
            watering: "সেচ",
            waterText: "সেচের পরামর্শ পান।",
            fertilizer: "সার",
            fertilizerText: "উদ্ভিদের পুষ্টি সম্পর্কে জানুন।",
            weather: "আবহাওয়া",
            weatherText: "আবহাওয়া সম্পর্কিত পরামর্শ পান।",

            demoTitle: "🎤 KisanSaathi চেষ্টা করুন",
            demoDescription: "একটি প্রশ্নে চাপ দিন এবং KisanSaathi স্বয়ংক্রিয়ভাবে উত্তর দেবে।",
            demoCrop: "🍅 টমেটোর পাতা হলুদ হচ্ছে",
            demoPest: "🐛 পোকামাকড়ের আক্রমণ",
            demoWater: "💧 সেচের পরামর্শ",
            demoFertilizer: "🌾 সার পরামর্শ",

            imageTitle: "📸 ফসলের ছবি বিশ্লেষণ",
            imageDescription: "AI ভিত্তিক রোগ শনাক্তকরণের জন্য ফসলের ছবি আপলোড করুন।",
            imageButton: "📷 ফসলের ছবি আপলোড করুন",
            imageMessage: "ছবি পাওয়া গেছে! AI ফসল রোগ বিশ্লেষণ ভবিষ্যতে যোগ করা হবে। 🌱",

            videosTitle: "🎥 ভিডিওর মাধ্যমে কৃষি শিখুন",
            videosDescription: "সহজ ভিডিওর মাধ্যমে উপকারী কৃষি কৌশল শিখুন।",
            tomatoTitle: "🌱 টমেটো ফসলের যত্ন",
            tomatoDescription: "টমেটো চাষ ও ফসলের যত্ন সম্পর্কে জানুন।",
            pestVideoTitle: "🐛 পোকা ব্যবস্থাপনা",
            pestVideoDescription: "সাধারণ ফসলের পোকা শনাক্ত ও নিয়ন্ত্রণ করতে শিখুন।",
            irrigationTitle: "💧 স্মার্ট সেচ",
            irrigationDescription: "সেচ ও জল সংরক্ষণের পদ্ধতি শিখুন।",
            watch: "ভিডিও দেখুন",

            tipTitle: "💡 আজকের স্মার্ট কৃষি পরামর্শ",
            tip: "ফসলে জল দেওয়ার আগে মাটির আর্দ্রতা পরীক্ষা করুন।",

            footer: "🌾 KisanSaathi AI | কৃষকদের ক্ষমতায়নের প্রযুক্তি",

            listening: "🎤 শুনছি... এখন কথা বলুন।",
            unsupported: "এই ব্রাউজারে ভয়েস ইনপুট সমর্থিত নয়।",
            enterQuestion: "দয়া করে কৃষি প্রশ্ন লিখুন।",
            thinking: "🤔 KisanSaathi ভাবছে...",

            crops: {
                Tomato: "🍅 টমেটো",
                Rice: "🌾 ধান",
                Ragi: "🌾 রাগি",
                Wheat: "🌾 গম",
                Maize: "🌽 ভুট্টা",
                Sugarcane: "🎋 আখ",
                Other: "🌱 অন্যান্য"
            }
        },


        gujarati: {
            tagline: "ખેડૂતની ભાષામાં વાત કરતી ટેકનોલોજી",
            farmerMode: "👨‍🌾 ખેડૂત મોડ",

            profileTitle: "👨‍🌾 ખેડૂત પ્રોફાઇલ",
            profileDescription: "KisanSaathi ને તમારા વિશે થોડું જણાવો.",
            name: "તમારું નામ દાખલ કરો",
            crop: "🌱 તમારો મુખ્ય પાક પસંદ કરો",
            save: "💾 પ્રોફાઇલ સાચવો",
            saved: "પ્રોફાઇલ સફળતાપૂર્વક સાચવાઈ! 🌱",

            dashboard: "મારું કૃષિ ડેશબોર્ડ",
            dashboardWelcome: "તમારો વ્યક્તિગત કૃષિ સહાયક.",
            welcome: "સ્વાગત છે",
            farmer: "ખેડૂત",
            mainCrop: "મુખ્ય પાક",
            notSelected: "પસંદ કરેલ નથી",
            assistant: "સહાયક",
            ready: "તમારી મદદ માટે તૈયાર",
            todayTip: "આજની સલાહ",
            lastQuestion: "છેલ્લો પ્રશ્ન",
            noQuestion: "હજુ સુધી કોઈ પ્રશ્ન પૂછાયો નથી.",
            recommendation: "સ્માર્ટ ભલામણ",
            askRecommendation: "ભલામણ મેળવવા માટે પ્રશ્ન પૂછો.",

            mainTitle: "🤖 હું તમને કેવી રીતે મદદ કરી શકું?",
            mainDescription: "તમારી પસંદગીની ભાષામાં ખેતીનો પ્રશ્ન પૂછો.",
            language: "તમારી ભાષા પસંદ કરો:",
            question: "તમારો કૃષિ પ્રશ્ન અહીં લખો...",
            voice: "🎤 બોલવા માટે દબાવો",
            ask: "KisanSaathi ને પૂછો",
            exampleLabel: "⭐ શું પૂછવું તે ખબર નથી?",
            example: "🌱 ઉદાહરણ અજમાવો",
            answer: "🤖 KisanSaathi નો જવાબ",
            answerDefault: "તમારો જવાબ અહીં દેખાશે.",
            listen: "🔊 જવાબ સાંભળો",

            smartTitle: "🧠 સ્માર્ટ ભલામણ",
            smartDescription: "તમારા કૃષિ પ્રશ્નના આધારે સરળ ભલામણો મેળવો.",
            smartDefault: "ભલામણ મેળવવા માટે કૃષિ પ્રશ્ન પૂછો.",

            quickTitle: "🌱 ઝડપી મદદ",
            quickDescription: "ઝડપથી પ્રશ્ન પૂછવા માટે વિષય પસંદ કરો.",
            cropProblem: "પાકની સમસ્યા",
            cropText: "પાકના સ્વાસ્થ્ય વિશે પૂછો.",
            pestAttack: "જીવાતનો હુમલો",
            pestText: "જીવાતો વિશે પૂછો.",
            watering: "પાણી આપવું",
            waterText: "સિંચાઈ માર્ગદર્શન મેળવો.",
            fertilizer: "ખાતર",
            fertilizerText: "છોડના પોષક તત્વો વિશે જાણો.",
            weather: "હવામાન",
            weatherText: "હવામાન સંબંધિત સલાહ મેળવો.",

            demoTitle: "🎤 KisanSaathi અજમાવો",
            demoDescription: "પ્રશ્ન પર ટેપ કરો અને KisanSaathi આપમેળે જવાબ આપશે.",
            demoCrop: "🍅 ટામેટાના પાંદડા પીળા થઈ રહ્યા છે",
            demoPest: "🐛 જીવાતનો હુમલો",
            demoWater: "💧 પાણી આપવાની સલાહ",
            demoFertilizer: "🌾 ખાતરની સલાહ",

            imageTitle: "📸 પાકની છબીનું વિશ્લેષણ",
            imageDescription: "AI આધારિત રોગ શોધવા માટે પાકની છબી અપલોડ કરો.",
            imageButton: "📷 પાકની છબી અપલોડ કરો",
            imageMessage: "છબી મળી! AI પાક રોગ વિશ્લેષણ ભવિષ્યમાં ઉમેરવામાં આવશે. 🌱",

            videosTitle: "🎥 વિડિયો દ્વારા ખેતી શીખો",
            videosDescription: "સરળ વિડિયો દ્વારા ઉપયોગી ખેતીની પદ્ધતિઓ શીખો.",
            tomatoTitle: "🌱 ટામેટાંના પાકની સંભાળ",
            tomatoDescription: "ટામેટાંની ખેતી અને પાકની સંભાળ વિશે જાણો.",
            pestVideoTitle: "🐛 જીવાત વ્યવસ્થાપન",
            pestVideoDescription: "સામાન્ય પાકની જીવાતોને ઓળખવા અને નિયંત્રિત કરવાનું શીખો.",
            irrigationTitle: "💧 સ્માર્ટ સિંચાઈ",
            irrigationDescription: "સિંચાઈ અને પાણી બચાવવાની પદ્ધતિઓ શીખો.",
            watch: "વિડિયો જુઓ",

            tipTitle: "💡 આજની સ્માર્ટ ખેતી સલાહ",
            tip: "પાકને પાણી આપતા પહેલા જમીનની ભેજ તપાસો.",

            footer: "🌾 KisanSaathi AI | ખેડૂતોને સશક્ત બનાવતી ટેકનોલોજી",

            listening: "🎤 સાંભળી રહ્યું છે... હવે બોલો.",
            unsupported: "આ બ્રાઉઝરમાં વૉઇસ ઇનપુટ ઉપલબ્ધ નથી.",
            enterQuestion: "કૃપા કરીને કૃષિ પ્રશ્ન દાખલ કરો.",
            thinking: "🤔 KisanSaathi વિચારી રહ્યું છે...",

            crops: {
                Tomato: "🍅 ટામેટાં",
                Rice: "🌾 ચોખા",
                Ragi: "🌾 રાગી",
                Wheat: "🌾 ઘઉં",
                Maize: "🌽 મકાઈ",
                Sugarcane: "🎋 શેરડી",
                Other: "🌱 અન્ય"
            }
        },


        punjabi: {
            tagline: "ਕਿਸਾਨ ਦੀ ਭਾਸ਼ਾ ਵਿੱਚ ਗੱਲ ਕਰਨ ਵਾਲੀ ਤਕਨਾਲੋਜੀ",
            farmerMode: "👨‍🌾 ਕਿਸਾਨ ਮੋਡ",

            profileTitle: "👨‍🌾 ਕਿਸਾਨ ਪ੍ਰੋਫਾਈਲ",
            profileDescription: "KisanSaathi ਨੂੰ ਆਪਣੇ ਬਾਰੇ ਥੋੜ੍ਹਾ ਦੱਸੋ।",
            name: "ਆਪਣਾ ਨਾਮ ਦਰਜ ਕਰੋ",
            crop: "🌱 ਆਪਣੀ ਮੁੱਖ ਫਸਲ ਚੁਣੋ",
            save: "💾 ਪ੍ਰੋਫਾਈਲ ਸੇਵ ਕਰੋ",
            saved: "ਪ੍ਰੋਫਾਈਲ ਸਫਲਤਾਪੂਰਵਕ ਸੇਵ ਹੋ ਗਈ! 🌱",

            dashboard: "ਮੇਰਾ ਖੇਤੀਬਾੜੀ ਡੈਸ਼ਬੋਰਡ",
            dashboardWelcome: "ਤੁਹਾਡਾ ਨਿੱਜੀ ਖੇਤੀ ਸਹਾਇਕ।",
            welcome: "ਜੀ ਆਇਆਂ ਨੂੰ",
            farmer: "ਕਿਸਾਨ",
            mainCrop: "ਮੁੱਖ ਫਸਲ",
            notSelected: "ਚੁਣਿਆ ਨਹੀਂ ਗਿਆ",
            assistant: "ਸਹਾਇਕ",
            ready: "ਤੁਹਾਡੀ ਮਦਦ ਲਈ ਤਿਆਰ",
            todayTip: "ਅੱਜ ਦੀ ਸਲਾਹ",
            lastQuestion: "ਆਖਰੀ ਸਵਾਲ",
            noQuestion: "ਹਾਲੇ ਕੋਈ ਸਵਾਲ ਨਹੀਂ ਪੁੱਛਿਆ ਗਿਆ।",
            recommendation: "ਸਮਾਰਟ ਸਿਫਾਰਸ਼",
            askRecommendation: "ਸਿਫਾਰਸ਼ ਲੈਣ ਲਈ ਸਵਾਲ ਪੁੱਛੋ।",

            mainTitle: "🤖 ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?",
            mainDescription: "ਆਪਣੀ ਪਸੰਦ ਦੀ ਭਾਸ਼ਾ ਵਿੱਚ ਖੇਤੀਬਾੜੀ ਦਾ ਸਵਾਲ ਪੁੱਛੋ।",
            language: "ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ:",
            question: "ਆਪਣਾ ਖੇਤੀਬਾੜੀ ਸਵਾਲ ਇੱਥੇ ਲਿਖੋ...",
            voice: "🎤 ਬੋਲਣ ਲਈ ਦਬਾਓ",
            ask: "KisanSaathi ਨੂੰ ਪੁੱਛੋ",
            exampleLabel: "⭐ ਕੀ ਪੁੱਛਣਾ ਹੈ ਸਮਝ ਨਹੀਂ ਆ ਰਿਹਾ?",
            example: "🌱 ਇੱਕ ਉਦਾਹਰਨ ਅਜ਼ਮਾਓ",
            answer: "🤖 KisanSaathi ਦਾ ਜਵਾਬ",
            answerDefault: "ਤੁਹਾਡਾ ਜਵਾਬ ਇੱਥੇ ਦਿਖਾਈ ਦੇਵੇਗਾ।",
            listen: "🔊 ਜਵਾਬ ਸੁਣੋ",

            smartTitle: "🧠 ਸਮਾਰਟ ਸਿਫਾਰਸ਼",
            smartDescription: "ਆਪਣੇ ਖੇਤੀਬਾੜੀ ਦੇ ਸਵਾਲ ਦੇ ਆਧਾਰ 'ਤੇ ਸਧਾਰਨ ਸਿਫਾਰਸ਼ਾਂ ਪ੍ਰਾਪਤ ਕਰੋ।",
            smartDefault: "ਸਿਫਾਰਸ਼ ਲੈਣ ਲਈ ਖੇਤੀਬਾੜੀ ਦਾ ਸਵਾਲ ਪੁੱਛੋ।",

            quickTitle: "🌱 ਤੁਰੰਤ ਮਦਦ",
            quickDescription: "ਜਲਦੀ ਸਵਾਲ ਪੁੱਛਣ ਲਈ ਵਿਸ਼ਾ ਚੁਣੋ।",
            cropProblem: "ਫਸਲ ਦੀ ਸਮੱਸਿਆ",
            cropText: "ਫਸਲ ਦੀ ਸਿਹਤ ਬਾਰੇ ਪੁੱਛੋ।",
            pestAttack: "ਕੀੜਿਆਂ ਦਾ ਹਮਲਾ",
            pestText: "ਕੀੜਿਆਂ ਬਾਰੇ ਪੁੱਛੋ।",
            watering: "ਸਿੰਚਾਈ",
            waterText: "ਸਿੰਚਾਈ ਬਾਰੇ ਮਾਰਗਦਰਸ਼ਨ ਲਓ।",
            fertilizer: "ਖਾਦ",
            fertilizerText: "ਪੌਦਿਆਂ ਦੇ ਪੋਸ਼ਕ ਤੱਤਾਂ ਬਾਰੇ ਜਾਣੋ।",
            weather: "ਮੌਸਮ",
            weatherText: "ਮੌਸਮ ਨਾਲ ਸੰਬੰਧਿਤ ਸਲਾਹ ਲਓ।",

            demoTitle: "🎤 KisanSaathi ਅਜ਼ਮਾਓ",
            demoDescription: "ਸਵਾਲ 'ਤੇ ਟੈਪ ਕਰੋ ਅਤੇ KisanSaathi ਆਪਣੇ ਆਪ ਜਵਾਬ ਦੇਵੇਗਾ।",
            demoCrop: "🍅 ਟਮਾਟਰ ਦੇ ਪੱਤੇ ਪੀਲੇ ਹੋ ਰਹੇ ਹਨ",
            demoPest: "🐛 ਕੀੜਿਆਂ ਦਾ ਹਮਲਾ",
            demoWater: "💧 ਪਾਣੀ ਦੇਣ ਦੀ ਸਲਾਹ",
            demoFertilizer: "🌾 ਖਾਦ ਦੀ ਸਲਾਹ",

            imageTitle: "📸 ਫਸਲ ਦੀ ਤਸਵੀਰ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ",
            imageDescription: "AI ਅਧਾਰਿਤ ਬਿਮਾਰੀ ਪਛਾਣ ਲਈ ਫਸਲ ਦੀ ਤਸਵੀਰ ਅਪਲੋਡ ਕਰੋ।",
            imageButton: "📷 ਫਸਲ ਦੀ ਤਸਵੀਰ ਅਪਲੋਡ ਕਰੋ",
            imageMessage: "ਤਸਵੀਰ ਮਿਲ ਗਈ! AI ਫਸਲ ਬਿਮਾਰੀ ਵਿਸ਼ਲੇਸ਼ਣ ਭਵਿੱਖ ਵਿੱਚ ਜੋੜਿਆ ਜਾਵੇਗਾ। 🌱",

            videosTitle: "🎥 ਵੀਡੀਓ ਰਾਹੀਂ ਖੇਤੀ ਸਿੱਖੋ",
            videosDescription: "ਸਧਾਰਨ ਵੀਡੀਓ ਰਾਹੀਂ ਲਾਭਦਾਇਕ ਖੇਤੀ ਤਕਨੀਕਾਂ ਸਿੱਖੋ।",
            tomatoTitle: "🌱 ਟਮਾਟਰ ਦੀ ਫਸਲ ਦੀ ਦੇਖਭਾਲ",
            tomatoDescription: "ਟਮਾਟਰ ਦੀ ਖੇਤੀ ਅਤੇ ਫਸਲ ਦੀ ਦੇਖਭਾਲ ਬਾਰੇ ਜਾਣੋ।",
            pestVideoTitle: "🐛 ਕੀੜੇ ਪ੍ਰਬੰਧਨ",
            pestVideoDescription: "ਆਮ ਫਸਲ ਦੇ ਕੀੜਿਆਂ ਨੂੰ ਪਛਾਣਨਾ ਅਤੇ ਕੰਟਰੋਲ ਕਰਨਾ ਸਿੱਖੋ।",
            irrigationTitle: "💧 ਸਮਾਰਟ ਸਿੰਚਾਈ",
            irrigationDescription: "ਸਿੰਚਾਈ ਅਤੇ ਪਾਣੀ ਬਚਾਉਣ ਦੇ ਤਰੀਕੇ ਸਿੱਖੋ।",
            watch: "ਵੀਡੀਓ ਦੇਖੋ",

            tipTitle: "💡 ਅੱਜ ਦੀ ਸਮਾਰਟ ਖੇਤੀ ਸਲਾਹ",
            tip: "ਫਸਲਾਂ ਨੂੰ ਪਾਣੀ ਦੇਣ ਤੋਂ ਪਹਿਲਾਂ ਮਿੱਟੀ ਦੀ ਨਮੀ ਜਾਂਚੋ।",

            footer: "🌾 KisanSaathi AI | ਕਿਸਾਨਾਂ ਨੂੰ ਸਸ਼ਕਤ ਬਣਾਉਣ ਵਾਲੀ ਤਕਨਾਲੋਜੀ",

            listening: "🎤 ਸੁਣ ਰਿਹਾ ਹਾਂ... ਹੁਣ ਬੋਲੋ।",
            unsupported: "ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਵੌਇਸ ਇਨਪੁਟ ਉਪਲਬਧ ਨਹੀਂ ਹੈ।",
            enterQuestion: "ਕਿਰਪਾ ਕਰਕੇ ਖੇਤੀਬਾੜੀ ਦਾ ਸਵਾਲ ਦਰਜ ਕਰੋ।",
            thinking: "🤔 KisanSaathi ਸੋਚ ਰਿਹਾ ਹੈ...",

            crops: {
                Tomato: "🍅 ਟਮਾਟਰ",
                Rice: "🌾 ਚੌਲ",
                Ragi: "🌾 ਰਾਗੀ",
                Wheat: "🌾 ਕਣਕ",
                Maize: "🌽 ਮੱਕੀ",
                Sugarcane: "🎋 ਗੰਨਾ",
                Other: "🌱 ਹੋਰ"
            }
        }

    };


    /* =====================================================
       ADD MISSING SIMPLE LANGUAGE DATA
       ===================================================== */

    T.kannada = T.kannada;
    T.hindi = T.hindi;
    T.tamil = T.tamil;
    T.telugu = T.telugu;
    T.marathi = T.marathi;
    T.bengali = T.bengali;
    T.gujarati = T.gujarati;
    T.punjabi = T.punjabi;


    /* =====================================================
       CURRENT LANGUAGE
       ===================================================== */

    let currentLanguage =
        localStorage.getItem("kisanLanguage") || "english";


    /* =====================================================
       HELPER
       ===================================================== */

    function text(id, value) {

        const el = document.getElementById(id);

        if (el) {
            el.textContent = value;
        }
    }


    function placeholder(id, value) {

        const el = document.getElementById(id);

        if (el) {
            el.placeholder = value;
        }
    }


    /* =====================================================
       TRANSLATE WEBSITE
       ===================================================== */

    function updateLanguage() {

        const t = T[currentLanguage] || T.english;

        document.documentElement.lang =
            currentLanguage === "english" ? "en" : currentLanguage;

        text("tagline", t.tagline);
        text("farmerModeButton", t.farmerMode);

        text("profileTitle", t.profileTitle);
        text("profileDescription", t.profileDescription);

        placeholder("farmerName", t.name);

        text("cropPlaceholder", t.crop);

        text("cropTomato", t.crops.Tomato);
        text("cropRice", t.crops.Rice);
        text("cropRagi", t.crops.Ragi);
        text("cropWheat", t.crops.Wheat);
        text("cropMaize", t.crops.Maize);
        text("cropSugarcane", t.crops.Sugarcane);
        text("cropOther", t.crops.Other);

        text("saveProfileButton", t.save);

        text("dashboardTitle", t.dashboard);
        text("dashboardWelcome", t.dashboardWelcome);
        text("dashboardWelcomeTitle", t.welcome);
        text("dashboardCropTitle", t.mainCrop);
        text("dashboardAssistantTitle", t.assistant);
        text("dashboardAssistant", t.ready);
        text("dashboardTipTitle", t.todayTip);
        text("lastQuestionTitle", t.lastQuestion);
        text("recommendationTitle", t.recommendation);

        const profile = getProfile();

        if (profile.name) {
            text("dashboardName", profile.name);
        } else {
            text("dashboardName", t.farmer);
        }

        if (profile.crop) {
            text(
                "dashboardCrop",
                t.crops[profile.crop] || t.notSelected
            );
        } else {
            text("dashboardCrop", t.notSelected);
        }

        text("mainTitle", t.mainTitle);
        text("mainDescription", t.mainDescription);
        text("languageLabel", t.language);

        placeholder("question", t.question);

        text("voiceButton", t.voice);
        text("askButton", t.ask);
        text("exampleLabel", t.exampleLabel);
        text("exampleButton", t.example);

        text("answerTitle", t.answer);
        text("speakButton", t.listen);

        if (!lastAskedQuestion) {
            text("answerText", t.answerDefault);
        }

        text("smartRecommendationTitle", t.smartTitle);
        text("smartRecommendationDescription", t.smartDescription);

        if (!lastAskedQuestion) {
            text("recommendationText", t.smartDefault);
        }

        text("quickHelpTitle", t.quickTitle);
        text("quickHelpDescription", t.quickDescription);

        text("cropHelpTitle", t.cropProblem);
        text("cropHelpText", t.cropText);

        text("pestHelpTitle", t.pestAttack);
        text("pestHelpText", t.pestText);

        text("waterHelpTitle", t.watering);
        text("waterHelpText", t.waterText);

        text("fertilizerHelpTitle", t.fertilizer);
        text("fertilizerHelpText", t.fertilizerText);

        text("weatherHelpTitle", t.weather);
        text("weatherHelpText", t.weatherText);

        text("demoTitle", t.demoTitle);
        text("demoDescription", t.demoDescription);

        document.querySelectorAll(".demo-question")
            .forEach(function (button) {

                const type =
                    button.getAttribute("data-type");

                if (type === "crop") {
                    button.textContent = t.demoCrop;
                }

                if (type === "pest") {
                    button.textContent = t.demoPest;
                }

                if (type === "water") {
                    button.textContent = t.demoWater;
                }

                if (type === "fertilizer") {
                    button.textContent = t.demoFertilizer;
                }
            });

        text("cropImageTitle", t.imageTitle);
        text("cropImageDescription", t.imageDescription);
        text("cropImageButton", t.imageButton);

        text("videoTitle", t.videosTitle);
        text("videoDescription", t.videosDescription);

        text("tomatoTitle", t.tomatoTitle);
        text("tomatoDescription", t.tomatoDescription);

        text("pestTitle", t.pestVideoTitle);
        text("pestDescription", t.pestVideoDescription);

        text("irrigationTitle", t.irrigationTitle);
        text("irrigationDescription", t.irrigationDescription);

        text("tomatoButton", t.watch);
        text("pestButton", t.watch);
        text("irrigationButton", t.watch);

        text("tipTitle", t.tipTitle);

        text("footerText", t.footer);

        updateLastQuestion();

        updateRecommendation();

        localStorage.setItem(
            "kisanLanguage",
            currentLanguage
        );
    }


    /* =====================================================
       PROFILE
       ===================================================== */

    function getProfile() {

        const saved =
            localStorage.getItem("kisanProfile");

        if (!saved) {
            return {
                name: "",
                crop: ""
            };
        }

        try {
            return JSON.parse(saved);
        } catch (error) {
            return {
                name: "",
                crop: ""
            };
        }
    }


    const saveProfileButton =
        document.getElementById("saveProfileButton");


    if (saveProfileButton) {

        saveProfileButton.addEventListener(
            "click",
            function () {

                const name =
                    document.getElementById("farmerName")
                    ?.value.trim() || "";

                const crop =
                    document.getElementById("cropSelect")
                    ?.value || "";

                const profile = {
                    name: name,
                    crop: crop
                };

                localStorage.setItem(
                    "kisanProfile",
                    JSON.stringify(profile)
                );

                const t =
                    T[currentLanguage];

                text(
                    "profileMessage",
                    t.saved
                );

                showDashboard(profile);

                updateRecommendation();
            }
        );
    }


    function showDashboard(profile) {

        const dashboard =
            document.getElementById("farmerDashboard");

        if (!dashboard) return;

        dashboard.style.display = "block";

        const t =
            T[currentLanguage];

        text(
            "dashboardName",
            profile.name || t.farmer
        );

        text(
            "dashboardCrop",
            profile.crop
                ? t.crops[profile.crop]
                : t.notSelected
        );
    }


    /* =====================================================
       LANGUAGE CHANGE
       ===================================================== */

    const language =
        document.getElementById("language");


    if (language) {

        language.value = currentLanguage;

        language.addEventListener(
            "change",
            function () {

                currentLanguage =
                    this.value;

                updateLanguage();
            }
        );
    }


    /* =====================================================
       QUESTIONS
       ===================================================== */

    let lastAskedQuestion = "";


    const askButton =
        document.getElementById("askButton");


    if (askButton) {

        askButton.addEventListener(
            "click",
            askQuestion
        );
    }


    function askQuestion() {

        const input =
            document.getElementById("question");

        if (!input) return;

        const question =
            input.value.trim();

        const t =
            T[currentLanguage];

        if (!question) {

            text(
                "answerText",
                t.enterQuestion
            );

            return;
        }

        lastAskedQuestion =
            question;

        text(
            "lastQuestion",
            question
        );

        text(
            "answerText",
            t.thinking
        );

        setTimeout(function () {

            const answer =
                getAnswer(question);

            text(
                "answerText",
                answer
            );

            updateRecommendation();

        }, 400);
    }


    function updateLastQuestion() {

        const t =
            T[currentLanguage];

        text(
            "lastQuestion",
            lastAskedQuestion || t.noQuestion
        );
    }


    /* =====================================================
       ANSWERS
       ===================================================== */

    const answers = {

        english: {
            crop: "Check the leaves, stem and soil for signs of disease, pests or nutrient deficiency. Remove badly affected leaves and maintain proper watering. For serious problems, consult a local agricultural expert.",
            pest: "Check the underside of leaves and new growth for insects. Remove heavily affected parts and keep the field clean. Use only recommended pest-control methods and follow the product label.",
            water: "Water according to the crop, soil and weather. Avoid overwatering. Check soil moisture before irrigation to reduce water wastage.",
            fertilizer: "Use fertilizer according to the crop and soil requirement. A soil test is the best way to understand nutrient needs. Avoid excessive fertilizer.",
            weather: "During heavy rain, make sure excess water can drain from the field. Avoid unnecessary irrigation and watch for fungal disease after prolonged wet conditions.",
            default: "I can help with crop problems, pests, watering, fertilizer and weather. Please ask a specific farming question."
        },

        kannada: {
            crop: "ಎಲೆಗಳು, ಕಾಂಡ ಮತ್ತು ಮಣ್ಣನ್ನು ಪರಿಶೀಲಿಸಿ. ರೋಗ, ಕೀಟ ಅಥವಾ ಪೋಷಕಾಂಶದ ಕೊರತೆಯ ಲಕ್ಷಣಗಳನ್ನು ಗಮನಿಸಿ. ಹೆಚ್ಚು ಹಾನಿಗೊಳಗಾದ ಎಲೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ ಮತ್ತು ಸರಿಯಾದ ನೀರಾವರಿ ಮಾಡಿ. ಗಂಭೀರ ಸಮಸ್ಯೆಯಿದ್ದರೆ ಸ್ಥಳೀಯ ಕೃಷಿ ತಜ್ಞರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
            pest: "ಎಲೆಗಳ ಕೆಳಭಾಗ ಮತ್ತು ಹೊಸ ಬೆಳವಣಿಗೆಯಲ್ಲಿ ಕೀಟಗಳಿವೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ. ಹಾನಿಗೊಳಗಾದ ಭಾಗಗಳನ್ನು ತೆಗೆದುಹಾಕಿ ಮತ್ತು ಹೊಲವನ್ನು ಸ್ವಚ್ಛವಾಗಿಡಿ.",
            water: "ಬೆಳೆ, ಮಣ್ಣು ಮತ್ತು ಹವಾಮಾನಕ್ಕೆ ಅನುಗುಣವಾಗಿ ನೀರು ಹಾಕಿ. ಹೆಚ್ಚು ನೀರು ಹಾಕುವುದನ್ನು ತಪ್ಪಿಸಿ. ನೀರಾವರಿಗೂ ಮೊದಲು ಮಣ್ಣಿನ ತೇವಾಂಶ ಪರಿಶೀಲಿಸಿ.",
            fertilizer: "ಬೆಳೆ ಮತ್ತು ಮಣ್ಣಿನ ಅಗತ್ಯಕ್ಕೆ ಅನುಗುಣವಾಗಿ ರಸಗೊಬ್ಬರ ಬಳಸಿ. ಮಣ್ಣಿನ ಪರೀಕ್ಷೆ ಮಾಡುವುದು ಉತ್ತಮ.",
            weather: "ಭಾರೀ ಮಳೆಯ ಸಮಯದಲ್ಲಿ ಹೊಲದಲ್ಲಿ ಹೆಚ್ಚುವರಿ ನೀರು ಹೊರಹೋಗುವಂತೆ ನೋಡಿಕೊಳ್ಳಿ. ಅಗತ್ಯವಿಲ್ಲದ ನೀರಾವರಿ ತಪ್ಪಿಸಿ.",
            default: "ಬೆಳೆ ಸಮಸ್ಯೆ, ಕೀಟಗಳು, ನೀರಾವರಿ, ರಸಗೊಬ್ಬರ ಮತ್ತು ಹವಾಮಾನದ ಬಗ್ಗೆ ನಾನು ಸಹಾಯ ಮಾಡಬಹುದು."
        },

        hindi: {
            crop: "पत्तियों, तने और मिट्टी की जाँच करें। बीमारी, कीट या पोषक तत्वों की कमी के संकेत देखें। अधिक प्रभावित पत्तियों को हटाएँ और सही मात्रा में पानी दें। गंभीर समस्या में कृषि विशेषज्ञ से सलाह लें।",
            pest: "पत्तियों के नीचे और नई वृद्धि पर कीटों की जाँच करें। अधिक प्रभावित हिस्सों को हटाएँ और खेत साफ रखें।",
            water: "फसल, मिट्टी और मौसम के अनुसार पानी दें। जरूरत से ज्यादा पानी देने से बचें। सिंचाई से पहले मिट्टी की नमी जाँचें।",
            fertilizer: "फसल और मिट्टी की जरूरत के अनुसार उर्वरक का उपयोग करें। मिट्टी की जाँच करना अच्छा है।",
            weather: "भारी बारिश के दौरान खेत से अतिरिक्त पानी निकलने की व्यवस्था रखें। अनावश्यक सिंचाई से बचें।",
            default: "मैं फसल, कीट, पानी, उर्वरक और मौसम जैसे कृषि विषयों में मदद कर सकता हूँ।"
        },

        tamil: {
            crop: "இலைகள், தண்டு மற்றும் மண்ணை சரிபார்க்கவும். நோய், பூச்சி அல்லது ஊட்டச்சத்து குறைபாட்டின் அறிகுறிகளை கவனிக்கவும்.",
            pest: "இலைகளின் கீழ்பகுதி மற்றும் புதிய வளர்ச்சியில் பூச்சிகளை சரிபார்க்கவும். பாதிக்கப்பட்ட பகுதிகளை அகற்றவும்.",
            water: "பயிர், மண் மற்றும் வானிலைக்கு ஏற்ப நீர் வழங்கவும். அதிகப்படியான நீரை தவிர்க்கவும்.",
            fertilizer: "பயிர் மற்றும் மண்ணின் தேவைக்கு ஏற்ப உரத்தை பயன்படுத்தவும். மண் பரிசோதனை செய்வது நல்லது.",
            weather: "கனமழையின் போது வயலில் அதிகப்படியான நீர் வெளியேற வழி செய்யவும்.",
            default: "பயிர், பூச்சி, நீர்ப்பாசனம், உரம் மற்றும் வானிலை பற்றிய கேள்விகளில் நான் உதவ முடியும்."
        },

        telugu: {
            crop: "ఆకులు, కాండం మరియు మట్టిని పరిశీలించండి. వ్యాధి, పురుగు లేదా పోషక లోపం లక్షణాలను గమనించండి.",
            pest: "ఆకుల క్రింద మరియు కొత్త పెరుగుదలలో పురుగులను పరిశీలించండి. దెబ్బతిన్న భాగాలను తొలగించండి.",
            water: "పంట, నేల మరియు వాతావరణాన్ని బట్టి నీరు పెట్టండి. ఎక్కువ నీరు పెట్టడం నివారించండి.",
            fertilizer: "పంట మరియు నేల అవసరానికి అనుగుణంగా ఎరువులు వాడండి. నేల పరీక్ష చేయడం మంచిది.",
            weather: "భారీ వర్షాల సమయంలో పొలంలో అదనపు నీరు బయటకు వెళ్లేలా చూడండి.",
            default: "పంట సమస్యలు, పురుగులు, నీరు, ఎరువులు మరియు వాతావరణం గురించి నేను సహాయం చేయగలను."
        },

        marathi: {
            crop: "पाने, खोड आणि माती तपासा. रोग, कीड किंवा पोषक घटकांच्या कमतरतेची लक्षणे पहा.",
            pest: "पानांच्या खाली आणि नवीन वाढीवर किडी तपासा. प्रभावित भाग काढा.",
            water: "पीक, माती आणि हवामानानुसार पाणी द्या. जास्त पाणी देणे टाळा.",
            fertilizer: "पीक आणि मातीच्या गरजेनुसार खत वापरा. मातीची चाचणी करणे उत्तम आहे.",
            weather: "मुसळधार पावसात शेतातील अतिरिक्त पाणी बाहेर जाण्याची व्यवस्था करा.",
            default: "मी पीक समस्या, कीड, पाणी, खत आणि हवामानाबद्दल मदत करू शकतो."
        },

        bengali: {
            crop: "পাতা, কান্ড এবং মাটি পরীক্ষা করুন। রোগ, পোকা বা পুষ্টির ঘাটতির লক্ষণ দেখুন।",
            pest: "পাতার নিচে এবং নতুন বৃদ্ধিতে পোকা আছে কিনা দেখুন। আক্রান্ত অংশ সরিয়ে ফেলুন।",
            water: "ফসল, মাটি এবং আবহাওয়া অনুযায়ী জল দিন। অতিরিক্ত জল দেওয়া এড়িয়ে চলুন।",
            fertilizer: "ফসল ও মাটির প্রয়োজন অনুযায়ী সার ব্যবহার করুন। মাটি পরীক্ষা করা ভালো।",
            weather: "ভারী বৃষ্টির সময় জমি থেকে অতিরিক্ত জল বের হওয়ার ব্যবস্থা করুন।",
            default: "আমি ফসল, পোকা, সেচ, সার এবং আবহাওয়া সম্পর্কে সাহায্য করতে পারি।"
        },

        gujarati: {
            crop: "પાંદડા, દાંડી અને જમીન તપાસો. રોગ, જીવાત અથવા પોષક તત્વોની ઉણપના સંકેતો જુઓ.",
            pest: "પાંદડાની નીચે અને નવી વૃદ્ધિમાં જીવાત તપાસો. અસરગ્રસ્ત ભાગ દૂર કરો.",
            water: "પાક, જમીન અને હવામાન પ્રમાણે પાણી આપો. વધારે પાણી આપવાનું ટાળો.",
            fertilizer: "પાક અને જમીનની જરૂરિયાત પ્રમાણે ખાતરનો ઉપયોગ કરો.",
            weather: "ભારે વરસાદ દરમિયાન ખેતરમાંથી વધારાનું પાણી બહાર નીકળી શકે તેની વ્યવસ્થા કરો.",
            default: "હું પાકની સમસ્યા, જીવાત, પાણી, ખાતર અને હવામાન વિશે મદદ કરી શકું છું."
        },

        punjabi: {
            crop: "ਪੱਤਿਆਂ, ਤਣੇ ਅਤੇ ਮਿੱਟੀ ਦੀ ਜਾਂਚ ਕਰੋ। ਬਿਮਾਰੀ, ਕੀੜਿਆਂ ਜਾਂ ਪੋਸ਼ਕ ਤੱਤਾਂ ਦੀ ਘਾਟ ਦੇ ਸੰਕੇਤ ਵੇਖੋ।",
            pest: "ਪੱਤਿਆਂ ਦੇ ਹੇਠਾਂ ਅਤੇ ਨਵੀਂ ਵਾਧ ਵਿੱਚ ਕੀੜਿਆਂ ਦੀ ਜਾਂਚ ਕਰੋ। ਪ੍ਰਭਾਵਿਤ ਹਿੱਸੇ ਹਟਾਓ।",
            water: "ਫਸਲ, ਮਿੱਟੀ ਅਤੇ ਮੌਸਮ ਦੇ ਅਨੁਸਾਰ ਪਾਣੀ ਦਿਓ। ਜ਼ਿਆਦਾ ਪਾਣੀ ਦੇਣ ਤੋਂ ਬਚੋ।",
            fertilizer: "ਫਸਲ ਅਤੇ ਮਿੱਟੀ ਦੀ ਲੋੜ ਅਨੁਸਾਰ ਖਾਦ ਵਰਤੋ।",
            weather: "ਭਾਰੀ ਮੀਂਹ ਦੌਰਾਨ ਖੇਤ ਵਿੱਚੋਂ ਵਾਧੂ ਪਾਣੀ ਨਿਕਲਣ ਦਾ ਪ੍ਰਬੰਧ ਕਰੋ।",
            default: "ਮੈਂ ਫਸਲ ਦੀ ਸਮੱਸਿਆ, ਕੀੜਿਆਂ, ਪਾਣੀ, ਖਾਦ ਅਤੇ ਮੌਸਮ ਬਾਰੇ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ।"
        }

    };


    function getAnswer(question) {

        const q =
            question.toLowerCase();

        const a =
            answers[currentLanguage] ||
            answers.english;


        if (
            q.includes("pest") ||
            q.includes("insect") ||
            q.includes("bug") ||
            q.includes("ಕೀಟ") ||
            q.includes("कीट") ||
            q.includes("பூச்சி") ||
            q.includes("పురుగు") ||
            q.includes("कीड") ||
            q.includes("পোকা") ||
            q.includes("જીવાત") ||
            q.includes("ਕੀੜ")
        ) {
            return a.pest;
        }


        if (
            q.includes("water") ||
            q.includes("irrigation") ||
            q.includes("ನೀರು") ||
            q.includes("पानी") ||
            q.includes("सिंचाई") ||
            q.includes("நீர்") ||
            q.includes("నీరు") ||
            q.includes("पाणी") ||
            q.includes("জল") ||
            q.includes("પાણી") ||
            q.includes("ਪਾਣੀ")
        ) {
            return a.water;
        }


        if (
            q.includes("fertilizer") ||
            q.includes("manure") ||
            q.includes("ರಸಗೊಬ್ಬರ") ||
            q.includes("उर्वरक") ||
            q.includes("உரம்") ||
            q.includes("ఎరువు") ||
            q.includes("खत") ||
            q.includes("সার") ||
            q.includes("ખાતર") ||
            q.includes("ਖਾਦ")
        ) {
            return a.fertilizer;
        }


        if (
            q.includes("rain") ||
            q.includes("weather") ||
            q.includes("ಮಳೆ") ||
            q.includes("बारिश") ||
            q.includes("மழை") ||
            q.includes("వర్షం") ||
            q.includes("पाऊस") ||
            q.includes("বৃষ্টি") ||
            q.includes("વરસાદ") ||
            q.includes("ਮੀਂਹ")
        ) {
            return a.weather;
        }


        if (
            q.includes("crop") ||
            q.includes("plant") ||
            q.includes("leaf") ||
            q.includes("tomato") ||
            q.includes("ಬೆಳೆ") ||
            q.includes("फसल") ||
            q.includes("पौधा") ||
            q.includes("பயிர்") ||
            q.includes("పంట") ||
            q.includes("पीक") ||
            q.includes("ফসল") ||
            q.includes("પાક") ||
            q.includes("ਫਸਲ")
        ) {
            return a.crop;
        }


        return a.default;
    }


    /* =====================================================
       SMART RECOMMENDATION
    ===================================================== */

    function updateRecommendation() {

        const t =
            T[currentLanguage];

        const element =
            document.getElementById("dashboardRecommendation");

        const box =
            document.getElementById("recommendationText");

        let recommendation =
            t.askRecommendation;


        if (lastAskedQuestion) {

            const q =
                lastAskedQuestion.toLowerCase();

            if (
                q.includes("pest") ||
                q.includes("insect") ||
                q.includes("ಕೀಟ") ||
                q.includes("कीट") ||
                q.includes("பூச்சி") ||
                q.includes("పురుగు") ||
                q.includes("कीड") ||
                q.includes("পোকা") ||
                q.includes("જીવાત") ||
                q.includes("ਕੀੜ")
            ) {

                const r = {

                    english: "Recommendation: Inspect the underside of leaves regularly for pests.",
                    kannada: "ಶಿಫಾರಸು: ಎಲೆಗಳ ಕೆಳಭಾಗವನ್ನು ನಿಯಮಿತವಾಗಿ ಪರಿಶೀಲಿಸಿ.",
                    hindi: "सुझाव: पत्तियों के नीचे की नियमित जाँच करें।",
                    tamil: "பரிந்துரை: இலைகளின் கீழ்பகுதியை தொடர்ந்து சரிபார்க்கவும்.",
                    telugu: "సిఫార్సు: ఆకుల క్రింద భాగాన్ని క్రమం తప్పకుండా పరిశీలించండి.",
                    marathi: "शिफारस: पानांच्या खालील भागाची नियमित तपासणी करा.",
                    bengali: "সুপারিশ: পাতার নিচের অংশ নিয়মিত পরীক্ষা করুন।",
                    gujarati: "ભલામણ: પાંદડાની નીચેનો ભાગ નિયમિત તપાસો.",
                    punjabi: "ਸਿਫਾਰਸ਼: ਪੱਤਿਆਂ ਦੇ ਹੇਠਲੇ ਹਿੱਸੇ ਦੀ ਨਿਯਮਿਤ ਜਾਂਚ ਕਰੋ."
                };

                recommendation =
                    r[currentLanguage];
            }


            else if (
                q.includes("water") ||
                q.includes("irrigation") ||
                q.includes("ನೀರು") ||
                q.includes("पानी") ||
                q.includes("நீர்") ||
                q.includes("నీరు") ||
                q.includes("पाणी") ||
                q.includes("জল") ||
                q.includes("પાણી") ||
                q.includes("ਪਾਣੀ")
            ) {

                const r = {

                    english: "Recommendation: Check soil moisture before watering.",
                    kannada: "ಶಿಫಾರಸು: ನೀರು ಹಾಕುವ ಮೊದಲು ಮಣ್ಣಿನ ತೇವಾಂಶ ಪರಿಶೀಲಿಸಿ.",
                    hindi: "सुझाव: पानी देने से पहले मिट्टी की नमी जाँचें।",
                    tamil: "பரிந்துரை: நீர் வழங்குவதற்கு முன் மண்ணின் ஈரப்பதத்தை சரிபார்க்கவும்.",
                    telugu: "సిఫార్సు: నీరు పెట్టే ముందు నేల తేమను తనిఖీ చేయండి.",
                    marathi: "शिफारस: पाणी देण्यापूर्वी जमिनीतील ओलावा तपासा.",
                    bengali: "সুপারিশ: জল দেওয়ার আগে মাটির আর্দ্রতা পরীক্ষা করুন।",
                    gujarati: "ભલામણ: પાણી આપતા પહેલા જમીનની ભેજ તપાસો.",
                    punjabi: "ਸਿਫਾਰਸ਼: ਪਾਣੀ ਦੇਣ ਤੋਂ ਪਹਿਲਾਂ ਮਿੱਟੀ ਦੀ ਨਮੀ ਜਾਂਚੋ."
                };

                recommendation =
                    r[currentLanguage];
            }
        }


        if (element) {
            element.textContent =
                recommendation;
        }

        if (box) {
            box.textContent =
                lastAskedQuestion
                    ? recommendation
                    : t.smartDefault;
        }
    }


    /* =====================================================
       EXAMPLE
    ===================================================== */

    const exampleButton =
        document.getElementById("exampleButton");


    if (exampleButton) {

        exampleButton.addEventListener(
            "click",
            function () {

                const examples = {

                    english: "How can I control pests in my crop?",
                    kannada: "ನನ್ನ ಬೆಳೆಯಲ್ಲಿ ಕೀಟಗಳನ್ನು ಹೇಗೆ ನಿಯಂತ್ರಿಸಬಹುದು?",
                    hindi: "मैं अपनी फसल में कीटों को कैसे नियंत्रित कर सकता हूँ?",
                    tamil: "என் பயிரில் பூச்சிகளை எவ்வாறு கட்டுப்படுத்துவது?",
                    telugu: "నా పంటలో పురుగులను ఎలా నియంత్రించాలి?",
                    marathi: "माझ्या पिकातील किडींचे नियंत्रण कसे करावे?",
                    bengali: "আমার ফসলে কীভাবে পোকামাকড় নিয়ন্ত্রণ করব?",
                    gujarati: "મારા પાકમાં જીવાતોને કેવી રીતે નિયંત્રિત કરવી?",
                    punjabi: "ਮੇਰੀ ਫਸਲ ਵਿੱਚ ਕੀੜਿਆਂ ਨੂੰ ਕਿਵੇਂ ਕੰਟਰੋਲ ਕਰੀਏ?"
                };

                const input =
                    document.getElementById("question");

                if (input) {
                    input.value =
                        examples[currentLanguage];
                }
            }
        );
    }


    /* =====================================================
       TRY KISANSAATHI
    ===================================================== */

    document.querySelectorAll(".demo-question")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const type =
                        button.getAttribute("data-type");

                    const questions = {

                        english: {
                            crop: "Why are my tomato leaves turning yellow?",
                            pest: "How can I control pests in my crop?",
                            water: "How often should I water my crops?",
                            fertilizer: "What should I know about fertilizer for my crop?"
                        },

                        kannada: {
                            crop: "ನನ್ನ ಟೊಮೇಟೊ ಎಲೆಗಳು ಏಕೆ ಹಳದಿಯಾಗುತ್ತಿವೆ?",
                            pest: "ನನ್ನ ಬೆಳೆಯಲ್ಲಿ ಕೀಟಗಳನ್ನು ಹೇಗೆ ನಿಯಂತ್ರಿಸಬಹುದು?",
                            water: "ನನ್ನ ಬೆಳೆಗೆ ಎಷ್ಟು ಬಾರಿ ನೀರು ಹಾಕಬೇಕು?",
                            fertilizer: "ನನ್ನ ಬೆಳೆಗೆ ರಸಗೊಬ್ಬರದ ಬಗ್ಗೆ ಏನು ತಿಳಿದುಕೊಳ್ಳಬೇಕು?"
                        },

                        hindi: {
                            crop: "मेरे टमाटर के पत्ते पीले क्यों हो रहे हैं?",
                            pest: "मैं अपनी फसल में कीटों को कैसे नियंत्रित करूँ?",
                            water: "फसल में कितनी बार पानी देना चाहिए?",
                            fertilizer: "फसल के लिए उर्वरक के बारे में क्या जानना चाहिए?"
                        },

                        tamil: {
                            crop: "என் தக்காளி இலைகள் ஏன் மஞ்சளாகின்றன?",
                            pest: "என் பயிரில் பூச்சிகளை எவ்வாறு கட்டுப்படுத்துவது?",
                            water: "பயிருக்கு எவ்வளவு அடிக்கடி நீர் ஊற்ற வேண்டும்?",
                            fertilizer: "பயிருக்கு உரம் பற்றி என்ன தெரிந்து கொள்ள வேண்டும்?"
                        },

                        telugu: {
                            crop: "నా టమాటా ఆకులు ఎందుకు పసుపుగా మారుతున్నాయి?",
                            pest: "నా పంటలో పురుగులను ఎలా నియంత్రించాలి?",
                            water: "పంటకు ఎంత తరచుగా నీరు పెట్టాలి?",
                            fertilizer: "పంటకు ఎరువుల గురించి ఏమి తెలుసుకోవాలి?"
                        },

                        marathi: {
                            crop: "माझ्या टोमॅटोची पाने पिवळी का होत आहेत?",
                            pest: "माझ्या पिकातील किडींचे नियंत्रण कसे करावे?",
                            water: "पिकाला किती वेळा पाणी द्यावे?",
                            fertilizer: "पिकासाठी खताबद्दल काय माहित असावे?"
                        },

                        bengali: {
                            crop: "আমার টমেটোর পাতা হলুদ হচ্ছে কেন?",
                            pest: "আমার ফসলে কীভাবে পোকামাকড় নিয়ন্ত্রণ করব?",
                            water: "ফসলে কত ঘন ঘন জল দিতে হবে?",
                            fertilizer: "ফসলের জন্য সার সম্পর্কে কী জানা উচিত?"
                        },

                        gujarati: {
                            crop: "મારા ટામેટાના પાંદડા પીળા કેમ થઈ રહ્યા છે?",
                            pest: "મારા પાકમાં જીવાતોને કેવી રીતે નિયંત્રિત કરવી?",
                            water: "પાકને કેટલી વાર પાણી આપવું?",
                            fertilizer: "પાક માટે ખાતર વિશે શું જાણવું જોઈએ?"
                        },

                        punjabi: {
                            crop: "ਮੇਰੇ ਟਮਾਟਰ ਦੇ ਪੱਤੇ ਪੀਲੇ ਕਿਉਂ ਹੋ ਰਹੇ ਹਨ?",
                            pest: "ਮੇਰੀ ਫਸਲ ਵਿੱਚ ਕੀੜਿਆਂ ਨੂੰ ਕਿਵੇਂ ਕੰਟਰੋਲ ਕਰੀਏ?",
                            water: "ਫਸਲ ਨੂੰ ਕਿੰਨੀ ਵਾਰ ਪਾਣੀ ਦੇਣਾ ਚਾਹੀਦਾ ਹੈ?",
                            fertilizer: "ਫਸਲ ਲਈ ਖਾਦ ਬਾਰੇ ਕੀ ਜਾਣਨਾ ਚਾਹੀਦਾ ਹੈ?"
                        }

                    };


                    const input =
                        document.getElementById("question");

                    if (
                        input &&
                        questions[currentLanguage]
                    ) {

                        input.value =
                            questions[currentLanguage][type] || "";

                        askQuestion();
                    }

                }
            );

        });


    /* =====================================================
       QUICK HELP
    ===================================================== */

    window.quickQuestion =
        function (type) {

            const questions = {

                english: {
                    crop: "My crop has a problem",
                    pest: "How can I control pests?",
                    water: "How should I water my crop?",
                    fertilizer: "Which fertilizer should I use?",
                    weather: "What should I do during bad weather?"
                },

                kannada: {
                    crop: "ನನ್ನ ಬೆಳೆಯಲ್ಲಿ ಸಮಸ್ಯೆ ಇದೆ",
                    pest: "ಕೀಟಗಳನ್ನು ಹೇಗೆ ನಿಯಂತ್ರಿಸಬಹುದು?",
                    water: "ನನ್ನ ಬೆಳೆಗೆ ಹೇಗೆ ನೀರು ಹಾಕಬೇಕು?",
                    fertilizer: "ಯಾವ ರಸಗೊಬ್ಬರ ಬಳಸಬೇಕು?",
                    weather: "ಕೆಟ್ಟ ಹವಾಮಾನದ ಸಮಯದಲ್ಲಿ ಏನು ಮಾಡಬೇಕು?"
                },

                hindi: {
                    crop: "मेरी फसल में समस्या है",
                    pest: "कीटों को कैसे नियंत्रित करें?",
                    water: "फसल में पानी कैसे देना चाहिए?",
                    fertilizer: "कौन सा उर्वरक इस्तेमाल करें?",
                    weather: "खराब मौसम में क्या करना चाहिए?"
                },

                tamil: {
                    crop: "என் பயிரில் பிரச்சனை உள்ளது",
                    pest: "பூச்சிகளை எவ்வாறு கட்டுப்படுத்துவது?",
                    water: "பயிருக்கு எவ்வாறு நீர் ஊற்ற வேண்டும்?",
                    fertilizer: "எந்த உரத்தை பயன்படுத்த வேண்டும்?",
                    weather: "மோசமான வானிலையில் என்ன செய்ய வேண்டும்?"
                },

                telugu: {
                    crop: "నా పంటలో సమస్య ఉంది",
                    pest: "పురుగులను ఎలా నియంత్రించాలి?",
                    water: "పంటకు ఎలా నీరు పెట్టాలి?",
                    fertilizer: "ఏ ఎరువును ఉపయోగించాలి?",
                    weather: "చెడు వాతావరణంలో ఏమి చేయాలి?"
                },

                marathi: {
                    crop: "माझ्या पिकात समस्या आहे",
                    pest: "किडींवर नियंत्रण कसे ठेवावे?",
                    water: "पिकाला पाणी कसे द्यावे?",
                    fertilizer: "कोणते खत वापरावे?",
                    weather: "खराब हवामानात काय करावे?"
                },

                bengali: {
                    crop: "আমার ফসলে সমস্যা হয়েছে",
                    pest: "কীভাবে পোকা নিয়ন্ত্রণ করব?",
                    water: "ফসলে কীভাবে জল দিতে হবে?",
                    fertilizer: "কোন সার ব্যবহার করব?",
                    weather: "খারাপ আবহাওয়ায় কী করব?"
                },

                gujarati: {
                    crop: "મારા પાકમાં સમસ્યા છે",
                    pest: "જીવાતોને કેવી રીતે નિયંત્રિત કરવી?",
                    water: "પાકને કેવી રીતે પાણી આપવું?",
                    fertilizer: "કયું ખાતર વાપરવું?",
                    weather: "ખરાબ હવામાનમાં શું કરવું?"
                },

                punjabi: {
                    crop: "ਮੇਰੀ ਫਸਲ ਵਿੱਚ ਸਮੱਸਿਆ ਹੈ",
                    pest: "ਕੀੜਿਆਂ ਨੂੰ ਕਿਵੇਂ ਕੰਟਰੋਲ ਕਰੀਏ?",
                    water: "ਫਸਲ ਨੂੰ ਪਾਣੀ ਕਿਵੇਂ ਦੇਣਾ ਚਾਹੀਦਾ ਹੈ?",
                    fertilizer: "ਕਿਹੜੀ ਖਾਦ ਵਰਤਣੀ ਚਾਹੀਦੀ ਹੈ?",
                    weather: "ਖਰਾਬ ਮੌਸਮ ਵਿੱਚ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?"
                }

            };


            const input =
                document.getElementById("question");

            if (!input) return;

            input.value =
                questions[currentLanguage][type] || "";

            askQuestion();
        };


    /* =====================================================
       TEXT TO SPEECH
    ===================================================== */

    const speakButton =
        document.getElementById("speakButton");


    const speechLanguages = {

        english: "en-IN",
        kannada: "kn-IN",
        hindi: "hi-IN",
        tamil: "ta-IN",
        telugu: "te-IN",
        marathi: "mr-IN",
        bengali: "bn-IN",
        gujarati: "gu-IN",
        punjabi: "pa-IN"
    };


    if (speakButton) {

        speakButton.addEventListener(
            "click",
            function () {

                const answer =
                    document.getElementById("answerText");

                if (!answer) return;

                const speech =
                    new SpeechSynthesisUtterance(
                        answer.textContent
                    );

                speech.lang =
                    speechLanguages[currentLanguage];

                speech.rate = 0.9;

                speechSynthesis.cancel();

                speechSynthesis.speak(
                    speech
                );
            }
        );
    }


    /* =====================================================
       VOICE INPUT
    ===================================================== */

    const voiceButton =
        document.getElementById("voiceButton");


    if (voiceButton) {

        voiceButton.addEventListener(
            "click",
            function () {

                const Recognition =
                    window.SpeechRecognition ||
                    window.webkitSpeechRecognition;

                const t =
                    T[currentLanguage];

                if (!Recognition) {

                    alert(t.unsupported);

                    return;
                }

                const recognition =
                    new Recognition();

                recognition.lang =
                    speechLanguages[currentLanguage];

                recognition.interimResults =
                    false;

                text(
                    "voiceButton",
                    t.listening
                );

                recognition.start();


                recognition.onresult =
                    function (event) {

                        const result =
                            event.results[0][0]
                            .transcript;

                        const input =
                            document.getElementById(
                                "question"
                            );

                        if (input) {
                            input.value =
                                result;
                        }

                        text(
                            "voiceButton",
                            t.voice
                        );
                    };


                recognition.onerror =
                    function () {

                        text(
                            "voiceButton",
                            t.voice
                        );
                    };


                recognition.onend =
                    function () {

                        text(
                            "voiceButton",
                            t.voice
                        );
                    };

            }
        );
    }


    /* =====================================================
       CROP IMAGE
    ===================================================== */

    const cropImageInput =
        document.getElementById(
            "cropImageInput"
        );

    const cropImageButton =
        document.getElementById(
            "cropImageButton"
        );


    if (cropImageButton) {

        cropImageButton.addEventListener(
            "click",
            function () {

                if (cropImageInput) {
                    cropImageInput.click();
                }
            }
        );
    }


    if (cropImageInput) {

        cropImageInput.addEventListener(
            "change",
            function () {

                const t =
                    T[currentLanguage];

                if (
                    cropImageInput.files &&
                    cropImageInput.files.length > 0
                ) {

                    text(
                        "cropImageMessage",
                        t.imageMessage
                    );
                }
            }
        );
    }


    /* =====================================================
       VIDEOS
    ===================================================== */

    document.querySelectorAll(
        ".video-card[data-video-url]"
    ).forEach(function (card) {

        card.addEventListener(
            "click",
            function () {

                const url =
                    card.getAttribute(
                        "data-video-url"
                    );

                if (url) {
                    window.open(
                        url,
                        "_blank"
                    );
                }
            }
        );
    });


    /* =====================================================
       FARMER MODE
    ===================================================== */

    const farmerModeButton =
        document.getElementById(
            "farmerModeButton"
        );


    if (farmerModeButton) {

        farmerModeButton.addEventListener(
            "click",
            function () {

                document.body.classList.toggle(
                    "farmer-mode"
                );
            }
        );
    }


    /* =====================================================
       DAILY TIPS
    ===================================================== */

    const tips = {

        english: [
            "Check the soil moisture before watering your crops.",
            "Remove diseased leaves early to protect healthy plants.",
            "Keep your field clean to reduce pest problems."
        ],

        kannada: [
            "ಬೆಳೆಗಳಿಗೆ ನೀರು ಹಾಕುವ ಮೊದಲು ಮಣ್ಣಿನ ತೇವಾಂಶ ಪರಿಶೀಲಿಸಿ.",
            "ಆರೋಗ್ಯಕರ ಸಸಿಗಳನ್ನು ರಕ್ಷಿಸಲು ರೋಗಪೀಡಿತ ಎಲೆಗಳನ್ನು ಬೇಗ ತೆಗೆದುಹಾಕಿ.",
            "ಕೀಟ ಸಮಸ್ಯೆ ಕಡಿಮೆ ಮಾಡಲು ಹೊಲವನ್ನು ಸ್ವಚ್ಛವಾಗಿಡಿ."
        ],

        hindi: [
            "फसल में पानी देने से पहले मिट्टी की नमी जांचें।",
            "स्वस्थ पौधों की रक्षा के लिए रोगग्रस्त पत्तियों को जल्दी हटाएँ।",
            "कीटों की समस्या कम करने के लिए खेत साफ रखें।"
        ],

        tamil: [
            "பயிர்களுக்கு நீர் ஊற்றுவதற்கு முன் மண்ணின் ஈரப்பதத்தை சரிபார்க்கவும்.",
            "ஆரோக்கியமான செடிகளை பாதுகாக்க நோயுற்ற இலைகளை அகற்றவும்.",
            "பூச்சி பிரச்சனையை குறைக்க வயலை சுத்தமாக வைத்திருக்கவும்."
        ],

        telugu: [
            "పంటలకు నీరు పెట్టే ముందు నేల తేమను తనిఖీ చేయండి.",
            "ఆరోగ్యకరమైన మొక్కలను రక్షించడానికి వ్యాధిగ్రస్త ఆకులను తొలగించండి.",
            "పురుగు సమస్యలను తగ్గించడానికి పొలాన్ని శుభ్రంగా ఉంచండి."
        ],

        marathi: [
            "पिकांना पाणी देण्यापूर्वी जमिनीतील ओलावा तपासा.",
            "निरोगी झाडांचे संरक्षण करण्यासाठी रोगट पाने काढा.",
            "किडींची समस्या कमी करण्यासाठी शेत स्वच्छ ठेवा."
        ],

        bengali: [
            "ফসলে জল দেওয়ার আগে মাটির আর্দ্রতা পরীক্ষা করুন।",
            "সুস্থ গাছ রক্ষার জন্য রোগাক্রান্ত পাতা সরিয়ে ফেলুন।",
            "পোকার সমস্যা কমাতে জমি পরিষ্কার রাখুন।"
        ],

        gujarati: [
            "પાકને પાણી આપતા પહેલા જમીનની ભેજ તપાસો.",
            "તંદુરસ્ત છોડને બચાવવા માટે રોગગ્રસ્ત પાંદડા દૂર કરો.",
            "જીવાતની સમસ્યા ઘટાડવા માટે ખેતર સ્વચ્છ રાખો."
        ],

        punjabi: [
            "ਫਸਲਾਂ ਨੂੰ ਪਾਣੀ ਦੇਣ ਤੋਂ ਪਹਿਲਾਂ ਮਿੱਟੀ ਦੀ ਨਮੀ ਜਾਂਚੋ।",
            "ਸਿਹਤਮੰਦ ਪੌਦਿਆਂ ਦੀ ਰੱਖਿਆ ਲਈ ਬਿਮਾਰ ਪੱਤੇ ਹਟਾਓ।",
            "ਕੀੜਿਆਂ ਦੀ ਸਮੱਸਿਆ ਘਟਾਉਣ ਲਈ ਖੇਤ ਸਾਫ਼ ਰੱਖੋ।"
        ]

    };


    let tipIndex = 0;


    function updateTip() {

        const list =
            tips[currentLanguage] ||
            tips.english;

        text(
            "tipText",
            list[tipIndex % list.length]
        );

        tipIndex++;
    }


    /* =====================================================
       START WEBSITE
    ===================================================== */

    updateLanguage();

    const savedProfile =
        getProfile();

    if (
        savedProfile.name ||
        savedProfile.crop
    ) {
        showDashboard(
            savedProfile
        );
    }

    updateTip();

    setInterval(
        updateTip,
        10000
    );

});