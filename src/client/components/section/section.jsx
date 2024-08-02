import { useDispatch, useSelector } from "react-redux";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import Sidebar from "./sidebar/sidebar";
import Mainbar from "./mainbar/mainbar";
import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { setToggleNav } from "./sidebar/sidebarSlice";


export default function Section() {
    const selectedConversation = useSelector((state) => state.sidebar.conversationKey)
    const isDesktopMode = useSelector((state)=>state.app.desktopMode)
    const toggleNav = useSelector((state)=>state.sidebar.toggleNav);
    const windowSize = useWindowSize();
    const dispatch = useDispatch()
    useEffect(() => {
        if(windowSize.width <= 450) {
            if(selectedConversation === null) {
                dispatch(setToggleNav(1))
            } else {
                dispatch(setToggleNav(2))
            }
        } else {
            dispatch(setToggleNav(3))
        }
    }, [windowSize.width])
    return (
        <Allotment>
            <Allotment.Pane maxSize={450} visible={toggleNav===1||toggleNav===3}>
                <Sidebar />
            </Allotment.Pane>
            <Allotment.Pane snap visible={toggleNav === 2 || toggleNav === 3}>
                <Mainbar />
            </Allotment.Pane>
        </Allotment>
    )
}