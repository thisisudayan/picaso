
import { Avatar, Badge } from '@nextui-org/react'
import React from 'react'

const ChatConversation = ({data}) => {
const {name,avatarURL,userName,time,message} = data
console.log("sdfsdf")
    return (
        <>
            <div className="px-4 py-2">
                <div className='flex justify-between'>
                    <div className='flex gap-4 mb-2'>
                        <Badge content="" color="primary" shape="circle" placement='bottom-right'>
                            <Avatar
                                isBordered
                                radius="full"
                                src={avatarURL}
                            />
                        </Badge>
                        <div>
                            <h3>{name}</h3>
                            <p>{userName}</p>
                        </div>
                    </div>
                    <p>{time} mins ago</p>
                </div>
                <p className='text-wrap'>{message}</p>
            </div>
        </>
    )
}

export default ChatConversation