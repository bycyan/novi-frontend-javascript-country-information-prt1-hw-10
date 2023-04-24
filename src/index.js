import axios from "axios";

async function fetchCountries() {
    try {
        const result = await axios.get('https://restcountries.com/v2/all');
        const countries = result.data;
        console.log(result.data)
        countries.sort((a, b) => {
            return a.population - b.population;
        });
        createListItems(countries);

    } catch (e) {
        console.error(e);
    }
}

void fetchCountries()

function createListItems(countries) {
    const countryList = document.getElementById('country-list');
    countryList.innerHTML = countries.map((country) => {
        return `
      <li>
        <img src="${country.flag}" alt="Vlag van ${country.name}" class="flag" />
        <span class="${getRegionClass(country.region)}">${country.name}</span>
        <p class="population">Has a population of ${country.population.toLocaleString()} people</p>
      </li>
    `;
    }).join('');
}

    function getRegionClass(currentRegion) {
        switch (currentRegion) {
            case 'Africa':
                return 'blue';
            case 'Americas':
                return 'green';
            case 'Asia':
                return 'red';
            case 'Europe':
                return 'yellow';
            case 'Oceania':
                return 'purple';
            default:
                return 'default';
        }
    }



