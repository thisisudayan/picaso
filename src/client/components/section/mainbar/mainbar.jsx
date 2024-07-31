import React, { useRef } from 'react'
import { Avatar, Button, Card, CardBody, Divider, Image, Input } from '@nextui-org/react'
import { useDispatch, useSelector } from 'react-redux'
import { selectConversation, setConversation } from '../sidebar/sidebarSlice'
import { IoIosArrowRoundBack, IoIosSend } from "react-icons/io"
import axios from 'axios';

const Mainbar = () => {
    const isDesktopMode = useSelector((state) => state.app.desktopMode);
    const conversationKey = useSelector((state) => state.sidebar.conversationKey)
    const conversations = useSelector((state) => state.sidebar.conversations)
    const filteredConversation = conversations.filter((c) => c.id === conversationKey) ?? null
    const selectedConversation = filteredConversation[0] ?? null
    const messages = selectedConversation?.messages ?? []
    const dispatch = useDispatch()
    const inputRef = useRef(null)
    const bodyRef = useRef(null)

    const handleKeyEnter = (value) => {
        sendPrompt(value)
    }

    const sendPrompt = (body) => {
        const prompt = {
            conversation: selectedConversation?.id,
            question: true,
            body: body
        }
        axios.post("/v1/prompt", { prompt })
            .then((res) => {
                dispatch(setConversation(res.data))
            })
    }

    const logReader = () => {
        console.log(messages)
    }

    return (

// fgrttthth
        <div className='flex flex-col h-full'>
            <div className='p-3 flex items-center gap-2'>
                {
                    !isDesktopMode &&
                    <Button isIconOnly radius='full' size='sm' aria-label="Send" onClick={() => dispatch(selectConversation(null))}>
                        <IoIosArrowRoundBack size={25} />
                    </Button>
                }
                <h3 className='text-xl whitespace-nowrap overflow-hidden text-ellipsis'>{selectedConversation?.title ?? 'New Chat'}</h3>
            </div>
            <Divider />
            {/* <button onClick={logReader}>click</button> */}
            <div className='overflow-y-auto h-full ' ref={bodyRef}>
                <div className='flex flex-col flex-1 w-full gap-3 p-3' >
                    {
                        messages && messages.map((item) => (
                            <>
                                <div key={item.id} className={`${item.question ? 'ml-auto' : 'mr-auto'}  max-w-[80%] flex flex-col gap-3`}>
                                    <Card className={`${item.question && 'bg-primary-500 text-white'}`}>
                                        <CardBody>
                                            <p>{item.body}</p>
                                        </CardBody>
                                    </Card>
                                    {
                                        (item.attachments.length!==0) &&
                                        <Card className='w-[235px]'>
                                            <CardBody className={`p-3 relative flex gap-2
                                            ${item.attachments.length >= 1 && 'flex-row'}
                                            ${item.attachments.length >= 2 && 'flex-wrap'}
                                            `}

                                            >
                                                {
                                                    (item.attachments.length > 2 || item.attachments.length <= 4) && item.attachments.map((image, idx) => {

                                                        if (idx >= 4) return

                                                        return (
                                                            <div key={item.id} className='blur-[2px]'>
                                                                <Image
                                                                    width={100}
                                                                    alt="NextUI hero Image"
                                                                    src={image}
                                                                />
                                                            </div>
                                                        )
                                                    })
                                                }
                                                {
                                                    item.attachments.length > 4 &&
                                                    <>
                                                        <div className='absolute text-white text-2xl bottom-[20%] z-20 right-[20%]'>{item.attachments.length - 4}+</div>
                                                    </>
                                                }
                                            </CardBody>
                                        </Card>
                                    }

                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
            <Divider />
            <div className='flex flex-row gap-2 w-full p-3'>
                <div>
                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="md" className='' />
                </div>
                <Input ref={inputRef} onKeyDown={(e) => e.key === 'Enter' ? handleKeyEnter(e.target.value) : null} type="email" placeholder="What do you want to generate ?" />
                <Button isIconOnly aria-label="Send" onClick={() => handleKeyEnter(inputRef.current.value)}>
                    <IoIosSend size={25} />
                </Button>
            </div>
        </div>

    )
}

export default Mainbar