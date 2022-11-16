import Head from 'next/head'
import Features from '../../components/Features'
import CategoryContent from '../../components/category/CategoryContent'
import { sanityClient } from '../../sanity'
import { Post } from '../../typings'
import Layout from '../../components/Layout'

interface Props {
  data: any,
  posts: [Post],
  features: [Post],
}


const Home = ({posts,features}: Props) => {

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
      </Head>
     <Layout post={null}>
      <Features data={features} />
      <CategoryContent data={posts}/>
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
  "post": *[_type == "post" && $slug in categories[]->slug.current] | order(_id desc) {title,slug,"name": author->name,"avatar": author->image,"categories": categories[]->title,mainImage,_createdAt,body[]{ ..., asset->{ ..., "_key": _id }} }[0..9],
  "feature": *[_type == "post" && $slug in categories[]->slug.current] | order(_id desc) {title,slug,"name": author->name,"avatar": author->image,"categories": categories[]->title,mainImage,_createdAt,body[]{ ..., asset->{ ..., "_key": _id }} }[0..4],
}
`

export async function getServerSideProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const result = await sanityClient.fetch(query, { slug })
  return {
    props: {
      posts: result?.post,
      features: result?.feature
    }
  }
}



export default Home
