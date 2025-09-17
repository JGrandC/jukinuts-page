"use client"

import React, {createContext, useContext, useState, ReactNode} from "react"

// Define shape of author 
type Author = {
  profile: string,
  username: string,
}

type BlogType = {
  id: string,
  date: string,
  title: string,
  image: string,
  content: string,
  author: Author,
}

type BlogContextType = {
  blogs: BlogType[],
  featuredBlogs: FeaturedBlogType[],
}

type FeaturedBlogType = {
  id: string,
  title: string,
  source: string,
  link: string,
}

// Sample Featured Blog Data
const featuredBlogs: FeaturedBlogType[] = [
  {
    id: "0x1",
    title: "Incubator Programme: The Green Business Competition Programme for MSMEs",
    source: "Ghana Climate Innovation Center",
    link: "https://ghanacic.ashesi.edu.gh/ventures/jgrand-commodities/"
  },
  {
    id: "0x2",
    title: "JGrand Commodities: From Porch-Side Passion to Ghana’s Premier Cashew Brand",
    source: "Lasonde Entrepreneur Institute",
    link: "https://lassonde.utah.edu/jgrand-commodities-from-porch-side-passion-to-ghanas-premier-cashew-brand/"
  },
  {
    id: "0x3",
    title: "20 agribusinesses win US$10,000 each in Tullow AgriVentures Programme Pitch 2025",
    source: "The Business & Financial Times",
    link: "https://thebftonline.com/2025/08/15/20-agribusinesses-win-us10000-each-in-tullow-agriventures-pitch-2025/"
  },
  {
    id: "0x4",
    title: "Inaugural Cohort of Founders Graduates from Master of Business Creation Global",
    source: "TechBuzz News",
    link: "https://www.techbuzznews.com/inaugural-cohort-of-founders-graduates-from-master-of-business-creation-global/"
  },
  {
    id: "0x5",
    title: "Inaugural Cohort of Founders Graduates from Master of Business Creation Global",
    source: "Utah Business",
    link: "https://www.utahbusiness.com/press-releases/2025/08/26/inaugural-cohort-founders-graduates-master-business-creation-global/"
  },
  {
    id: "0x6",
    title: "Inspiring journey of Juki Nuts founders at Intra-Africa Trade Fair",
    source: "Graphic Online",
    link: "https://www.graphic.com.gh/lifestyle/life/inspiring-journey-of-juki-nuts-founders-at-intra-africa-trade-fair.html"
  },
]

// Sample Blog Data
const sampleBlog: BlogType[] = [
  {
    id: "0x1",
    date: "24 Nov, 2024",
    title: "Celebrating Farmers: The Backbone of Juki Nuts",
    image: "countryside-woman.jpg",
    content: `At Juki Nuts, every bite of our premium roasted cashew nuts is a celebration of the hard work and dedication of farmers who make it all possible. Farmers are the backbone of our journey, and we're committed to honoring their role in bringing healthy and delicious cashews to your table.

      Our Journey with Farmers
      Our journey starts in the Bono region of Ghana, home to some of the finest cashew orchards. Here, smallholder farmers and cooperatives carefully tend to the cashew trees, ensuring only the best nuts are harvested. We ensure top-quality cashews from the source by:
      - Sourcing Directly: We source cashews directly from smallholder farmers, ensuring fair prices and better livelihoods.
      - Supporting Sustainable Farming: We promote sustainable farming practices, which helps reduce the environmental impact and increases crop yields.

      Impact on Farmers and Communities
      Our partnership with farmers goes beyond just sourcing raw materials. We're committed to:
      - Empowering Farmers: By providing income opportunities and supporting sustainable farming practices, we're helping farmers improve their livelihoods.
      - Community Development: Our business model contributes to the local economy, creating jobs and stimulating growth.

      Why Celebrate Farmers?
      Celebrating farmers is essential to our mission at Juki Nuts. They are the foundation of our business, and their hard work and dedication are what make our products possible. By honoring farmers, we're not just acknowledging their contributions; we're also promoting a more sustainable and equitable food system.

      Join the Celebration
      When you choose Juki Nuts, you're not just enjoying a delicious snack—you're supporting a community of farmers and a commitment to healthy, flavorful living. Together, let's celebrate the farmers who make it all possible. From the farm to your hands, Juki Nuts delivers quality, flavor, and care in every bite `,
    author: {
      profile: "bob.jpg",
      username: "Bob",
    }
  },
  {
    id: "0x2",
    date: "27 Nov, 2024",
    title: "Boost Your Brain Power with Cashews",
    image: "brain-health.jpg",
    content: `As a student, you're likely no stranger to the challenges of studying and retaining information. But did you know that certain foods can help support brain health and improve cognitive function? At Juki Nuts, we're excited to share the benefits of cashews for brain health.

      Cashews: A Brain-Boosting Snack
      Cashews contain a range of nutrients that are important for brain health, including:

      Magnesium: The Relaxation Mineral
      Magnesium helps regulate neurotransmitter function and synaptic plasticity, which are critical for learning and memory. It also has a calming effect, which can help reduce stress and anxiety.

      Copper: The Brain's Messenger
      Copper plays a role in the production of neurotransmitters, such as dopamine and serotonin, which are involved in mood regulation and cognitive function.

      Zinc: The Memory Mineral
      Zinc is essential for neuronal function and synaptic plasticity. It also supports immune function, which is important for overall brain health.

      Anacardic Acid: The Neuroprotective Compound
      Anacardic acid, found in cashew nutshell oil, has been shown to have neuroprotective effects and may help support healthy cognitive function.

      How Cashews Can Help Students
      Incorporating cashews into your diet may help:

      Improve Focus and Concentration
      The magnesium and copper in cashews may help regulate neurotransmitter function and improve focus.

      Enhance Memory
      The zinc in cashews supports neuronal function and synaptic plasticity, which are critical for memory formation.

      Reduce Stress and Anxiety
      The magnesium in cashews has a calming effect, which can help reduce stress and anxiety.

      Make Cashews a Part of Your Study Routine
      Try incorporating cashews into your study routine by:

      - Snacking on cashews while studying
      - Adding cashews to your favorite trail mix or energy balls
      - Using cashew butter as a dip for fruits or veggies

      At Juki Nuts, we're committed to providing high-quality cashews that are not only delicious but also nutritious. Boost your brain power with cashews and take your studying to the next level!`,
    author: {
      profile: "jane.jpg",
      username: "Jane",
    }
  },
  {
    id: "0x3",
    date: "30 Nov, 2024",
    title: "Unlock the Nutritional Power of Cashews with Juki Nuts",
    image: "health-benefit.jpg",
    content: `Cashews are a delicious and nutritious snack that offers a range of health benefits. At Juki Nuts, we're passionate about sharing the goodness of cashews with our customers. Here are some of the key nutritional health benefits of eating cashew nuts:

      1. Rich in Healthy Fats
      Cashews are a good source of monounsaturated and polyunsaturated fats, which can help lower bad cholesterol and reduce the risk of heart disease.

      2. Good Source of Protein
      Cashews are a good source of protein, making them a great snack for vegetarians and vegans. Protein is essential for building and repairing muscles, organs, and tissues.

      3. Packed with Essential Minerals
      Cashews are rich in minerals like magnesium, copper, and zinc. These minerals are important for maintaining healthy bones, immune function, and many other bodily processes.

      4. Supports Healthy Bones
      Cashews are a good source of magnesium and copper, which are essential for maintaining healthy bones. Magnesium helps regulate bone mineral density, while copper plays a role in the production of collagen.

      5. May Help Lower Blood Pressure
      The potassium, magnesium, and fiber in cashews may help lower blood pressure and reduce the risk of cardiovascular disease.

      6. Supports Healthy Weight Management
      Cashews are high in fiber and protein, making them a satisfying snack that can help with weight management.

      7. May Help Improve Cognitive Function
      Cashews contain a compound called anacardic acid, which may have neuroprotective effects and support healthy cognitive function.

      At Juki Nuts, we're committed to providing high-quality cashews that are not only delicious but also nutritious. Enjoy the goodness of cashews with our range of products!`,
    author: {
      profile: "Larry.jpg",
      username: "Larry",
    }
  },
]

// Initialize blog context
const BlogContext = createContext<BlogContextType | undefined>(undefined)

// Context Provider
export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [blogs] = useState<BlogType[]>(sampleBlog)
  const [featured] = useState<FeaturedBlogType[]>(featuredBlogs)
  
  return (
    <BlogContext.Provider value={{
      blogs,
      featuredBlogs: featured,
    }}>
      {children}
    </BlogContext.Provider>
  )
}

export const useBlogContext = () => {
  const context = useContext(BlogContext)
  if (!context) {
    throw new Error("You need to set a provider for blog")
  }
  return context;
}