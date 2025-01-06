export interface City {
    nom: string;
    departmentCode: string;
    population: number;
    zips: string[];
}

/*
        let caseInsensitiveCity = city['nom'].toLowerCase();

        if (caseInsensitiveCity === query.toLowerCase()) {
            let cityCardTemplate = document.getElementById('cardLayout').content.cloneNode(true);
            let cityCard = cityCardTemplate.querySelector('.card');

            cityCard.querySelector('#cityName').innerText = city['nom'];
            cityCard.querySelector('#cityDepartmentCode').innerText = city['codeDepartement'];
            cityCard.querySelector('#cityPopulation').innerText = city['population'];
            cityCard.querySelector('#cityZips').innerText = city['codesPostaux'];
        }

*/