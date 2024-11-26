import Image from "next/image"

function Banner() {
  return (
    <div className="banner_half">
      <div className="banner_img">
        <Image 
          alt="jgrandcommodities"
          src={`/img/cashews.JPG`}
          width={1000}
          height={100}
        />
      </div>
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
          Juki nuts is about Introducing flare into 
          the boring cashew nuts through our captivating packaging 
          and introducing new flavours of roasted cashew nuts.

          Introducing grand packaging with durable and non carcinogenic materials.

          Flavouring our roasted cashew nuts to spice up its taste and make it more palatable.

          Maintaining access to our products from anywhere through our well developed user experience model.
          Establishing relationship with our customers and expanding our community to provide more better products.
        </p>

        <a href="/story" className="cta-link">
          <span>Our Team</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><g><path d="M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12Zm21,0a9,9,0,1,1-9-9A9.011,9.011,0,0,1,21,12Z"/><path d="M12.815,8.551,14.731,10.5H6.5a1.5,1.5,0,0,0,0,3h8.231l-1.916,1.949a1.5,1.5,0,1,0,2.14,2.1L18,14.45a3.524,3.524,0,0,0,0-4.9l-3.048-3.1a1.5,1.5,0,1,0-2.14,2.1Z"/></g></svg>

        </a>
      </div>

      

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
    </section>
  )
}


function Process() {
  return (
    <section className="process">
      <h2>The journey of our cashews - from the farm to your table</h2>

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

function Team() {
  return (
    <section className="team" id="team">

      <h2>Meet our Team</h2>

      <div className="group">
        <figure>
          <Image 
            alt="jgrandcommodities"
            src={`/img/cashews.JPG`}
            width={1000}
            height={100}
          />
          <figcaption>- Justice Ganaku</figcaption>
        </figure>
        <figure>
          <Image 
            alt="jgrandcommodities"
            src={`/img/cashews.JPG`}
            width={1000}
            height={100}
          />
          <figcaption>- Zee</figcaption>
        </figure>
        <figure>
          <Image 
            alt="jgrandcommodities"
            src={`/img/cashews.JPG`}
            width={1000}
            height={100}
          />
          <figcaption>- Others</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default function Story() {
  return (
    <main>
      <Banner/>
      <About/>
      <Process/>
      <Team/>
    </main>
  )
}