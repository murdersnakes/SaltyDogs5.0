import React from "react";
import { BiMailSend } from "react-icons/bi";

export default function page() {
  return (
    <div>
      <div className='cont py-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
          <div>
            <h1 className='h2'>Don&apos;t be a stranger</h1>
            <p className='p mt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ullam
              autem magnam.
            </p>
          </div>

          <form className='grad-light w-full lg:w-fit h-fit p-8 space-y-4 rounded shadow'>
            <div className='flex items-center space-x-1 h3'>
              <BiMailSend />
              <h2>Contact form</h2>
            </div>
            <div className='flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0'>
              <input
                type='text'
                placeholder='First Name*'
                className='p-2 bg-gray-100'
                required
              />
              <input
                type='text'
                placeholder='Last Name'
                className='p-2 bg-gray-100'
              />
            </div>
            <div className='flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0'>
              <input
                type='email'
                placeholder='Email*'
                className='p-2 bg-gray-100'
                required
              />
              <input
                type='tel'
                placeholder='Phone'
                className='p-2 bg-gray-100'
              />
            </div>
            <textarea
              className='w-full bg-gray-100'
              placeholder='Your Message*'
            ></textarea>
            <button type='submit' className='btn_1 w-full'>
              Submit
            </button>
            <p className='text-sm text-center text-neutral-800'>
              We will not spam or add you to any email lists
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
