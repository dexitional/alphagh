import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'

interface Props {
  Icon: IconType, 
  className: string,
  link: string
}

function SocialIcon ({ Icon,className,link } : Props) {
  return (
   <Link href={link}>
      <a className="">
         <Icon className={className}/>
      </a>
    </Link>
  )
}

export default SocialIcon