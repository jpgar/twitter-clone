import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid"
import { BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, InboxIcon, UserIcon } from "@heroicons/react/outline"

export default function Sidebar() {
    return (
        <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">

            <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
                <Image width="50" height="50" src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png"></Image>

            </div>
            <div className="mt-4 mb-2.5 xl:items-start">
                <SidebarMenuItem text="Home" Icon={HomeIcon} active />
                <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
                <SidebarMenuItem text="Notifications" Icon={BellIcon} />
                <SidebarMenuItem text="Messages" Icon={InboxIcon} />
                <SidebarMenuItem text="Bookmark" Icon={BookmarkIcon} />
                <SidebarMenuItem text="List" Icon={ClipboardIcon} />
                <SidebarMenuItem text="Profile" Icon={UserIcon} />
                <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
            </div>
            <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>
            <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto ">

                <img src="https://pbs.twimg.com/profile_images/1275011169628160000/PvZw734h_400x400.jpg" alt="user-img" className="h-10 w-10 rounded-full xl:mr-2" />
                <div className="leading-5 hidden xl:inline">
                    <h4 className="font-bold">Juan</h4>
                    <p className="text-gray-500">@Juangarc</p>
                </div>
                <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
            </div>
        </div>
    )
}