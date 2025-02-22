import { NotificationIcon, ProfileIcon, SearchIcon } from "../../assets/images/icons"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/rootStore'

function Header() {
    const user = useSelector((state: RootState) => state.userRed.user)

    const variables = [
        {
            name: 'Movies',
            path: '/movies'
        },
        {
            name: 'Series',
            path: '/movies'
        },
        {
            name: 'Documentaries',
            path: '/movies'
        }
    ]

    return (
        <header className="bg-primary z-10 absolute w-full text-white">
            <div className="flex justify-between max-w-[1024px] mx-auto self-center py-4">
                <div className="space-x-8">
                    {variables.map(link => {
                        return <Link to={link.path} className="font-medium font-Poppins text-lg">{link.name}</Link>
                    })}
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <SearchIcon className="size-5" />
                    </div>
                    <NotificationIcon className="size-5" />
                    <div className="flex items-center gap-2">
                        <ProfileIcon className="size-6" />
                        <p className='font-medium font-Poppins text-lg'>{user?.name}</p>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header
