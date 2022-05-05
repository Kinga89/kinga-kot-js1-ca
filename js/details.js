const makeupDetails = document.querySelector(".makeup-details");
const headTitle = document.querySelector("title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

if (id === null) {
  location.href = "/";
}

const detailsURL =
  "http://makeup-api.herokuapp.com/api/v1/products/" + id + ".json";

console.log(detailsURL);

async function fetchMakeupDetails() {
  try {
    const details = await fetch(detailsURL);
    const result = await details.json();
    console.log(result);

    makeupDetails.innerHTML = "";

    makeupDetails.innerHTML = `<div class="detail-description">
        <h2>${result.name}</h2>
        <p class="brand-name">Brand: ${result.brand}</p>
        <p class="currency">Price: $${result.price} ${result.currency}</p>
        <a href="${result.product_link}"><p>Link to the product <i class="fas fa-angle-double-right"></i></p> </a>
        <p>Product details: ${result.description}</p></div>
        <img src="${result.image_link}" alt="${result.name}" class="detail-img"></img>
        `;

    headTitle.innerHTML += `${result.name}`;

    const brandName = document.querySelector(".brand-name");
    const currency = document.querySelector(".currency");

    if (result.brand === null) {
      brandName.innerHTML = `Brand: ${result.name}`;
    }

    if (!result.currency) {
      currency.innerHTML = `Price: $${result.price}`;
    }
  } catch (error) {
    makeupDetails.innerHTML = `<div id="error_msg">An error occured when calling the API </div>`;
    console.log(error);
  }
}

fetchMakeupDetails();
