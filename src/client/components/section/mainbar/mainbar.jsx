import { Avatar, Card, CardBody, Input } from '@nextui-org/react'
import React, { useRef, useState } from 'react'

const Mainbar = () => {
    const [data, setData] = useState([])
    const inputRef = useRef(null)
    const handleKeyEnter = (e) => {


        if (e.key === 'Enter') {

            const splitArr = e.target.value.split(":")

            // setData([...data, e.target.value])
            setData([...data, splitArr[1]])
        }



    }
    console.log(data)
    return (
        <>

            <div className='flex-grow'>
                <div className=''>
                    
                    <div className='flex justify-between'>
                        <div className='flex flex-col justify-end items-start gap-3 w-6/12'>
                            {
                                data && data.map((item, index) => (
                                    <Card key={index} style={{ maxWidth: '50%' }}>
                                        <CardBody>
                                            <p>{item}</p>
                                        </CardBody>
                                    </Card>
                                ))
                            }
                        </div>
                        <div className='flex flex-col justify-end items-end gap-3 w-6/12'>
                            {
                                data && data.map((item, index) => (
                                    <Card key={index} style={{ maxWidth: '50%' }}>
                                        <CardBody>
                                            <p>{item}</p>
                                        </CardBody>
                                    </Card>
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex gap-2 justify-center items-center'>
                        <div>
                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="lg" className='' />
                        </div>
                        <Input ref={inputRef} onKeyDown={handleKeyEnter} type="email" placeholder="What do you want to generate ?" />
                        <div>
                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="lg" className='' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mainbar