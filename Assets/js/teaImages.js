const BASE_URL = "https://api.unsplash.com/";

fetch(`${BASE_URL}/search/photos?client_id=TbEAYJusOERXIWmLrfswwja4zPnxktEZYiVDtxvJpXY&query=tea-leaves`)
.then(response=> response.json())
.then(data => {
    data["results"].forEach(r => {
        let column = document.createElement("div");
        column.classList.add("column");
        column.style.backgroundImage = `url(${r["urls"]["regular"]})`;

        let product_title = 
        document.createElement("div");
        product_title.innerHTML = r["alt_description"];
        product_title.classList.add("product_title");
        column.append(product_title);

        document.querySelector(".row").append(column);        
    });
});

