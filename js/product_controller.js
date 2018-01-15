var aProduct = new Product(product);

foreach (x in product){
//For each item in the array product, assign the item to the object Product

aProduct = product[x];


    
}


function Product(name, image, link, descr, price){
this.product_name = name;
this.image_ = image;
this.image_url = link;
this.product_description = descr;
this.product_price = price;

}

function buildRow(){

    var firstDiv = document.createElement("div");
    firstDiv.setAttribute("class", "a_card");
    var productName = document.createTextNode(name);
    firstDiv.appendChild(productName);

}

