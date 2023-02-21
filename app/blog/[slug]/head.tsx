import React from "react";
import posts from "../../../data/posts";
import { default as slugify } from "slugify";

export default function BlogPostHead({ params }) {
  let post = posts.find(
    (x): boolean =>
      params.slug ==
      slugify(x.title, { remove: /[*+~.()'"!:@]/g }).toLocaleLowerCase()
  );

  return (
    <>
      <meta charSet='utf-8' />
      <meta name='language' content='english' />
      <meta http-equiv='content-type' content='text/html' />
      <meta name='author' content={post?.author} />
      <meta name='designer' content="Michael O'Reilly" />
      <meta name='publisher' content="Michael O'Reilly" />
      <title>{post?.title}</title>
      <meta name='robots' content='index,follow' />
      <meta name='revisit-after' content='7 days' />
      <meta name='distribution' content='web' />
      <meta http-equiv='refresh' content='30' />
      <meta name='robots' content='noodp' />
      <meta name='keywords' content={post?.metaKeywords} />
      <meta name='description' content={post?.metaDescription} />
      <meta name='subject' content='A collection of salty blog posts' />
      <meta name='copyright' content='SaltyDogs' />
      <meta name='language' content='EN' />
      <meta name='og:title' content={post?.title} />
      <meta name='og:type' content='article' />
      <meta name='og:image' content={post?.image} />
      <meta name='og:site_name' content='SaltyDogs' />
      <meta name='og:description' content={post?.title} />
      <meta name='format-detection' content='telephone=yes' />
      <meta name='HandheldFriendly' content='true' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    </>
  );
}
