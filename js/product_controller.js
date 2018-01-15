var aProduct = new Product(product);
var body = document.getElementsByTagName("body")[0];
var count = 0;


var aTable = document.createElement("table"); //Make a table dynamically

var Table_body = document.createElement("tbody");


for (var i= 0; i < product.length/4; i++){ // build the rows of images.

    var row = document.createElement("tr");
    for (var j = 0;  j < product.length/2; j++){ // build the column of images.
        
        var cell = document.createElement("td");
        var cellIMG = document.createTextNode(product[count].image_source);
        count++;
        cell.appendChild(cellIMG);
        row.appendChild(cell);
    }

    Table_body.appendChild(row);

}

aTable.appendChild(Table_body);

body.appendChild(aTable);


for(var i=0; i < product.length; i++){

//For each item in the array product, assign the item to the object Product
aProduct = product[x];

/* Use the methods to build the table dynamically with constructors. */

aProduct.firstEntry(); //first function
aProduct.secondEntry(); // second function
aProduct.thirdEntry(); // third function
aProduct.fourthEntry(); // fourth function


}


function Product(name, image, link, descr, price){ // object constructor
this.product_name = name;
this.image_ = image;
this.image_url = link;
this.product_description = descr;
this.product_price = price;

}

function firstEntry(){ // Product Name & start row

    var firstDiv = document.createElement("div"); // create a div
    firstDiv.setAttribute("class", "name"); // assign that div to a class called 'a_card'
    var productName = document.createTextNode(aProduct.name); 
    firstDiv.appendChild(productName);

}

function secondEntry(){ // Product Link

    var secondDiv = document.createElement("div");
    secondDiv.setAttribute("class", "url");
    var productURL = document.createTextNode(aProduct.image_url);
    secondDiv.appendChild(productURL);
}

function thirdEntry(){ // Product Description

    var secondDiv = document.createElement("div")
    thirdDiv.setAttribute("class", "description");
    var productDescript = document.createTextNode(aProduct.product_description);
    thirdDiv.appendChild(productDescript);
}

function fourthEntry(){ // Product Price

    var secondDiv = document.createElement("div")
    thirdDiv.setAttribute("class", "price");
    var productPrice = document.createTextNode(aProduct.product_price);
    thirdDiv.appendChild(productPrice);
}


    

