// This file contains the main JavaScript logic for the application.
// It handles the button click event, retrieves user input, matches it to the predefined categories,
// and updates the results div with the corresponding verses or an error message if no match is found.

document.addEventListener('DOMContentLoaded', () => {
    const verses = {
        depression: [
            { text: "Indeed, with hardship [will be] ease.", reference: "Quran 94:6", surah: "Al-Inshirah" },
            { text: "And do not lose hope in the mercy of Allah.", reference: "Quran 39:53", surah: "Az-Zumar" },
            // Add more verses as needed
        ],
        anxious: [
            { text: "And whoever fears Allah - He will make for him a way out.", reference: "Quran 65:2", surah: "At-Talaq" },
            { text: "Indeed, Allah is with the patient.", reference: "Quran 2:153", surah: "Al-Baqarah" },
            // Add more verses as needed
        ],
        success: [
            { text: "And whoever strives only for Our cause, We will guide him to Our paths.", reference: "Quran 29:69", surah: "Al-Ankabut" },
            { text: "Indeed, success is with patience.", reference: "Quran 2:153", surah: "Al-Baqarah" },
            // Add more verses as needed
        ],
        happiness: [
            { text: "And remember Me; I will remember you.", reference: "Quran 2:152", surah: "Al-Baqarah" },
            { text: "Indeed, the believers are those who, when Allah is mentioned, their hearts become fearful.", reference: "Quran 8:2", surah: "Al-Anfal" },
            // Add more verses as needed
        ]
    };

    const inputField = document.getElementById('concern-input');
    const resultDiv = document.getElementById('result');
    const button = document.getElementById('get-verse');

    button.addEventListener('click', () => {
        const userInput = inputField.value.toLowerCase();
        const versesForConcern = verses[userInput];

        if (versesForConcern) {
            resultDiv.innerHTML = versesForConcern.map(verse => 
                `<div class="verse-box">
                    <p>${verse.text}</p>
                    <p><strong>${verse.reference}</strong> (${verse.surah})</p>
                </div>`
            ).join('');
        } else {
            resultDiv.innerHTML = '<p>No verses found for this concern. Please try another.</p>';
        }
    });
});