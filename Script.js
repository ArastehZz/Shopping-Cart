const products =[{name:Egg ,price:400},{name:Milk , price:500}];

const productDiv = document.getElementById("Products");

function showProducts(){

    
        productsDiv.innerHTML = "";
        products.forEach(product=>{
        const productDiv = document.createElement("div");
        productDiv.textContent = product.name + " " + product.price;
        productsDiv.appendChild(productDiv);


        });
}
showProducts();


function add(){
    console.log("inside add");
    const product_name=document.getElementById("product_name");
    const product_price = document.getElementById("product_price");
    products.push({
        name:product_name.value,
        price:product_price.value
       

    });

    console.log(products);
    showProducts();
}
