import Link from "next/link";
import React from "react";
import { BiCube } from "react-icons/bi";

export default function Footer() {
  return (
    <div className='border-t'>
      <div className='cont'>
        <div className='flex items-center justify-between py-2'>
          <Link
            href='/'
            className='flex items-center space-x-1 h4 px-3 py-2 rounded hover:bg-neutral-200'
          >
            <BiCube />
            <span>SaltyDogs</span>
          </Link>
          <p className='p3'>
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
