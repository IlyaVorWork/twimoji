import { useUser } from "@clerk/nextjs";
import { NextComponentType } from "next";
import Image from "next/image";

const CreatePost: NextComponentType = () => {
    const {user} = useUser();

    if (!user) return null

    return (
        <div className="flex gap-3 w-full">
            <Image src={user.profileImageUrl} alt="userAvatar" className="w-16 h-16 rounded-full"/>
            <input placeholder="Type some emojis!" className="bg-transparent grow outline-none"/>
        </div>
    )
}

export default CreatePost