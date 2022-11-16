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
        <link rel="icon" href="/favicon.png" />
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
