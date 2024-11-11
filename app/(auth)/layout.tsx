
import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='flex flex-col h-full items-center justify-center'>
        {children}
    </div>
  )
}

export default layout