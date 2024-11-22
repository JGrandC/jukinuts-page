'use client'

import Image from "next/image";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";

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

const allProducts = [...new Set(products.map(product => product.name))];


function Banner() {
  const images = [
    '/img/mini_magic-02.jpg',
    '/img/mini_magic-04.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="banner" id="home">
      <div className="banner_img">
        <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((src, index) => (
            <div key={index} className="slide">
              <Image alt={`Slide ${index + 1}`} src={src} width={2000} height={1000} />
            </div>
          ))}
        </div>
      </div>

      <div className="banner_txt">
        <div>
          <h1>
            100% <br />
            
            <span style={{color: 'var(--green)'}}>Natural, </span>
            <span style={{color: 'var(--blue)'}}>Crunchy & </span>
            <span style={{color: 'var(--red)'}}>Yummy</span>
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

function Product({toggleModal, productGroup}:any) {
  return (
    <section className="products" id="products">
      <h4 className="name">{productGroup}</h4>
      <div className="prod-grid">
        {
          products.filter((product) => product.name === productGroup).map((product, index) => (
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

              </figcaption>
            </div>


          </figure>
          ))
        }
      </div>
    </section>
  )
}

function AllProducts({toggleModal}:any) {
  return (
    <div className="allProducts">
      <h2>Different flavours for different moods</h2>

     {
      allProducts.map((group, index) => (
        <Product toggleModal={toggleModal} productGroup={group} key={index}/>
      ))
     }
    </div>
  )
}

function About() {
  return (
    <section className="about" id="about">
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

        <a href="/story" className="cta-link">
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


function Blog() {
  return (
    <section className="blog" id="blog">

      <h2>Recent</h2>

      <div className="group">
        <figure>
          <figcaption>
            <span>12 Dec, 2024</span>
            <a href="#">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eum saepe maxime.</a>
            {/* <h4>Title</h4> */}
          </figcaption>
          <Image 
            alt="jgrandcommodities"
            src={`/img/cashews.JPG`}
            width={1000}
            height={100}
          />
        </figure>
        <figure>
          <figcaption>
            <span>12 Dec, 2024</span>
            <a href="#">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eum saepe maxime.</a>
            {/* <h4>Title</h4> */}
          </figcaption>
          <Image 
            alt="jgrandcommodities"
            src={`/img/cashews.JPG`}
            width={1000}
            height={100}
          />
        </figure>
        <figure>
          <figcaption>
            <span>12 Dec, 2024</span>
            <a href="#">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eum saepe maxime.</a>
            {/* <h4>Title</h4> */}
          </figcaption>
          <Image 
            alt="jgrandcommodities"
            src={`/img/cashews.JPG`}
            width={1000}
            height={100}
          />
        </figure>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section className="faq" id="faq">
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
            Marina Mall, Tesbury&apos;s Legon City Mall, Valley View Rd Total-Oyibi, Amrahia Goil,
            The Blue Mall-Conference Center, Jungle Jims&apos;s Mart, Powerland Total, Haatso Goil,
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
    <section className="reviews" id="reviews">
      <blockquote>
        <q>
          I tried cashew nuts for the first time with Jukinuts & 
          it was an unexpectedly delightful experience. I had the 
          sea salt flavor as well as the chilli, & couldn&apos;t get enough of them!
          I&apos;ll be experimenting with these in my gari soakings over the weekend to see how it goes
        </q>
        <cite>- Joseph Mireku</cite>
      </blockquote>
      <blockquote>
        <q>
          For the longest time, I had been looking for healthy snack 
          options so my friend introduced me to juki nuts. I was like why not? 
          Let me give it a try. And trust me when I say it&apos;s good! it&apos;s my go-to snack now. 
          I love it so much especially the chilli flavor. 
          it&apos;s going to be me and juki nuts in this hot Accra.

        </q>
        <cite>- Anna</cite>
      </blockquote>
    </section>
  )
}

export default function Home() {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <div>
      <Banner/>
      <AllProducts toggleModal={toggleModal}/>
      <About/>
      <Process/>
      <Faq/>
      <Reviews/>
      <Blog/>

      {
        modal ? <Modal toggleModal={toggleModal}/> : undefined
      }
    </div>
  );
}
