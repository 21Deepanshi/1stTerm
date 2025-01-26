 // Array to store products and their prices
 let products = [];

 // Function to add a new product
 function addNewProduct() {
     const productNameInput = document.getElementById("product_name");
     const productName = productNameInput.value.trim();

     if (productName !== "") {
         products.push({ name: productName, price: 0 });
         productNameInput.value = ""; // Clear input field
         updateProductDropdown();
     }
 }

 // Function to update product dropdown menu
 function updateProductDropdown() {
     const existingProductSelect = document.getElementById("existing-product");
     const productDropdown = document.getElementById("product-dropdown");

     existingProductSelect.innerHTML = ""; // Clear previous options
     productDropdown.innerHTML = ""; // Clear previous options
     
    // Add options for each product to the existing product dropdown
    products.forEach(product => {
        const option = document.createElement("option");
        option.text = product.name;
        existingProductSelect.add(option.cloneNode(true)); // Clone the option and add it to existing product dropdown
    });

    // Add options for each product to the product dropdown
    products.forEach(product => {
        const option = document.createElement("option");
        option.text = product.name;
        productDropdown.add(option.cloneNode(true)); // Clone the option and add it to product dropdown
    });

 }

 // Function to set price for existing product
 function setPrice() {
     const existingProductSelect = document.getElementById("existing-product");
     const selectedProductName = existingProductSelect.value;
     const priceInput = document.getElementById("price-per-unit");
     const price = parseFloat(priceInput.value.trim());

     if (!isNaN(price) && price >= 0) {
         // Find the product and update its price
         const selectedProduct = products.find(product => product.name === selectedProductName);
         if (selectedProduct) {
             selectedProduct.price = price;
             priceInput.value = ""; // Clear input field
         }
     }
 }

 // Event listener for form submission
 document.getElementById("admin-form").addEventListener("submit", function(event) {
     event.preventDefault(); // Prevent form submission
     if (event.submitter.value === "Add Product") {
         addNewProduct();
     } else if (event.submitter.value === "Add Price") {
         setPrice();
     }
 });

// Function to start a new transaction
function startNewTransaction() {
    const unitsInput = document.getElementById("units");
    unitsInput.value = ""; // Clear units input field
}

// Function to handle button clicks for unit selection
function selectUnits(number) {
    document.getElementById("units").value = number;
}

// Function to add product to cart
function addProductToCart() {
    const selectedProduct = document.getElementById("product-dropdown").value;
    const selectedUnits = parseInt(document.getElementById("units").value);

    if (selectedProduct && selectedUnits > 0) {
        alert(`Added ${selectedUnits} unit(s) of ${selectedProduct} to cart.`);
    } else {
        alert("Please select a product and specify the number of units.");
    }
}

// Function to handle payment
function pay() {
    alert("Thank you for your purchase!");
}
// Function to display receipt
function displayReceipt() {
    // Get the current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    // Get receipt container
    const receiptContainer = document.getElementById("receipt");

    // Clear previous receipt
    receiptContainer.innerHTML = "";

    // Create receipt header
    const header = document.createElement("h2");
    header.textContent = "Receipt";
    receiptContainer.appendChild(header);

    // Add current date and time to receipt
    const dateTimeParagraph = document.createElement("p");
    dateTimeParagraph.textContent = `Date: ${formattedDate}, Time: ${formattedTime}`;
    receiptContainer.appendChild(dateTimeParagraph);

    // Calculate and display line items for each product
    let subTotal = 0;
    products.forEach(product => {
        if (product.unitsPurchased > 0) {
            const lineItem = document.createElement("p");
            const totalPrice = product.price * product.unitsPurchased;
            lineItem.textContent = `${product.name} - Price per unit: $${product.price.toFixed(2)}, Units: ${product.unitsPurchased}, Total: $${totalPrice.toFixed(2)}`;
            receiptContainer.appendChild(lineItem);
            subTotal += totalPrice;
        }
    });

    // Calculate tax (5%)
    const tax = subTotal * 0.05;

    // Display sub-total amount
    const subTotalParagraph = document.createElement("p");
    subTotalParagraph.textContent = `Sub-total: $${subTotal.toFixed(2)}`;
    receiptContainer.appendChild(subTotalParagraph);

    // Display tax
    const taxParagraph = document.createElement("p");
    taxParagraph.textContent = `Tax (5%): $${tax.toFixed(2)}`;
    receiptContainer.appendChild(taxParagraph);

    // Calculate and display grand total
    const grandTotal = subTotal + tax;
    const grandTotalParagraph = document.createElement("p");
    grandTotalParagraph.textContent = `Grand Total: $${grandTotal.toFixed(2)}`;
    receiptContainer.appendChild(grandTotalParagraph);
}

// Function to start a new transaction and clear previous receipt
function startNewTransaction() {
    // Reset units purchased for each product
    products.forEach(product => {
        product.unitsPurchased = 0;
    });

    // Clear receipt
    document.getElementById("receipt").innerHTML = "";

    // Clear units input field
    document.getElementById("units").value = "";
}

// Function to handle payment and display receipt
function pay() {
    // Call function to display receipt
    displayReceipt();

    // Show receipt section
    document.getElementById("receipt-section").style.display = "block";
}

// Initialize product dropdown on page load
window.onload = function () {
    updateProductDropdown();
};
