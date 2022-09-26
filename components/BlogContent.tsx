import React from 'react'
import AdBox from './sidebar/AdBox'
import RecentPost from './sidebar/RecentPost'
import FeedCapsule from './category/FeedCapsule'
import ArticleHeading from './ArticleHeading'
import Socials from './Socials'
import ArticleContent from './ArticleContent'
import Spacer from './Spacer'
import { Post } from '../typings'
import { urlFor } from '../sanity'


interface Props {
  post: Post,
  recent: [Post]
} 

function BlogContent({post,recent}: Props) {
  //const { body,title,slug,mainImage,_createdAt,name } = post;
  if(!post) return null;
  return (
    <div className="w-full my-6">
        <div className="max-w-5xl mx-auto px-4 grid grid-col-1 md:grid-cols-3 lg:grid-col-4 gap-6 print:grid-cols-1">
            <div className="col-span-1 md:col-span-2">
                {/* Content */}
                <div className="">
                    <ArticleHeading title={post?.title} date={post?._createdAt} author={post?.name} />
                    <Socials title={post?.title} slug={post?.slug?.current} />
                    { post?.body && <ArticleContent mainImage={post?.mainImage} content={post?.body} />}
                    <Spacer />
                    <Socials title={post?.title} slug={post?.slug?.current} />
                    <Spacer />
                  
                </div>
            </div>
            <div className="col-span-1 h-full flex flex-col gap-6 print:hidden">
                {/* SideBar */}
                <AdBox />
                <RecentPost data={recent} />
            </div>
        </div>
    </div>
  )
}

export default BlogContent