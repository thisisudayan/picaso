import { Avatar, Button, Card, CardBody, Divider, Input } from '@nextui-org/react'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { selectConversation } from '../sidebar/sidebarSlice'

const Mainbar = () => {
    let type
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const inputRef = useRef(null)
    const bodyRef = useRef()
    const handleSendClick = () =>{
        const query = {
            question: true,
            body: e.target.value
        }

        const res = {
            question: false,
            body: e.target.value
        }
        setData([...data, query, res]);
        inputRef.current.value = ''
        console.log(data)
        bodyRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })  
    }

    
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
            console.log(data)
            bodyRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })            // console.log(bodyRef.scrollTop)
            // setData([...data, res])
            // console.log(data)
        



    }
    console.log(data)
    return (


        <div className='flex flex-col h-full'>
            <div className='p-3 flex items-center'>
            <Button isIconOnly color="primary" aria-label="Send" onClick={() => dispatch(selectConversation(null))}>
                    {/* <HeartIcon /> */}
                </Button>
                <h3 className='text-xl whitespace-nowrap overflow-hidden text-ellipsis'>This is AI Image generating apps</h3>
            </div>
            <Divider />
            <div className='overflow-auto h-full' ref={bodyRef}>
                <div className='flex flex-col flex-1 w-full gap-3 p-3'>

                    {
                        data && data.map((item, index) => (
                            <Card key={index} className={`${item.question ? 'ml-auto' : 'mr-auto'} max-w-[80%]`}>
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
                <Button isIconOnly color="primary" aria-label="Send" onClick={() => handleKeyEnter(inputRef.current.value)}>
                    {/* <HeartIcon /> */}
                </Button>
            </div>
        </div>

    )
}

export default Mainbar