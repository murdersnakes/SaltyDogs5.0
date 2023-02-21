import Image from "next/image";
import Link from "next/link";
import React from "react";
import { default as slugify } from "slugify";

export default function BlogCard({ post }) {

    const postTitleSlugified = slugify(post.title, {remove: /[*+~.()'"!:@]/g}).toLocaleLowerCase() 
  return (
    <Link
      href={`/blog/${postTitleSlugified}`}
      className='relative rounded-lg shadow h-[450px] overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-transform'
    >
      <div className='h-1/2 w-full'>
        <Image
          src={post.image}
          alt={post.title}
          width={500}
          height={500}
          quality={25}
          className='object-cover w-full h-full'
        />
      </div>
      <div className='p-8 h-1/2'>
        <h4 className='h3 line-clamp-2 group-hover:underline'>{post.title}</h4>
        <p className='p4 line-clamp-3'>{post.metaDescription}</p>
      </div>
    </Link>
  );
}
