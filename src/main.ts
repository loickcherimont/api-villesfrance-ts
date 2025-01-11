import './stylesheets/general.css';
import { City } from './ts/components/city.ts';
import { countResults, fetchFranceCities, toggleDarkLightMode, uiReset } from './ts/utils/functions.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <button id='modeToggler' type='button' class='btn btn-primary'>Dark/Light Mode</button>
    <!-- FORM -->
    <!-- Error message for not valid requests -->
    <div class='container d-flex flex-column justify-content-around' style='height: auto;'>
        <h1 class="text-primary-emphasis text-center display-h1">Villes de France 🇫🇷</h1>
        <div class="mt-2 d-none alert alert-danger" role="alert" id="error">
            Veuillez entrer un nom de ville française valide!
        </div>
        <form id="form" autocomplete="off" method="get" class="d-flex">
            
            <div class="input-group mb-3 d-flex flex-column flex-md-row gap-3">
                <label for="userRequestCity" class="form-label w-100 text-center text-md-start">Entrer le nom d'une commune de France :</label>
                <input type="text" class="form-control rounded d-inline-flex" name="user_request" id="userRequestCity"
                    placeholder="Paris, Marseille, ...">
                <button type="submit" class="btn btn-outline-primary rounded" id="btnSubmit ">Rechercher</button>
            </div>

        </form>
        <!-- Show all found cities -->
        <!-- The number of found cities
        <div id='resultsDigits'></div>
        <!-- The HTML elements for each cities here -->
        <div id='results' class='d-flex flex-wrap'></div>
        <hr>
        <footer class="py-3 my-4">
            <p class="text-center text-muted">&copy; 2024 - Loick Cherimont</p>
        </footer>
    </div>

    <!-- Templates -->
<!--    <template id="cardLayout">
        <div class="mt-2 card">
            <div class="card-body">
                <h5 class="card-title text-muted">Nom : <span class="text-primary-emphasis" id="cityName"></span></h5>
                <h6 class="card-text mb-2 text-muted">Code departement : <span class="text-primary-emphasis"
                        id="cityDepartmentCode"></span></h6>
                <p class="card-text text-muted">Nombre d'habitants : <span class="text-primary-emphasis"
                        id="cityPopulation"></span></p>
                <p class="card-text text-muted">Codes postaux : <span class="text-primary-emphasis"
                        id="cityZips"></span></p>
            </div>
        </div>
    </template> -->
`





// Utilité?
const cities = await fetchFranceCities('https://geo.api.gouv.fr/communes?&fields=code,nom,departement,codesPostaux,population');
try {
    // How to use this try block
} catch (e) {
    console.error(e);
}

document.getElementById('form')?.addEventListener('submit', (ev: Event) => {
        ev.preventDefault();
        uiReset();
        const form = ev.target as HTMLFormElement;

        let formData = new FormData(form);

        let q = prepare(formData.get('user_request'), cities);

        if(!q) {
            console.error("'q' is null!");
            return;
        }
        uiDisplay(q, cities);
        countResults();
        form.reset();
    })

// Clean the query
// Check if it is valid
// Before the API works
// Parameters: query string and data json
function prepare(query: FormDataEntryValue | null, data: Array<City>) {
    let onlyNames = [];
    const emptyError = document.querySelector<HTMLDivElement>('#error')!;

    query = query!.toString().trim();

    // Check if request is empty
    // to display error message
    if (!query) {
        emptyError.classList.remove('d-none');
        return query
    } else {
        emptyError.classList.add('d-none');
    }

    // Create an array containing only city names
    // onlyNames = data.map(city => city['nom'].toLowerCase());
    // console.log(data);
    onlyNames = data.map(city => city['nom'].toLowerCase())

    if (onlyNames.indexOf(query.toLowerCase()) === -1) {
        console.log("N'existe pas!")
        emptyError.classList.remove('d-none');
        return null
    } else {
        console.log("Existe!")
        emptyError.classList.add('d-none');
    }

    return query;
}

// Display on the screen the results
// Of user query
// Parameters: query string and data json
function uiDisplay(query: string, data: Array<City>) {

    data.forEach(city => {
        
        // To ease the research
        // Change normal case into lower case
        let caseInsensitiveCity = city['nom'].toLowerCase();

        if (caseInsensitiveCity === query.toLowerCase()) {
            let cityCardTemplate = document.getElementById('cardLayout') as HTMLTemplateElement;

            // Clone '.card' element
            // Use it to display results of researches
            let cityCard = cityCardTemplate.content.cloneNode(true) as DocumentFragment;

            console.log(city);


            cityCard.querySelector<HTMLSpanElement>('#cityName')!.innerText = city['nom'].toUpperCase();
            cityCard.querySelector<HTMLSpanElement>('#cityDepartmentInfos')!.innerText = `${city.departement.code.toString()} - ${city.departement.nom}`;
            cityCard.querySelector<HTMLSpanElement>('#cityPopulation')!.innerText = `${city['population'].toString()} habitants`;

            // Reset #cityZips content
            cityCard.querySelector<HTMLSpanElement>('#cityZips')!.innerHTML = '';

            city['codesPostaux'].forEach(codePostal => {
                const codePostalItem = document.createElement('span');
                codePostalItem.setAttribute('class', 'badge text-bg-primary');
                codePostalItem.innerText = codePostal;

                //           <span class="badge text-bg-primary">44000</span>
                cityCard.querySelector<HTMLSpanElement>('#cityZips')?.appendChild(codePostalItem);
            });
            // cityCard.querySelector<HTMLSpanElement>('#cityZips')!.innerText = city['codesPostaux'].toString();

            document.querySelector('#results')?.append(cityCard);
        }
    });
}

document.getElementById('modeToggler')?.addEventListener('click', toggleDarkLightMode);