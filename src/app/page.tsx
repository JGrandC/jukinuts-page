'use client'

import Image from "next/image";
import Modal from "./components/Modal";
import { useState } from "react";

const products = [
  {
    name: "Sea Salt Roasted Cashews",
    image: "sea-salted-roasted-cashew.png",
    category: [
      {
        size: "50g",
        price: "10",
        selected: false,
      },
    ]
  },
  {
    name: "Sea Salt Roasted Cashews",
    image: "sea-salted-roasted-cashew.png",
    category: [
      {
        size: "150g",
        price: "10",
        selected: false,
      },
    ]
  },
  {
    name: "Sea Salt Roasted Cashews",
    image: "sea-salted-roasted-cashew.png",
    category: [
      {
        size: "170g",
        price: "10",
        selected: false,
      },
    ]
  },
  {
    name: "Sea Salt Roasted Cashews",
    image: "sea-salted-620.png",
    category: [
      {
        size: "300g",
        price: "10",
        selected: false,
      },
    ]
  },
  {
    name: "Sea Salt Roasted Cashews",
    image: "sea-salted-620.png",
    category: [
      {
        size: "620",
        price: "10",
        selected: false,
      },
    ]
  },
  {
    name: "Unsalted Roasted Cashews",
    image: "unsalted-roasted-cashew.png",
    category: [
      {
        size: "50g",
        price: "10",
        selected: false,
      },
    ]
  },
  {
    name: "Unsalted Roasted Cashews",
    image: "unsalted-roasted-cashew.png",
    category: [
      {
        size: "150g",
        price: "10",
        selected: false,
      },
    ]
  },
  {
    name: "Unsalted Roasted Cashews",
    image: "unsalted-roasted-cashew.png",
    category: [
      {
        size: "170g",
        price: "10",
        selected: false,
      },
    ]
  },
  {
    name: "Unsalted Roasted Cashews",
    image: "unsalted-300.png",
    category: [
      {
        size: "300g",
        price: "10",
        selected: false,
      },
    ]
  },
  {
    name: "Unsalted Roasted Cashews",
    image: "unsalted-300.png",
    category: [
      {
        size: "620g",
        price: "10",
        selected: false,
      },
    ]
  },
  {
    name: "Chilli Roasted Cashews",
    image: "chilli-roasted-cashew.png",
    category: [
      {
        size: "50g",
        price: "10",
        selected: false,
      },
    ]
  },
  {
    name: "Chilli Roasted Cashews",
    image: "chilli-roasted-cashew.png",
    category: [
      {
        size: "150g",
        price: "10",
        selected: false,
      },
    ]
  },
  {
    name: "Chilli Roasted Cashews",
    image: "chilli-roasted-cashew.png",
    category: [
      {
        size: "170g",
        price: "10",
        selected: false,
      },
    ]
  },
  {
    name: "Raw Cashew Kernels",
    image: "chilli-roasted-cashew.png",
    category: [
      {
        size: "1kg",
        price: "10",
        selected: true,
      },
    ]
  },
  {
    name: "Roasted Cashews",
    image: "chilli-roasted-cashew.png",
    category: [
      {
        size: "1kg",
        price: "10",
        selected: true,
      },
    ]
  },
  {
    name: "Cashew Butter (comming soon)",
    image: "chilli-roasted-cashew.png",
    category: [
      {
        size: "--",
        price: "--",
        selected: true,
      },
    ]
  },
]

function Header() {
  const [nav, setNav] = useState(false)

  const toggleNav = () => {
    setNav((prev) => !prev)
  }
  return (
    <header>
      <Image 
        alt="jgrandcommodities"
        src={'/jgc_logo.png'}
        width={120}
        height={150}
        className="logo"
      />

      <nav className="desktop">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Products</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>

        <div className="social">
        <ul>
          <li>
            <a href="https://web.facebook.com/jukinuts/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g>
                  <path d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509   V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073   c0-6.627,5.373-12,12-12S24,5.445,24,12.073z"/>
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/jukinuts/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <polygon points="6.861 6.159 15.737 17.764 17.097 17.764 8.322 6.159 6.861 6.159"/>
              <path d="m12,0C5.373,0,0,5.373,0,12s5.373,12,12,12,12-5.373,12-12S18.627,0,12,0Zm3.063,19.232l-3.87-5.055-4.422,5.055h-2.458l5.733-6.554-6.046-7.91h5.062l3.494,4.621,4.043-4.621h2.455l-5.361,6.126,6.307,8.337h-4.937Z"/>
            </svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/jukinuts/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
              <g>
                <path d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608   c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608   c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07   c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849   c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311   C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014   C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038   c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072   c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12   c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942   C15.668,0.014,15.259,0,12,0z"/>
                <path d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162   C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z"/>
                <circle cx="18.406" cy="5.594" r="1.44"/>
              </g>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://wa.me/233548958020?text=">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
              <g id="WA_Logo">
                <g>
                  <path d="M20.463,3.488C18.217,1.24,15.231,0.001,12.05,0    C5.495,0,0.16,5.334,0.157,11.892c-0.001,2.096,0.547,4.142,1.588,5.946L0.057,24l6.304-1.654    c1.737,0.948,3.693,1.447,5.683,1.448h0.005c6.554,0,11.89-5.335,11.893-11.893C23.944,8.724,22.708,5.735,20.463,3.488z     M12.05,21.785h-0.004c-1.774,0-3.513-0.477-5.031-1.378l-0.361-0.214l-3.741,0.981l0.999-3.648l-0.235-0.374    c-0.99-1.574-1.512-3.393-1.511-5.26c0.002-5.45,4.437-9.884,9.889-9.884c2.64,0,5.122,1.03,6.988,2.898    c1.866,1.869,2.893,4.352,2.892,6.993C21.932,17.351,17.498,21.785,12.05,21.785z M17.472,14.382    c-0.297-0.149-1.758-0.868-2.031-0.967c-0.272-0.099-0.47-0.149-0.669,0.148s-0.767,0.967-0.941,1.166    c-0.173,0.198-0.347,0.223-0.644,0.074c-0.297-0.149-1.255-0.462-2.39-1.475c-0.883-0.788-1.48-1.761-1.653-2.059    s-0.018-0.458,0.13-0.606c0.134-0.133,0.297-0.347,0.446-0.521C9.87,9.97,9.919,9.846,10.019,9.647    c0.099-0.198,0.05-0.372-0.025-0.521C9.919,8.978,9.325,7.515,9.078,6.92c-0.241-0.58-0.486-0.501-0.669-0.51    C8.236,6.401,8.038,6.4,7.839,6.4c-0.198,0-0.52,0.074-0.792,0.372c-0.272,0.298-1.04,1.017-1.04,2.479    c0,1.463,1.065,2.876,1.213,3.074c0.148,0.198,2.095,3.2,5.076,4.487c0.709,0.306,1.263,0.489,1.694,0.626    c0.712,0.226,1.36,0.194,1.872,0.118c0.571-0.085,1.758-0.719,2.006-1.413c0.248-0.694,0.248-1.29,0.173-1.413    C17.967,14.605,17.769,14.531,17.472,14.382z"/>
                </g>
              </g>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      </nav>

      {
        nav ?
        <nav className="mobile">
          <button className="close" onClick={toggleNav}>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512.021 512.021">
            <g>
              <path d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z"/>
            </g>
            </svg>
          </button>

          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Products</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>

          <div className="social">
          <ul>
            <li>
              <a href="https://web.facebook.com/jukinuts/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g>
                    <path d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509   V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073   c0-6.627,5.373-12,12-12S24,5.445,24,12.073z"/>
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/jukinuts/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <polygon points="6.861 6.159 15.737 17.764 17.097 17.764 8.322 6.159 6.861 6.159"/>
                <path d="m12,0C5.373,0,0,5.373,0,12s5.373,12,12,12,12-5.373,12-12S18.627,0,12,0Zm3.063,19.232l-3.87-5.055-4.422,5.055h-2.458l5.733-6.554-6.046-7.91h5.062l3.494,4.621,4.043-4.621h2.455l-5.361,6.126,6.307,8.337h-4.937Z"/>
              </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/jukinuts/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                <g>
                  <path d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608   c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608   c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07   c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849   c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311   C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014   C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038   c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072   c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12   c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942   C15.668,0.014,15.259,0,12,0z"/>
                  <path d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162   C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z"/>
                  <circle cx="18.406" cy="5.594" r="1.44"/>
                </g>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://wa.me/233548958020?text=">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                <g id="WA_Logo">
                  <g>
                    <path d="M20.463,3.488C18.217,1.24,15.231,0.001,12.05,0    C5.495,0,0.16,5.334,0.157,11.892c-0.001,2.096,0.547,4.142,1.588,5.946L0.057,24l6.304-1.654    c1.737,0.948,3.693,1.447,5.683,1.448h0.005c6.554,0,11.89-5.335,11.893-11.893C23.944,8.724,22.708,5.735,20.463,3.488z     M12.05,21.785h-0.004c-1.774,0-3.513-0.477-5.031-1.378l-0.361-0.214l-3.741,0.981l0.999-3.648l-0.235-0.374    c-0.99-1.574-1.512-3.393-1.511-5.26c0.002-5.45,4.437-9.884,9.889-9.884c2.64,0,5.122,1.03,6.988,2.898    c1.866,1.869,2.893,4.352,2.892,6.993C21.932,17.351,17.498,21.785,12.05,21.785z M17.472,14.382    c-0.297-0.149-1.758-0.868-2.031-0.967c-0.272-0.099-0.47-0.149-0.669,0.148s-0.767,0.967-0.941,1.166    c-0.173,0.198-0.347,0.223-0.644,0.074c-0.297-0.149-1.255-0.462-2.39-1.475c-0.883-0.788-1.48-1.761-1.653-2.059    s-0.018-0.458,0.13-0.606c0.134-0.133,0.297-0.347,0.446-0.521C9.87,9.97,9.919,9.846,10.019,9.647    c0.099-0.198,0.05-0.372-0.025-0.521C9.919,8.978,9.325,7.515,9.078,6.92c-0.241-0.58-0.486-0.501-0.669-0.51    C8.236,6.401,8.038,6.4,7.839,6.4c-0.198,0-0.52,0.074-0.792,0.372c-0.272,0.298-1.04,1.017-1.04,2.479    c0,1.463,1.065,2.876,1.213,3.074c0.148,0.198,2.095,3.2,5.076,4.487c0.709,0.306,1.263,0.489,1.694,0.626    c0.712,0.226,1.36,0.194,1.872,0.118c0.571-0.085,1.758-0.719,2.006-1.413c0.248-0.694,0.248-1.29,0.173-1.413    C17.967,14.605,17.769,14.531,17.472,14.382z"/>
                  </g>
                </g>
                </svg>
              </a>
            </li>
          </ul>
          </div>
        </nav>
        :
        undefined
      }

      <button className="toggle" onClick={toggleNav}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M0,3.5c0-.83,.67-1.5,1.5-1.5H17.5c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5H1.5c-.83,0-1.5-.67-1.5-1.5Zm17.5,14.5H1.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5H17.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Zm5-8H6.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5H22.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Z"/></svg>
      </button>

    </header>
  )
}

function Banner() {
  return (
    <div className="banner">
      <div className="banner_img">
        <Image 
          alt="jgrandcommodities"
          src={'/img/mini_magic-03.jpg'}
          width={2000}
          height={1000}
        />
      </div>

      <div className="banner_txt">
        <div>
          <h1>
            100% <br />
            Natural, Crunchy & Yummy
          </h1>

          <h4>
            A healthier
            option for snack time
          </h4>
        </div>
      </div>
    </div>
  )
}

function Product({toggleModal}:any) {
  return (
    <section className="products">

      <h2>Different flavours for different moods</h2>
      <div className="prod-grid">
        {
          products.map((product, index) => (
          <figure className="prod" key={index} onClick={toggleModal}>

            <div className="prod_categ">
              <Image 
                alt="jgrandcommodities"
                src={`/img/product/${product.image}`}
                width={1000}
                height={100}
              />

              <figcaption className="feature">
                
                <ul className="category">
                  {
                    product.category.map((variation, index) => (
                      <li key={index} className={variation.selected ? 'selected' : undefined}><span>{variation.size}</span> : <span>Gh&#8373; {variation.price}</span></li>
                    ))
                  }
                </ul>

                {/* <div className="quantity">
                  <button>-</button>
                  <input type="number" min={1} placeholder="0"/>
                  <button>+</button>
                </div>

                <button className="btn">Add</button> */}
              </figcaption>
            </div>
            <h4 className="name">{product.name}</h4>


          </figure>
          ))
        }
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about">
      <div className="text">
        <h2>Eat healthy, Stay healthy.</h2>

        <p>
          Juki nuts is about Introducing flare into 
          the boring cashew nuts through our captivating packaging 
          and introducing new flavours of roasted cashew nuts.

          Introducing grand packaging with durable and non carcinogenic materials.

          Flavouring our roasted cashew nuts to spice up its taste and make it more palatable.

          Maintaining access to our products from anywhere through our well developed user experience model.
          Establishing relationship with our customers and expanding our community to provide more better products.
        </p>

        <a href="#" className="cta-link">
          <span>Learn More</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><g><path d="M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12Zm21,0a9,9,0,1,1-9-9A9.011,9.011,0,0,1,21,12Z"/><path d="M12.815,8.551,14.731,10.5H6.5a1.5,1.5,0,0,0,0,3h8.231l-1.916,1.949a1.5,1.5,0,1,0,2.14,2.1L18,14.45a3.524,3.524,0,0,0,0-4.9l-3.048-3.1a1.5,1.5,0,1,0-2.14,2.1Z"/></g></svg>

        </a>
      </div>

      <Image 
        alt="jgrandcommodities"
        src={`/img/cashews.JPG`}
        width={1000}
        height={100}
      />
    </section>
  )
}

function Process() {
  return (
    <section className="process">
      <h2>The journey of our cashews - from the farm to your table</h2>
      <ul>
        <li>
          <span>1</span>

          <p>
            Our journey begins from smallholder farmers and 
            cooperatives from the Bono region of Ghana, where our 
            carefully selected orchards yield the finest cashew nuts. 
            Traceability starts here, ensuring quality from the source.
          </p>
        </li>
        <li>
          <span>2</span>

          <p>
            At our processing facility, quality standards are maintained 
            at every stage. We employ cutting-edge technology and expert 
            craftsmanship to guarantee top-notch cashews for you
          </p>
        </li>
        <li>
          <span>3</span>

          <p>
            Roasting is an art we take seriously. Our cashews undergo 
            meticulous roasting to perfection, enhancing the flavor and texture that you love
          </p>
        </li>
        <li>
          <span>4</span>

          <p>
            The final step in our process involves precision packaging. 
            Each package is sealed to preserve freshness and flavor, 
            with every batch made with lots of love!
          </p>
        </li>
        <li>
          <span>5</span>

          <p>
            From our farm to your hands, we ensure you receive premium 
            cashews with a traceable journey you can trust. Enjoy the 
            satisfaction of knowing where your cashews come from.
          </p>
        </li>
      </ul>
    </section>
  )
}

function Faq() {
  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <ul>
        <li>
          <span>Are the Cashews health for children</span>
          <p>Our Cashews does not contain any harmful material, it is well  processed and safe for
            consumption for everyone at any age.
          </p>
        </li>
        <li>
          <span>Which store can shop Juki Nuts products</span>
          <p>You can shop for our products from the following stores: Shoprites, 
            Marina Mall, Tesbury&quote;s Legon City Mall, Valley View Rd Total-Oyibi, Amrahia Goil,
            The Blue Mall-Conference Center, Jungle Jims&quote;s Mart, Powerland Total, Haatso Goil,
            Palm Wine Junction Shell-Labadi, AnC Shell-East legon</p>
        </li>
        <li>
          <span>Can I get my product delivered to my doorstep</span>
          <p>You can receive any order placed on our website anywhere around Ghana</p>
        </li>
      </ul>
    </section>
  )
}

function Reviews() {
  return (
    <section className="reviews">
      <blockquote>
        <q>
          I tried cashew nuts for the first time with Jukinuts & 
          it was an unexpectedly delightful experience. I had the 
          sea salt flavor as well as the chilli, & couldn't get enough of them!
          I'll be experimenting with these in my gari soakings over the weekend to see how it goes
        </q>
        <cite>- Joseph Mireku</cite>
      </blockquote>
      <blockquote>
        <q>
          For the longest time, I had been looking for healthy snack 
          options so my friend introduced me to juki nuts. I was like why not? 
          Let me give it a try. And trust me when I say it's good! it's my go-to snack now. 
          I love it so much especially the chilli flavor. 
          it's going to be me and juki nuts in this hot Accra.

        </q>
        <cite>- Anna</cite>
      </blockquote>
    </section>
  )
}


function Footer() {
  return (
    <footer className="footer">
      <div className="contact">
        <ul>
          <li>
            <div className="vector"></div>
            <div className="content">
              <h4>Our location</h4>
              <p>
                FMB 2002B, Ablekuma Fanmilk.
                P.O Box CT 3722
                Cantonments, Accra
              </p>
            </div>
          </li>
          <li>
            <div className="vector"></div>
            <div className="content">
              <h4>Chat with us</h4>
              <p>
                Available Monday - Saturday
                09:00 am - 06:00 pm
              </p>
              <a href="https://wa.me/233548958020?text=">Send message </a>
            </div>
          </li>
          <li>
            <div className="vector"></div>
            <div className="content">
              <h4>Mail Us</h4>
              <p>
                Available Monday - Saturday
                09:00 am - 06:00 pm
              </p>
              <a href="mailto:jgrandcommodities@gmail.com">jgrandcommodities@gmail.com</a>
            </div>
          </li>
          <li>
            <div className="vector"></div>
            <div className="content">
              <h4>Call Us</h4>
              <p>
                Available Monday - Saturday
                09:00 am - 06:00 pm
              </p>
              <a href="tell:+233548958020">+233 54 895 8020</a>
            </div>
          </li>
        </ul>
      </div>
      
      <div className="subscribe">
        <h2>Charge up your week with us</h2>
      
        <p>Don't want to miss out on discounts, offers, tips and healthy takes from us?
          Subscribe to our Newsletter.
        </p>
        <input type="text" placeholder="Enter Your Email" />
        <button className="btn">Subscribe</button>
      </div>

      {/* <div>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Products</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div> */}
    </footer>
  )
}

function Copy() {
  return (
    <div className="copy">
      <Image 
        alt="jgrandcommodities"
        src={'/jgc_logo.png'}
        width={120}
        height={150}
        className="logo"
      />
      <div>
        <p>JgrandCommodities &copy; 2024</p>
      </div>
      <div className="social">
        <ul>
          <li>
            <a href="https://web.facebook.com/jukinuts/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g>
                  <path d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509   V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073   c0-6.627,5.373-12,12-12S24,5.445,24,12.073z"/>
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/jukinuts/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <polygon points="6.861 6.159 15.737 17.764 17.097 17.764 8.322 6.159 6.861 6.159"/>
              <path d="m12,0C5.373,0,0,5.373,0,12s5.373,12,12,12,12-5.373,12-12S18.627,0,12,0Zm3.063,19.232l-3.87-5.055-4.422,5.055h-2.458l5.733-6.554-6.046-7.91h5.062l3.494,4.621,4.043-4.621h2.455l-5.361,6.126,6.307,8.337h-4.937Z"/>
            </svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/jukinuts/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
              <g>
                <path d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608   c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608   c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07   c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849   c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311   C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014   C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038   c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072   c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12   c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942   C15.668,0.014,15.259,0,12,0z"/>
                <path d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162   C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z"/>
                <circle cx="18.406" cy="5.594" r="1.44"/>
              </g>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://wa.me/233548958020?text=">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
              <g id="WA_Logo">
                <g>
                  <path d="M20.463,3.488C18.217,1.24,15.231,0.001,12.05,0    C5.495,0,0.16,5.334,0.157,11.892c-0.001,2.096,0.547,4.142,1.588,5.946L0.057,24l6.304-1.654    c1.737,0.948,3.693,1.447,5.683,1.448h0.005c6.554,0,11.89-5.335,11.893-11.893C23.944,8.724,22.708,5.735,20.463,3.488z     M12.05,21.785h-0.004c-1.774,0-3.513-0.477-5.031-1.378l-0.361-0.214l-3.741,0.981l0.999-3.648l-0.235-0.374    c-0.99-1.574-1.512-3.393-1.511-5.26c0.002-5.45,4.437-9.884,9.889-9.884c2.64,0,5.122,1.03,6.988,2.898    c1.866,1.869,2.893,4.352,2.892,6.993C21.932,17.351,17.498,21.785,12.05,21.785z M17.472,14.382    c-0.297-0.149-1.758-0.868-2.031-0.967c-0.272-0.099-0.47-0.149-0.669,0.148s-0.767,0.967-0.941,1.166    c-0.173,0.198-0.347,0.223-0.644,0.074c-0.297-0.149-1.255-0.462-2.39-1.475c-0.883-0.788-1.48-1.761-1.653-2.059    s-0.018-0.458,0.13-0.606c0.134-0.133,0.297-0.347,0.446-0.521C9.87,9.97,9.919,9.846,10.019,9.647    c0.099-0.198,0.05-0.372-0.025-0.521C9.919,8.978,9.325,7.515,9.078,6.92c-0.241-0.58-0.486-0.501-0.669-0.51    C8.236,6.401,8.038,6.4,7.839,6.4c-0.198,0-0.52,0.074-0.792,0.372c-0.272,0.298-1.04,1.017-1.04,2.479    c0,1.463,1.065,2.876,1.213,3.074c0.148,0.198,2.095,3.2,5.076,4.487c0.709,0.306,1.263,0.489,1.694,0.626    c0.712,0.226,1.36,0.194,1.872,0.118c0.571-0.085,1.758-0.719,2.006-1.413c0.248-0.694,0.248-1.29,0.173-1.413    C17.967,14.605,17.769,14.531,17.472,14.382z"/>
                </g>
              </g>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default function Home() {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <div>
      <Header/>
      <Banner/>
      <Product toggleModal={toggleModal}/>
      <About/>
      <Process/>
      <Faq/>
      <Reviews/>
      <Footer/>
      <Copy/>

      {
        modal ? <Modal toggleModal={toggleModal}/> : undefined
      }
    </div>
  );
}
