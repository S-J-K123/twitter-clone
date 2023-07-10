import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@component/styles/Home.module.css'
import SideBar from '@component/components/SideBar'
import PostsFeed from '@component/components/PostFeed'
import Trending from '@component/components/Trending'
import BottomBanner from '@component/components/BottomBanner'
import { useSelector } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const username = useSelector(state => state.user.username)
  return (
    <div>
          <div className='bg-black  min-h-screen text-[#E7E9EA] max-w-[1400px] mx-auto flex'>
    <SideBar/>
    <PostsFeed/>
    <Trending/>
    </div>
  { !username && <BottomBanner/>}
    </div>

  )
}
