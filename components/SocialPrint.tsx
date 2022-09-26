import Link from 'next/link'
import React, { MouseEventHandler } from 'react'
import { IconType } from 'react-icons'

interface Props {
  Icon: IconType, 
  className: string,
}

function SocialPrint ({ Icon,className } : Props) {

  const print = () => {
    window.print();
  }

  return (
   <button onClick={print}><Icon className={className}/></button>
  )
}

export default SocialPrint