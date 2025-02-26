import CustomButton from "../../components/button/CustomButton"
import ProfilePageCard from "../../components/ProfilePageCard/ProfilePageCard"
import { useAppSelector } from "../../utils/hooks/hooks"

function ProfilePage() {
    const { user } = useAppSelector(state => state.userRed)
    return (
        <div className='mt-20 ml-5 text-white font-Poppins'>
            <h1>Your Name is {user?.name}</h1>
            <h2>your email is {user?.email}</h2>
            <CustomButton onClick={() => console.log(user)}>user</CustomButton>
            <div className="flex gap-5 mt-5">
                {/* //fix the bg color */}
                <ProfilePageCard itemName='lists' link={'/lists'} item={user?.lists!} />
                <ProfilePageCard itemName='watchList' link={'/watchlist'} item={user?.lists!} />
                <ProfilePageCard itemName='ratedMovies' item={user?.ratedMovies!} />
                <ProfilePageCard itemName='reviwes' item={user?.reviwes!} />
            </div>
        </div>
    )
}

export default ProfilePage