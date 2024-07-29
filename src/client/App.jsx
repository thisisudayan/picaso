import Section from "./components/section/section";
import { useSelector } from "react-redux";
import { Allotment } from "allotment";
import "allotment/dist/style.css";
import ChatConversation from "./components/chatconversation";
function App() {
  const darkTheme = useSelector((state) => state.section.darkTheme)
  return (
    <>
      <main className={`${darkTheme ? 'dark' : 'light'} text-foreground bg-background h-dvh`}>
        <Section />
      </main>
    </>
  );
}

export default App;
