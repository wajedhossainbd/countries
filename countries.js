// 1. Declare a varriable eith function for fetch data from api https://restcountries.com/v3.1/all
// 2. Declare a function to get data from api 
// 3. inside fuction create html element
// 4. append html to html file
// 5. cll fetch data fuction


const  loadCountries = () =>{
fetch ('https://restcountries.com/v3.1/all')
.then (res => res.json())
.then (data => displayCountries(data));
}


const displayCountries = countries =>{

    const countriesContainer = document.getElementById('countries-container');
          countries.forEach(country => {
    const countryDiv = document.createElement('div')
          countryDiv.classList.add('country', 'rounded-md', 'p-2', 'bg-slate-700','drop-shadow-xl','text-center');
          countryDiv.innerHTML = `<h2 class="mt-6 text-2xl font-bold text-white">${country.name.common}</h2>
          <p class="mb-6 mt-2 text-gray-400">Capital: ${country.capital ? country.capital[0]: 'No Capital Found'}</p>
          <button class="my-6 bg-white text-orange-400 font-semibold rounded px-5 py-2 mb-2 hover:bg-slate-800 hover:text-white" onclick="loadCountryDetail('${country.cca2}'),loadCountryDetail('${country.cca2}')">view details</button>
          `;

        countriesContainer.appendChild(countryDiv);
    } 
        
    );
}





const loadCountryDetail = (code) => {

    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then (data => displayCountryDetail(data[0]));

}

const displayCountryDetail = country =>{
    const countryDetail = document.getElementById('country-detail')
    countryDetail.classList.add('bg-slate-500', 'minw-80', 'minh-60', 'rounded-xl', 'p-6', 'drop-shadow-lg');
    countryDetail.innerHTML = `
     <h2 class="text-center font-semibold text-lg text-white mb-5 text-center" >${country.name.common}</h2>
     <img class="rounded-lg" src="${country.flags.png}">
     <div class="bg-white rounded-lg px-4 py-2 mt-4 text-slate-700">
     <p>Capital: ${country.capital ? country.capital[0]: 'No Capital Found'}</p>
     <p>Region: ${country.region}</p>
     <p>Area: ${country.area}Km</p>
     <p>Population: ${country.population}</p>
     <p>Independance Status: ${country.independent}</p>
     </div>
     `
     countryDetail.appendChild(countryDetail);
}

loadCountries();