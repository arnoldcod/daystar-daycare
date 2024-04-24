/**
*! target the id shop
**/ 
let shop = document.getElementById("shop"); 


/**
 * ! Basket to hold all the selected items
 * ? the getItem part is retrieving data from the local storage
 * ? if local storage is blank, basket becomes an empty array
 */


////anytime you selcted a card using id , it stores here the data 
let basket = JSON.parse(localStorage.getItem("data")) || [] ; //// || [] , what if theres is no data, there is empty array


/**
*! return renders using templatestring on browser ... using map function, x can be any word
**/ 
let generateShop = ()=> {
    return (shop.innerHTML = shopItemsData
        .map((x)=> {
            let {id, name, price, description, img} = x;  ////destructuring  ...//id is unique
            let search = basket.find((x)=> x.id === id) || [] ////...check for all ids one by one
        return `
        <div id=product-id-${id}   class="item ">     
                <img  width="240" src=${img} alt="">
                <div  class="details text-bg-success">
                    <h3>${name}</h3>
                    <p>${description}</p>
                     <div class="price-quantity">
                        <h2>UGX ${price}</h2>
                        
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg text-bg-danger"></i> 
                            <div  id=${id} class="quantity">
                            ${search.item === undefined? 0: search.item}
                            </div> 
                            <i onclick="increment(${id})" class="bi bi-plus-lg text-bg-dark"></i>
                        </div>
                    </div>
                </div>
            </div>`
            // //everytime we increment or decrement 0 , <div id=${id} class="quantity">0</div>
    }).join(" ")); //// to remove commas after rendering
};
generateShop();


/**
*! decreasing the  number
**/ 
let decrement =(id)=> {
    let selectedItem= id; ////selecting specific item using id
    let search = basket.find((x)=> x.id === selectedItem.id); /////x can be anything you name it, search any item in array
    if (search === undefined) return;
     else if( search.item === 0)  ///// item pushed in basket, if it does not exist , search.item === 0 stops process when item selected reducing until negative or less than 0
        return ; ////return stops 
    else {
    search.item -= 1  /////searching if item exists in basket, if it exists,  only the items/quantity will add up or increase
   }

   update(selectedItem.id); ////using unique id to update also connected to quantity
   
   basket = basket.filter((x)=> x.item !==0) ////the basket in local storage and target all the items , none is equal to 0, filter removes the object


    localStorage.setItem("data", JSON.stringify(basket));///// should be last in function cause js runs top to bottom
};


/**
*! increasing the  number
**/ 
let increment =(id)=> {
    let selectedItem = id; ////selecting specific item using id
    let search = basket.find((x)=> x.id === selectedItem.id); /////x can be anything you name it, search any item in array

    if( search === undefined) { ///// item pushed in basket, if it does not exist
    basket.push({
        id: selectedItem.id,
        item: 1,
    });
  }  
  else {
    search.item += 1  /////searching if item exists in basket, if it exists,  only the items/quantity will add up or increase
   }
  
    update(selectedItem.id); ////using unique id to update also connected to quantity

    localStorage.setItem("data", JSON.stringify(basket));
};



/**
*! updating the number
**/ 
let update =(id)=> {
    let search = basket.find((x)=> x.id === id); ////search if item exist, then number will increase

    document.getElementById(id).innerHTML =  search.item;
    calculation();
}; 


/**
*! adding total from different items in cart in navbar
**/ 
let calculation= ()=> {
    let cartIcon = document.getElementById("cartAmount");
    /////x is previous number, y is new number, 0 is default number starting from 0
    cartIcon.innerHTML = basket.map((x)=> x.item).reduce((x, y)=> x+y, 0);
}

calculation(); ////everytime app loads, calculation is run
