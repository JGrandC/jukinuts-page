

//the product modal action, quantity selection, details filling and checkout script lies
//under here
products.forEach( product => {
    let name = product.children[1].children[0].children[0].innerText;
    let price = Number(product.children[1].children[1].children[0].innerText);    
    product.addEventListener('click', () => {
        document.querySelector('#popModal').classList.toggle('show-hide');
        document.querySelector('#prod-name').innerHTML = name;
        document.querySelector('#prod-price').innerHTML = price + ' ' + 'GHS';
        let qty = document.querySelector('#prod-qty');
        let total;

        qty.addEventListener('keyup', () => {
            total = price * qty.value;
            document.querySelector('#prod-price').innerHTML = total + ' ' + 'GHS';
        });
        
        let checkout = document.querySelector('#checkout');
        checkout.addEventListener('click', () => {
            let formCheck = Array.from(document.querySelectorAll('input[required]'));
            formCheck.forEach( eachForm => {
                if(eachForm.value !== "") {
                    var firstName = document.querySelector('#firstName').value;
                    var lastName = document.querySelector('#lastName').value;
                    var deliveryAddress = document.querySelector('#deliveryAddress').value;
                    var city = document.querySelector('#city').value;
                    var phoneNumber = document.querySelector('#phoneNumber').value;
                    var emailAddress = document.querySelector('#emailAddress').value;
                    
                    if(firstName != "" && lastName != "" && deliveryAddress != "" && city != "" && phoneNumber != "" && emailAddress != ""){
                        function payWithPaystack() {

                            var handler = PaystackPop.setup({
        
                                key: 'pk_live_105213b7c1e3aabbc91590682c09fa0e7bc8b1d1', // Replace with your public key
                                //pk_live_105213b7c1e3aabbc91590682c09fa0e7bc8b1d1
                                //pk_test_e3732a822fec878429c73a0711d44d791df886b9 jgrandkey
                                email: emailAddress,
        
                                amount: total * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
        
                                currency: 'GHS', // Use GHS for Ghana Cedis or USD for US Dollars
        
                                ref: 'JGC_'+Math.floor((Math.random() * 1000000000) + 1), // Replace with a reference you generated
        
                                metadata: {
                                    custom_fields: [
                                        {
                                            display_name: "Order Placed",
                                            variable_name: "order_placed",
                                            value: name
                                        },
                                        {
                                            display_name: "Number of box(es)",
                                            variable_name: "number_of_box",
                                            value: qty.value + " " + "box(es)"
                                        },
                                        {
                                            display_name: "Price",
                                            variable_name: "price",
                                            value: total + " " + "GHS"
                                        },
                                        {
                                            display_name: "Full Name",
                                            variable_name: "full_name",
                                            value: firstName + " " + lastName
                                        },
                                        {
                                            display_name: "Delivery Address",
                                            variable_name: "delivery_address",
                                            value: deliveryAddress + "\n" + city
                                        },
                                        {
                                            display_name: "Phone Number",
                                            variable_name: "phone_number",
                                            value: phoneNumber
                                        },
                                        {
                                            display_name: "e-mail",
                                            variable_name: "email",
                                            value: emailAddress
                                        },
                                    ]
                                },
        
                                callback: function(response) {
        
                                    //this happens after the payment is completed successfully
        
                                    var reference = response.reference;
        
                                    //this will be a message
                                    alert('Transaction successful');
                                    // document.location.reload(true);
                                    //window.location = "https://www.jgrandcommodities.com/product.html";
                                    // Make an AJAX call to your server with the reference to verify the transaction
        
                                },
        
                                onClose: function() {
        
                                    alert('Transaction was not completed');
                                    document.location.reload(true);
                                    //window.location = "https://www.jgrandcommodities.com/cart.html"
                                },
        
                            });
        
                            handler.openIframe();
                        }
                        payWithPaystack();
                    }
                } else {
                    eachForm.style.border = "1px solid red";
                }
            })
        })
    })
})
