const makeupDetails = document.querySelector(".makeup-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id)

if (id === null) {
    location.href = "/";
}

const detailsURL =   'http://makeup-api.herokuapp.com/api/v1/products/' + id + '.json';

console.log (detailsURL)

async function fetchMakeupDetails() {
    try {
        const details = await fetch(detailsURL);
        const result = await details.json();
        console.log(result);
        
        makeupDetails.innerHTML = "";


       

        makeupDetails.innerHTML = 
        ` <div class="detail-description">
        <h3>${result.name}</h3>
        <p>Brand: ${result.brand}</p>
        <p>Brand: ${result.price}$ ${result.currency}</p>
        <a href="${result.product_link}"><p>Link to the product</p> </a>
        <p>Product details: ${result.description}</p></div>
        <img src="${result.image_link}" alt="${result.name}" class="detail-img"></img>
        `;

       

      

    }
    catch (error) {

        makeupDetails.innerHTML = `<div id="error_msg">An error occured when calling the API </div>`;
        console.log(error);
    }

}

fetchMakeupDetails();

