import { ReactNode } from "react";
import Image from "next/image"

function Banner() {
  return (
    <div className="banner_half">
      <div className="banner_img">
        <Image 
          alt="jgrandcommodities"
          src={`/img/cashews.JPG`}
          width={1000}
          height={100}
        />
      </div>
    </div>
  )
}

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <Banner />
      {children} 
    </section>
  );
}
