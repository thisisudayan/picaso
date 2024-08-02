import Section from "./components/section/section";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { isDesktopMode } from "./AppSlice";
import { useWindowSize } from "@uidotdev/usehooks";

function App() {
  const darkTheme = useSelector((state) => state.section.darkTheme)
  const mode = useSelector((state)=>state.app.desktopMode)
  const windowSize = useWindowSize()
  const mainRef = useRef()
  const dispatch = useDispatch()
  useEffect(() => {
    windowSize.width >= 450 ? dispatch(isDesktopMode(true)) : dispatch(isDesktopMode(false))
  }, [windowSize.width])
  return (
    <main className={`${darkTheme ? 'dark' : 'light'} text-foreground bg-background h-dvh`}>
      <Section />
    </main>
  );
}

export default App;
