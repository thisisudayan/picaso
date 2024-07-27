import Section from "./components/section/section";
import { useSelector } from "react-redux";

function App() {
  const darkTheme = useSelector((state) => state.section.darkTheme)
  return (
    <main className={`${darkTheme ? 'dark' : 'light'} text-foreground bg-background h-dvh`}>
      <Section />
    </main>
  );
}

export default App;
