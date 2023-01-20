let products = [
    {
       name:"iphone",
       category:"mobiles",
       price:"80000",
       seller:"Ujjwal Enterprises",
       company:"Apple"
    },
    {
       name:"Samsung Duopods",
       category:"wearables",
       price:"5000",
       seller:"Akshay Enterprises",
       company:"samsung"
    },
    {
       name:"LG washing machine",
       category:"electronics",
       price:"30000",
       seller:"Ram Enterprises",
       company:"LG"
    },
    {
       name:"Samsung Galaxy S10",
       category:"mobiles",
       price:"62000",
       seller:"Ujjwal Enterprises",
       company:"samsung"
    },
    {
       name:"Boat Smartwatch",
       category:"wearables",
       price:"2500",
       seller:"Akshay Enterprises",
       company:"Boat"
    }
 ]
 

 function display(arr){

    document.getElementById("data").innerHTML=" ";

    arr.forEach(function(product,index){

        let tr = document.createElement("tr");
    
        let numberTd = document.createElement("td");
        numberTd.append(index+1);
        tr.appendChild(numberTd);
    
        let nameTd = document.createElement("td");
        nameTd.append(product.name);
        tr.appendChild(nameTd);
    
        let categoryTd = document.createElement("td");
        categoryTd.append(product.category);
        tr.appendChild(categoryTd);
    
        let priceTd = document.createElement("td");
        priceTd.append(product.price);
        tr.appendChild(priceTd);
    
        let sellerTd = document.createElement("td");
        sellerTd.append(product.seller);
        tr.appendChild(sellerTd);
    
        let companyTd = document.createElement("td");
        companyTd.append(product.company);
        tr.appendChild(companyTd);
        
        document.getElementById("data").appendChild(tr);
    
     })

 }

 display(products);

 let productName;


 function readValue(event){

    productName= event.target.value;

 }

 function filter(){

    let filteredProducts = products.filter(function(product,index){
            return product.name === productName;
    })

    display(filteredProducts);

 }



