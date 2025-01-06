import { City } from '../components/city.ts';
import { countResults, fetchFranceCities, uiReset } from "../utils/functions.ts";

const cities = await fetchFranceCities("https://geo.api.gouv.fr/communes");


// Utilité?
try {
    // const cities = await fetchFranceCities("https://geo.api.gouv.fr/communes");
    // process(cities);
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

    // if(query !== undefined || query !== null) {
    query = query!.toString().trim();
    // }



    // console.log(query, query.length)

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
            cityCardTemplate.content.cloneNode(true);

            let cityCard = cityCardTemplate.querySelector<HTMLDivElement>('.card')!;


            cityCard.querySelector<HTMLSpanElement>('#cityName')!.innerText = city['nom'];
            cityCard.querySelector<HTMLSpanElement>('#cityDepartmentCode')!.innerText = city['departmentCode'];
            cityCard.querySelector<HTMLSpanElement>('#cityPopulation')!.innerText = city['population'].toString();
            cityCard.querySelector<HTMLSpanElement>('#cityZips')!.innerText = city['zips'].toString();

            document.querySelector('#results')?.append(cityCard);
        }
    });
}