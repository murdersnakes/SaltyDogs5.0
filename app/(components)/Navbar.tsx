import Link from "next/link";
import React from "react";
import { BiAlignJustify, BiPhoneOutgoing, BiCube } from "react-icons/bi";

export default function Navbar() {
  return (
    <div className='border-b shadow-sm'>
      <div className='cont'>
        <nav className='flex items-center justify-between py-2'>
          <Link
            href='/'
            className='flex items-center space-x-1 h4 px-3 py-2 rounded hover:bg-neutral-200'
          >
            <BiCube />
            <span>SaltyDogs</span>
          </Link>
          <ul className='flex items-center space-x-6'>
            <li>
              <Link
                href='/blog'
                className='flex items-center space-x-1 h4 px-3 py-2 rounded hover:bg-neutral-100'
              >
                <BiAlignJustify />
                <span>Blog</span>
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className='flex items-center space-x-1 h4 px-3 py-2 rounded hover:bg-neutral-100'
              >
                <BiPhoneOutgoing />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
