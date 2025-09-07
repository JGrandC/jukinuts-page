import Image from "next/image"


function About() {
  return (
    <section className="about" id="about" style={{paddingTop: '24rem'}}>
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

        <div>
          <h2>The journey of our cashews - from the farm to your table</h2>

          <div className="infographics">
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
        </div>
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
          <figcaption>- Joseph M</figcaption>
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
      <About/>
      <Team/>
    </main>
  )
}