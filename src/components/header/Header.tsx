import { NotificationIcon, ProfileIcon, SearchIcon } from "../../assets/images/icons"
import { Link } from 'react-router-dom'
import userStore from "../../zustand/UserStore/UserStore"

function Header() {

    const { name } = userStore()

    const variables = [
        {
            id: 1,
            name: 'Movies',
            path: '/movies'
        },
        {
            id: 2,
            name: 'Series',
            path: '/movies'
        },
        {
            id: 3,
            name: 'Documentaries',
            path: '/movies'
        }
    ]

    return (
        <header className="bg-primary z-10 absolute w-full text-white">
            <div className="flex justify-between max-w-[1024px] mx-auto self-center py-4">
                <div className="space-x-8">
                    {variables.map(link => {
                        return <Link key={link.id} to={link.path} className="font-medium font-Poppins text-lg">{link.name}</Link>
                    })}
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <SearchIcon className="size-5" />
                    </div>
                    <NotificationIcon className="size-5" />
                    <div className="flex items-center gap-2">
                        <ProfileIcon className="size-6" />
                        <Link to={'/profile'} className='font-medium font-Poppins text-lg'>{name}</Link>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header
