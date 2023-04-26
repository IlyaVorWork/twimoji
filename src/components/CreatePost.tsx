import { useUser } from "@clerk/nextjs";
import { NextComponentType } from "next";
import Image from "next/image";
import { useState } from "react";
import { api } from "~/utils/api";

const CreatePost: NextComponentType = () => {
    const {user} = useUser();
    console.log(user)
    const [content, setContent] = useState("");

    if (!user) return null

    return (
        <div className="flex gap-3 w-full">
            <img src={user.profileImageUrl} alt="userAvatar" className="w-16 h-16 rounded-full"/>
            <input 
                type="text"
                placeholder="Type some emojis!" 
                className="bg-transparent grow outline-none" 
                onInput={(e) => setContent(e.currentTarget.value)}
                value={content}
            />
            <button /*onClick={() => mutate({content, authorId: user.id})}*/ className="bg-white text-black w-32 h-8">Send</button>
        </div>
    )
}

export default CreatePost