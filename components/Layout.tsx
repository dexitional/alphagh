import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Breadcrump from './Breadcrump'
import Head from 'next/head'
import { Post } from '../typings'

interface Props {
    children: any,
    post: Post | null
}


const data = {
  site_name:`AlphaGh.News`,
  site_desc:`Alphagh.news is the fastest growing news portal in Ghana. Get all breaking news updates, latest news headlines, local and world stories, showbiz, lifestyle etc.`,
  site_footnote:`© 2022 AlphaGh Media - Developed and managed by K-Soft GH.`,
  menu: [
    { title: 'Politics', slug:'politics', link: '/category/politics', visible: true },
    { title: 'Sports', slug:'sports', link: '/category/sports', visible: true },
    { title: 'Entertainment', slug:'showbiz', link: '/category/showbiz', visible: true },
    { title: 'Technology', slug:'tech', link: '/category/lifestyle', visible: true },
    { title: 'Lifestyle', slug:'lifestyle', link: '/category/lifestyle', visible: true },
  ],
  socials: {
    facebookUrl:`https://facebook.com/dexitional`,
    twitterUrl: ``,
    instagramUrl: ``,
    youtubeUrl: `https://youtube.com/watch?v=ft43423d`,
  },
  ads: [
    {
      type: 'image',
      path: `https://883921.smushcdn.com/2014168/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-15-at-6.36.34-AM-1.jpeg?lossy=1&strip=1&webp=1`,
      link: `https://google.com`,
      location:'header',
      visible: true,
    },
    {
      type: 'image',
      path: `https://883921.smushcdn.com/2014168/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-15-at-6.36.34-AM-1.jpeg?lossy=1&strip=1&webp=1`,
      link: `https://google.com`,
      location:'sidebar',
      visible: true,
    }
  ],
  
}

function Layout({children,post = null}: Props) {
  return (
    <div>
       <div className="flex flex-col">
          <Header data={data} post={post}/>
          <div>
             {children}
          </div>
          <Footer data={data} />
        </div>
    </div>
  )
}


export default Layout