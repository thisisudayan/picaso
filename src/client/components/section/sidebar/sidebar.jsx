import { Avatar, Badge, Input, Listbox, ListboxItem } from '@nextui-org/react'
import React, { useState } from 'react'
// import SearchIcon from '@mui/icons-material/Search';
import { IoMdSearch } from "react-icons/io";
import ChatConversation from '../../chatconversation';
import Body from '../../body/body';

const data = [
    {
        
        message: "Hi Udayan this is newly make. check it out..!"
    },
    {
        
        message: "Udayan agrabad ai tara"
    },
    {
        
        message: "Bhai deshe ashlam"
    },
    {
        
        message: "Udayan ! agrabad darai achi. ekhon ber how!"
    },

]
const messageLength = data.length

const Sidebar = () => {

    const [selectedKeys, setSelectedKeys] = useState(0);

    return (
        <>
            {/* <div className='mx-2'> */}

            <div className='p-4'>

                <div className='mb-4'>
                    <Badge content={data.length} color="primary" shape="circle" placement='top-right'>
                        <h1 className='mr-6'>Message</h1>
                    </Badge>
                </div>

                <Input
                    classNames={{
                        inputWrapper: 'rounded-sm bg-[primary] border-1 border-[primary]',
                    }}
                    className='my-5'
                    placeholder="Search"
                    startContent={
                        <IoMdSearch className="text-2xl text-default-400 pointer-events-none" />
                    }
                />
            </div>



            <div>
                <Listbox
                    className='p-0'
                    color="primary"
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                    
                >
                    {
                        data.map((item, index) => (
                            <ListboxItem className='gap-0 rounded-none p-3 border-b-[.01px]' key={index}>
                                <p>{item.message}</p>
                            </ListboxItem>
                        ))
                    }
                </Listbox>

            </div>
            {/* </div> */}
            <Body/>

        </>
    )
}

export default Sidebar