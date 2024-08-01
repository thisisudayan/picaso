import Section from "./components/section/section";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { isDesktopMode } from "./AppSlice";
import LoginPage from "./components/section/login";

function App() {
  const darkTheme = useSelector((state) => state.section.darkTheme)
  const mainRef = useRef()
  const dispatch = useDispatch()
  useEffect(() => {
    mainRef.current.offsetWidth > 400 ? dispatch(isDesktopMode(true)) : dispatch(isDesktopMode(false))
  }, [mainRef.current])
  return (
    <main ref={mainRef} className={`${darkTheme ? 'dark' : 'light'} text-foreground bg-background h-dvh`}>
      <Section />
      {/* <LoginPage/> */}
    </main>
  );
}

export default App;
