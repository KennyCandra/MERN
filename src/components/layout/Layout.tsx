import { Outlet } from 'react-router-dom'
import { LogoSvg } from '../../assets/logo/logoSvg'
import { ChatIcon, CommunityIcon, FavIcon, LogOutIcon, MoviesIcon, SettingsIcon, TrendingIcon } from '../../assets/images/icons'
import CustomNavLink from '../navLinkComp/CustomNavLink'
import React from 'react'


export type Link = {
    name: string
    path: string
    icon: React.ReactNode
    id: number
}

const Links: Link[] = [
    {
        id: 1,
        name: "Home",
        path: "/",
        icon: <MoviesIcon className="" />
    },
    {
        id: 2,
        name: "Favourite",
        path: "/favourite",
        icon: <FavIcon className="" />
    },
    {
        id: 3,
        name: "Trending",
        path: "/trending",
        icon: <TrendingIcon className="" />
    },
]


const CommunityLinks: Link[] = [
    {
        id: 4,
        name: "Community",
        path: "/community",
        icon: <CommunityIcon className="" />
    },
    {
        id: 5,
        name: "Chat",
        path: "/chat",
        icon: <ChatIcon className="" />
    },
]


const SettingsLinks: Link[] = [
    {
        id: 6,
        name: "Settings",
        path: "/settings",
        icon: <SettingsIcon className="" />
    },
    {
        id: 7,
        name: "Logout",
        path: "/logout",
        icon: <LogOutIcon className="" />
    },
]


const getClassName = (isActive: boolean) => {
    return (isActive ? "text-white" : "text-white/50") + " flex items-center gap-5 font-Poppins font-bold"
}

function Layout() {
    return (
        <div className='flex'>
            <aside className='bg-[#21201E] text-white space-y-20 p-8 min-w-[274px] w-1/6 z-10 sticky h-screen top-0'>
                <div className='flex items-center gap-3'>
                    <LogoSvg /> <p className=' text-xl font-bold font-Poppins'>WATCH</p>
                </div>
                <nav className='space-y-32'>
                    <div className='flex flex-col gap-6'>
                        {Links.map((link) => {
                            return <CustomNavLink key={link.id} link={link} getClassName={getClassName} />
                        })}
                    </div>

                    <div className='flex flex-col gap-6'>
                        {CommunityLinks.map(link => {
                            return <CustomNavLink key={link.id} link={link} getClassName={getClassName} />
                        })}
                    </div>

                    <div className='flex flex-col gap-6'>
                        {SettingsLinks.map(link => {
                            return <CustomNavLink key={link.id} link={link} getClassName={getClassName} />
                        })}
                    </div>

                </nav>
            </aside>
            <main className='w-[83.33%]'>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
