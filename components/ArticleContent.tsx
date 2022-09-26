import React from 'react'
import PortableText from 'react-portable-text'
import { urlFor } from '../sanity'

interface Props {
  content: any,
  mainImage: any
}

function ArticleContent({content,mainImage}:Props) {
  return (
    <div className='flex flex-col gap-4 print:flex-inline'>
         { mainImage && 
         <div className="print:flex-1">
         { mainImage && <img src={urlFor(mainImage).url()} className="h-96 w-full object-cover object-top print:aspect-[16/5]" /> }
         </div>
         }

         { content && <article className="w-full prose lg:prose-xl">
            <PortableText 
                className={`text-black/80`}
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                content={content}
                serializers={{
                  h1: (props:any) => (
                    <h1 className="text-2xl font-bold my-3" {...props}/>
                  ),
                  h2: (props:any) => (
                    <h2 className="text-xl font-bold my-3" {...props}/>
                  ),
                  p: ({children}: any) => (
                    <p className="my-20">{children}</p>
                  ),
                 // image:  ({children}:any) => (
                  //  <div className="my-3">{children}</div>
                 // ),
                  li: ({children}: any) => (
                    <li className="ml-4 list-disc">{children}</li>
                  ),
                }}
            />
         </article> }
    </div>
   
  )
}

export default ArticleContent