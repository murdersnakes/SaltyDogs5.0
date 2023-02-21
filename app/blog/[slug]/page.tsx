import React from "react";
import posts from "../../../data/posts";
import { default as slugify } from "slugify";
import Image from "next/image";
import { BiUserCircle, BiCalendarAlt, BiLike, BiDislike } from "react-icons/bi";
import Link from "next/link";
import { BsTwitter, BsGoogle, BsFacebook, BsLinkedin } from "react-icons/bs";

export default function page({ params }) {
  let post = posts.find(
    (x): boolean =>
      params.slug ==
      slugify(x.title, { remove: /[?*+~.()'"!:@]/g }).toLocaleLowerCase()
  );

  const postListWithoutCurrent = posts.filter(
    (x): boolean => x.title != post?.title
  );

  return (
    <div>
      <div className='cont py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
          <div>
            <h2 className='h4 pb-4'>Related Articles</h2>
            <div className='flex flex-col justify-start'>
              {postListWithoutCurrent.map((article) => {
                return (
                  <Link
                    href={`/blog/${slugify(article?.title, {
                      remove: /[*+~.()'"!:@]/g,
                    }).toLocaleLowerCase()}`}
                    key={article?.id}
                    className='pb-6 group'
                  >
                    <span className='text-xs font-body px-2 py-0.5 rounded-l-full rounded-r-full bg-rose-200 group-hover:bg-rose-300'>
                      {article?.category}
                    </span>
                    <h3 className='p3 font-bold line-clamp-2 group-hover:underline'>
                      {article?.title}
                    </h3>
                    <p className='p4 line-clamp-2'>
                      {article?.metaDescription}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className='lg:col-span-2'>
            <div className='relative w-full h-96 mb-5'>
              <Image
                src={post?.image}
                alt={post?.title}
                width={500}
                height={500}
                priority
                quality={50}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='flex items-center justify-between border-y py-1 my-2'>
              <div className='flex items-center space-x-1 p4'>
                <BiUserCircle />
                <span>{post?.author}</span>
              </div>
              <div className='flex items-center space-x-1 p4'>
                <BiCalendarAlt />
                <span>{post?.date}</span>
              </div>
            </div>
            <div
              className='prose'
              dangerouslySetInnerHTML={{ __html: `${post?.body}` }}
            />
            <div className='mt-12 flex w-full items-center justify-start space-x-5 text-white border-y py-2'>
              <h4 className='h2 text-neutral-800'>Like & Share:</h4>
              {/* <!-- Twitter --> */}
              <Link
                href={`https://twitter.com/share?url=https://saltydogs.ie/blog/${params.slug}`}
                target='_blank'
                className='bg-[#55acee] px-3 py-2 rounded shadow'
                aria-label='link to share on twitter'
              >
                <BsTwitter />
              </Link>

              {/* <!-- Google Plus --> */}
              <Link
                href={`https://plus.google.com/share?url=https://saltydogs.ie/blog/${params.slug}`}
                target='_blank'
                className='bg-[#dd4b39] px-3 py-2 rounded shadow'
                aria-label='link to share on google'
              >
                <BsGoogle />
              </Link>

              {/* <!-- Facebook --> */}
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=https://saltydogs.ie/blog/${params.slug}`}
                target='_blank'
                className='bg-[#3B5998] px-3 py-2 rounded shadow'
                aria-label='link to share on facebook'
              >
                <BsFacebook />
              </Link>

              {/* <!-- LinkedIn --> */}
              <Link
                href={`https://www.linkedin.com/shareArticle?url=https://saltydogs.ie/blog/${params.slug}`}
                target='_blank'
                className='bg-[#4875B4] px-3 py-2 rounded shadow'
                aria-label='link to share on linkedin'
              >
                <BsLinkedin />
              </Link>
            </div>

            <form className='form mt-6'>
              <textarea
                typeof='text'
                placeholder='Leave a comment...'
                className='h-36 w-full'
              ></textarea>
              <div className='mt-4 flex justify-between items-center'>
                <button className='btn_1' typeof='submit'>
                  Post comment
                </button>
                <div className='flex items-center space-x-3 text-xl'>
                  <button
                    typeof='submit'
                    className='flex items-center space-x-1'
                  >
                    <BiLike />
                    <span className='text-xs text-blue-800'>{post?.likes}</span>
                  </button>
                  <button
                    typeof='submit'
                    className='flex items-center space-x-1'
                  >
                    <BiDislike />
                    <span className='text-xs text-red-800'>41</span>
                  </button>
                </div>
              </div>
            </form>
            <div className='mt-10'>
              <h4 className='h4'>2 Comments</h4>
              <div className='mt-4 flex w-full justify-start'>
                <div className='rounded-full h1 mr-6'>
                  <BiUserCircle />
                </div>
                <div>
                  <div className='flex space-x-4 items-baseline'>
                    <p className='p2 font-bold'>Joe Bloggs</p>
                    <span className='font-light'>3d</span>
                  </div>
                  <div>
                    <p className='p4 mt-4'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Excepturi sequi, adipisci provident quo saepe eveniet
                      dignissimos sint consequatur obcaecati incidunt mollitia
                      tempore, quia blanditiis ipsum vero consequuntur.
                      Inventore nihil quos ea voluptate est, qui suscipit.
                      Tempora exercitationem quia debitis enim hic.
                    </p>
                    <div className='flex items-center justify-end w-full space-x-3 text-xl'>
                      <button
                        typeof='submit'
                        className='flex items-center space-x-1'
                      >
                        <BiLike />
                        <span className='text-xs text-blue-800'>21</span>
                      </button>
                      <button
                        typeof='submit'
                        className='flex items-center space-x-1'
                      >
                        <BiDislike />
                        <span className='text-xs text-red-800'>1</span>
                      </button>
                    </div>
                    <div className='w-full bg-gray-200 p-8 mt-4'>
                      <p className='h4'>2 replies</p>
                      <div className='mt-10'>
                        <div className='mt-4 flex w-full justify-start'>
                          <div className='rounded-full h1 mr-6'>
                            <BiUserCircle />
                          </div>
                          <div>
                            <div className='flex space-x-4 items-baseline'>
                              <p className='p2 font-bold'>Ben Foster</p>
                              <span className='font-light'>1d</span>
                            </div>
                            <div>
                              <p className='p4 mt-4'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Excepturi sequi, adipisci
                                provident quo
                              </p>
                              <div className='flex items-center justify-end w-full space-x-3 text-xl'>
                                <button
                                  typeof='submit'
                                  className='flex items-center space-x-1'
                                >
                                  <BiLike />
                                  <span className='text-xs text-blue-800'>
                                    21
                                  </span>
                                </button>
                                <button
                                  typeof='submit'
                                  className='flex items-center space-x-1'
                                >
                                  <BiDislike />
                                  <span className='text-xs text-red-800'>
                                    1
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='mt-4 flex w-full justify-start'>
                          <div className='rounded-full h1 mr-6'>
                            <BiUserCircle />
                          </div>
                          <div>
                            <div className='flex space-x-4 items-baseline'>
                              <p className='p2 font-bold'>Kenzo41</p>
                              <span className='font-light'>1d</span>
                            </div>
                            <div>
                              <p className='p4 mt-4'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Excepturi sequi, adipisci
                                provident quo
                              </p>
                              <div className='flex items-center justify-end w-full space-x-3 text-xl'>
                                <button
                                  typeof='submit'
                                  className='flex items-center space-x-1'
                                >
                                  <BiLike />
                                  <span className='text-xs text-blue-800'>
                                    21
                                  </span>
                                </button>
                                <button
                                  typeof='submit'
                                  className='flex items-center space-x-1'
                                >
                                  <BiDislike />
                                  <span className='text-xs text-red-800'>
                                    1
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-4 flex w-full justify-start'>
                <div className='rounded-full h1 mr-6'>
                  <BiUserCircle />
                </div>
                <div>
                  <div className='flex space-x-4 items-baseline'>
                    <p className='p2 font-bold'>Aaron Ross</p>
                    <span className='font-light'>9d</span>
                  </div>
                  <div className='mt-4'>
                    <p className='p4 mt-4'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Excepturi sequi, adipisci provident quo saepe eveniet
                      dignissimos sint consequatur obcaecati incidunt mollitia
                      tempore, quia blanditiis ipsum vero consequuntur.
                      Inventore nihil quos ea voluptate est, qui suscipit.
                      Tempora exercitationem quia debitis enim hic.
                    </p>
                    <div className='flex items-center justify-end w-full space-x-3 text-xl'>
                      <button
                        typeof='submit'
                        className='flex items-center space-x-1'
                      >
                        <BiLike />
                        <span className='text-xs text-blue-800'>21</span>
                      </button>
                      <button
                        typeof='submit'
                        className='flex items-center space-x-1'
                      >
                        <BiDislike />
                        <span className='text-xs text-red-800'>1</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
