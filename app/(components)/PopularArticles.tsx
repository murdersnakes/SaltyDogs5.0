import React from "react";
import posts from "../../data/posts";
import BlogCard from "./BlogCard";

export default function PopularArticles() {
  return (
    <div>
      <div className='cont pb-24'>
        <h3 className='h2 mb-5'>Popular Articles</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {posts.map((post) => {
            return <BlogCard key={post.id} post={post}></BlogCard>;
          })}
        </div>
      </div>
    </div>
  );
}
