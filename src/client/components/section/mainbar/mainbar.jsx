import React, { useEffect, useRef, useState } from 'react'
import { Avatar, Button, Card, CardBody, Divider, Image, Input, Select, SelectItem } from '@nextui-org/react'
import { useDispatch, useSelector } from 'react-redux'
import { selectConversation, setConversation, setResponseImageQuantity } from '../sidebar/sidebarSlice'
import { IoIosArrowRoundBack, IoIosSend } from "react-icons/io"
import { IoImageOutline } from "react-icons/io5";
import axios from 'axios';
import { CgAttachment } from 'react-icons/cg'

const key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const keys = [
    { key: 1, label: "1" },
    { key: 2, label: "2" },
    { key: 3, label: "3" },
    { key: 4, label: "4" },
    { key: 5, label: "5" },
    { key: 6, label: "6" },
    { key: 7, label: "7" },
    { key: 8, label: "8" },
    { key: 9, label: "9" },
];
const Mainbar = () => {
    const isDesktopMode = useSelector((state) => state.app.desktopMode);
    const conversationKey = useSelector((state) => state.sidebar.conversationKey)
    const conversations = useSelector((state) => state.sidebar.conversations)
    const responseImageQuantity = useSelector((state) => state.sidebar.responseImageQuantity)
    const filteredConversation = conversations.filter((c) => c._id === conversationKey) ?? null
    const selectedConversation = filteredConversation[0] ?? null
    const [inputValue, setInputValue] = useState("")

    const messages = selectedConversation?.messages ?? []
    const dispatch = useDispatch()
    const inputRef = useRef(null)
    const bodyRef = useRef(null)


    useEffect(()=>{
        inputRef.current.focus();
    },[conversationKey])

    const handleKeyEnter = (value) => {
        // inputRef.current.value = ""
        sendPrompt(value)
    }

    const sendPrompt = (body) => {
        if(!body){
            alert('write something')
        }
        const prompt = {
            id: conversationKey ?? null,
            attachments: [],
            question: true,
            body: body,
            imgqty: responseImageQuantity
        }
        axios.post("/v1/prompt", { prompt })
            .then((res) => {
                dispatch(setConversation(res.data))
                handleResetData()
            })
    }
    const handleResetData = () => {
        setTimeout(() => {
            inputRef.current.value = null;
            inputRef.current.focus()
            setInputValue("")
            bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
        }, 0);
    }
    const logReader = () => {
        selectedConversation
    }

    return (
        <div className='flex flex-col h-full'>
            <div className='p-3 flex items-center gap-2'>
                {
                    !isDesktopMode &&
                    <Button isIconOnly radius='full' size='sm' variant='light' aria-label="Back" onClick={() => dispatch(selectConversation(null))}>
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
                            <div key={item._id} className='flex flex-col'>
                                <div className={`${item.question ? 'ml-auto' : 'mr-auto'}  max-w-[80%] flex flex-col gap-3`}>
                                    {
                                        item.question &&
                                        <Card className={`${item.question && 'bg-primary-500 text-white'}`}>
                                            <CardBody>
                                                <p>{item.body}</p>
                                            </CardBody>
                                        </Card>
                                    }
                                </div>
                                <div className={`${item.question ? 'ml-auto' : 'mr-auto'} relative`}>
                                    {
                                        (item.attachments.length === 1) &&
                                        <Card radius='none'>
                                            <CardBody className='max-w-[225px] p-2'>
                                                {
                                                    item.attachments.map((image, idx) => (
                                                        <Card key={idx} radius='none'>
                                                            <CardBody className="overflow-visible p-0">
                                                                <Image
                                                                    className="w-[200px] object-cover"
                                                                    shadow="sm"
                                                                    radius='none'
                                                                    isBlurred
                                                                    width="100%"
                                                                    alt="NextUI hero Image"
                                                                    src={image}
                                                                />
                                                            </CardBody>
                                                        </Card>
                                                    ))
                                                }
                                            </CardBody>
                                        </Card>
                                    }
                                    {
                                        (item.attachments.length === 2) &&
                                        <Card radius='none'>
                                            <CardBody className='flex flex-row gap-2 max-w-[225px] p-2'>
                                                {
                                                    item.attachments.map((image, idx) => (
                                                        <Card key={idx} radius='none'>
                                                            <CardBody className="overflow-visible p-0">
                                                                <Image
                                                                    className="w-[100px] object-cover"
                                                                    shadow="sm"
                                                                    radius='none'
                                                                    isBlurred
                                                                    width="100%"
                                                                    alt="NextUI hero Image"
                                                                    src={image}
                                                                />
                                                            </CardBody>
                                                        </Card>
                                                    ))
                                                }
                                            </CardBody>
                                        </Card>
                                    }
                                    {
                                        (item.attachments.length === 3) &&
                                        <Card radius='none'>
                                            <CardBody className='flex flex-row flex-wrap gap-2 max-w-[225px] p-2'>
                                                {
                                                    item.attachments.map((image, idx) => (
                                                        <Card key={idx} radius='none'>
                                                            <CardBody className="overflow-visible p-0">
                                                                <Image
                                                                    className="w-[100px] object-cover"
                                                                    shadow="sm"
                                                                    radius="none"
                                                                    width="100%"
                                                                    isBlurred
                                                                    alt="NextUI hero Image"
                                                                    src={image}
                                                                />
                                                            </CardBody>
                                                        </Card>
                                                    ))
                                                }
                                            </CardBody>
                                        </Card>
                                    }
                                    {
                                        (item.attachments.length === 4) &&
                                        <Card radius='none'>
                                            <CardBody className='flex flex-row flex-wrap gap-2 max-w-[225px] p-2'>
                                                {
                                                    item.attachments.map((image, idx) => (
                                                        <Card key={idx} radius='none'>
                                                            <CardBody className="overflow-visible p-0">
                                                                <Image
                                                                    className="w-[100px] object-cover"
                                                                    shadow="sm"
                                                                    radius="none"
                                                                    width="100%"
                                                                    isBlurred
                                                                    alt="NextUI hero Image"
                                                                    src={image}
                                                                />
                                                            </CardBody>
                                                        </Card>
                                                    ))
                                                }
                                            </CardBody>
                                        </Card>
                                    }
                                    {
                                        (item.attachments.length > 4) &&
                                        <Card radius='none'>
                                            <CardBody className='flex flex-row flex-wrap gap-2 max-w-[225px] p-2'>
                                                {
                                                    item.attachments.map((image, idx) => {
                                                        if (idx >= 4) return
                                                        return (
                                                            <Card key={idx} radius='none'>
                                                                <CardBody className="overflow-visible p-0">
                                                                    <Image
                                                                        className="w-[100px] object-cover"
                                                                        shadow="sm"
                                                                        radius="none"
                                                                        width="100%"
                                                                        isBlurred
                                                                        alt="NextUI hero Image"
                                                                        src={image}
                                                                    />
                                                                </CardBody>
                                                            </Card>
                                                        )
                                                    })
                                                }
                                            </CardBody>
                                        </Card>
                                    }
                                    {
                                        item.attachments.length > 4 && <div className='absolute text-white text-2xl bottom-[20%] z-20 right-[20%]'>{item.attachments.length - 4}+</div>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Divider />
            <div className='flex flex-row gap-2 w-full p-3'>
                {/* <Button isIconOnly aria-label="Send" onClick={() => handleKeyEnter(inputRef.current.value)}>
                    <CgAttachment size={25} />
                </Button> */}
                <Select
                    className="max-w-[80px]"
                    defaultSelectedKeys={["1"]}
                    // label="Favorite Animal"
                    placeholder="Select an animal"
                    startContent={<IoImageOutline className='text-6xl' />}
                >
                    {keys.map((num) => (
                        <SelectItem onClick={() => dispatch(setResponseImageQuantity(num.key))} key={num.key}>{num.label}</SelectItem>
                    ))}
                </Select>
                <Input ref={inputRef} value={inputValue} onKeyDown={(e) => e.key === 'Enter' ? handleKeyEnter(e.target.value) : null} onChange={(e)=>setInputValue(e.target.value)} type="text" placeholder="What do you want to generate ?" />
                <Button isIconOnly aria-label="Send" onClick={() => handleKeyEnter(inputRef.current.value)}>
                    <IoIosSend size={25} />
                </Button>
            </div>
        </div>

    )
}

export default Mainbar