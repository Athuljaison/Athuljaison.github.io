class Smoothie {
  // Constructor for creating Smoothie objects
  constructor(flavor, size, toppings) {
      this.flavor = flavor;
      this.size = size;
      this.toppings = toppings;
      this.basePrice = 5; // Base price of a smoothie
      this.price = this.calculatePrice(); // Calculate the total price
  }
  
  // Method to calculate the price of the smoothie based on its size and toppings
  calculatePrice() {
      let price = this.basePrice; // Initialize with base price
      if (this.size === 'medium') price += 1; // Add $1 for medium size
      if (this.size === 'large') price += 2; // Add $2 for large size
      price += this.toppings.length * 0.5; // Add $0.5 for each topping
      return price;
  }
  
  // Method to describe the smoothie
  describe() {
      return `A ${this.size} ${this.flavor} smoothie with ${this.toppings.join(", ")} - $${this.price.toFixed(2)}`;
  }
}

// Function to handle smoothie ordering
function orderSmoothie() {
  const flavor = document.getElementById('flavor').value;
  const size = document.querySelector('input[name="size"]:checked').value;
  const selectedToppings = document.getElementById('toppings').selectedOptions;
  const toppings = Array.from(selectedToppings).map(option => option.value);

  // Create a new Smoothie object
  const smoothie = new Smoothie(flavor, size, toppings);
  
  // Display smoothie description
  const descriptionElement = document.getElementById('smoothieDescription');
  descriptionElement.innerHTML = `
      <h2>${smoothie.flavor} Smoothie</h2>
      <p>Size: ${smoothie.size}</p>
      <p>Toppings: ${smoothie.toppings.join(", ")}</p>
      <p class="price">Price: $${smoothie.price.toFixed(2)}</p>
  `;
  
  // Display smoothie image
  const imageUrl = getSmoothieImage(flavor);
  const imageElement = document.getElementById('smoothieImage');
  imageElement.src = imageUrl;
  imageElement.style.display = 'block';
}

// Function to retrieve the URL of the smoothie image based on its flavor
function getSmoothieImage(flavor) {
  const imageMap = {
      strawberry: './images/strawberrysmoothie.jpg',
      banana: './images/bananasmoothie.jpg',
      mango: './images/mangosmoothie.jpg', 
      blueberry: './images/blueberrysmoothie.jpg'
  };
  return imageMap[flavor];
}

// Set smoothie image properties
const imageUrl = getSmoothieImage(flavor);
const imageElement = document.getElementById('smoothieImage');
imageElement.src = imageUrl;
imageElement.style.display = 'block';
