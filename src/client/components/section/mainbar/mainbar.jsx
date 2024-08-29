import React, { useEffect, useRef, useState } from 'react'
import { Avatar, Button, Card, CardBody, Divider, Image, Input, Select, SelectItem, Skeleton,useDisclosure } from '@nextui-org/react'
import { useDispatch, useSelector } from 'react-redux'
import { selectConversation, setConversation, setResponseImageQuantity, setToggleNav } from '../sidebar/sidebarSlice'
import { IoIosArrowRoundBack, IoIosSend } from "react-icons/io"
import { IoImageOutline } from "react-icons/io5";
import axios from 'axios';
import { CgAttachment } from 'react-icons/cg'
import ImageCard from '../../imageCard/imageCard'
import Modal from '../../modal/modal'
import ModalView from '../../modal/modal'

const key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const keys = [
    { key: 1, label: "1" },
    { key: 2, label: "2" },
    { key: 3, label: "3" },
    { key: 4, label: "4" },
    { key: 5, label: "5" },
    { key: 6, label: "6" },
];
const Mainbar = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const isDesktopMode = useSelector((state) => state.app.desktopMode);
    const conversationKey = useSelector((state) => state.sidebar.conversationKey)
    const conversations = useSelector((state) => state.sidebar.conversations)
    const responseImageQuantity = useSelector((state) => state.sidebar.responseImageQuantity)
    const filteredConversation = conversations.filter((c) => c._id === conversationKey) ?? null
    const selectedConversation = filteredConversation[0] ?? null
    const [inputValue, setInputValue] = useState("")
    const [loading, setLoading] = useState(true)

    const messages = selectedConversation?.messages ?? []
    const dispatch = useDispatch()
    const inputRef = useRef(null)
    const bodyRef = useRef(null)


    useEffect(() => {
        inputRef.current.focus();
        setLoading(false)
    }, [conversationKey])

    const handleKeyEnter = (value) => {
        // inputRef.current.value = ""
        sendPrompt(value)
    }

    const sendPrompt = (body) => {
        if (!body.trim()) {
            return
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
                setLoading(false)
            })
            // .finally(() => {
               
            // })
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
        console.log(isDesktopMode)
    }
    const handleClick = (id) => {
        alert(id);
    };

    return (
        <div className='flex flex-col h-full'>
            <div className='p-3 flex items-center gap-2'>
                {
                    !isDesktopMode &&
                    <Button isIconOnly radius='full' size='sm' variant='light' aria-label="Back" onClick={() => {
                        dispatch(selectConversation(null))
                        if (!isDesktopMode) dispatch(setToggleNav(1))

                    }}>
                        <IoIosArrowRoundBack size={25} />
                    </Button>
                }
                <h3 className='text-xl whitespace-nowrap overflow-hidden text-ellipsis'>{selectedConversation?.title ?? 'New Chat'}</h3>
            </div>
            <Divider />
            {/* <button onClick={logReader}>click</button> */}
            {/* <Button onPress={onOpen}>Open Modal</Button> */}
            <div className='overflow-y-auto h-full ' ref={bodyRef}>
                <div className='flex flex-col flex-1 w-full gap-3 p-3' >
                    {
                        messages && messages.map((item) => {
                            const renderImageCards = () => {
                                switch (item.attachments.length) {
                                    case 1:
                                        return <ImageCard item={item} loading={loading} imageqty={1} />
                                    case 2:
                                        return <ImageCard item={item} loading={loading} imageqty={2} />
                                    case 3:
                                        return <ImageCard item={item} loading={loading} imageqty={3} />
                                    case 4:
                                        return <ImageCard item={item} loading={loading} imageqty={4} />
                                    case 5:
                                        return <ImageCard item={item} loading={loading} imageqty={5} />
                                    case 6:
                                        return <ImageCard item={item} loading={loading} imageqty={6} />
                                    default:
                                        break;
                                }
                            }
                            return (
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
                                    <div onClick={() => handleClick(item._id)} className={`${item.question ? 'ml-auto' : 'mr-auto'} relative`}>
                                        {
                                            renderImageCards()
                                        }
                                        {
                                            item.attachments.length > 4 && <div className='absolute text-white text-2xl bottom-[20%] z-20 right-[20%]'>{item.attachments.length - 4}+</div>
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Divider />
            <div className='flex flex-row gap-2 w-full p-3'>
                <Select
                    className="max-w-[80px]"
                    defaultSelectedKeys={["1"]}
                    placeholder="Select an animal"
                    startContent={<IoImageOutline className='text-6xl' />}
                >
                    {keys.map((num) => (
                        <SelectItem onClick={() => dispatch(setResponseImageQuantity(num.key))} key={num.key}>{num.label}</SelectItem>
                    ))}
                </Select>
                <Input ref={inputRef} value={inputValue} onKeyDown={(e) => e.key === 'Enter' ? handleKeyEnter(e.target.value) : null} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="What do you want to generate ?" />
                <Button isIconOnly aria-label="Send" onClick={() => handleKeyEnter(inputRef.current.value)}>
                    <IoIosSend size={25} />
                </Button>
            </div>
            <ModalView isOpen={isOpen} onOpenChange={onOpenChange}/>
        </div>

    )
}

export default Mainbar