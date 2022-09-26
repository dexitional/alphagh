import React from 'react'
import { Post } from '../../typings'
import AdBox from '../sidebar/AdBox'
import RecentPost from '../sidebar/RecentPost'
import FeedCapsule from './FeedCapsule'

interface Props {
  data: [Post]
}

function CategoryContent({data}: Props) {
console.log(data)
  return (
    <div className="w-full my-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2">
                {/* Content */}
                <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                    <FeedCapsule data={data} />
                </div>
            </div>
            <div className="col-span-1 h-full flex flex-col gap-6">
                {/* SideBar */}
                <AdBox />
                <RecentPost data={data} />
            </div>
        </div>
    </div>
  )
}

export default CategoryContent