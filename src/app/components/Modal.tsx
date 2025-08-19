'use client'
import { useProductContext } from "@/context/productContext";
import Image from "next/image"
import { useState } from "react"
import {Item} from "@/context/productContext"
import { useRouter } from "next/navigation";

interface Customer {
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    country: string;
    state: string;
    city: string;
    street: string;
    apartment: string;
}

function CartItem({currentItem}: {currentItem: Item}) {
    const { prodId, updateQuantity } = useProductContext();
    
    const handleQuantityChange = (quantity: number) => {
        updateQuantity(prodId, Math.max(1, quantity));
    };



    return (
        <div className="prod-details">
        <h2 className="prod-name" id="prod-name">{`${currentItem.name} (${currentItem.category.size})`}</h2>
        
        <div className="count">
            <p className="price" id="prod-price">Gh&#8373; {currentItem.total}</p>
            <div className="quantity">
                <button onClick={() => handleQuantityChange(currentItem.quantity - 1)}>-</button>
                <input
                    type="number"
                    value={currentItem.quantity}
                    onChange={(e) => handleQuantityChange(Number(e.target.value))}
                />
                <button onClick={() => handleQuantityChange(currentItem.quantity + 1)}>+</button>
            </div>
        </div>

        <span>Price is stated per box which contains 30 pouches for every box
            <br />Product details, ingredients and composition.
        </span>
    </div>
    )
}

export default function Modal() {
    const router = useRouter()
    const {prodId, activeProd, toggleModal, cart, removeItem} = useProductContext();
    const [customer, setCustomer] = useState<Customer>({
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        country: 'Ghana',
        state: '',
        city: '',
        street: '',
        apartment: '',
    });

    const [validate, setValidate] = useState({
        firstName: false,
        lastName: false,
        emailAddress: false,
        phoneNumber: false,
        country: true,
        state: false,
        city: false,
        street: false,
        apartment: false,
    })

    const [loading, setLoading] = useState<boolean>(false)

    const handleItemRomoval = (id: string) => {
        removeItem(id)
        const next = cart.length - 1
        activeProd(cart[next].id)
    }

    const subTotal = cart.reduce((sum, item) => sum + item.total, 0);

    const deliveryFee = 25;

    const total = subTotal + deliveryFee

    const [notValid, setNotValid] = useState<boolean>(true)


    const validateText = (): boolean => {
        let isValid = true; // Tracks overall validation status
        const newValidationState = { ...validate }; // Temporary object to store validation results
    
        for (let key in customer) {
            if (customer[key as keyof Customer].trim() === '') {
                newValidationState[key as keyof Customer] = false;
                isValid = false; // At least one field is invalid
            } else {
                newValidationState[key as keyof Customer] = true;
            }
        }
    
        setValidate(newValidationState); // Update state after processing all fields
        
        return isValid; // Return the overall validation status
    };    

    
    const checkout = () => {
        // handleTransaction()
        // handlePayment()
        validateText() ? handleTransaction() : setNotValid(true)
    }

    const handleTransaction = async () => {
        try {
            const metadata = {
                custom_fields: [
                  {
                    display_name: 'Customer Name',
                    variable_name: 'customer_name',
                    value: `${customer.firstName} ${customer.lastName}`,
                  },
                  {
                      display_name: 'Customer Email',
                      variable_name: 'customer_email',
                      value: customer.emailAddress,
                  },
                  {
                      display_name: 'Customer Phone',
                      variable_name: 'customer_phone',
                      value: customer.phoneNumber,
                  },
                  {
                      display_name: 'Customer Country',
                      variable_name: 'customer_country',
                      value: customer.country,
                  },
                  {
                      display_name: 'Customer State',
                      variable_name: 'customer_state',
                      value: customer.state,
                  },
                  {
                      display_name: 'Customer City',
                      variable_name: 'customer_city',
                      value: customer.city,
                  },
                  {
                      display_name: 'Customer Street',
                      variable_name: 'customer_street',
                      value: customer.street,
                  },
                  {
                      display_name: 'Customer Apartment',
                      variable_name: 'customer_apartment',
                      value: customer.apartment,
                  },
                  ...cart.map((item : {id: string, name: string, quantity: number, category: {size: string}, total: number}) => ({
                      display_name: `Product #${item.id}`,
                      variable_name: `Product_#${item.id}`,
                      value: `${item.name} - Size: ${item.category.size}, Quantity: ${item.quantity}, Total: Gh ${item.total}`,
                  }))
                ],
              }

            setLoading(true);
            const response = await fetch('/api/initiate-transaction', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: customer.emailAddress, amount: total * 100, metadata }),
              });
            
              if (!response.ok) {
                throw new Error('Failed to initialize transaction');
              }
        
              const data = await response.json();

              if (data) {
                console.log(data)
                const { default: PaystackPop } = await import("@paystack/inline-js"); // 👈 only import on client
                const popup = new PaystackPop();
                popup.resumeTransaction(data.access_code);
            }
            
        } catch (error: any) {
            console.error('Error initializing transaction:', error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
        {
            cart &&
            <section className="modal show-hide" id="popModal">
                <div className="pop-box">
                    <div className="container">
                        <button className="pop-close" onClick={toggleModal}>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512.021 512.021">
                            <g>
                                <path d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z"/>
                            </g>
                            </svg>
                        </button>

                        <div className="product-list">
                            {
                                cart.map((item) => (
                                    <div className={`product-item ${item.id === prodId ? 'activeItem' : ''}`} key={item.id} onClick={()=>activeProd(item.id)}>
                                        <Image 
                                            alt="jgrandcommodities"
                                            src={`/img/product/${item.image}`}
                                            width={1000}
                                            height={100}
                                        />
                                        
                                        <button className="remove-item" onClick={() => handleItemRomoval(item.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512.021 512.021">
                                            <g>
                                                <path d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z"/>
                                            </g>
                                            </svg>
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                        
                        {
                            cart.map(
                                (item) => 
                                item.id === prodId ? 
                                <CartItem key={item.id} currentItem={item}/> : '')
                        }

                        <div className="grand-total">
                            <ul>
                                <li><span>Sub-total: </span><strong>Gh&#8373; {subTotal}</strong></li>
                                <li><span>Delivery: </span><strong>Gh&#8373; {deliveryFee}</strong></li>
                                <br />
                                <li><span>Total: </span><strong>Gh&#8373; {total}</strong></li>  
                            </ul>
                            <h3></h3>
                        </div>
                    
                        <div className="cust-details">
                            {/* <h5>Fill your details to complete your order</h5> */}
                            <br />

                            <form className="details" id="details">
                                <label htmlFor="firstName">First name <span className="imp"><span className="imp">*</span></span></label>
                                <input required type="text" name="FirstName" id="firstName" placeholder="First name" value={customer.firstName} onChange={(e)=>setCustomer({...customer, firstName: e.target.value})}/>

                                <label htmlFor="lastName">Last name <span className="imp">*</span></label>
                                <input required type="text" name="LastName" id="lastName" placeholder="Last name" value={customer.lastName} onChange={(e)=>setCustomer({...customer, lastName: e.target.value})}/>

                                <label htmlFor="phoneNumber">Phone number <span className="imp">*</span></label>
                                <input required type="number" name="PhoneNumber" id="phoneNumber" placeholder="Phone number" value={customer.phoneNumber} onChange={(e)=>setCustomer({...customer, phoneNumber: e.target.value})}/>
                                
                                <label htmlFor="emailAddress">e-mail address <span className="imp">*</span></label>
                                <input required type="email" name="emailAddress" id="emailAddress" placeholder="e-mail address" value={customer.emailAddress} onChange={(e)=>setCustomer({...customer, emailAddress: e.target.value})}/>                           

                                <label htmlFor="country">Country <span className="imp">*</span></label>
                                <input required readOnly type="text" name="City" id="country" placeholder="Country" value={customer.country}/>
                                
                                <label htmlFor="city">State <span className="imp">*</span></label>
                                <input required type="text" name="state" id="state" placeholder="State" value={customer.state} onChange={(e)=>setCustomer({...customer, state: e.target.value})}/>
                
                                <label htmlFor="city">Town / City <span className="imp">*</span></label>
                                <input required type="text" name="city" id="city" placeholder="Town / City" value={customer.city} onChange={(e)=>setCustomer({...customer, city: e.target.value})}/>
                
                                <label htmlFor="street">Street <span className="imp">*</span></label>
                                <input required type="text" name="street" id="street" placeholder="Street" value={customer.street} onChange={(e)=>setCustomer({...customer, street: e.target.value})}/>
                
                                <label htmlFor="apartment">Apartment <span className="imp">*</span></label>
                                <input required type="text" name="apartment" id="apartment" placeholder="Apartment" value={customer.apartment} onChange={(e)=>setCustomer({...customer, apartment: e.target.value})}/>
                
                            </form>
                            <div className="checkout-box">
                                <p>{notValid ? 'Please fill all your details' : 'Confirm your details before you proceed'}</p>
                                <a className="cta" id="checkout" target="_blank" onClick={checkout}>
                                    {
                                        loading ?
                                        <span>Loading...</span> :
                                        <>
                                            <span>Checkout - Gh&#8373; {total}</span>
                                            <i className="las la-arrow-circle-right"></i>
                                        </>
                                    }
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        }
        </>
    )
}