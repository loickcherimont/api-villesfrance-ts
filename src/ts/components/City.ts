// Template for each city

import { Departement } from './Departement';

// Found by user using search bar
export interface City {
    nom: string;
    departement: Departement;
    population: number;
    codesPostaux: string[];
}