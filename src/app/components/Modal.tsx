'use client'
import Image from "next/image"
import { useEffect, useState } from "react"


export default function Modal({toggleModal}:any) {
    const [product, setProduct] = useState({
        name: "",
        image: "",
        category: 
          {
            size: "",
            price: "",
            selected: false,
          },
      })

    useEffect(()=>{
        setProduct({
            name: "Chilli Roasted Cashews",
            image: "chilli-roasted-cashew.png",
            category:
              {
                size: "50g",
                price: "10",
                selected: false,
              },
          })
    },[])
    return (
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
                    <div className="prod-details">
                        
                        <Image 
                            alt="jgrandcommodities"
                            src={`/img/product/${product.image}`}
                            width={1000}
                            height={100}
                        />
                        
                        <h2 className="prod-name" id="prod-name">{`${product.name} (${product.category.size})`}</h2>
                        <div className="count">
                            <p className="price" id="prod-price">Gh&#8373; {product.category.price}</p>
                            {/* <input type="number" name="quantity" className="qty" id="prod-qty" placeholder="0"/> */}
                            <div className="quantity">
                                <button>-</button>
                                <input type="number" min={1} placeholder="0"/>
                                <button>+</button>
                            </div>
                        </div>
                        <span>Price is stated per box which contains 30 pouches for every box</span>
                    </div>
                
                    <div className="cust-details">
                        <h5>Fill your details to complete your order</h5>
                        <br />

                        <form className="details" id="details">
                            <label htmlFor="firstName">First name <span className="imp"><span className="imp">*</span></span></label>
                            <input type="text" name="FirstName" id="firstName" placeholder="First name" required/>
            
                            <label htmlFor="lastName">Last name <span className="imp">*</span></label>
                            <input type="text" name="LastName" id="lastName" placeholder="Last name" required/>
            
                            <label htmlFor="deliveryAddress">Street address <span className="imp">*</span></label>
                            <input type="text" name="DeliveryAddress" id="deliveryAddress" placeholder="Street address" required/>
            
                            <label htmlFor="city">Town / City <span className="imp">*</span></label>
                            <input type="text" name="City" id="city" placeholder="Town / City (Only within Ghana)" required/>
            
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
    )
}