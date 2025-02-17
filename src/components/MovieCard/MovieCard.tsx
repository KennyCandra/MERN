import { HugIcon } from "../../assets/images/icons"

function MovieCard() {
    return (
        <div className='aspect-[0.81/1] w-[255px] border-white border-2 rounded-lg shadow-lg font-Poppins text-black mt-60 relative select-none'>
            <HugIcon className="absolute top-0 right-0 size-14 p-2 cursor-pointer active:scale-95 transition-all duration-300" />
            <img src={"./images/background.jpg"} alt="image-bg" className="aspect-[0.81/1] w-[255px] overflow-hidden rounded-lg" />
            <div className="bottom-0 left-0 bg-gradient-white absolute py-2 px-4 opacity-95 rounded-t-lg z-10 w-full">
                <h1 className="text-2xl font-semibold">First movie</h1>
                <span className="text-sm font-normal">2024 | Action, Adventure</span>
            </div>
        </div>
    )
}

export default MovieCard