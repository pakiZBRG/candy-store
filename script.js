const CreateCake = (() => {
   const cakes = [];

   class Cake {
      constructor(img, name, price, type){
         this.img = img;
         this.name = name;
         this.price = price;
         this.type = type;
      }
   }

   function makeCake(img, name, price, type) {
      const cake = new Cake(img, name, price, type);
      cakes.push(cake);
   }

   function produceCake() {
      makeCake('slike/cookie.jpeg', 'Sweet Cookie', '2.49', 'cupcakes')
      makeCake('slike/slika2.jpeg', 'Cookie with Nuts', '2.99', 'cupcakes')
      makeCake('slike/slika3.jpeg', 'Coconut Cookie', '3.49', 'cupcakes')
      makeCake('slike/slika4.jpeg', 'Chocolate Doughnut', '3.99', 'doughnuts')
      makeCake('slike/slika5.jpg', 'Cherry Doughnut', '4.19', 'doughnuts')
      makeCake('slike/slika6.jpg', 'Coco Cupcake', '2.89', 'cupcakes')
      makeCake('slike/slika7.jpeg', 'Vanilla Cherry Cupcake', '4.49', 'cupcakes')
      makeCake('slike/slika8.jpeg', 'Saher Cake', '5.49', 'cakes')
      makeCake('slike/slika9.jpeg', 'Schwartzwald Cake', '5.99', 'cakes')
      makeCake('slike/slika10.jpeg', 'White-iced Cake', '11.99', 'cakes')
      makeCake('slike/slika11.jpg', 'Gummy Bears', '12.99/kg', 'sweets')
      makeCake('slike/slika12.jpeg', 'Marshmallow', '9.99/kg', 'sweets')
      makeCake('slike/slika13.jpeg', 'Gummy Worms', '10.99/kg', 'sweets')
      makeCake('slike/slika14.jpg', 'Chocolate Mix', '15.99/kg', 'chocolate')
      makeCake('slike/slika15.jpg', 'Chocolate Nuts', '16.99/kg', 'chocolate')
      makeCake('slike/slika16.jpg', 'Hard candy', '8.99/kg', 'sweets')
   }
   produceCake();

   return {cakes}
})();

const displayCakes = ((CreateCake) => {
   const cakes = CreateCake.cakes;

   const inventory = document.querySelector('#store-items');
   document.addEventListener('DOMContentLoaded', () => {
      inventory.innerHTML = '';

      let input = '';
      cakes.forEach(cake => {
         input += `
         <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 item ${cake.type}">
            <div class="card single-item">
               <div class="img-container">
                  <img src=${cake.img} alt="" class='card-img-top store-img'>
                  <span class="store-item-icon">
                     <i class="fa fa-shopping-cart"></i>
                  </span>
               </div>
               <div class="card-body">
                  <div class="card-text d-flex justify-content-between">
                     <h5 id='store-item-name'>${cake.name}</h5>
                     <h4 class='store-item-value'><strong>&euro;</strong><strong id='store-item-price'>${cake.price}</strong></h4>
                  </div>
               </div>
            </div>
         </div>`
      });
      inventory.innerHTML = input;
   })
})(CreateCake)

const FilterCake = (() => {
   const filter = document.querySelectorAll('.filter-btn');

   filter.forEach(btn => {
      btn.addEventListener('click', (e) => {
         const value = e.target.dataset.filter;
         const singleCake = document.querySelectorAll('.item');

         singleCake.forEach(cake => {
            if(value === 'all') {
               cake.style.display = 'flex';
            } else {
               cake.classList.contains(value) ? cake.style.display = 'flex' : cake.style.display = 'none'
            }
         })
      })
   })
})()

//show cart
document.getElementById('cart-info').addEventListener('click', function(){
   const cart = document.getElementById('cart');
   cart.classList.toggle('show-cart');
})