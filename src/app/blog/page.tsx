"use client"
import Image from "next/image"
import { useBlogContext } from "@/context/blogContext"
import Link from "next/link"


function Blog() {
  const {blogs} = useBlogContext()

  return (
    <section className="blog">

      <h2>Recent</h2>

      <div className="group">
        {
          blogs.map((blog) => (
          <figure key={blog.id}>
            <figcaption>
              <span>{blog.date}</span>
              <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
              {/* <h4>Title</h4> */}
            </figcaption>
            <Image 
              alt="jgrandcommodities"
              src={`/img/${blog.image}`}
              width={1000}
              height={100}
            />
          </figure>
          ))
        }
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <section>
      <Blog/>
    </section>
  )
}