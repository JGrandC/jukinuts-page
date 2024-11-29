'use client'
import { useProductContext } from "@/context/productContext";
import Image from "next/image"
import { useEffect, useState } from "react"
import {Item} from "@/context/productContext"


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

        <span>Price is stated per box which contains 30 pouches for every box</span>
    </div>
    )
}

export default function Modal() {
    const {prodId, activeProd, toggleModal, cart, removeItem} = useProductContext();

    const handleItemRomoval = (id: string) => {
        removeItem(id)
        const next = cart.length - 1
        activeProd(cart[next].id)
    }

    const grandTotal = cart.reduce((sum, item) => sum + item.total, 0);

    const delivery = 25;

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
                                <li><span>Total: </span><span>Gh&#8373; {grandTotal}</span></li>
                                <li><span>Delivery: </span><span>Gh&#8373; {delivery}</span></li>
                                <br />
                                <li><span>Total + Shipping: </span><span>Gh&#8373; {grandTotal + delivery}</span></li>  
                            </ul>
                            <h3></h3>
                        </div>
                    
                        <div className="cust-details">
                            {/* <h5>Fill your details to complete your order</h5> */}
                            <br />

                            <form className="details" id="details">
                                <label htmlFor="firstName">First name <span className="imp"><span className="imp">*</span></span></label>
                                <input type="text" name="FirstName" id="firstName" placeholder="First name" required/>
                
                                <label htmlFor="lastName">Last name <span className="imp">*</span></label>
                                <input type="text" name="LastName" id="lastName" placeholder="Last name" required/>

                                <label htmlFor="country">Country <span className="imp">*</span></label>
                                <input type="text" name="City" id="country" placeholder="Country" value={'Ghana'} required readOnly/>
                                
                                <label htmlFor="city">Town / City <span className="imp">*</span></label>
                                <input type="text" name="City" id="city" placeholder="Town / City (Only within Ghana)" required/>
                
                                <label htmlFor="deliveryAddress">Street address <span className="imp">*</span></label>
                                <input type="text" name="DeliveryAddress" id="deliveryAddress" placeholder="Street address" required/>
                
                                
                                <label htmlFor="phoneNumber">Phone number <span className="imp">*</span></label>
                                <input type="number" name="PhoneNumber" id="phoneNumber" placeholder="Phone number" required/>
                                
                                <label htmlFor="emailAddress">e-mail address <span className="imp">*</span></label>
                                <input type="email" name="emailAddress" id="emailAddress" placeholder="e-mail address" required/>                           
                            </form>
                            <div className="checkout-box">
                                <p>Done filling your details?</p>
                                <a className="cta" id="checkout" target="_blank">
                                    <span>Checkout&nbsp;</span>
                                    <i className="las la-arrow-circle-right"></i>
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