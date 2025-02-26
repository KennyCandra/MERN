import { Link } from "react-router-dom";

interface ProfilePageProps {
    item: string[];
    itemName: string;
    link?: string
}

function ProfilePageCard({ item, itemName, link }: ProfilePageProps) {
    return (
        <Link to={link ? link : ''} key={item[0]} className={'w-[150px] h-[150px] border-gray relative text-black bg-[#6100C2] rounded-lg flex justify-center'}>
            <h1 className="text-4xl font-semibold pt-10">{item.length}</h1>
            <div className="absolute bottom-0 bg-gradient-white py-2 px-4 font-bold rounded-t-lg z-10 w-full">
                {itemName}
            </div>
        </Link>
    )
}

export default ProfilePageCard
