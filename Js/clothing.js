const products = [
    {
        id: 9,
        name: "Men's Slim Fit Denim Jeans",
        price: 49.99,
        category: "clothing",
        images: [
            "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.6,
        reviews: 128,
        description: "Classic blue denim jeans with stretch technology for maximum comfort."
    },
    {
        id: 10,
        name: "Women's Floral Summer Dress",
        price: 39.99,
        category: "clothing",
        images: [
            "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.8,
        reviews: 215,
        description: "Lightweight floral dress perfect for summer outings and beach vacations."
    },
    {
        id: 11,
        name: "Unisex Cotton Hoodie",
        price: 34.99,
        category: "clothing",
        images: [
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.5,
        reviews: 187,
        description: "Comfortable oversized hoodie made from premium cotton blend."
    },
    {
        id: 12,
        name: "Men's Formal Suit Set",
        price: 129.99,
        category: "clothing",
        images: [
            "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.7,
        reviews: 92,
        description: "Elegant slim-fit suit for weddings, business meetings and formal occasions."
    },
    {
        id: 13,
        name: "Women's Yoga Pants Set",
        price: 29.99,
        category: "clothing",
        images: [
            "https://i.pinimg.com/736x/dd/2f/08/dd2f080fb0a1ec1a532dec3ee8d518ab.jpg",
            "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.9,
        reviews: 346,
        description: "High-waisted yoga pants with matching sports bra - perfect for workouts."
    },
    {
        id: 14,
        name: "Kids' Cartoon Printed T-Shirt",
        price: 14.99,
        category: "clothing",
        images: [
            "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.4,
        reviews: 78,
        description: "100% cotton t-shirt with fun cartoon prints for kids aged 2-10 years."
    },
    {
        id: 15,
        name: "Women's Winter Coat",
        price: 89.99,
        category: "clothing",
        images: [
            "https://m.media-amazon.com/images/I/61G0klIeGnL._UY350_.jpg",
            "https://images.unsplash.com/photo-1539533018447-63fcce2678e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1539533018447-63fcce2678e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.7,
        reviews: 156,
        description: "Warm winter coat with faux fur hood and multiple pockets."
    },
    {
        id: 16,
        name: "Men's Running Shoes",
        price: 79.99,
        category: "clothing",
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.6,
        reviews: 231,
        description: "Lightweight running shoes with responsive cushioning and breathable mesh."
    }
];



// Cart state
let cart = [];
let currentQuickViewProduct = null;

// DOM elements
const productsContainer = document.getElementById('products-container');
const categoryFilter = document.getElementById('category-filter');
const priceFilter = document.getElementById('price-filter');
const resetFiltersBtn = document.getElementById('reset-filters');
const cartBtn = document.getElementById('cart-btn');
const cartCount = document.getElementById('cart-count');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const closeCartBtn = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const quickViewModal = document.getElementById('quick-view-modal');
const closeQuickViewBtn = document.getElementById('close-quick-view');
const checkoutModal = document.getElementById('checkout-modal');
const closeCheckoutBtn = document.getElementById('close-checkout');
const compareProduct1 = document.getElementById('compare-product-1');
const compareProduct2 = document.getElementById('compare-product-2');
const compareBtn = document.getElementById('compare-btn');
const comparisonResult = document.getElementById('comparison-result');

// Initialize the app
function init() {
    renderProducts(products);
    setupEventListeners();
    populateCompareDropdowns();
}

// Render products to the page
function renderProducts(productsToRender) {
    productsContainer.innerHTML = '';

    productsToRender.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = `bg-white rounded-xl shadow-md overflow-hidden card-hover smooth-transition animate-fadeIn`;
        productCard.style.animationDelay = `${index * 0.1}s`;

        productCard.innerHTML = `
                    <div class="relative">
                        <img src="${product.images[0]}" alt="${product.name}" class="w-full h-48 object-cover">
                        <button class="quick-view-btn absolute top-2 right-2 bg-white p-2 rounded-full shadow-md text-cyan-600 hover:bg-cyan-600 hover:text-white smooth-transition" data-id="${product.id}">
                            <i class="fas fa-eye"></i>
                        </button>
                        <div class="absolute top-2 left-2 bg-cyan-600 text-white text-xs font-bold px-2 py-1 rounded">
                            ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-800 mb-1">${product.name}</h3>
                        <div class="flex items-center mb-2">
                            <div class="flex text-yellow-400 text-xs">
                                ${renderStars(product.rating)}
                            </div>
                            <span class="text-gray-500 text-xs ml-1">(${product.reviews})</span>
                        </div>
                        <p class="text-cyan-600 font-bold text-lg mb-4">$${product.price.toFixed(2)}</p>
                        <button class="add-to-cart-btn w-full bg-cyan-600 text-white py-2 rounded-lg btn-cyan-hover btn-cyan-active smooth-transition" data-id="${product.id}">
                            Add to Cart
                        </button>
                    </div>
                `;

        productsContainer.appendChild(productCard);
    });
}

// Render star rating
function renderStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }

    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }

    return stars;
}

// Filter products by category and price
function filterProducts() {
    const category = categoryFilter.value;
    const priceRange = priceFilter.value;

    let filteredProducts = products;

    // Filter by category
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    // Filter by price
    if (priceRange !== 'all') {
        const [min, max] = priceRange.split('-').map(Number);
        filteredProducts = filteredProducts.filter(product => {
            if (max) {
                return product.price >= min && product.price <= max;
            } else {
                return product.price >= min;
            }
        });
    }

    renderProducts(filteredProducts);
}

// Add to cart
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);

    // Check if product is already in cart
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }

    updateCart();

    // Add animation to cart button
    cartCount.classList.add('cart-pulse');
    setTimeout(() => {
        cartCount.classList.remove('cart-pulse');
    }, 1500);
}

// Update cart UI
function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items list
    if (cart.length === 0) {
        cartItems.innerHTML = `
                    <div class="text-center py-10">
                        <i class="fas fa-shopping-cart text-4xl text-gray-300 mb-4"></i>
                        <p class="text-gray-500">Your cart is empty</p>
                    </div>
                `;
    } else {
        cartItems.innerHTML = cart.map(item => `
                    <div class="flex items-center py-4 border-b border-gray-200">
                        <img src="${item.images[0]}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
                        <div class="ml-4 flex-1">
                            <h4 class="text-gray-800 font-medium">${item.name}</h4>
                            <p class="text-cyan-600 font-medium">$${item.price.toFixed(2)}</p>
                            <div class="flex items-center mt-2">
                                <button class="decrease-quantity px-2 py-1 border border-gray-300 rounded-l hover:bg-gray-100 smooth-transition" data-id="${item.id}">
                                    <i class="fas fa-minus text-xs"></i>
                                </button>
                                <span class="px-3 py-1 border-t border-b border-gray-300 text-sm">${item.quantity}</span>
                                <button class="increase-quantity px-2 py-1 border border-gray-300 rounded-r hover:bg-gray-100 smooth-transition" data-id="${item.id}">
                                    <i class="fas fa-plus text-xs"></i>
                                </button>
                                <button class="remove-item ml-4 text-red-500 hover:text-red-700 smooth-transition" data-id="${item.id}">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('');
    }

    // Update totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    cartTotal.textContent = `$${subtotal.toFixed(2)}`;

    // Update checkout modal totals
    document.getElementById('checkout-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('checkout-total').textContent = `$${subtotal.toFixed(2)}`;
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Update item quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);

    if (item) {
        item.quantity += change;

        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
        }
    }
}

// Show product quick view
function showQuickView(productId) {
    const product = products.find(p => p.id === productId);
    currentQuickViewProduct = product;

    if (product) {
        document.getElementById('quick-view-title').textContent = product.name;
        document.getElementById('quick-view-image').src = product.images[0];
        document.getElementById('quick-view-price').textContent = `$${product.price.toFixed(2)}`;
        document.getElementById('quick-view-rating').textContent = `${product.rating} (${product.reviews} reviews)`;
        document.getElementById('quick-view-description').textContent = product.description;
        document.querySelector('.quantity-value').textContent = '1';

        // Render thumbnails
        const thumbnailContainer = document.getElementById('thumbnail-container');
        thumbnailContainer.innerHTML = '';

        product.images.forEach((image, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = image;
            thumbnail.alt = `${product.name} - ${index + 1}`;
            thumbnail.className = `h-20 w-full object-cover rounded border border-gray-200 cursor-pointer hover:border-cyan-500 smooth-transition ${index === 0 ? 'thumbnail-active' : ''}`;
            thumbnail.addEventListener('click', () => {
                // Update main image
                document.getElementById('quick-view-image').src = image;

                // Update active thumbnail
                document.querySelectorAll('#thumbnail-container img').forEach(img => {
                    img.classList.remove('thumbnail-active');
                });
                thumbnail.classList.add('thumbnail-active');
            });
            thumbnailContainer.appendChild(thumbnail);
        });

        // Show modal with animation
        quickViewModal.classList.remove('hidden');
        setTimeout(() => {
            const modalContent = quickViewModal.querySelector('div > div');
            modalContent.classList.remove('scale-95', 'opacity-0');
        }, 10);
    }
}

// Show cart sidebar
function showCart() {
    cartSidebar.classList.remove('translate-x-full');
    cartOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Hide cart sidebar
function hideCart() {
    cartSidebar.classList.add('translate-x-full');
    cartOverlay.classList.add('hidden');
    document.body.style.overflow = '';
}

// Show checkout modal
function showCheckout() {
    checkoutModal.classList.remove('hidden');
    setTimeout(() => {
        const modalContent = checkoutModal.querySelector('div > div');
        modalContent.classList.remove('scale-95', 'opacity-0');
    }, 10);
    hideCart();
}

// Hide checkout modal
function hideCheckout() {
    const modalContent = checkoutModal.querySelector('div > div');
    modalContent.classList.add('scale-95', 'opacity-0');

    setTimeout(() => {
        checkoutModal.classList.add('hidden');
    }, 300);
}

// Populate compare dropdowns
function populateCompareDropdowns() {
    compareProduct1.innerHTML = '<option value="">Select first product to compare</option>';
    compareProduct2.innerHTML = '<option value="">Select second product to compare</option>';

    products.forEach(product => {
        const option1 = document.createElement('option');
        option1.value = product.id;
        option1.textContent = product.name;
        compareProduct1.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = product.id;
        option2.textContent = product.name;
        compareProduct2.appendChild(option2);
    });
}

// Compare products
function compareProducts() {
    const product1Id = parseInt(compareProduct1.value);
    const product2Id = parseInt(compareProduct2.value);

    if (!product1Id || !product2Id) {
        alert('Please select two products to compare');
        return;
    }

    if (product1Id === product2Id) {
        alert('Please select two different products to compare');
        return;
    }

    const product1 = products.find(p => p.id === product1Id);
    const product2 = products.find(p => p.id === product2Id);

    comparisonResult.innerHTML = `
                <div class="grid grid-cols-3 gap-4">
                    <div class="font-semibold text-gray-700">Feature</div>
                    <div class="font-semibold text-center">${product1.name}</div>
                    <div class="font-semibold text-center">${product2.name}</div>
                    
                    <div class="border-t border-gray-200 pt-2">Image</div>
                    <div class="border-t border-gray-200 pt-2 flex justify-center">
                        <img src="${product1.images[0]}" alt="${product1.name}" class="h-20 object-cover rounded">
                    </div>
                    <div class="border-t border-gray-200 pt-2 flex justify-center">
                        <img src="${product2.images[0]}" alt="${product2.name}" class="h-20 object-cover rounded">
                    </div>
                    
                    <div class="border-t border-gray-200 pt-2">Price</div>
                    <div class="border-t border-gray-200 pt-2 text-center">$${product1.price.toFixed(2)}</div>
                    <div class="border-t border-gray-200 pt-2 text-center">$${product2.price.toFixed(2)}</div>
                    
                    <div class="border-t border-gray-200 pt-2">Category</div>
                    <div class="border-t border-gray-200 pt-2 text-center">${product1.category.charAt(0).toUpperCase() + product1.category.slice(1)}</div>
                    <div class="border-t border-gray-200 pt-2 text-center">${product2.category.charAt(0).toUpperCase() + product2.category.slice(1)}</div>
                    
                    <div class="border-t border-gray-200 pt-2">Rating</div>
                    <div class="border-t border-gray-200 pt-2 text-center">
                        <div class="flex justify-center text-yellow-400 text-sm">
                            ${renderStars(product1.rating)}
                        </div>
                        <span class="text-xs text-gray-600">${product1.rating} (${product1.reviews} reviews)</span>
                    </div>
                    <div class="border-t border-gray-200 pt-2 text-center">
                        <div class="flex justify-center text-yellow-400 text-sm">
                            ${renderStars(product2.rating)}
                        </div>
                        <span class="text-xs text-gray-600">${product2.rating} (${product2.reviews} reviews)</span>
                    </div>
                    
                    <div class="border-t border-gray-200 pt-2">Description</div>
                    <div class="border-t border-gray-200 pt-2 text-sm text-gray-700">${product1.description}</div>
                    <div class="border-t border-gray-200 pt-2 text-sm text-gray-700">${product2.description}</div>
                </div>
            `;

    comparisonResult.classList.remove('hidden');
}

// Setup event listeners
function setupEventListeners() {
    // Filter products
    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
    resetFiltersBtn.addEventListener('click', () => {
        categoryFilter.value = 'all';
        priceFilter.value = 'all';
        filterProducts();
    });

    // Cart functionality
    cartBtn.addEventListener('click', showCart);
    closeCartBtn.addEventListener('click', hideCart);
    cartOverlay.addEventListener('click', hideCart);
    checkoutBtn.addEventListener('click', showCheckout);
    closeCheckoutBtn.addEventListener('click', hideCheckout);

    // Quick view functionality
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('quick-view-btn') || e.target.closest('.quick-view-btn')) {
            const btn = e.target.classList.contains('quick-view-btn') ? e.target : e.target.closest('.quick-view-btn');
            showQuickView(parseInt(btn.dataset.id));
        }

        if (e.target.classList.contains('add-to-cart-btn') || e.target.closest('.add-to-cart-btn')) {
            const btn = e.target.classList.contains('add-to-cart-btn') ? e.target : e.target.closest('.add-to-cart-btn');
            addToCart(parseInt(btn.dataset.id));
        }

        if (e.target.classList.contains('decrease-quantity') || e.target.closest('.decrease-quantity')) {
            const btn = e.target.classList.contains('decrease-quantity') ? e.target : e.target.closest('.decrease-quantity');
            updateQuantity(parseInt(btn.dataset.id), -1);
        }

        if (e.target.classList.contains('increase-quantity') || e.target.closest('.increase-quantity')) {
            const btn = e.target.classList.contains('increase-quantity') ? e.target : e.target.closest('.increase-quantity');
            updateQuantity(parseInt(btn.dataset.id), 1);
        }

        if (e.target.classList.contains('remove-item') || e.target.closest('.remove-item')) {
            const btn = e.target.classList.contains('remove-item') ? e.target : e.target.closest('.remove-item');
            removeFromCart(parseInt(btn.dataset.id));
        }

        if (e.target.classList.contains('quick-view-add-to-cart') || e.target.closest('.quick-view-add-to-cart')) {
            const quantity = parseInt(document.querySelector('.quantity-value').textContent);
            addToCart(currentQuickViewProduct.id, quantity);
            hideQuickView();
        }
    });

    // Quantity controls in quick view
    document.querySelector('.quantity-plus')?.addEventListener('click', () => {
        const quantityElement = document.querySelector('.quantity-value');
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = quantity + 1;
    });

    document.querySelector('.quantity-minus')?.addEventListener('click', () => {
        const quantityElement = document.querySelector('.quantity-value');
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantityElement.textContent = quantity - 1;
        }
    });

    // Close quick view
    closeQuickViewBtn.addEventListener('click', () => {
        const modalContent = quickViewModal.querySelector('div > div');
        modalContent.classList.add('scale-95', 'opacity-0');

        setTimeout(() => {
            quickViewModal.classList.add('hidden');
        }, 300);
    });

    // Compare products
    compareBtn.addEventListener('click', compareProducts);

    // Place order
    document.getElementById('place-order-btn').addEventListener('click', () => {
        alert('Order placed successfully! Thank you for your purchase.');
        cart = [];
        updateCart();
        hideCheckout();
    });
}

// Initialize the app
init();
