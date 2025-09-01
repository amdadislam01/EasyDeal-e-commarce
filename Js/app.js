
//  product data 
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 89.99,
        category: "electronics",
        images: [
            "https://cdn.mos.cms.futurecdn.net/HShZws6QpRSuT7MT8ktNS7-1200-80.jpg",
            "https://images.unsplash.com/photo-1545127398-5aae47194b22?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=60",
            "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=60",
            "https://i.rtings.com/assets/products/h1MqJUpy/apple-airpods-4-truly-wireless/design-medium.jpg?format=auto"
        ],
        rating: 4.5,
        reviews: 124,
        description: "High-quality wireless headphones with noise cancellation and 30-hour battery life. Features Bluetooth 5.0, built-in microphone, and comfortable over-ear design."
    },
    {
        id: 2,
        name: "Men's Casual T-Shirt",
        price: 24.99,
        category: "clothing",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHWlSIwiE2HmXU1epI6g1fyuEJXb_wpqML_As4imKCeO9Kop-iE1s-hsLgEV1mQno5-SE&usqp=CAU",
            "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=60",
            "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=60",
            "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=60"
        ],
        rating: 4.2,
        reviews: 89,
        description: "Comfortable cotton t-shirt available in multiple colors and sizes. Made from 100% organic cotton with reinforced stitching for durability."
    },
    {
        id: 3,
        name: "Smartphone",
        price: 150.99,
        category: "electronics",
        images: [
            "https://cdn.britannica.com/09/241709-050-149181B1/apple-iphone-11-2019.jpg",
            "https://assets.gadgetandgear.com/upload/media/iphone-16-pro-512gb-black-titanium.jpeg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT29l1B9CwPWIojBz1Wt_H2khY6V7lAYiRlBA&s",
            "https://img.drz.lazcdn.com/static/bd/p/ebbae910ce250a9676a53bec18e651c3.jpg_720x720q80.jpg"
        ],
        rating: 4.0,
        reviews: 42,
        description: "Adjustable smartphone stand for comfortable viewing at your desk or bedside. Fits all smartphone sizes from 4 to 7 inches with non-slip rubber base."
    },
    {
        id: 4,
        name: "Stainless Steel Water Bottle",
        price: 29.99,
        category: "home",
        images: [
            "https://images.othoba.com/images/thumbs/0706672_stainless-steel-h2o-sports-water-bottle-700ml.jpeg",
            "https://pexpo.in/cdn/shop/files/blk.jpg?v=1747128815",
            "https://www.liucshop.it/wp-content/uploads/2022/11/NB008_Borraccia_termica_LIUC_1.jpg",
            "https://m.media-amazon.com/images/I/61EXFDPs5uL._AC_SL1500_.jpg"
        ],
        rating: 4.7,
        reviews: 156,
        description: "Keep your drinks hot or cold for hours with this durable stainless steel bottle. 750ml capacity with leak-proof lid and ergonomic design."
    },
    {
        id: 5,
        name: "Programming Book: JavaScript",
        price: 39.99,
        category: "books",
        images: [
            "https://www.designveloper.com/wp-content/uploads/2021/01/Classic-Books-about-JavaScript-Eloquent-JavaScript-1024x808.jpg",
            "https://www.designveloper.com/wp-content/uploads/2021/01/Classic-Books-about-JavaScript-Eloquent-JavaScript-1024x808.jpg",
            "https://www.designveloper.com/wp-content/uploads/2021/01/Classic-Books-about-JavaScript-Eloquent-JavaScript-1024x808.jpg",
            "https://www.designveloper.com/wp-content/uploads/2021/01/Classic-Books-about-JavaScript-Eloquent-JavaScript-1024x808.jpg"
        ],
        rating: 4.8,
        reviews: 210,
        description: "Comprehensive guide to modern JavaScript programming for beginners and experts. Covers ES6+ features, async programming, and popular frameworks."
    },
    {
        id: 6,
        name: "Women's Running Shoes",
        price: 79.99,
        category: "clothing",
        images: [
            "https://img.drz.lazcdn.com/g/kf/S62a128a4d4f84175aa40e2206ebadfeao.jpg_720x720q80.jpg",
            "https://img.drz.lazcdn.com/g/kf/S62a128a4d4f84175aa40e2206ebadfeao.jpg_720x720q80.jpg",
            "https://img.drz.lazcdn.com/g/kf/S62a128a4d4f84175aa40e2206ebadfeao.jpg_720x720q80.jpg",
            "https://img.drz.lazcdn.com/g/kf/S62a128a4d4f84175aa40e2206ebadfeao.jpg_720x720q80.jpg"
        ],
        rating: 4.6,
        reviews: 178,
        description: "Lightweight and comfortable running shoes with excellent support and cushioning. Breathable mesh upper with responsive foam midsole for energy return."
    },
    {
        id: 7,
        name: "Smart Watch",
        price: 199.99,
        category: "electronics",
        images: [
            "https://dazzle.sgp1.cdn.digitaloceanspaces.com/30731/Apple-Watch-SE-starlight.webp",
            "https://dazzle.sgp1.cdn.digitaloceanspaces.com/30731/Apple-Watch-SE-starlight.webp",
            "https://dazzle.sgp1.cdn.digitaloceanspaces.com/30731/Apple-Watch-SE-starlight.webp",
            "https://dazzle.sgp1.cdn.digitaloceanspaces.com/30731/Apple-Watch-SE-starlight.webp"
        ],
        rating: 4.4,
        reviews: 95,
        description: "Track your fitness, receive notifications, and more with this feature-packed smartwatch. Includes heart rate monitoring, GPS, and 7-day battery life."
    },
    {
        id: 8,
        name: "Ceramic Coffee Mug",
        price: 12.99,
        category: "home",
        images: [
            "https://www.smarteshopbd.com/wp-content/uploads/2022/12/electric-ceramic-coffee-mug-and-saucer-1200x1200.jpg",
            "https://www.smarteshopbd.com/wp-content/uploads/2022/12/electric-ceramic-coffee-mug-and-saucer-1200x1200.jpg",
            "https://www.smarteshopbd.com/wp-content/uploads/2022/12/electric-ceramic-coffee-mug-and-saucer-1200x1200.jpg",
            "https://www.smarteshopbd.com/wp-content/uploads/2022/12/electric-ceramic-coffee-mug-and-saucer-1200x1200.jpg"
        ],
        rating: 4.3,
        reviews: 67,
        description: "Beautiful handmade ceramic mug perfect for your morning coffee or tea. Holds 12oz with comfortable handle and chip-resistant glaze."
    },
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
    },
    {
        id: 17,
        name: "Non-Stick Cookware Set",
        price: 129.99,
        category: "home",
        images: [
            "https://www.greenpan.us/cdn/shop/files/GP_Rio_Tuquoise_16pcSet_Prep_03-1200x1200-bfc499c.jpg?v=1697735703",
            "https://images.unsplash.com/photo-1556910633-8b5a5c533216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1607602132700-0681204a2a6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.7,
        reviews: 215,
        description: "10-piece ceramic non-stick cookware set with stay-cool handles."
    },
    {
        id: 18,
        name: "Air Fryer XL",
        price: 89.99,
        category: "home",
        images: [
            "https://images.unsplash.com/photo-1611791484670-ce19b801d192?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1615873968403-89c068185275?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1611791484670-ce19b801d192?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.8,
        reviews: 342,
        description: "5.8QT digital air fryer with 7 cooking presets and rapid air technology."
    },
    {
        id: 19,
        name: "Memory Foam Mattress",
        price: 399.99,
        category: "home",
        images: [
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.9,
        reviews: 478,
        description: "12-inch gel memory foam mattress with cooling technology."
    },
    {
        id: 20,
        name: "Robot Vacuum Cleaner",
        price: 249.99,
        category: "home",
        images: [
            "https://www.cnet.com/a/img/resize/4a5a265d6f4c76d602107864bd97040586165259/hub/2025/01/04/e8648aa8-55fc-477b-b248-91860348e255/screenshot-2025-01-04-at-3-37-19pm.png?auto=webp&fit=crop&height=675&width=1200",
            "https://images.unsplash.com/photo-1595341595379-cf0f2a3c18b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1578302758063-0ef3e0480976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.6,
        reviews: 187,
        description: "Smart robotic vacuum with app control and automatic charging."
    },
    {
        id: 21,
        name: "Ceramic Dinnerware Set",
        price: 69.99,
        category: "home",
        images: [
            "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.5,
        reviews: 156,
        description: "16-piece stoneware dinner set in modern minimalist design."
    },
    {
        id: 22,
        name: "Smart Coffee Maker",
        price: 119.99,
        category: "home",
        images: [
            "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.7,
        reviews: 289,
        description: "Programmable coffee maker with WiFi connectivity and 12-cup capacity."
    },
    {
        id: 23,
        name: "Electric Standing Mixer",
        price: 149.99,
        category: "home",
        images: [
            "https://www.livingandhome.co.uk/cdn/shop/files/AI1343-1000-2.jpg?v=1716891556",
            "https://images.unsplash.com/photo-1603048719537-93a4c7f0cb1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1603048719537-93a4c7f0cb1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.8,
        reviews: 198,
        description: "Professional 6-quart stand mixer with 10-speed control."
    },
    {
        id: 24,
        name: "Smart LED Lighting Kit",
        price: 59.99,
        category: "home",
        images: [
            "https://store.yeelight.com/cdn/shop/articles/How_to_Choose_the_Right_LED_Light_for_Your_Space_345x300_crop_center.jpg?v=1697985952",
            "https://images.unsplash.com/photo-1586282391129-76a746df25f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1586282391129-76a746df25f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.4,
        reviews: 132,
        description: "16 million color smart bulbs with voice control and scheduling."
    },
    {
        id: 25,
        name: "The Silent Patient",
        price: 12.99,
        category: "books",
        images: [
            "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.5,
        reviews: 45,
        description: "Psychological thriller by Alex Michaelides about a woman who shoots her husband and then stops speaking.",
        author: "Alex Michaelides",
        pages: 336,
        publishedYear: 2019
    },
    {
        id: 26,
        name: "Atomic Habits",
        price: 14.99,
        category: "books",
        images: [
            "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.8,
        reviews: 128,
        description: "James Clear's guide to building good habits and breaking bad ones through tiny changes.",
        author: "James Clear",
        pages: 320,
        publishedYear: 2018
    },
    {
        id: 27,
        name: "The Midnight Library",
        price: 10.99,
        category: "books",
        images: [
            "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.3,
        reviews: 92,
        description: "Matt Haig's novel about a library between life and death where each book represents a different life path.",
        author: "Matt Haig",
        pages: 304,
        publishedYear: 2020
    },
    {
        id: 28,
        name: "Educated",
        price: 13.99,
        category: "books",
        images: [
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.7,
        reviews: 156,
        description: "Tara Westover's memoir about growing up in a survivalist family and her journey to education.",
        author: "Tara Westover",
        pages: 352,
        publishedYear: 2018
    },
    {
        id: 29,
        name: "Project Hail Mary",
        price: 15.99,
        category: "books",
        images: [
            "https://pictures.abebooks.com/isbn/9781529100617-uk.jpg",
            "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.9,
        reviews: 201,
        description: "Andy Weir's science fiction novel about a lone astronaut who must save the earth from disaster.",
        author: "Andy Weir",
        pages: 496,
        publishedYear: 2021
    },
    {
        id: 30,
        name: "Where the Crawdads Sing",
        price: 11.99,
        category: "books",
        images: [
            "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.6,
        reviews: 178,
        description: "Delia Owens' novel about an abandoned girl who raises herself in the marshes of North Carolina.",
        author: "Delia Owens",
        pages: 384,
        publishedYear: 2018
    },
    {
        id: 31,
        name: "The Psychology of Money",
        price: 13.49,
        category: "books",
        images: [
            "https://miro.medium.com/v2/resize:fit:750/0*qyqhP4CBsJ3teRW3.jpg",
            "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.7,
        reviews: 145,
        description: "Morgan Housel's collection of short stories exploring the strange ways people think about money.",
        author: "Morgan Housel",
        pages: 256,
        publishedYear: 2020
    },
    {
        id: 32,
        name: "The Song of Achilles",
        price: 10.49,
        category: "books",
        images: [
            "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.8,
        reviews: 210,
        description: "Madeline Miller's retelling of Homer's Iliad through the perspective of Patroclus and Achilles.",
        author: "Madeline Miller",
        pages: 416,
        publishedYear: 2011
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
    // Show only first 12 products initially
    const initialProducts = products.slice(0, 12);
    renderProducts(initialProducts);
    setupEventListeners();
    populateCompareDropdowns();

    // Add View More button if there are more products
    if (products.length > 12) {
        addViewButtons();
    }
}

// Add both View More and View Less buttons
function addViewButtons() {
    // Remove existing buttons if any
    const existingContainer = document.getElementById('view-buttons-container');
    if (existingContainer) existingContainer.remove();

    // Create container for buttons
    const buttonsContainer = document.createElement('div');
    buttonsContainer.id = 'view-buttons-container';
    buttonsContainer.className = 'text-center mt-8';

    // Create View More button
    const viewMoreBtn = document.createElement('button');
    viewMoreBtn.className = 'mx-auto block bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300';
    viewMoreBtn.textContent = 'View More Products';
    viewMoreBtn.id = 'view-more-btn';

    // Create View Less button (hidden initially)
    const viewLessBtn = document.createElement('button');
    viewLessBtn.className = 'mx-auto mt-4 block bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300';
    viewLessBtn.textContent = 'View Less Products';
    viewLessBtn.id = 'view-less-btn';
    viewLessBtn.style.display = 'none';

    // Add event listeners
    viewMoreBtn.addEventListener('click', () => {
        // Show all products
        renderProducts(products);
        // Toggle buttons
        viewMoreBtn.style.display = 'none';
        viewLessBtn.style.display = 'block';
    });

    viewLessBtn.addEventListener('click', () => {
        // Show limited products again
        const initialProducts = products.slice(0, 12);
        renderProducts(initialProducts);
        // Toggle buttons
        viewLessBtn.style.display = 'none';
        viewMoreBtn.style.display = 'block';
    });

    // Add buttons to container
    buttonsContainer.appendChild(viewMoreBtn);
    buttonsContainer.appendChild(viewLessBtn);

    // Add the container after the products container
    productsContainer.insertAdjacentElement('afterend', buttonsContainer);
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

    // Remove existing View More button if it exists
    const existingBtn = document.getElementById('view-more-btn');
    if (existingBtn) {
        existingBtn.closest('div').remove();
    }

    // Show only 12 products initially if not filtered
    if (category === 'all' && priceRange === 'all' && filteredProducts.length > 12) {
        const initialProducts = filteredProducts.slice(0, 12);
        renderProducts(initialProducts);
        addViewMoreButton();
    } else {
        renderProducts(filteredProducts);
    }
}

// Filter products by category and price
// function filterProducts() {
//     const category = categoryFilter.value;
//     const priceRange = priceFilter.value;

//     let filteredProducts = products;

//     // Filter by category
//     if (category !== 'all') {
//         filteredProducts = filteredProducts.filter(product => product.category === category);
//     }

//     // Filter by price
//     if (priceRange !== 'all') {
//         const [min, max] = priceRange.split('-').map(Number);
//         filteredProducts = filteredProducts.filter(product => {
//             if (max) {
//                 return product.price >= min && product.price <= max;
//             } else {
//                 return product.price >= min;
//             }
//         });
//     }

//     renderProducts(filteredProducts);
// }

// Add to cart
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);

    // Check if product is already in cart
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
        showAlert(`${product.name} quantity updated to ${existingItem.quantity}`);
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
        showAlert(`${product.name} add to cart`);
    }

    updateCart();

    // Add animation to cart button
    cartCount.classList.add('cart-pulse');
    setTimeout(() => {
        cartCount.classList.remove('cart-pulse');
    }, 1500);
}

// Function to show alert message
function showAlert(message) {
    // Create alert element
    const alert = document.createElement('div');
    alert.className = 'cart-alert';
    alert.textContent = message;
    
    // Style the alert 
    alert.style.position = 'fixed';
    alert.style.bottom = '20px';
    alert.style.right = '20px';
    alert.style.padding = '15px 20px';
    alert.style.backgroundColor = '#40af44ff';
    alert.style.color = 'white';
    alert.style.borderRadius = '8px';
    alert.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    alert.style.zIndex = '1000';
    alert.style.animation = 'fadeIn 0.3s, fadeOut 0.3s 2.7s';
    
    // Add to document
    document.body.appendChild(alert);
    
    // Remove after 3 seconds
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

// Add keyframes for animation (using JavaScript)
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(20px); }
    }
`;
document.head.appendChild(style);

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
