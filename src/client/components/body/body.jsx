import { useDispatch } from "react-redux"
import { tootgleTheme } from "../section/sectionSlice";
import { Button } from "@nextui-org/react";

export default function Body() {
    const dispatch = useDispatch();
    return(
        <>
            <Button color="primary" onClick={()=> dispatch(tootgleTheme())}>
                Dark mode
            </Button>
        </>
    )
}