import { useSelector } from "react-redux";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import Sidebar from "./sidebar/sidebar";
import Mainbar from "./mainbar/mainbar";


export default function Section() {

    const selectedConversation = useSelector((state) => state.sidebar.conversationKey)
    const isDesktopMode = useSelector((state)=>state.app.desktopMode)

    return (
        <>
            <Allotment>
                <Allotment.Pane maxSize={isDesktopMode?300:400} visible={selectedConversation === null || isDesktopMode ? true : false}>
                    <Sidebar />
                </Allotment.Pane>
                <Allotment.Pane snap visible={selectedConversation !== null || isDesktopMode ? true : false}>
                    <Mainbar />
                </Allotment.Pane>
            </Allotment>

        </>
    )
}