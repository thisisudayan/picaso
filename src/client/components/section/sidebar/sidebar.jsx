import { Divider, Input, Listbox, ListboxItem, Switch } from '@nextui-org/react'
import { useDispatch, useSelector } from 'react-redux';
import { tootgleTheme } from "../sectionSlice";
import { selectConversation } from './sidebarSlice';
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

const Sidebar = () => {

    const conversations = useSelector((state)=> state.sidebar.conversations)
    const dispatch = useDispatch();

    return (
        <>
            <div className='p-3 flex flex-row justify-between items-center'>
                <span className='text-xl whitespace-nowrap overflow-hidden text-ellipsis'>Picaso</span>
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

            <Divider />

            <Input
                className='my-3 w-11/12 mx-auto'
                placeholder="Search"
                startContent={
                    <IoMdSearch className="text-2xl text-default-400 pointer-events-none" />
                }
            />
            <Divider />
            <Listbox
                className='p-0'
                aria-label="Single selection example"
                variant="flat"
                selectionMode="single"
                onSelectionChange={(e) => dispatch(selectConversation(e.currentKey))}
            >
                {
                    conversations.map((item, index) => (
                        <ListboxItem showDivider className='gap-0 rounded-none p-3' key={item.id}>
                            <p className='whitespace-nowrap overflow-hidden text-ellipsis'>{item.title}</p>
                        </ListboxItem>
                    ))
                }
            </Listbox>

        </>
    )
}
export default Sidebar