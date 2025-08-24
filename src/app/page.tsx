'use client'

import Image from "next/image";
import Link from "next/link";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";
import { useProductContext } from "@/context/productContext";
import { useBlogContext } from "@/context/blogContext";

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
      <div className="banner_txt">
        <div>
          {/* <span>Super healthy snacks</span> */}
          <h1>
             <br />
            <span>Super healthy cashews - </span>
            
            <span style={{color: 'var(--green)'}}>Natural, </span>
            <span style={{color: 'var(--blue)'}}>Crunchy & </span>
            <span style={{color: 'var(--red)'}}>Yummy!</span>
          </h1>

          <h4>
            A healthier
            option for snack time
          </h4>
          <br /><br />
          <Link href={'/#products'} className="cta">Shop Now</Link>
        </div>
      </div>

      <div className="banner_img">
        <div className="banner_div"></div>
        <div className="banner_div"></div>
        <div className="banner_div"></div>
        <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((src, index) => (
            <div key={index} className="slide">
              <Image alt={`Slide ${index + 1}`} src={src} width={2000} height={1000} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Product({image, size, price, id, name, packaging}:any) {
  const {activeProd, toggleModal, addItem, itemVariants} = useProductContext()

  const showDetails = (id:string) => {
    toggleModal();
    activeProd(id);
    addItem(id)
  }

  const showVariants = (name: string, packaging: string) => {
    const variants = itemVariants(name, packaging);
    console.log(variants)
  }

  return (
    // <figure className="prod" onClick={() => showDetails(id)}>
    <figure className="prod" onClick={() => showVariants(name, packaging)}>
        <Image 
          alt="jgrandcommodities"
          src={`/img/product/${image}`}
          width={1000}
          height={100}
        />

        <figcaption className="feature">
          
            <span>{name}</span> <span>({packaging})</span>
          {/* <ul>
            <li className="selected"><span>{name}</span> <span>Gh&#8373; {price}</span></li>
          </ul> */}

        </figcaption>

    </figure>
  )
}

function ProductGroup({productGroup}:any) {
  const {products} = useProductContext()
  const groupProduct = products.filter((product) => product.name === productGroup)

  const uniqueByPackaging = [
    ...new Map(
      groupProduct.map(p => [p.category.packaging, p])
    ).values()
  ];


  return (
    <section className="products" id="products">
      <h4 className="name">{productGroup}</h4>
      <div className="prod-grid">
        {
          uniqueByPackaging
          .map((product, index) =>
            (
              <Product 
                key={index} 
                image={product.image} 
                size={product.category.size} 
                price={product.category.price}
                id={product.id}
                name={product.name}
                packaging={product.category.packaging}
              />
          ))
        }
      </div>
    </section>
  )
}

function AllProducts() {
  const {products} = useProductContext()
  
  const allProducts = [...new Set(products.map(product => product.name))];

  return (
    <div className="allProducts">
      <div className="title">
        <h2>Enjoy the variety of &apos;Juki Nuts Cashew flavours - brighten your mood and get crunchy!</h2>
      </div>

     {
      allProducts.map((group, index) => (
        <ProductGroup productGroup={group} key={index}/>
      ))
     }
    </div>
  )
}

function About() {
  return (
    <section className="about" id="about">
      <div className="text">
        <h1>Eat healthy, Stay healthy.</h1>

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
      <div className="title">
        <h2>The journey of our cashews - from the farm to your table</h2>
      </div>

      <div className="infographics">
        <video
          src="/story.mp4"
          width="100%"
          height="auto"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        />
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
      </div>
    </section>
  )
}


function Blog() {
  const {blogs} = useBlogContext()

  return (
    <section className="blog" id="blog">

      <h2>Blogs &amp; Newsletter</h2>

      <div className="group">
        {
          blogs.map((blog) => (
          <figure key={blog.id}>
            <Image 
              alt="jgrandcommodities"
              src={`/img/${blog.image}`}
              width={1000}
              height={100}
            />
            <figcaption>
              <span>{blog.date}</span>
              <a href={`/blog/${blog.id}`}>{blog.title}</a>
              {/* <h4>Title</h4> */}
            </figcaption>
          </figure>
          ))
        }
      </div>
    </section>
  )
}

function Faq() {
  const [faqIndex, setFaqIndex] = useState<number>(0)

  const changeIndex = (index: number) => {
    setFaqIndex(index)
  }

  interface Faq {
    question: string;
    answer: string;
  }

  const faqData: Faq[] = [
    {
      question: "Are the Cashews health for children",
      answer: "Our Cashews does not contain any harmful material, it is well  processed and safe for consumption for everyone at any age."
    },
    {
      question: "Which store can one shop Juki Nuts products",
      answer: "You can shop for our products from the following stores: Shoprites, Marina Mall, Tesbury\'s Legon City Mall, Valley View Rd Total-Oyibi, Amrahia Goil, The Blue Mall-Conference Center, Jungle Jims\'s Mart, Powerland Total, Haatso Goil, Palm Wine Junction Shell-Labadi, AnC Shell-East legon",
    },
    {
      question: "Can I get my product delivered to my doorstep",
      answer: "You can receive any order placed on our website anywhere around Ghana",
    },
    {
      question: "What\'s the return policy on a product I want to return",
      answer: "You can return a product on purchase within 48 hours, with no damage to the packaging or the product itself i.e the cashews remain intact",
    },
    {
      question: "What payment method do you accept",
      answer: "We accept multiple payment method, you can use direct bank transfer, debit card or mobile money.",
    },
  ]

  return (
    <section className="faq" id="faq">
      <h2>Frequently Asked Questions</h2>
      <ul>
        {
          faqData.map((faq, index) => (
          <li key={index}>
            <span onClick={()=>changeIndex(index)}>{faq.question}</span>
            {
              index === faqIndex &&
              <p>{faq.answer}</p>
            }
          </li>
          ))
        }
      </ul>
    </section>
  )
}

function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="title">
        <h2>Real stories from our customers</h2>
      </div>

      <div className="allReviews">
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
      </div>
    </section>
  )
}

export default function Home() {
  const {modal} = useProductContext()

  return (
    <div>
      <Banner/>
      <AllProducts/>
      <Process/>
      <About/>
      <Reviews/>
      <Faq/>
      <Blog/>

      {
        modal ? <Modal/> : undefined
      }
    </div>
  );
}
