document.getElementById('smoothieForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission
    
    // Get the size selected by the user
    const size = document.getElementById('size').value;
    
    // Get selected ingredients
    const ingredients = [];
    document.querySelectorAll('input[name="ingredient"]:checked').forEach(function(ingredient) {
        ingredients.push(ingredient.value);
    });

    // Prices for ingredients
    const ingredientPrices = {
        "Strawberry": 2.00,
        "Banana": 1.50,
        "Mango": 2.50,
        "Blueberry": 2.00,
        "Spinach": 1.00,
        "Kale": 1.50,
        "Almond Milk": 1.75
    };

    // Size prices
    const sizePrices = {
        "small": 3.00,
        "medium": 4.50,
        "large": 6.00
    };

    // Calculate the total price
    let totalPrice = sizePrices[size] || 0;
    let ingredientCost = 0;
    ingredients.forEach(ingredient => {
        ingredientCost += ingredientPrices[ingredient] || 0;
    });
    totalPrice += ingredientCost;

    // Create the Smoothie class
    class Smoothie {
        constructor(size, ingredients, totalPrice) {
            this.size = size;
            this.ingredients = ingredients;
            this.totalPrice = totalPrice;
        }

        // Method to generate description
        description() {
            return `
                <h3>Your Smoothie Order:</h3>
                <p><strong>Size:</strong> ${this.size.charAt(0).toUpperCase() + this.size.slice(1)}</p>
                <p><strong>Ingredients:</strong> ${this.ingredients.join(', ')}</p>
                <p><strong>Total Price:</strong> $${this.totalPrice.toFixed(2)}</p>
                <p><em>Thank you for your order! Enjoy your smoothie!</em></p>
            `;
        }
    }

    // Create a smoothie object
    const smoothie = new Smoothie(size, ingredients, totalPrice);

    // Output the smoothie description to the page
    document.getElementById('smoothieDescription').innerHTML = smoothie.description();
});
