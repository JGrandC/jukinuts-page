"use client"
import Image from "next/image"
import { useBlogContext } from "@/context/blogContext"

export default function PageBlog() {
  const {blogs, featuredBlogs} = useBlogContext()

  return (
    <section className="blog">

      <h2>Our Blogs</h2>

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
      
      <h2>Featured</h2>
      <div className="group">
        {
          featuredBlogs.map((blog) => (
          <a href={`/blog/${blog.id}`} key={blog.id}>
            <figure>
              <figcaption style={{padding: "1rem", height: "100%"}}>
                <h4>{blog.title}</h4>
                <span style={{marginTop: "auto"}}>{blog.source}</span>
              </figcaption>
            </figure>
          </a>
          ))
        }
      </div>
    </section>
  )
}