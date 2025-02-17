import { NavLink, Outlet } from 'react-router-dom'
import { LogoSvg } from '../../assets/logo/logoSvg'
import { ChatIcon, CommunityIcon, FavIcon, LogOutIcon, MoviesIcon, SettingsIcon, TrendingIcon } from '../../assets/images/icons'
import CustomNavLink from '../navLinkComp/CustomNavLink'
import React from 'react'


export type Link = {
    name: string
    path: string
    icon: React.ReactNode
}

const Links: Link[] = [
    {
        name: "Home",
        path: "/",
        icon: <MoviesIcon className="" />
    },
    {
        name: "Favourite",
        path: "/favourite",
        icon: <FavIcon className="" />
    },
    {
        name: "Trending",
        path: "/trending",
        icon: <TrendingIcon className="" />
    },
]


const CommunityLinks: Link[] = [
    {
        name: "Community",
        path: "/community",
        icon: <CommunityIcon className="" />
    },
    {
        name: "Chat",
        path: "/chat",
        icon: <ChatIcon className="" />
    },
]


const SettingsLinks: Link[] = [
    {
        name: "Settings",
        path: "/settings",
        icon: <SettingsIcon className="" />
    },
    {
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
        <div className='flex h-screen'>
            <aside className='bg-[#21201E] text-white space-y-20 p-8 w-1/6'>
                <div className='flex items-center gap-3'>
                    <LogoSvg /> <p className=' text-xl font-bold font-Poppins'>WATCH</p>
                </div>
                <nav className='space-y-32'>
                    <div className='flex flex-col gap-6'>
                        {Links.map(link => {
                            return <CustomNavLink link={link} getClassName={getClassName} />
                        })}
                    </div>

                    <div className='flex flex-col gap-6'>
                        {CommunityLinks.map(link => {
                            return <CustomNavLink link={link} getClassName={getClassName} />
                        })}
                    </div>

                    <div className='flex flex-col gap-6'>
                        {SettingsLinks.map(link => {
                            return <CustomNavLink link={link} getClassName={getClassName} />
                        })}
                    </div>

                </nav>
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
