import React from 'react'
import { Group, Panel } from 'react-resizable-panels'
import MusicPlayer from '../../../player/ui/pages/MusicPlayer'
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <div className='h-screen bg-black text-white'>
        <Navbar/>
        <div className='h-[85%]'>
        <Group className='gap-2 bg-black '>
            <Panel maxSize={'23%'} minSize={'16%'} className='bg-[#121212] p-3'>Left</Panel>
            <Panel className='bg-[#121212] p-3' >Center</Panel>
            <Panel maxSize={'23%'} minSize={'16%'} className='bg-[#121212] p-3'>Right</Panel>
        </Group>
        </div>
        <MusicPlayer/>
    </div>
  )
}

export default HomePage
