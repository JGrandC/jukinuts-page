import Image from "next/image"


function About() {
  return (
    <section className="about" style={{paddingTop: '6rem', flexDirection: 'column'}}>
      <Image 
            alt="jgrandcommodities"
            src={`/img/founders.jpg`}
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
        <h1>JGrand Commodities Ltd</h1>

        <h2>Who We Are</h2>
        <p>
          JGrand Commodities Ltd is a Ghanaian youth-led agribusiness committed to building a sustainable future through cashew value addition. Established in 2020, the company was created to ensure Ghana captures more value from its cashew industry, rather than exporting raw cashews abroad.

          Our work is guided by the principles of climate resilience, women empowerment, and the circular economy. With a 0% waste model, we ensure that every part of the cashew is used — from roasted kernels (Juki Nuts) to innovative by-products like cashew butter, cashew milk, and upcycled ingredients for bakeries and granola producers.
        </p>


        <h2>Our Mission</h2>
        <p>
          To unlock the full potential of Africa&apos;s cashew industry by processing locally, empowering farmers, creating opportunities for youth and women, and delivering climate-smart, sustainable products to local and global markets.
        </p>


        <h2>Our Vision</h2>
        <p>
          A world where African agribusinesses drive inclusive growth and climate resilience by embracing the circular economy, reducing poverty, improving health, and creating opportunities for future generations.
        </p>

        <h2>What We Do</h2>
        <p>
          <strong>Value-Added Cashew Processing</strong> <br />
          Through our flagship brand Juki Nuts, we roast and flavor cashews into healthy snacks for the Ghanaian and international markets.
          <br /><br />

          <strong>Sustainable Innovation</strong> <br />
          Our circular economy approach ensures that cashew by-products are not wasted — they are transformed into cashew butter, milk, and even alternative energy solutions from shells and husks.
          <br /><br />

          <strong>Consulting & Advisory</strong> <br />
          - Market Entry Consulting → Helping companies navigate and succeed in Ghana&apos;s fast-growing FMCG industry.
          - Product Development → Guiding entrepreneurs from concept to launch, including formulation, brand design, and packaging design.
          - Market Expansion → Supporting businesses with distribution, retail strategies, and scaling solutions.
          <br /><br />

          <strong>Training & Capacity Building</strong> <br />
          - Training programs on value addition of cashews and their by-products.
          - Hands-on workshops on branding, packaging, food safety compliance, and sustainable business practices.
          - Programs designed to empower youth and women entrepreneurs entering agrifood and FMCG sectors.
          <br /><br />

          <strong>Export & Trade</strong>
          We partner with distributors, retailers, and buyers across West Africa, the EU, USA, North Africa, and beyond — delivering premium roasted cashews and bulk supply built on sustainability and traceability.
        </p>

        <h2>Our Impact</h2>
        <p>
          <strong>Youth Employment</strong> → Creating jobs for young people, with a strong focus on women and gender inclusion.
          <br /><br />

          <strong>Women Empowerment</strong> → Building gender-inclusive opportunities across production, management, and leadership.
          <br /><br />

          <strong>Climate Action</strong> → Investing in solar-powered dehydration, recyclable packaging, and climate-smart sourcing practices.
          <br /><br />

          <strong>Circular Economy</strong> → Operating a 0% waste model that turns every cashew by-product into new value.
          <br /><br />

          <strong>Farmer Partnerships</strong> → Supporting smallholder farmers with fair farm-gate pricing and reliable markets.
          <br /><br />

          <strong>Public Health</strong> → Offering healthier snack alternatives to help combat diet-related diseases.
        </p>

        <h2>Governance & Leadership</h2>
        <p>
          JGrand Commodities is guided by a dedicated team and an experienced board of advisors, ensuring strong governance, professional management, and sustainable growth.
        </p>


        <h2>Our Flagship Brand</h2>
        <p>
          <strong>Juki Nuts</strong> → Roasted and flavored cashews, proudly made in Ghana with a focus on sustainability, climate-smart practices, and youth-led innovation.
        </p>
        
        
        <h2>Let&apos;s Partner</h2>
        <p>
          We are always looking to partner with:
          <br /><br />
          <strong>Retailers & Distributors</strong> → To expand Juki Nuts across Ghana, Africa, and international markets.
          <br /><br />
          <strong>Investors</strong> → To scale our sustainable processing capacity and social impact.
          <br /><br />
          <strong>FMCG Entrepreneurs</strong> → To develop, launch, and grow new consumer brands in Ghana with a focus on circular economy principles.
          <br /><br />
          <strong>Development Partners</strong> → To empower more farmers, women, and youth while advancing climate adaptation and resilience.
          <br /><br />

          Contact us at info@jgrandcommodities.com or tap below to learn more.
        </p>

        
      </div>
    </section>
  )
}

export default function Company() {
  return (
    <main>
      <About/>
    </main>
  )
}