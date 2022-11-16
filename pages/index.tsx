import IndexContainer from '../components/IndexContainer'
import { sanityClient } from '../sanity.js'
import Layout from '../components/Layout'

interface Props {
   data: any;
}
 
const Home = ({ data } : Props) => {
  return (
   <Layout post={null}>
      <IndexContainer data={data} />
   </Layout>
  )
}

export default Home

export const getServerSideProps = async()  => { 
    
  const query = `
  {  
    "break": *[_type == "post" && "break" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }} [0...4],
    "top": *[_type == "post" && "top" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }} [0...4],
    "spot": *[_type == "post" && "spot" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }} [0...4],
    "recent": *[_type == "post"] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body} [0...4],
    "lifestyle": *[_type == "post" && "lifestyle" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }} [0...4],
    "politics": *[_type == "post" && "politics" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }} [0...4],
    "tech": *[_type == "post" && "tech" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }} [0...4],
    "entertainment": *[_type == "post" && "entertainment" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }} [0...5],
    "sports": *[_type == "post" && "sports" in categories[]->slug.current] | order(_createdAt desc) {_id,title,author->{name,image},categories[]->{title},mainImage,slug,_createdAt,body[]{ ..., asset->{ ..., "_key": _id } }} [0...5],
  }`;

     

  const results = await sanityClient.fetch(query);
  return {
    props: {
      data: results,
    }
  }
}