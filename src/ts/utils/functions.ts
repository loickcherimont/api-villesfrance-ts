export async function fetchFranceCities(url: string): Promise<any> {
    const response: Response = await fetch(url);
    if(!response.ok) {
        return `Status: ${response.status}`;
    }

    return response.json();
}

// Indicate how many cities were found
export function countResults(): void {

    document.getElementById('resultsDigits')!.innerHTML = '';
    
    const cards = document.getElementById('results')?.querySelectorAll('.card');
    
    let resultsIndicator = document.createElement('p');
    resultsIndicator.setAttribute('class', 'mt-2 fs-2 text-primary-emphasis text-center fw-semibold');

    resultsIndicator.innerText = cards!.length > 1 ? `${cards?.length} villes trouvées`:`${cards?.length} ville trouvée`;

    document.getElementById('resultsDigits')?.prepend(resultsIndicator);

}

// Empty UI results
export const uiReset = (): void => {
    document.getElementById('results')!.innerHTML = '';
}

export function toggleDarkLightMode(): void {
    const website = document.querySelector('html');

    if(website?.getAttribute('data-bs-theme') === 'dark') {
        website?.setAttribute('data-bs-theme', '');
        return;
    }

    website?.setAttribute('data-bs-theme', 'dark');
}