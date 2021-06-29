import {useSession} from "next-auth/client";

const ViewerInfo = () => {
    const [session] = useSession();
    return(
        <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
            <div className="flex-shrink-0 relative ml-4">
                <button type="button"
                        className="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className="sr-only">Logout</span>
                    <img
                        className="h-8 w-8 rounded-full"
                        //src={session?.user?.image}
                        alt={`${session?.user?.name} avatar`}
                    />
                </button>
            </div>
            <div className="flex-shrink-0 relative ml-4">
                <p className="text-white">{session?.user?.name}</p>
            </div>
        </div>
    )
}


export default ViewerInfo;