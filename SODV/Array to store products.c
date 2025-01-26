// Array to store products and their prices
let products = [];
let product = []; // added
 
// Function to add a new product
function addNewProduct() {
    const productNameInput = document.getElementById("product_name");
    const productName = productNameInput.value.trim();
 
    if (productName !== "") {
        products.push({ name: productName, price: 0}); // added price = 0
        productNameInput.value = ""; // Clear input field
        updateProductDropdown();
    }
}
 
// Function to update product dropdown menu
function updateProductDropdown() {
    const existingProductSelect = document.getElementById("existing-product");
    existingProductSelect.innerHTML = ""; // Clear previous options
 
    // Add options for each product to the existing product dropdown
    products.forEach(product => {
        const option = document.createElement("option");
        option.text = product.name;
        existingProductSelect.add(option);
    });
}
 
// Function to set price for existing product
function setPrice() {
    const existingProductSelect = document.getElementById("existing-product");
    const selectedProductName = existingProductSelect.value;
    const priceInput = document.getElementById("price-per-unit");
    const price = priceInput.value.trim();
 
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
document.getElementById("admin-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    if (event.submitter.value === "Add Product") {
        addNewProduct();
    } else if (event.submitter.value === "Add Price") {
        setPrice();
        updateCheckoutProduct();
    }
});
 
function updateCheckoutProduct() {
    const productDropdown = document.getElementById("product-dropdown");
    productDropdown.innerHTML = ""; // Clear previous options
 
    // Add options for each product to the product dropdown
    products.forEach(product => {
        const option = document.createElement("option");
        option.text = `${product.name} $${product.price}/Unit`;
        productDropdown.add(option);
    });
}
 
// Function to start a new transaction
function startNewTransaction() {
    document.getElementById("product-dropdown").selectedIndex = 0;
    document.getElementById("units").value = "";
    document.getElementById("receipt").innerHTML = ""; // Clear previous receipt
}
 

  function addProductToCart() {
  const productDropdown = document.getElementById("product-dropdown");
  const selectedIndex = productDropdown.selectedIndex;
  const selectedProduct = products[selectedIndex];
  const unitsInput = document.getElementById("units");
  const units = parseInt(unitsInput.value);
  if (selectedProduct !== "" && units !== "") {
        let productName = products[0];
        let productPrice = parseFloat(products[1]);
        let totalPrice = parseFloat(units) * productPrice;
 
        let receipt = document.getElementById("receipt");
        receipt.innerHTML += "PRODUCT: " + productName + "-- Per/Unit: $" + productPrice.toFixed(3) + "-- /Unit - " + units + "Unit - Total: $" + totalPrice.toFixed(2) + "<br>";
    } else {
        alert("Please select a product and specify the number of units.");
    }
}

 // Function to select the number of units
function selectUnits(num) {
    document.getElementById("units").value = num;
}
 
// Function to simulate payment and generate receipt

function pay() {
  const subTotal = cart.reduce((total, cartItem) => total + (cartItem.units * cartItem.product.price), 0);
  const tax = subTotal * 0.05;
  const grandTotal = subTotal + tax;
 
  displayReceipt(subTotal, tax, grandTotal);
 
  cart = []; 
}
 

function generateReceipt() {
    let receipt = '';
    let subtotal = 0;
    let taxRate = 0.05; // 5% tax
    let taxAmount;
    let grandTotal;
 
    cart.forEach((item) => {
        const itemTotal = item.price * item.quantity;
        receipt += `${item.name} (${item.quantity}) - $${itemTotal.toFixed(2)}<br>`;
        subtotal += itemTotal;
    });
 
    taxAmount = subtotal * taxRate;
    grandTotal = subtotal + taxAmount;
 
    document.getElementById('receiptDetails').innerHTML = receipt;
    document.getElementById('subtotal').textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `Tax (7%): $${taxAmount.toFixed(2)}`;
    document.getElementById('grandTotal').textContent = `Grand Total: $${grandTotal.toFixed(2)}`;
}
 
 
function displayReceipt(items) {
    const receiptDiv = document.getElementById("receipt");
    receiptDiv.innerHTML = ""; // Clear previous receipt
 
    // Add receipt header with current date and time
    const dateDiv = document.createElement("div");
    const currentDate = new Date();
    dateDiv.textContent = `Date: ${currentDate.toLocaleDateString()}`;
    receiptDiv.appendChild(dateDiv);
 
    const timeDiv = document.createElement("div");
    timeDiv.textContent = `Time: ${currentDate.toLocaleTimeString()}`;
    receiptDiv.appendChild(timeDiv);
 
    let receipt = document.getElementById("receipt");
    receipt.innerHTML += "<hr>";
 
}
