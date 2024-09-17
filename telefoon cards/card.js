// Mock data (vervang dit met fetch-aanroep als je een externe API gebruikt)
const telefoons = [
    {
        naam: "iPhone 13",
        afbeelding: "https://example.com/iphone13.jpg",
        beschrijving: "De nieuwste iPhone met geavanceerde functies."
    },
    {
        naam: "Samsung Galaxy S21",
        afbeelding: "https://example.com/galaxy-s21.jpg",
        beschrijving: "De nieuwste Samsung Galaxy met indrukwekkende prestaties."
    },
    {
        naam: "Google Pixel 6",
        afbeelding: "https://example.com/pixel6.jpg",
        beschrijving: "De nieuwste Google-telefoon met geavanceerde AI-functies."
    }
];

// Laad telefoondata in kaarten
function laadTelefoonKaarten() {
    const cardsContainer = document.getElementById('telefoon-cards');

    telefoons.forEach(telefoon => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${telefoon.afbeelding}" alt="${telefoon.naam}">
            <h2>${telefoon.naam}</h2>
            <p>${telefoon.beschrijving}</p>
        `;

        cardsContainer.appendChild(card);
    });
}

// Initialiseer kaarten bij het laden van de pagina
document.addEventListener('DOMContentLoaded', laadTelefoonKaarten);
