const camera =
document.getElementById("camera");
let faceDetectionReady = false;
const startButton =
document.getElementById("startButton");
const roastButton =
document.getElementById("roastButton");

startButton.addEventListener("click", async () => {
    const stream = await
    navigator.mediaDevices.getUserMedia({
        video: true
    });
    camera.srcObject = stream;
    await camera.onplay();
});
roastButton.addEventListener("click", async () => { if (!faceDetectionReady) {
    document.getElementById("message").textContent =
        "Face detector is still waking up... 😴";
    return;
}
    const roasts = [
    "🚨 BREAKING NEWS: Student spotted attempting to study.",
    "💀 Your productivity just left the group chat.",
    "🧠 Brain.exe has stopped responding.",
    "📚 The syllabus saw you and immediately lost hope.",
    "⏳ You have spent more time avoiding work than doing it.",
    "👀 The camera detected a human. Academic evidence not found.",
    "🔥 FOCUS LEVEL: Absolutely cooked.",
    "💻 You opened your laptop. Unfortunately, that was the achievement.",
    "📢 Your assignment would like to know your location.",
    "🪦 Here lies today's productivity.",
    "⚠️ Warning: Severe lack of academic activity detected.",
    "🎓 Graduation is loading... at 2% efficiency.",
    "📉 Productivity graph has officially entered the basement.",
    "🧍 Human detected. Student mode unavailable.",
    "☕ Caffeine cannot fix this situation.",
    "🔍 Searching for motivation... No results found.",
    "📖 Your textbook has been sitting there longer than your motivation.",
    "🚨 Procrastination department has opened a case against you.",
    "🧠 Thought detected. Processing... just kidding.",
    "🌝 You said 'I'll study later.' Later has filed a complaint.",
    "⚡ Your Wi-Fi has more connection to your studies than you do.",
    "📚 One chapter away from understanding everything. Unfortunately, you haven't opened it.",
    "🎯 Mission objective: Focus. Mission status: tragic.",
    "🤡 You came here for motivation. This website is also disappointed.",
    "🛌 Your bed is currently winning the academic competition.",
    "💀 Even the loading screen is more productive than you.",
    "📊 Productivity report: We have decided not to publish the results.",
    "🚪 Your academic comeback is outside. It has been waiting for hours.",
    "🫠 At this point, even 'I'll start tomorrow' needs a backup plan.",
    "🏆 Congratulations! You have unlocked: Professional Procrastinator."
];

   const detections = await faceapi.detectAllFaces(
    camera,
    new faceapi.TinyFaceDetectorOptions()
);
if (detections.length === 0) {

    document.getElementById("message").textContent =
    "👻 HUMAN NOT FOUND. Please return to your academic responsibilities.";
    return;
}
if (detections.length > 1) {
    document.getElementById("message").textContent =
        "👥 GROUP PROJECT DETECTED. Somehow nobody is doing the project. 💀";
    return;
}
    let randomRoast;

do {
    randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
} while (randomRoast === document.getElementById("message").textContent);

    document.getElementById("message").textContent = randomRoast;
});
faceapi.nets.tinyFaceDetector.loadFromUri("/models").then(() => {
    faceDetectionReady = true;
    console.log("Face detector ready!");
});