const products = {

    _types: ['cakes', 'pastries', 'snacks', 'assorted'],

    _message_link: 'Hi%20Chris%20Joan!%20I%27d%20like%20to%20order%20a%20cake%20for%20a%20special%20occasion.',

    load_types() {
        this._types.forEach(type => this.load_products(type))
    },

    load_products(type) {
        const _holder = document.querySelector('#products-' + type)
        this.cakes.forEach(cake => {
            if (cake.type == type) {
                _holder.innerHTML += this.show_product(cake)
            }
        })
    },

    show_product(cake) {

        const message = this._message_link + ' ' + encodeURIComponent('I am interested in your ' + cake.name + '. Please get back to me as soon as possible.'),
            _id = Math.random(12)

        return `
            <div class="col-lg-3 col-sm-6 pb-2" data-aos="fade-up">
                <div class="card shadow-on-hover">
                    <img src="${cake.image}" class="card-img-top" alt="${cake.name}" />
                    <div class="card-body">
                        <span>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star-half text-warning"></i>
                            <small>(4.8)</small>
                        </span>
                        <h5 class="card-title">${cake.name}</h5>
                        <p class="card-text">${cake.description}</p>
                        <div class="d-flex align-items-center justify-content-between">
                            <h3 class="fw-bold text-primary-darker mb-0">${cake.price}</h3>
                            <a href="#" class="btn btn-primary" data-cake="${cake.name}"
                                data-bs-toggle="modal" data-bs-target="#product${cake.id}">
                                <i class="fa-solid fa-cart-shopping me-2"></i>Order Now</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="product${cake.id}" tabindex="-1" aria-labelledby="product${cake.id}Label" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body p-0">
                            <img src="${cake.image}" class="w-100"/>
                            <div class="alert alert-primary rounded-0 mb-0  d-flex align-items-center">
                                <i class="fa fa-cart-shopping me-2"></i>
                                <div>You are placing an order for our <b>${cake.name}.</b></div>
                            </div>
                            <div class="list-group list-group-flush mb-1">
                                <div class="py-3 list-group-item d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center justify-content-start">
                                        <span class="fa-stack fa-2x">
                                            <i class="fa-solid fa-square fa-stack-2x"></i>
                                            <i class="fa fa-home fa-stack-1x fa-inverse"></i>
                                        </span>
                                        <div class="mx-3">
                                            <h5 class="mb-0">Visit Us</h5>
                                            <p class="mb-0">${settings.address}</p>
                                        </div>
                                    </div>
                                    <div class="flex-end">
                                        <a href="https://goo.gl/maps/6jq9LRDocz7BwTsWA" class="btn btn-secondary">
                                            <i class="fa fa-map-signs fa-2x"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="py-3 list-group-item d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center justify-content-start">
                                        <span class="fa-stack fa-2x">
                                            <i class="fa-solid fa-square fa-stack-2x"></i>
                                            <i class="fab fa-whatsapp fa-stack-1x fa-inverse"></i>
                                        </span>
                                        <div class="mx-3">
                                            <h5 class="mb-0">Call Us</h5>
                                            <p class="mb-0">${settings.phone}</p>
                                        </div>
                                    </div>
                                    <div class="flex-end">
                                        <a href="tel:${settings.phone}" class="btn btn-primary">
                                            <i class="fa fa-phone fa-2x text-white"></i>
                                        </a>
                                        <a href="https://api.whatsapp.com/send?phone=${settings.phone}&text=${message}" class="btn btn-success">
                                            <i class="fab fa-whatsapp fa-2x"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="py-3 list-group-item d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center justify-content-start">
                                        <span class="fa-stack fa-2x">
                                            <i class="fa-solid fa-square fa-stack-2x"></i>
                                            <i class="far fa-envelope fa-stack-1x fa-inverse"></i>
                                        </span>
                                        <div class="mx-3">
                                            <h5 class="mb-0">Send Us A Message</h5>
                                            <p class="mb-0">${settings.email}</p>
                                        </div>
                                    </div>
                                    <div class="flex-end">
                                        <a href="mailto:${settings.email}?subject=A%20New%20Cake%20Request&body=${message}" class="btn btn-warning">
                                            <i class="fa fa-envelope-circle-check text-white fa-2x"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    cakes: [
        {
            "id": new Date().getTime() * 2,
            "type": "cakes",
            "name": "Fundant Cake Icing",
            "price": "₦XX.XX",
            "description": "Decadent layers of moist cake enveloped in luscious fondant perfection.",
            "image": "./assets/img/products/Fundant-Cake-Icing.jpeg"
        },
        {
            "id": new Date().getTime() * 4,
            "type": "pastries",
            "name": "Meatpie",
            "price": "₦800",
            "description": "Savor the savory goodness of a delectable meat-filled pastry delight",
            "image": "./assets/img/products/meatpie-pastries.jpeg"
        },
        {
            "id": new Date().getTime() * 6,
            "type": "snacks",
            "name": "Box Of Cupcakes",
            "price": "₦10,000",
            "description": "Bite-sized delights that deliver big flavors in every little cupcake.",
            "image": "./assets/img/products/CupCakes.jpeg"
        },
        {
            "id": new Date().getTime() * 8,
            "type": "cakes",
            "name": "Naked Cake",
            "price": "₦5,000",
            "description": "Delight in the rustic charm of a naked cake creation.",
            "image": "./assets/img/products/Naked-Cake.jpeg"
        },
        {
            "id": new Date().getTime() * 10,
            "type": "cakes",
            "name": "Double ButterCream",
            "price": "₦XX.XX",
            "description": "Indulge in a heavenly symphony of velvety buttercream bliss, doubled.",
            "image": "./assets/img/products/Double-ButterCream.jpeg"
        },
        {
            "id": new Date().getTime() * 12,
            "type": "cakes",
            "name": "Whipped Cream Cake",
            "price": "₦XX.XX",
            "description": "Experience light and airy bliss with our heavenly whipped cream cake.",
            "image": "./assets/img/products/Whipped-Cream-Cake.jpeg"
        },
        {
            "id": new Date().getTime() * 14,
            "type": "cakes",
            "name": "Butter Cream Cake & Box of Samosa & Spring Roll",
            "price": "₦XX.XX",
            "description": "Indulge in a heavenly combination of buttercream cake and sumptious puffs",
            "image": "./assets/img/products/Butter-cream-cake-and-box-of-puff.jpeg"
        },
        {
            "id": new Date().getTime() * 16,
            "type": "cakes",
            "name": "Fundant Cake",
            "price": "₦XX.XX",
            "description": "An edible masterpiece encased in flawless fondant perfection.",
            "image": "./assets/img/products/Fundant-Cake.jpeg"
        },
        {
            "id": new Date().getTime() * 18,
            "type": "pastries",
            "name": "Plate of Spring Rolls, Puffs & Chicken",
            "price": "₦XX.XX",
            "description": "A tantalizing platter featuring spring rolls, puffs, and savory chicken.",
            "image": "./assets/img/products/pastry-samosa.jpeg"
        },
        {
            "id": new Date().getTime() * 20,
            "type": "cakes",
            "name": "Butter Cream Cake & Box of Samosa, Spring Roll and Sauced Chicken",
            "price": "₦XX.XX",
            "description": "Indulge in a heavenly combination of buttercream cake and sumptious puffs",
            "image": "./assets/img/products/A butter- Cream-CakeandSpringroll andpuff.jpeg"
        },

        {
            "id": new Date().getTime() * 22,
            "type": "assorted",
            "name": "Isi-Ewu",
            "price": "₦XX.XX",
            "description": "Experience the bold and flavorful Nigerian delicacy, isi-ewu: Spicy goat head delight.",
            "image": "./assets/img/products/Isi-Ewu.jpeg"
        },

        {
            "id": new Date().getTime() * 24,
            "type": "assorted",
            "name": "Nkwobi",
            "price": "₦XX.XX",
            "description": "Delight in the savory essence of Nkwobi: A Nigerian cow foot delicacy",
            "image": "./assets/img/products/Nkwobi.jpeg"
        },

        {
            "id": new Date().getTime() * 26,
            "type": "assorted",
            "name": "Beef Fry",
            "price": "₦XX.XX",
            "description": "Indulge in the rich flavors of Beef Fry: A mouthwatering delight",
            "image": "./assets/img/products/Beef Fry.jpeg"
        },

        {
            "id": new Date().getTime() * 28,
            "type": "assorted",
            "name": "Peppered Fish",
            "price": "₦XX.XX",
            "description": "Savor the fiery allure of Peppered Fish: A tantalizing spicy delight",
            "image": "./assets/img/products/kpomo.jpeg"
        },

        {
            "id": new Date().getTime() * 30,
            "type": "assorted",
            "name": "Peppered Chicken",
            "price": "₦XX.XX",
            "description": "Savor the fiery allure of Peppered Chicken: A tantalizing spicy delight",
            "image": "./assets/img/products/Peppered Chicken.jpeg"
        },

        {
            "id": new Date().getTime() * 32,
            "type": "assorted",
            "name": "Kpomo",
            "price": "₦XX.XX",
            "description": "Delight in the unique chewy goodness of Kpomo: A savory delicacy.",
            "image": "./assets/img/products/Peppered Fish.jpeg"
        },


    ],
};