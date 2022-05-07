const url =
    "http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=vegan";

const container = document.querySelector(".container");

async function makeupAPI() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);

        container.innerHTML = "";

        for (let i = 0; i < results.length; i++) {

            console.log(results[i]);

            if (results[i].price === "0.0") {
                continue;
            }

            container.innerHTML += `<a class="makeup-item" href="details.html?id=${results[i].id}">
            <h2 class="product-name"> ${results[i].name}</h2>
            <img src="${results[i].image_link}" alt="${results[i].name}" class="image"></img>
            <p class="price-tag">Price: $${results[i].price}</p>
            </a>
            `;
        }
    } catch (error) {
        console.log(error);
        container.innerHTML = `<div id="error_msg">An error occured when calling the API </div>`;
    }
}

makeupAPI();
