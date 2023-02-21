import Image from "next/image";
import Link from "next/link";
import React from "react";
import { default as slugify } from "slugify";

export default function BlogCard({ post }) {
  const postTitleSlugified = slugify(post.title, {
    remove: /[?*+~.()'"!:@]/g,
  }).toLocaleLowerCase();
  return (
    <Link
      href={`/blog/${postTitleSlugified}`}
      className='relative rounded-lg shadow h-[470px] overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-transform grad-light'
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
        <span className='text-xs font-body px-2 py-0.5 rounded-l-full rounded-r-full bg-rose-200 group-hover:bg-rose-300'>
          {post.category}
        </span>
        <h3 className='h3 mt-2 line-clamp-2 group-hover:underline'>{post.title}</h3>
        <p className='p4 line-clamp-3 text-neutral-600'>
          {post.metaDescription}
        </p>
      </div>
    </Link>
  );
}
