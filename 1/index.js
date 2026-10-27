const quotes = [
    "The only way to do great work is to love what you do.",
    "Believe you can, and you're halfway there.",
    "Success is not final, failure is not fatal.",
    "It always seems impossible until it's done.",
    "Dream big and dare to fail.",
    "Don't watch the clock; do what it does. Keep going.",
    "The future depends on what you do today.",
    "Great things never come from comfort zones.",
    "Apple.",
    "Banana.",
    "Grapes.",
    "Lime.",
    "Orange.",
    "Your limitation—it's only your imagination.",
    "Stay hungry, stay foolish."
];

const quote = document.getElementById("qt");

const btn = document.getElementById("bt1");

btn.addEventListener("click", () => {
    const index = Math.floor(Math.random() * (14 - 0 + 1));
    quote.textContent = quotes[index];
});