// Product data
const products = {
    "offerContainer": [
        { id: 1, title: "Samuthrika", mrp: "2000", offerPrice: "1350", image: "samuthrika1.jpeg" },
        { id: 2, title: "Samuthrika", mrp: "2000", offerPrice: "1350", image: "samuthrika2.jpeg" },
        { id: 3, title: "Samuthrika", mrp: "2000", offerPrice: "1350", image: "samuthrika3.jpeg" },
        { id: 4, title: "Kanchipuram Soft Silk", mrp: "1000", offerPrice: "550", image: "Kanchipuram1.jpeg" },
        { id: 5, title: "Kanchipuram Soft Silk", mrp: "1000", offerPrice: "550", image: "Kanchipuram2.jpeg" },
        { id: 6, title: "Kanchipuram Soft Silk", mrp: "1000", offerPrice: "500", image: "Kanchipuram3.jpeg" },
        { id: 7, title: "EXCLUSIVE BRIDAL  SAREE", mrp: "2000", offerPrice: "1100", image: "bridal1.jpeg" },
        { id: 8, title: "EXCLUSIVE BRIDAL  SAREE", mrp: "2000", offerPrice: "1100", image: "bridal2.jpeg" },
        { id: 9, title: "EXCLUSIVE BRIDAL  SAREE", mrp: "2000", offerPrice: "1100", image: "bridal3.jpeg" }
    ],
    "Silkcontainer": [
        { id: 102, title: "Samuthrika", price: 1350, mrp: 2000, image: "samuthrika1.jpeg" },
        { id: 101, title: "Samuthrika", price: 1350, mrp: 2000, image: "samuthrika2.jpeg" },
        { id: 103, title: "Samuthrika", price: 1350, mrp: 2000, image: "samuthrika3.jpeg" },
        { id: 104, title: "Samuthrika", price: 1350, mrp: 2000, image: "samuthrika4.jpeg" },
        { id: 105, title: "Samuthrika", price: 1350, mrp: 2000, image: "samuthrika5.jpeg" },
        { id: 106, title: "Samuthrika", price: 1350, mrp: 2000, image: "samuthrika6.jpeg" },
        { id: 107, title: "Samuthrika", price: 1350, mrp: 2000, image: "samuthrika7.jpeg" },
        { id: 108, title: "Samuthrika", price: 1350, mrp: 2000, image: "samuthrika8.jpeg" },
        { id: 109, title: "Samuthrika", price: 1350, mrp: 2000, image: "samuthrika9.jpeg" },
        { id: 110, title: "Samuthrika", price: 1350, mrp: 2000, image: "samuthrika10.jpeg" },
        { id: 111, title: "Samuthrika", price: 1350, mrp: 2000, image: "samuthrika12.jpeg" },
        { id: 112, title: "Samuthrika", price: 1350, mrp: 2000, image: "samuthrika13.jpeg" },
        { id: 113, title: "Samuthrika", price: 1350, mrp: 2000, image: "samuthrika14.jpeg" },
        { id: 114, title: "Samuthrika", price: 1350, mrp: 2000, image: "samuthrika15.jpeg" },
        { id: 115, title: "Samuthrika", price: 1350, mrp: 2000, image: "samuthrika16.jpeg" },
        { id: 116, title: "Samuthrika", price: 1350, mrp: 2000, image: "samuthrika17.jpeg" },
        { id: 117, title: "Samuthrika", price: 1350, mrp: 2000, image: "samuthrika18.jpeg" },
        { id: 118, title: "Samuthrika", price: 1350, mrp: 2000, image: "samuthrika19.jpeg" },
        { id: 119, title: "Samuthrika", price: 1350, mrp: 2000, image: "samuthrika20.jpeg" },
        { id: 120, title: "Samuthrika", price: 1350, mrp: 2000, image: "samuthrika11.jpeg" },
        
    ],
    "Halfcontainer": [
        { id: 201, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram1.jpeg" },
        { id: 202, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram2.jpeg" },
        { id: 203, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram3.jpeg" },
        { id: 204, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram4.jpeg" },
        { id: 205, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram5.jpeg" },
        { id: 206, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram6.jpeg" },
        { id: 207, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram7.jpeg" },
        { id: 208, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram8.jpeg" },
        { id: 209, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram9.jpeg" },
        { id: 210, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram10.jpeg" },
        { id: 211, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram11.jpeg" },
        { id: 212, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram12.jpeg" },
        { id: 213, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram13.jpeg" },
        { id: 214, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram14.jpeg" },
        { id: 215, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram15.jpeg" },
        { id: 216, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram16.jpeg" },
        { id: 217, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram17.jpeg" },
        { id: 218, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram18.jpeg" },
        { id: 219, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram19.jpeg" },
        { id: 220, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram20.jpeg" },
        { id: 221, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram21.jpeg" },
        { id: 222, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram22.jpeg" },
        { id: 223, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram23.jpeg" },
        { id: 224, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram24.jpeg" },
        { id: 225, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram25.jpeg" },
        { id: 226, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram26.jpeg" },
        { id: 227, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram27.jpeg" },
        { id: 228, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram28.jpeg" },
        { id: 229, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram29.jpeg" },
        { id: 230, title: "Kanchipuram Soft Silk", price: 550, mrp: 1000, image: "Kanchipuram30.jpeg" },
       
    ],
    "cottoncontainer": [
        { id: 301, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal1.jpeg" },
        { id: 302, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal2.jpeg" },
        { id: 303, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal3.jpeg" },
        { id: 304, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal4.jpeg" },
        { id: 305, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal5.jpeg" },
        { id: 306, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal20.jpeg" },
        { id: 307, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal7.jpeg" },
        { id: 308, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal8.jpeg" },
        { id: 309, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal9.jpeg" },
        { id: 310, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal10.jpeg" },
        { id: 311, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal11.jpeg" },
        { id: 312, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal12.jpeg" },
        { id: 313, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal13.jpeg" },
        { id: 314, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal14.jpeg" },
        { id: 315, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal15.jpeg" },
        { id: 316, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal16.jpeg" },
        { id: 317, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal17.jpeg" },
        { id: 318, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal18.jpeg" },
        { id: 319, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal19.jpeg" },
        { id: 320, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal6.jpeg" },
        { id: 321, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal21.jpeg" },
        { id: 322, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal22.jpeg" },
        { id: 323, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal23.jpeg" },
        { id: 324, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal24.jpeg" },
        { id: 325, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal25.jpeg" },
        { id: 326, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal26.jpeg" },
        { id: 327, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal27.jpeg" },
        { id: 328, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal28.jpeg" },
        { id: 329, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal29.jpeg" },
        { id: 330, title: "Exclusive Bridal  Saree", price: 1100, mrp: 2000, image: "bridal30.jpeg" },
        
    ]
};

// Generate product cards
function generateProductCards(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = containerId === "offerContainer" ? "offercard" : "cardd";
        card.id = item.id;

        card.innerHTML = `
            <a href="${item.image}" target="_blank">
                <img class="img1" src="${item.image}" alt="${item.title}">
            </a>
            <p class="heading">
                ${item.title} <br> ID: ${item.id}<br>
                ${containerId === "offerContainer" 
                    ? `<del>MRP ₹ ${item.mrp}/-</del><br>Today Offer ₹ ${item.offerPrice}/-` 
                    : `Discount Price: ₹ ${item.price.toLocaleString()}<br>MRP: <del>Rs ${item.mrp.toLocaleString()}</del>`}
            </p>
            <div style="display: flex; gap: 2px;">
                <button class="orderbtn" onclick="openInstaDM()">Order Now</button>
                <button class="cardbtn" onclick="addtocard(${item.id})">Add Card</button>
            </div>
        `;

        container.appendChild(card);
    });
}

// Generate cards for all sections
Object.keys(products).forEach(containerId => generateProductCards(containerId, products[containerId]));

// Order Button
function openInstaDM() {
    window.open('https://ig.me/m/riya_text_elampillai', '_blank');
}

// Add to Cart
function addtocard(productId) {
    const productElement = document.getElementById(productId);
    const image = productElement.querySelector('img')?.src || '';
    const title = productElement.querySelector('.heading')?.innerText || 'No Title';
    const priceMatch = title.match(/Rs\s?(\d+)/);
    const price = priceMatch ? priceMatch[1] : '0';

    const product = { id: productId, title, price, image };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const isExist = cart.find(item => item.id === productId);

    if (!isExist) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Added to cart!');
    } else {
        alert('Already in cart!');
    }
}

// Remove from Cart
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    showCart();
}

// Show Cart
function showCart() {
    const container1 = document.getElementById('container1');
    const cartContainer = document.getElementById('showCard');
    if (!container1 || !cartContainer) return;

    container1.style.display = 'none';
    cartContainer.style.display = 'block';

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <h3 class="text-center" style="color: white; margin-top: 40px;">Cart is Empty</h3>
            <div class="text-center mt-6">
                <button onclick="backToProducts()" class="btn btn-info">Back to Products</button>
            </div>
        `;
    } else {
        let html = `<h3 class="text-center" style="color: white; margin-top: 60px;">Cart Items</h3>
        <div class="d-flex flex-wrap justify-content-center gap-3 mt-4" >`;
        cart.forEach(item => {
            html += `
                <div style="border:1px solid #ccc; padding:10px; width:200px; border-radius:10px; text-align:center;">
                 <a href="${item.image}" target="_blank">
                    <img src="${item.image}" alt="${item.title}" style="width:100%; height:150px; object-fit:cover;border-radius:10px;" />
                    </a>
                    <h6>${item.title}</h6>
                    <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">Remove</button>
                    <button class="btn btn-success btn-sm mt-1" onclick="openInstaDM()">Order Now</button>
                </div>
            `;
        });
        html += `</div>
            <div class="text-center mt-3">
                <button onclick="backToProducts()" class="btn btn-info">Back to Products</button>
            </div>`;
        cartContainer.innerHTML = html;
    }

    cartContainer.scrollIntoView({ behavior: 'smooth' });
}

// Back to product list
function backToProducts() {
    document.getElementById('showCard').style.display = 'none';
    document.getElementById('container1').style.display = 'block';
}

function timerpopup(){
    setTimeout(function() {
        alert("Hurry Up! Offer ends soon!");
    }, 5000); // 5 seconds delay
}

function timerpopup1(){
    setTimeout(function() {
        alert("Click the image to view the product in full size!");
    }, 7000); // 7 seconds delay
}
document.addEventListener("DOMContentLoaded", function() {
    timerpopup();
    timerpopup1();
});