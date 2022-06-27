const BASE_URL = "https://api.unsplash.com/";

//Fetching from unsplash api
fetch(`${BASE_URL}/search/photos?
client_id=TbEAYJusOERXIWmLrfswwja4zPnxktEZYiVDtxvJpXY&query=tea-leaves&per_page=5`)
.then(response=> response.json())
.then(data => {
    data["results"].forEach(r => {
        //Creating each individual photo and storying inside a div of class column
        
        let column = document.createElement("div");
        column.classList.add("column3");
        column.style.backgroundImage = `url(${r["urls"]["small"]})`;

        //Alternative description of each image to appear
        let product_title = document.createElement("p");
        product_title.innerHTML = r["alt_description"];
        column.append(product_title);

        //append column inside of row class
        document.querySelector(".middleImages").append(column);
        
    });
});
