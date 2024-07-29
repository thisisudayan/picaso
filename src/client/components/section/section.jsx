
import Sidebar from "./sidebar/sidebar";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import Mainbar from "./mainbar/mainbar";


export default function Section() {
    
    return (
        <>
            <Allotment>
                <Allotment.Pane minSize={300}>
                    <Sidebar />
                </Allotment.Pane>
                <Allotment.Pane snap>
                    <Mainbar/>
                </Allotment.Pane>
            </Allotment>

        </>
    )
}