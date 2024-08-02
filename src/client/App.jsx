import Section from "./components/section/section";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { isDesktopMode } from "./AppSlice";

function App() {
  const darkTheme = useSelector((state) => state.section.darkTheme)
  const mode = useSelector((state)=>state.app.desktopMode)
  const mainRef = useRef()
  const dispatch = useDispatch()
  useEffect(() => {
    mainRef.current.offsetWidth > 400 ? dispatch(isDesktopMode(true)) : dispatch(isDesktopMode(false))
    console.log(mode)
  }, [mainRef.current])
  return (
    <main ref={mainRef} className={`${darkTheme ? 'dark' : 'light'} text-foreground bg-background h-dvh`}>
      <Section />
    </main>
  );
}

export default App;
