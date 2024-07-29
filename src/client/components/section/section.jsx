
import Sidebar from "./sidebar/sidebar";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import Mainbar from "./mainbar/mainbar";
import { useSelector } from "react-redux";


export default function Section() {
    const selectedConversation = useSelector((state) => state.sidebar.conversationKey)

    return (
        <>
            <Allotment>
                <Allotment.Pane maxSize={450} visible={selectedConversation === null ? true : false}>
                    <Sidebar />
                </Allotment.Pane>
                <Allotment.Pane snap visible={selectedConversation === null ? false : true}>
                    <Mainbar />
                </Allotment.Pane>
            </Allotment>

        </>
    )
}