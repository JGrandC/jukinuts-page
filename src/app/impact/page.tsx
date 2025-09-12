import React from 'react'
import Image from 'next/image'

const PageImpact = () => {
  return (
    <section className="impact" style={{paddingTop: '6rem', flexDirection: 'column'}}>
        <Image 
          alt="jgrandcommodities"
          src={`/img/our_impact_cover.jpg`}
          width={1000}
          height={1000}
          style={{
            width: '100%',
            minWidth: '100%',
            maxWidth: 'auto',
            height: '400px',
            maxHeight: '400px',
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
          />
      <div className="text">
        <h1>Our Impact</h1>
        <h2>Nourishing Communities, Empowering Lives</h2>

        <p>
          At Juki nuts, we&apos;re passionate about more than just delivering delicious and nutritious cashew nuts.
          We&apos;re committed to making a positive impact on the communities we serve. By sourcing our products from local farmers in Ghana and employing
          young individuals, we&apos;re helping to drive economic growth, promote social development, and foster sustainable practices. Here&apos;s a look at the impact we&apos;re making:
        </p>

        <div>
          <h2>Economic Impact</h2>

          <div className="infographics">
            <ul>
              <li>
                <span>Job Creation</span>

                <p>
                  We contributes to employment opportunities in Ghana&apos;s cashew sector, which employs many individual from the rural areas,
                  By sourcings products from local farmers and employing young individuals, We help reduce unemployment and supports local economic growth.
          
                </p>
              </li>
              <li>
                <span>Local Economic Growth</span>

                <p>
                  Currently, only about 10% of Ghana&apos;s cashews are processed domestically, leaving room for growth and development.
                  By promoting local processing, We help increase the value added to Ghana&apos;s exports, potentially boosting the country&apos;economy.
                  We contribute to Ghana&apos;s efforts to increase local processing of cashews, which can lead to higher returns and economic growth.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2>Social Impact</h2>

          <div className="infographics">
            <ul>
              <li>
                <span>Empowering Women</span>

                <p>
                  The cashew industry provides employment opportunities for women, both in farming and processing stages.
                  Our efforts to employ young individuals, including females, contribute to promoting gender equality and empowering women.
                </p>
              </li>
              <li>
                <span>Poverty Reduction</span>

                <p>
                  By providing income opportunities for small scale farmers and workers, We help alleviate poverty in rural areas. 
                  The cashew industy has been instrumental in reducing poverty in many African countries, including Ghana.</p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2>Capacity building and Sustainability</h2>

          <div className="infographics">
            <ul>
              <li>
                <span>Sustainable Practices</span>

                <p>
                  Our commitment to sourcing products from local farmers promotes sustainable agricultural practices. 
                  By supporting local farmers, we help reduce the environmental impact of transportation and promoted eco-friendly farming methods.</p>
              </li>
              <li>
                <span>Capacity building</span>

                <p>
                  By partnering with local farmers and providing employment opportunities, We help build capacity in the cashew sector. 
                  This can lead to imporved productivity, efficiency, and competitiveness in the industy</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='process'>
          <h2>The journey of our cashews - from the farm to your table</h2>

          <div className="infographics" style={{color: 'var(--brand-orange'}}>
            <ul>
              <li style={{flexDirection: 'row'}}>
                <span>1</span>

                <p>
                  Our journey begins from smallholder farmers and 
                  cooperatives from the Bono region of Ghana, where our 
                  carefully selected orchards yield the finest cashew nuts. 
                  Traceability starts here, ensuring quality from the source.
                </p>
              </li>
              <li style={{flexDirection: 'row'}}>
                <span>2</span>

                <p>
                  At our processing facility, quality standards are maintained 
                  at every stage. We employ cutting-edge technology and expert 
                  craftsmanship to guarantee top-notch cashews for you
                </p>
              </li>
              <li style={{flexDirection: 'row'}}>
                <span>3</span>

                <p>
                  Roasting is an art we take seriously. Our cashews undergo 
                  meticulous roasting to perfection, enhancing the flavor and texture that you love
                </p>
              </li>
              <li style={{flexDirection: 'row'}}>
                <span>4</span>

                <p>
                  The final step in our process involves precision packaging. 
                  Each package is sealed to preserve freshness and flavor, 
                  with every batch made with lots of love!
                </p>
              </li>
              <li style={{flexDirection: 'row'}}>
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

export default PageImpact