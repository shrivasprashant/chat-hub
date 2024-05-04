import React from 'react'
import Sidebar from './Sidebar'
import MessageContsiner from './MessageContsiner'

const HomePage = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg bg-gray-400 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg  bg-opacity-5'>
      <Sidebar/>
      <MessageContsiner/>
    </div>
  )
}

export default HomePage