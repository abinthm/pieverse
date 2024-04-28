import { cn } from '@/lib/utils'
import React from 'react'

const Button = ({children, className}) => {
  return (
    <button className={cn('flex items-center gap-2 py-2 bg-primary text-secondary rounded-3xl font-bold hover:bg-primary/50 hover:text-white',className)}>
        {children}
    </button>
  )
}

export default Button
