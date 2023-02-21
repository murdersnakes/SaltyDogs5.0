import Link from 'next/link'
import React from 'react'
import Hero from './(components)/Hero'
import PopularArticles from './(components)/PopularArticles'

export default function page() {
  return (
    <>
     <Hero />
     <PopularArticles />
    </>
  )
}
