"use client"
import Image from "next/image"
import { useBlogContext } from "@/context/blogContext"
import { use } from 'react'

type Params = Promise<{ blogId: string }>

export default function PageBlog({ params }: { params: Params }) {
  const {blogs} = useBlogContext()

  const {blogId} = use(params)

  return (
    <section className="blog">
      <section className="currentBlog">
        {
          blogs.map((blog) => 
            blog.id === blogId ?
            <article key={blog.id}>
              <h2>{blog.title}</h2>
              <span>{blog.date}</span>
              <Image 
                alt="jgrandcommodities"
                src={`/img/${blog.image}`}
                width={1000}
                height={100}
              />
              <div className="content">
                {blog.content}
              </div>
            </article>
            : ""
        )
        }
      </section>

      <h2>Recent</h2>

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