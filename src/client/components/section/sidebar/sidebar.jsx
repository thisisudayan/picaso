import { Avatar, Badge, Button, Divider, Input, Listbox, ListboxItem, Switch } from '@nextui-org/react'
import React, { useState } from 'react'
// import SearchIcon from '@mui/icons-material/Search';
import { IoMdSearch } from "react-icons/io";
import ChatConversation from '../../chatconversation';
import Body from '../../body/body';
import { LiaGhostSolid } from 'react-icons/lia';
import { CgDarkMode } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { tootgleTheme } from "../sectionSlice";
import { selectConversation } from './sidebarSlice';

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
    const selectedConversation = useSelector((state)=>state.sidebar.conversationKey)

    // const [selectedKeys, setSelectedKeys] = useState(null);
    const dispatch = useDispatch();

    return (
        <>
            <div className=''>
                <div className='p-3 flex flex-row justify-between items-center'>

                    <span className='text-sm whitespace-nowrap overflow-hidden text-ellipsis'>Picaso</span>
                    <Switch
                        onClick={() => dispatch(tootgleTheme())}
                        defaultSelected
                        size="lg"
                        color="primary"
                        thumbIcon={({ isSelected, className }) =>
                            isSelected ? (
                                <LiaGhostSolid className={className} />
                            ) : (
                                <CgDarkMode className={className} />
                            )
                        }
                    >
                    </Switch>
                </div>

                <Divider />

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
            </div >



            <div>
                <Listbox
                    className='p-0'
                    color="primary"
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedConversation}
                    onSelectionChange={(e)=>dispatch(selectConversation(e.currentKey))}

                >
                    {
                        data.map((item, index) => (
                            <ListboxItem showDivider className='gap-0 rounded-none p-3' key={index}>
                                <p>{item.message}</p>
                            </ListboxItem>
                        ))
                    }
                </Listbox>

            </div>


        </>
    )
}

export default Sidebar