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
        <title>Alphahour.news | Category</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="HandheldFriendly" content="true" />
        <meta property="og:title" content={post?.title} />
        <meta property="og:image" content={post?.mainImage && urlFor(post?.mainImage).width(600).url()} />
        <meta property="og:type" content="profile.image" />
        <meta property="og:url" content={`https://alphahour.news/${post?.slug.current}`} />
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
  "post": *[_type == "post" && slug.current == $slug][0]{title,slug,"name": author->name,"avatar": author->image,"categories": categories[]->{title,slug},mainImage,_createdAt,body[]{ ..., asset->{ ..., "_key": _id }} },
  "recent": *[_type == "post"] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id }} } [0...9]
}
  `

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug: Props) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const result = await sanityClient.fetch(query, { slug })
  return {
    props: {
      post: result?.post,
      recent: result?.recent
    },
    revalidate: 600,
  }
}

export default Home
