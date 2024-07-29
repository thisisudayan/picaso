
import Sidebar from "./sidebar/sidebar";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import Mainbar from "./mainbar/mainbar";
import { useSelector } from "react-redux";
import { useRef } from "react";


export default function Section() {

    const selectedConversation = useSelector((state) => state.sidebar.conversationKey)
    const isDesktopMode = useSelector((state)=>state.app.desktopMode)

    return (
        <>
            <Allotment>
                <Allotment.Pane maxSize={350} visible={selectedConversation === null || isDesktopMode ? true : false}>
                    <Sidebar />
                </Allotment.Pane>
                <Allotment.Pane snap visible={selectedConversation !== null || isDesktopMode ? true : false}>
                    <Mainbar />
                </Allotment.Pane>
            </Allotment>

        </>
    )
}