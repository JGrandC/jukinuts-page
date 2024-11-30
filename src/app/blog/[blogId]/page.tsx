"use client"
import Image from "next/image"
import { useBlogContext } from "@/context/blogContext";
import { use } from 'react'

type Params = Promise<{ blogId: string }>

export default function CurrentBlog({ params }: { params: Params }) {
  const {blogs} = useBlogContext()

  const {blogId} = use(params)



  return (
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
            <div>
              {blog.content}
            </div>
          </article>
          : ""
      )
      }
    </section>
  )
}