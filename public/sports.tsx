import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrump from '../components/Breadcrump'
import BlogContent from '../components/BlogContent'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'
import Layout from '../components/Layout'


interface Props {
  data: any,
  post: Post,
  recent: [Post]
}

const Home = ({ post,recent }: Props) => {
   
  return (
    <>
      <Head>
        <title>Dailyupdategh.com | Category</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="HandheldFriendly" content="true" />
        <meta property="og:title" content={post?.title} />
        <meta property="og:image" content={urlFor(post?.mainImage).width(600).url()} />
        <meta property="og:type" content="profile.image" />
        <meta property="og:url" content={`https://dailyupdategh.com/${post?.slug.current}`} />
      </Head>
      
      <Layout post={post}>
        <Breadcrump post={post} />
        <BlogContent post={post} recent={recent}/>
      </Layout>
    </>
  )
}


interface Props {
  slug: string,
  context: any
}

const query = `
{
  "post": *[_type == "post" && slug.current == $slug][0]{title,slug,"name": author->name,"avatar": author->image,"categories": categories[]->title,mainImage,_createdAt,body[]{ ..., asset->{ ..., "_key": _id }} },
  "recent": *[_type == "post"] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id }} } [0...9]
}
  `



export async function getServerSideProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const result = await sanityClient.fetch(query, { slug })
  return {
    props: {
      post: result?.post,
      recent: result?.recent
    }
  }
}

export default Home
