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
}

// Sample Blog Data
const sampleBlog: BlogType[] = [
  {
    id: "0x1",
    date: "24 Nov, 2024",
    title: "Celebrating farmers",
    image: "mini_magic_blog.jpg",
    content: "At Juki Nuts, every bite of our premium roasted cashew nuts is a celebration of the hard work and dedication of farmers who make it all possible. Farmers are the backbone of our journey, and we&apos;re committed to honoring their role in bringing healthy and delicious cashews to your table. Our Mission: Bringing Flair to Healthy Snacking Our motto, Eat Healthy, Stay Healthy, reflects our vision to transform cashews from a simple snack to a flavorful and vibrant experience. At Juki Nuts, we&apos;ve reimagined cashews by introducing: Captivating packaging that&apos;s durable, non-carcinogenic, and designed for sustainability. Unique flavors to spice up roasted cashews, making them more enjoyable and versatile. Accessible products through a seamless user experience, ensuring you can savor Juki Nuts from anywhere. Community-focused growth by fostering relationships with our customers and continuously innovating to meet their needs. The Journey of Our Cashews: From Farm to Table Every cashew kernel in your hands has a story—a journey of care, quality, and love. Here&apos;s how Juki Nuts bridges the gap between farmers and you",
    author: {
      profile: "bob.jpg",
      username: "Bob",
    }
  },
  {
    id: "0x2",
    date: "27 Nov, 2024",
    title: "The Process Of Making Our Cashews",
    image: "mini_magic_blog.jpg",
    content: "From the Bono Region&apos;s Orchards Our journey starts in the Bono region of Ghana, home to some of the finest cashew orchards. Here, smallholder farmers and cooperatives carefully tend to the cashew trees, ensuring only the best nuts are harvested. Our commitment to traceability begins here, guaranteeing top-quality cashews from the source. Processing with Perfection At our cutting-edge facility, every cashew undergoes meticulous processing. Quality is our cornerstone, and we use advanced technology alongside expert craftsmanship to deliver cashews that meet the highest standards. The Art of Roasting Roasting is where magic happens. Our process enhances the natural flavor and crunch of the cashews, making them irresistible. Each batch is roasted to perfection, creating a snack that&apos;s as delicious as it is nutritious. Precision Packaging Our grand packaging isn&apos;t just about aesthetics—it&apos;s about preserving the freshness and flavor of every cashew. Using sustainable materials, we seal in the love and care that goes into every batch. Traceability You Can Trust From the orchards in Ghana to your table, we ensure a traceable journey. Each pack of Juki Nuts represents a partnership with farmers and a promise of quality you can rely on. Honoring Farmers: Our Commitment We believe in building lasting relationships with the farmers who make our mission possible. By partnering with smallholder farmers and cooperatives, we",
    author: {
      profile: "jane.jpg",
      username: "Jane",
    }
  },
  {
    id: "0x3",
    date: "30 Nov, 2024",
    title: "Our support in sustainable farming practices",
    image: "mini_magic_blog.jpg",
    content: "Support sustainable farming practices. Ensure fair prices and better livelihoods. Celebrate their dedication by sharing their stories with our customers. Join Us in the Celebration When you choose Juki Nuts, you&apos;re not just enjoying a delicious snack—you&apos;re supporting a community of farmers and a commitment to healthy, flavorful living. Together, let&apos;s celebrate the farmers who make it all possible. From the farm to your hands, Juki Nuts delivers quality, flavor, and care in every bite.",
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
  
  return (
    <BlogContext.Provider value={{
      blogs
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