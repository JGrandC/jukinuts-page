'use client'

import Image from "next/image";
import Link from "next/link";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";
import { useProductContext } from "@/context/productContext";
import { useBlogContext } from "@/context/blogContext";
import { type Product } from "@/context/productContext";

function Banner() {
  const images = [
    '/img/mini_magic-00.jpg',
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
            {/* <span>Super healthy cashews - </span> */}
            <span>From Ghana&apos;s farms to your hands - </span>
            <span style={{ color: 'var(--brand-green)' }}>Natural, </span>
            <span style={{ color: 'var(--brand-green)' }}>Crunchy & </span>
            <span style={{ color: 'var(--brand-green)' }}>Yummy!</span>
          </h1>

          <h4>
            Healthy, Flavorful, Proudly Ghanaian.
          </h4>
          <div className="flex gap-4 items-center">
            <Link href={'/#products'} className="cta">
              <span>Shop Now</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><g><path d="M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12Zm21,0a9,9,0,1,1-9-9A9.011,9.011,0,0,1,21,12Z"/><path d="M12.815,8.551,14.731,10.5H6.5a1.5,1.5,0,0,0,0,3h8.231l-1.916,1.949a1.5,1.5,0,1,0,2.14,2.1L18,14.45a3.524,3.524,0,0,0,0-4.9l-3.048-3.1a1.5,1.5,0,1,0-2.14,2.1Z"/></g></svg>
            </Link>
            <Link href={'/about'} className="cta" style={{background: 'var(--off-white)', border: '1px solid var(--brand-orange)', color: 'var(--brand-orange)', fill: 'var(--brand-orange)'}}>
              <span>About Us</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><g><path d="M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12Zm21,0a9,9,0,1,1-9-9A9.011,9.011,0,0,1,21,12Z"/><path d="M12.815,8.551,14.731,10.5H6.5a1.5,1.5,0,0,0,0,3h8.231l-1.916,1.949a1.5,1.5,0,1,0,2.14,2.1L18,14.45a3.524,3.524,0,0,0,0-4.9l-3.048-3.1a1.5,1.5,0,1,0-2.14,2.1Z"/></g></svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="banner_img">
        {/* <div className="banner_div"></div>
        <div className="banner_div"></div>
        <div className="banner_div"></div> */}
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

function Highlight() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 px-[7.5vw] justify-center content-center items-center">
      <div>
        <svg></svg>
        <h4 className="font-bold">Farm-to-Tabe</h4>
        <span>Sourced directly from farms and processed locally</span>
      </div>
      <div className="text-right">
        <svg></svg>
        <h4 className="font-bold">Zero Waste</h4>
        <span>Reusable packaging and proper transportation</span>
      </div>
      <div>
        <svg></svg>
        <h4 className="font-bold">Healthy Snacking</h4>
        <span>Rich in essential nutrients, protein and fiber</span>
      </div>
      <div className="text-right">
        <svg></svg>
        <h4 className="font-bold">Global Quality</h4>
        <span>Super durable packaging for long shelf life</span>
      </div>
    </div>
  )
}

function Product({image, size, price, id, name, packaging}:any) {
  const {activeProd, toggleModal, addItem, itemVariants} = useProductContext()
  const [variants, setVariants] = useState<Product[] | null>(null);
  const [isVariant, setIsVariant] = useState<boolean>(false);

  const showDetails = (id:string) => {
    toggleModal();
    activeProd(id);
    addItem(id)
  }

  const showVariants = (name: string, packaging: string) => {
    const variants = itemVariants(name, packaging);
    setVariants(variants);
  }

  const toggleVariant = () => {
    setIsVariant(!isVariant);
    showVariants(name, packaging)
  }

  return (
    // <figure className="prod" onClick={() => showDetails(id)}>
      <figure className="prod" onClick={toggleVariant}>
      <Image 
        alt="jgrandcommodities"
        src={`/img/product/${image}`}
        width={1000}
        height={100}
      />

      <figcaption className="feature">
        
          <span>{name}</span> <span>({packaging})</span>
            {
              isVariant && variants ?
              <div className="category">
                <p className="summary">{variants[0].description}</p>
                <span>Choose size:</span>
                <ul>
                  {

                    variants.map(variant => (
                      <li className="selected" key={variant.id} onClick={
                        () => Number(variant.category.price) > 0 ? showDetails(variant.id) : undefined
                      }><span>{variant.category.size}</span>/<span>Gh&#8373; {variant.category.price}</span></li>
                    ))
                  }
                </ul>
              </div>
              :
              null
            }

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
    <section className="products" >
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
    <div className="allProducts" id="products">
      <div className="title">
        <h1>Our Products</h1>
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
        <h1>Our Story</h1>
        <h2>Eat healthy, Stay healthy.</h2>

        <p>
          JGrand Commodities was founded with a clear purpose: to transform the way Ghana&apos;s cashew industry creates value. For years, over 90% of Ghana&apos;s cashews left the country in their raw form - only to be processed abroad and sold back to Africa at premium prices, leaving smallholder farmers underpaid while foreign processors captured most of the profits. At the same time, diet-related diseases were rising sharply in Ghana, with one in four adults affected.
          <br /><br />
          We saw both a challenge and an opportunity. In 2020, JGrand Commodities set out to add value locally, ensuring that cashews are processed at the source, creating jobs, supporting healthier lifestyles, and reducing waste. This vision gave birth to our flagship brand - Juki Nuts - a line of premium roasted and flavored cashews crafted for both local and international markets.
          <br /><br />
          What began with small-batch roasting has grown into a youth-led agribusiness with a 0% waste model that turns by-products into cashew butter and cashew milk.
        </p>

        <a href="/about" className="cta-link">
          <span>Learn More</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><g><path d="M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12Zm21,0a9,9,0,1,1-9-9A9.011,9.011,0,0,1,21,12Z"/><path d="M12.815,8.551,14.731,10.5H6.5a1.5,1.5,0,0,0,0,3h8.231l-1.916,1.949a1.5,1.5,0,1,0,2.14,2.1L18,14.45a3.524,3.524,0,0,0,0-4.9l-3.048-3.1a1.5,1.5,0,1,0-2.14,2.1Z"/></g></svg>

        </a>
      </div>

      <Image 
        alt="jgrandcommodities"
        src={`/img/team-shot.jpg`}
        width={1000}
        height={100}
        style={{maxWidth: '500px'}}
      />
    </section>
  )
}
function Impact() {
  return (
    <section className="about" id="about">
      <div className="text">
        <h1>Our Impact</h1>
        <h2>Eat healthy, Stay healthy.</h2>

        <p>
          At Juki nuts, we&apos;re passionate about more than just delivering delicious and nutritious cashew nuts.
          We&apos;re committed to making a positive impact on the communities we serve. By sourcing our products from local farmers in Ghana and employing
          young individuals, we&apos;re helping to drive economic growth, promote social development, and foster sustainable practices. Here&apos;s a look at the impact we&apos;re making:
       
        </p>

        <a href="/impact" className="cta-link">
          <span>Learn More</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><g><path d="M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12Zm21,0a9,9,0,1,1-9-9A9.011,9.011,0,0,1,21,12Z"/><path d="M12.815,8.551,14.731,10.5H6.5a1.5,1.5,0,0,0,0,3h8.231l-1.916,1.949a1.5,1.5,0,1,0,2.14,2.1L18,14.45a3.524,3.524,0,0,0,0-4.9l-3.048-3.1a1.5,1.5,0,1,0-2.14,2.1Z"/></g></svg>

        </a>
      </div>

      <Image 
        alt="jgrandcommodities"
        src={`/img/our_story_cover.jpg`}
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
        <h2>The journey of our cashews - <br />from the farm to your table</h2>
      </div>

      <div className="infographics">
        {/* <video
          src="/story.mp4"
          width="100%"
          height="auto"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        /> */}

        <Image 
          alt="jgrandcommodities"
          src={`/img/cashew-journey.jpg`}
          width={1000}
          height={100}
          style={{borderRadius: '2rem', maxWidth: '500px'}}
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
function Process2() {
  return (
    <section className="process">
      <div className="title">
        <h2>Juki nuts - <br />cashews for everyone!</h2>
      </div>

      <div className="infographics">
        <Image 
          alt="jgrandcommodities"
          src={`/img/mini_magic-01.jpg`}
          width={1000}
          height={100}
          className="rounded-[2rem]"
          style={{borderRadius: '2rem', maxWidth: '500px'}}
        />
        <ul>
          <li>
            <span>1</span>

            <div>
              <h4>Rich in Healthy Fats</h4>
              <p>
                Our cashews are rich in healthy fats that support heart health and lowr bad cholesterol.
              </p>
            </div>
          </li>
          <li>
            <span>2</span>

            <div>
              <h4>Good Source of Protein</h4>
              <p>
                With a good amount of protein, our cashews are perfect for both kids and adults looking for a healthy snack.
              </p>
            </div>
          </li>
          <li>
            <span>3</span>

            <div>
              <h4>Packed with Essential Minerals</h4>
              <p>
                Our cashews are packed with essential minerals like magnesium, copper, and zinc that support overall health.
              </p>
            </div>
          </li>
          <li>
            <span>4</span>

            <div>
              <h4>Support healthy brain function</h4>
              <p>
                The unique compounds in our cashews may help support cognitive function and overall brain health
              </p>
            </div>
          </li>
          <li>
            <span>5</span>

            <div>
              <h4>Helps with weight management</h4>
              <p>
                With fiber and protein, our cashews are a satisfying snack that can help with weight management
              </p>
            </div>
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
          <a href={`/blog/${blog.id}`} key={blog.id}>
          <figure>
            <Image 
              alt="jgrandcommodities"
              src={`/img/${blog.image}`}
              width={1000}
              height={100}
            />
            <figcaption>
              <h4>{blog.title}</h4>
              <span>{blog.date}</span>
            </figcaption>
          </figure>
          </a>
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
      question: "Are the Cashews healthy for children?",
      answer: "Our Cashews does not contain any harmful material, it is well  processed and safe for consumption for everyone at any age."
    },
    {
      question: "Which store can one shop Juki Nuts products?",
      answer: "You can shop for our products from the following stores: Shoprites, Marina Mall, Tesbury\'s Legon City Mall, Valley View Rd Total-Oyibi, Amrahia Goil, The Blue Mall-Conference Center, Jungle Jims\'s Mart, Powerland Total, Haatso Goil, Palm Wine Junction Shell-Labadi, AnC Shell-East legon",
    },
    {
      question: "Can I get my product delivered to my doorstep?",
      answer: "You can receive any order placed on our website anywhere around Ghana",
    },
    {
      question: "What\'s the return policy on a product I want to return?",
      answer: "You can return a product on purchase within 48 hours, with no damage to the packaging or the product itself i.e the cashews remain intact",
    },
    {
      question: "What payment method do you accept?",
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
        <h1>Customer Reviews</h1>
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
          <cite className="flex items-center gap-2">
            <img src="https://avatar.iran.liara.run/public/40" alt="avatar" style={{ borderRadius: '50%', width: '40px', height: '40px' }}/>
            <span>Joseph M</span>
          </cite>
        </blockquote>
        <blockquote>
          <q>
            For the longest time, I had been looking for healthy snack 
            options so my friend introduced me to juki nuts. I was like why not? 
            Let me give it a try. And trust me when I say it&apos;s good! it&apos;s my go-to snack now. 
            I love it so much especially the chilli flavor. 
            it&apos;s going to be me and juki nuts in this hot Accra.

          </q>
          <cite className="flex items-center gap-2">
            <img src="https://avatar.iran.liara.run/public/78" alt="avatar" style={{ borderRadius: '50%', width: '40px', height: '40px' }}/>
            <span>Anna</span>
          </cite>
        </blockquote>
      </div>
    </section>
  )
}

function Note() {
  return (
    <section className="note">
      <div className="text">
        {/* <h1>Eat healthy, Stay healthy.</h1> */}

        <h2>Juki Nuts</h2>

        <p>
          Juki nuts is about Introducing flare into 
          the boring cashew nuts through our captivating packaging 
          and introducing new flavours of roasted cashew nuts.

          {/* Introducing grand packaging with durable and non carcinogenic materials.

          Flavouring our roasted cashew nuts to spice up its taste and make it more palatable.

          Maintaining access to our products from anywhere through our well developed user experience model.
          Establishing relationship with our customers and expanding our community to provide more better products. */}
        </p>

        <a href="/about" className="cta-link">
          <span>Learn More</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><g><path d="M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12Zm21,0a9,9,0,1,1-9-9A9.011,9.011,0,0,1,21,12Z"/><path d="M12.815,8.551,14.731,10.5H6.5a1.5,1.5,0,0,0,0,3h8.231l-1.916,1.949a1.5,1.5,0,1,0,2.14,2.1L18,14.45a3.524,3.524,0,0,0,0-4.9l-3.048-3.1a1.5,1.5,0,1,0-2.14,2.1Z"/></g></svg>
        </a>
      </div>
    </section>
  )
}
function Note2() {
  return (
    <>
      <section className="note">
        <div className="text">
          {/* <h1>Eat healthy, Stay healthy.</h1> */}

          <h2>Stay up healthy!</h2>

          <p>
            Our cashews is sourced from local farms in Ghana and it contains healthy nutrients.
            We also add natural flavours to spice up your taste without causing any health damage.
          </p>

          <a href="/#products" className="cta-link">
            <span>Shop Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><g><path d="M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12Zm21,0a9,9,0,1,1-9-9A9.011,9.011,0,0,1,21,12Z"/><path d="M12.815,8.551,14.731,10.5H6.5a1.5,1.5,0,0,0,0,3h8.231l-1.916,1.949a1.5,1.5,0,1,0,2.14,2.1L18,14.45a3.524,3.524,0,0,0,0-4.9l-3.048-3.1a1.5,1.5,0,1,0-2.14,2.1Z"/></g></svg>
          </a>
        </div>
      </section>
      {/* <Image 
        alt="jgrandcommodities"
        src={`/img/cashews.JPG`}
        width={1000}
        height={100}
      /> */}
    </>
  )
}
function Note3() {
  return (
    <>
      <section className="note">
        <div className="text">
          {/* <h1>Eat healthy, Stay healthy.</h1> */}

          <h2>Stay up healthy!</h2>

          <p>
            Our cashews is sourced from local farms in Ghana and it contains healthy nutrients.
            We also add natural flavours to spice up your taste without causing any health damage.
          </p>

          <a href="/#products" className="cta-link">
            <span>Shop Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><g><path d="M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12Zm21,0a9,9,0,1,1-9-9A9.011,9.011,0,0,1,21,12Z"/><path d="M12.815,8.551,14.731,10.5H6.5a1.5,1.5,0,0,0,0,3h8.231l-1.916,1.949a1.5,1.5,0,1,0,2.14,2.1L18,14.45a3.524,3.524,0,0,0,0-4.9l-3.048-3.1a1.5,1.5,0,1,0-2.14,2.1Z"/></g></svg>
          </a>
        </div>
      </section>
      {/* <Image 
        alt="jgrandcommodities"
        src={`/img/cashews.JPG`}
        width={1000}
        height={100}
      /> */}
    </>
  )
}

export default function Home() {
  const {modal} = useProductContext()

  return (
    <div>
      <Banner/>
      {/* <Note/> */}
      {/* <Highlight/> */}
      <AllProducts/>
      <About/>
      <Process/>
      {/* <Note2/> */}
      <Reviews/>
      <Process2/>
      {/* <Impact/> */}
      <Faq/>
      <Note3/>
      <Blog/>

      {
        modal ? <Modal/> : undefined
      }
    </div>
  );
}
