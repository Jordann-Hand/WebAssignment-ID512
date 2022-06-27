const BASE_URL = "https://api.unsplash.com/";

//Fetching from unsplash api
fetch(`${BASE_URL}/search/photos?
client_id=TbEAYJusOERXIWmLrfswwja4zPnxktEZYiVDtxvJpXY&query=tea-leaves`)
.then(response=> response.json())
.then(data => {
    data["results"].forEach(r => {
        //Creating each individual photo and storying inside a div of class column
        let column = document.createElement("div");
        column.classList.add("column");
        column.style.backgroundImage = `url(${r["urls"]["regular"]})`;

        //Alternative description of each image to appear
        let product_title = 
        document.createElement("div");
        product_title.innerHTML = r["alt_description"];
        product_title.classList.add("product_title");
        //append product title inside of column
        column.append(product_title);       

        //append column inside of row class
        document.querySelector(".row").append(column); 
        
        
    });
});

let btns = document.querySelector(".filterButton");

document.querySelector(btns).addEventListener("click", e => {
    for(let i =0; i < btns.length;i++) {
        btns[i].addEventListener("click", function() {
            let current = document.querySelectorAll(".active");
            current[0].className = current[0].className.replace(" active", "");
            this.className +=" active";
    }
        )};
});

