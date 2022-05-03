const makeupDetails = document.querySelector(".makeup-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id)

if (id === null) {
    location.href = "/";
}

const detailsURL = "http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=vegan" + id;

async function fetchMakeupDetails() {
    try {
        const details = await fetch(detailsURL);
        const result = await details.json();
        console.log(result);

        makeupDetails.innerHTML = "";

        makeupDetails.innerHTML = `<h2>${result.name}</h2>
        <p>Brand: ${result.brand}</p>
        <p>Product details: ${result.description}</p>
        <img src="${result.image_link}" alt"${result.name}"></img>
        `;

    }
    catch (error) {

        makeupDetails.innerHTML = `<div id="error_msg">An error occured when calling the API </div>`;

        console.log(error);
    }



}

fetchMakeupDetails();

console.log (fetchMakeupDetails())