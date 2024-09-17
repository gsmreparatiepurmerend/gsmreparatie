// Functie om telefoongegevens van de API te laden
function laadTelefoonGegevens() {
    fetch('card.json') // Zorg ervoor dat 'card.json' de juiste JSON bevat
        .then(response => {
            if (!response.ok) {
                throw new Error('Netwerkrespons was niet OK');
            }
            return response.json();
        })
        .then(data => {
            laadTelefoonKaarten(data.iPhones);
        })
        .catch(error => {
            console.error('Er was een probleem met de fetch-operatie:', error);
        });
}

// Functie om telefoondata in kaarten te laden
function laadTelefoonKaarten(telefoons) {
    const container = document.getElementById('telefoon-container'); // Maak een div met dit ID in je HTML
    container.innerHTML = ''; // Leeg de container voordat nieuwe kaarten worden toegevoegd

    let rowContainer = null;

    telefoons.forEach((telefoon, index) => {
        if (index % 7 === 0) {
            // Voeg een nieuwe rij toe voor elke 3 kaarten
            rowContainer = document.createElement('div');
            rowContainer.classList.add('row');
            container.appendChild(rowContainer);
        }

        const figure = document.createElement('figure');
        figure.classList.add('snip1418');

        figure.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img src="${telefoon.images.front}" alt="${telefoon.name} - Front" class="telefoon-afbeelding-voor" />
                </div>
                <div class="card-back">
                    <img src="${telefoon.images.back}" alt="${telefoon.name} - Back" class="telefoon-afbeelding-achter" />
                </div>
            </div>
            <div class="add-to-cart">
                <i class="ion-android-add"></i><span>Add to Cart</span>
            </div>
            <figcaption>
                <h3>${telefoon.name} (${telefoon.releaseYear})</h3>
                <p>Schermgrootte: ${telefoon.screenSizeInches}"</p>
                <p>Kenmerken: ${telefoon.features.join(', ')}</p>
            </figcaption>
            <a href="#"></a>
        `;

        rowContainer.appendChild(figure);
    });
}

// Initialiseer de API-aanroep bij het laden van de pagina
document.addEventListener('DOMContentLoaded', laadTelefoonGegevens);
