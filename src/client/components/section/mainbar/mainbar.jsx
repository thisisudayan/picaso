import React, { useRef, useState } from 'react'
import { Avatar, Button, Card, CardBody, Divider, Input } from '@nextui-org/react'
import { useDispatch, useSelector } from 'react-redux'
import { selectConversation } from '../sidebar/sidebarSlice'
import { IoIosArrowRoundBack, IoIosSend } from "react-icons/io"

const Mainbar = () => {
    const isDesktopMode = useSelector((state) => state.app.desktopMode)
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const inputRef = useRef(null)
    const bodyRef = useRef(null)

    const handleKeyEnter = (value) => {
        const query = {
            question: true,
            body: value
        }

        const res = {
            question: false,
            body: value
        }
        setData([...data, query, res])
        setTimeout(() => {
            bodyRef.current.scrollTop = bodyRef.current.scrollHeight
            inputRef.current.value = ''
          }, 0);
    }
    return (


        <div className='flex flex-col h-full'>
            <div className='p-3 flex items-center gap-2'>
                {
                    !isDesktopMode &&
                    <Button isIconOnly radius='full' size='sm' aria-label="Send" onClick={() => dispatch(selectConversation(null))}>
                        <IoIosArrowRoundBack size={25} />
                    </Button>
                }
                <h3 className='text-xl whitespace-nowrap overflow-hidden text-ellipsis'>Transform Words into Art</h3>
            </div>
            <Divider />
            <div className='overflow-y-auto h-full ' ref={bodyRef}>
                <div className='flex flex-col flex-1 w-full gap-3 p-3' >
                    {
                        data && data.map((item, index) => (
                            <Card key={index} className={`${item.question ? 'ml-auto' : 'mr-auto'} ${item.question && 'bg-primary-50'} max-w-[80%]`}>
                                <CardBody>
                                    <p>{item.body}</p>
                                </CardBody>
                            </Card>
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