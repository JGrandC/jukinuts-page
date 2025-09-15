import Image from "next/image"


function About() {
  return (
    <section className="about" style={{paddingTop: '6rem', flexDirection: 'column'}}>
      <Image 
            alt="jgrandcommodities"
            src={`/img/team-shot.jpg`}
            width={1000}
            height={100}
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
        <h1>About Us</h1>
        <h2>Our Story</h2>

        <p>
          JGrand Commodities was founded with a clear purpose: to transform the way Ghana&apos;s cashew industry creates value. For years, over 90% of Ghana&apos;s cashews left the country in their raw form - only to be processed abroad and sold back to Africa at premium prices, leaving smallholder farmers underpaid while foreign processors captured most of the profits. At the same time, diet-related diseases were rising sharply in Ghana, with one in four adults affected.
          <br /><br />
          We saw both a challenge and an opportunity. In 2020, JGrand Commodities set out to add value locally, ensuring that cashews are processed at the source, creating jobs, supporting healthier lifestyles, and reducing waste. This vision gave birth to our flagship brand - Juki Nuts - a line of premium roasted and flavored cashews crafted for both local and international markets.
          <br /><br />
          What began with small-batch roasting has grown into a youth-led agribusiness with a 0% waste model that turns by-products into cashew butter and cashew milk.
        </p>


        <h2>Our Mission</h2>

        <p>
          To build sustainable agribusiness solutions that create value for farmers, communities, and consumers - starting with cashews, through our flagship brand Juki Nuts.  What began with small-batch roasting has grown into a youth-led agribusiness with a 0% waste model that turns by-products into cashew butter and cashew milk.
        </p>


        <h2>Our Vision</h2>

        <p>
          To position JGrand Commodities as a leader in Africa&apos;s agribusiness transformation, with Juki Nuts becoming the continent&apos;s most trusted cashew brand - healthy, sustainable, and proudly made in Ghana.
        </p>

        <h2>Our Impact</h2>

        <p>
          <strong>Farmers:</strong> We work directly with smallholder farmers in rural Ghana, guaranteeing fair prices and stable demand. By processing locally, more of the value stays in Ghana.
          <br /><br />
          <strong>Community:</strong> As a youth-led, women-focused company, we create jobs and training opportunities. Today, JGrand Commodities employs 11 young people with an average age of 28 years- 60% of whom are women. This not only provides income but builds pathways for the next generation of agripreneurs.
          <br /><br />
          <strong>Sustainability:</strong> Our 0% waste model ensures every part of the cashew nut is used -from premium roasted kernels to by-products like cashew butter, cashew milk, and eco-friendly briquettes from shells.
        </p>
        
        
        <h2>The Team</h2>

        <p>
          
          At JGrand Commodities, our strength lies in our people. We currently employ 11 young professionals with an average age of 28 years, bringing energy, innovation, and resilience to the business. True to our commitment to inclusivity, 60% of our team are women, reflecting our mission to empower youth and women in agribusiness.

          Together, this dynamic team is driving JGrand&apos;s vision of building a healthier, more sustainable future through cashew processing and our flagship brand, Juki Nuts.
        </p>

        
      </div>
      {/* <Team/> */}
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
          <figcaption>Justice Ganaku</figcaption>
        </figure>
        <figure>
          <Image 
            alt="jgrandcommodities"
            src={`/img/cashews.JPG`}
            width={1000}
            height={100}
          />
          <figcaption>Joseph M</figcaption>
        </figure>
        <figure>
          <Image 
            alt="jgrandcommodities"
            src={`/img/cashews.JPG`}
            width={1000}
            height={100}
          />
          <figcaption>Others</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default function Story() {
  return (
    <main>
      <About/>
    </main>
  )
}