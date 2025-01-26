// Array to store products and their prices
let products = [];
let bucket = [];

// Function to add a new product
function addNewProduct() {
    const productNameInput = document.getElementById("product_name");
    const productName = productNameInput.value.trim();

    if (productName !== "") {
        products.push({ name: productName });
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
    document.getElementById("receiptDetails").innerHTML = ""; // Clear previous receipt
    bucket = [];
}


// Function to add the selected product and units to the cart
function addProductToCart() {
    const productDropdown = document.getElementById("product-dropdown");
    const selectedIndex = productDropdown.selectedIndex;
    const selectedProduct = products[selectedIndex];
    const units = parseInt(document.getElementById("units").value);

    if (selectedProduct && !isNaN(units) && units > 0) {
        bucket.push({ name: selectedProduct.name, price: selectedProduct.price, quantity: units});
        alert(`The Item ${selectedProduct.name} is added to cart as per ${units} unit`);
        document.getElementById("units").value = "";
    }else {
        alert("Please select a product and specify the number of units.");
    }
}

// Function to select the number of units
function selectUnits(num) {
    document.getElementById("units").value = num;
}

// Function to simulate payment and generate receipt
function pay() {
    alert("Thank you for Purchase!Hope to see you again");

    let subtotal = 0;
    const taxRate = 0.05;
    let taxAmount;
    let grandTotal;

    bucket.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    taxAmount = subtotal * taxRate;
    grandTotal = subtotal + taxAmount;

    // Display receipt
    let receipt = document.getElementById("receiptDetails");
    receipt.innerHTML += "<hr>";
    const dateDiv = document.createElement("div");
    const currentDate = new Date();
    dateDiv.textContent = `Date: ${currentDate.toLocaleDateString()}`;
    receipt.appendChild(dateDiv);

    const timeDiv = document.createElement("div");
    timeDiv.textContent = `Time: ${currentDate.toLocaleTimeString()}`;
    receipt.appendChild(timeDiv);
    
   // Display items in cart
    receipt.innerHTML += "<hr>";
    bucket.forEach(item => {
              const itemTotal = item.price * item.quantity;
              receipt.innerHTML += `Product: ${item.name} -- $/Unit: $${item.price} -- Unit ${item.quantity} -- Total: $${itemTotal.toFixed(2)}<br>`;
    });
    receipt.innerHTML += "<hr>";
    receipt.innerHTML += `Subtotal: $${subtotal.toFixed(2)}<br>`;
    receipt.innerHTML += `Tax (5%): $${taxAmount.toFixed(2)}<br>`;
    receipt.innerHTML += `<strong>Grand Total: $${grandTotal.toFixed(2)}</strong><br>`;
}
