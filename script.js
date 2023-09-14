<script>
        let cartCount = 0;
        let totalPrice = 0;

        // Function to update the cart count and total price
        function updateCart() {
            document.querySelector(".cart-count").textContent = cartCount;
        }

        // Add to cart button click event
        const addToCartButtons = document.querySelectorAll(".add-to-cart");
        addToCartButtons.forEach((button, index) => {
            button.addEventListener("click", function () {
                cartCount++;
                totalPrice += (index + 1) * 100; // Product price is based on index
                updateCart();
            });
        });

        // Checkout button click event
        document.querySelector(".cart-icon").addEventListener("click", function () {
            if (totalPrice < 500) {
                alert("Select more products to meet the minimum order amount of $500.");
            } else {
                document.getElementById("checkout-form").style.display = "block";
            }
        });

        // Buy Now button click event
        document.getElementById("buy-now").addEventListener("click", function () {
            const addressInput = document.getElementById("address").value;
            // Check if the address input is a valid Google Maps URL
            if (addressInput.startsWith("https://goo.gl/maps/")) {
                const message = `I want to buy the following items from my cart:\nItems: ${cartCount}\nTotal Price: $${totalPrice}\nAddress: ${addressInput}`;
                const whatsappURL = `https://wa.me/91?text=${encodeURIComponent(message)}`;
                window.open(whatsappURL, "_blank");
            } else {
                alert("Invalid address URL. Please use a valid Google Maps URL.");
            }
        });
    </script>