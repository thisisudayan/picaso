import React, { useEffect, useState } from "react";
import { Button, Divider, Input, Listbox, ListboxItem, ScrollShadow, Switch } from '@nextui-org/react'
import { useDispatch, useSelector } from 'react-redux';
import { tootgleTheme } from "../sectionSlice";
import { selectConversation, setAllConversations, setConversation, setToggleNav } from './sidebarSlice';
import { MdDarkMode, MdOutlineDarkMode, MdAddComment } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import axios from "axios";


const Sidebar = () => {
    const [searchText, setSearchText] = useState("")
    const conversations = useSelector((state) => state.sidebar.conversations)
    const isDesktopMode = useSelector((state) => state.app.desktopMode)
    const dispatch = useDispatch();
    const handleSearch = (event) => {
        setSearchText(event.target.value);
    };

    const filteredItems = conversations.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    useEffect(() => {
        axios.get('http://localhost:3000/v1/conversations')
            .then((res) => {
                dispatch(setAllConversations(res.data))
            })
    }, [])
    return (
        <div className='h-full'>
            <div className='p-3 flex flex-row justify-between items-center'>
                <span className='text-xl whitespace-nowrap overflow-hidden text-ellipsis'>Picaso</span>
                <div className='flex items-center gap-2'>
                    <Button isIconOnly radius='full' size='sm' variant="light" onClick={() => {
                        dispatch(selectConversation(null))
                        if (!isDesktopMode) dispatch(setToggleNav(2))
                    }}>
                        <MdAddComment size={15} />
                    </Button>
                    <Switch
                        onClick={() => dispatch(tootgleTheme())}
                        defaultSelected
                        size="sm"
                        color='secondary'
                        thumbIcon={({ isSelected, className }) =>
                            isSelected ? (
                                <MdOutlineDarkMode className={className} />
                            ) : (
                                <MdDarkMode className={className} />
                            )
                        }
                    >
                    </Switch>
                </div>
            </div>
            <Divider />
            <Input
                className='my-3 w-11/12 mx-auto'
                placeholder="Search"
                value={searchText}
                onChange={handleSearch}
                startContent={
                    <IoMdSearch className="text-2xl text-default-400 pointer-events-none" />
                }
            />
            <Divider />
            <ScrollShadow hideScrollBar className="h-[400px]">
                <Listbox

                    className='p-0'
                    aria-label="Single selection example"
                    variant="flat"
                    selectionMode='single'
                    onSelectionChange={(e) => {
                        dispatch(selectConversation(e.currentKey))
                        if (!isDesktopMode) dispatch(setToggleNav(2))
                        else dispatch(setToggleNav(3))
                        console.log(e.currentKey)
                    }
                    }

                >
                    {
                        filteredItems ?
                            filteredItems.map((item, index) => (
                                <ListboxItem textValue={item.title} showDivider className='gap-0 rounded-none p-3 m-0' key={item._id}>
                                    <p className='whitespace-nowrap overflow-hidden text-ellipsis'>{item.title}</p>
                                </ListboxItem>
                            ))
                            :
                            conversations.map((item, index) => (
                                <ListboxItem textValue={item.title} showDivider className='gap-0 rounded-none p-3 m-0' key={item._id}>
                                    <p className='whitespace-nowrap overflow-hidden text-ellipsis'>{item.title}</p>
                                </ListboxItem>
                            ))

                    }
                </Listbox>
            </ScrollShadow>
        </div>
    )
}
export default Sidebar