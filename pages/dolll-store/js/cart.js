let label = document.getElementById("label"); /////from html page
let shoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || []; ////come with data from local storage to the newpage

////brings calculation into next page cart icon
let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    /////x is previous number, y is new number, 0 is default number starting from 0
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation(); ////everytime app loads, calculation is run

let generateCartItems = () => {
    if (basket.length !== 0) {
        ////if basket is not empty, the items will display
        return (shoppingCart.innerHTML = basket
            .map((x) => {
                let { id, item } = x;
                let search = shopItemsData.find((y) => y.id === id) || [];
                let {img, name, price} = search;//// destructured the object because search is common
                return `
          <div class="cart-item">
             <img width="100" src=${img} alt="">
                <div class="details">
                     <div class="title-price-x">
                         <h4 class="title-price">
                              <p>${name}</p>
                              <p class ="cart-item-price" class="text-bg-success">UGX ${price}</p>
                        </h4>
                          <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
                    </div>

                 <div class="buttons">
                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i> 
                    <div  id=${id} class="quantity"> ${item} </div> 
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                </div>

                    <h3>UGX ${item * price}</h3>
                 </div>
          </div>
            `;
            })
            .join(""));
    } else {
        shoppingCart.innerHTML = ` `;
        label.innerHTML = `
        <h2>Cart is Empty</h2>
        <a href="/pages/dolll-store/dollstore.html">
        <button class="homeBtn text-bg-success "> Back To Home</button>
         </a>
        `;
    }
};

generateCartItems();


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
   
   basket = basket.filter((x)=> x.item !==0) ////the basket in local storage and target all the items , none is equal to 0, filter removes the object, when it hits 0

   generateCartItems();
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


   generateCartItems(); ////multiply the item with quantity on the card, this function runs

    localStorage.setItem("data", JSON.stringify(basket));
};



/**
*! updating the number
**/ 
let update =(id)=> {
    let search = basket.find((x)=> x.id === id); ////search if item exist, then number will increase

    document.getElementById(id).innerHTML =  search.item;
    calculation();
    totalAmount();
}; 

/////to remove whle item on page
let removeItem = (id)=> {
    let selectedItem = id;
    ////console.log(selectedItem.id);
    basket = basket.filter((x)=>x.id !== selectedItem.id)
    generateCartItems();
    totalAmount();
    calculation();
    localStorage.setItem("data", JSON.stringify(basket)); //// targent all objects using id
};



/**
*! function to clear the cart even in local storage
**/
let clearCart = ()=> {
    basket = []
    generateCartItems();
    calculation();
    localStorage.setItem("data", JSON.stringify(basket));
}



/**
*! function to calculate the total amnount
**/
let totalAmount = ()=> {
    if (basket.length !== 0){
      let amount = basket
      .map((x)=> { //////using id , we search the item to the price
        let {item, id } = x;
        let search = shopItemsData.find((y) => y.id === id) || []; ////using id to match the id of data base
        return item * search.price;

      }). reduce((x, y)=> x +y, 0);  ////add up totats from each item

     label.innerHTML = `
     <h2> Total Bill : UGX ${amount} </h2>
     <button class="checkout"> Checkout</button>
     <button onclick="clearCart()" class="removeAll">Clear Cart</button>
     `;
    }else return

};

totalAmount();