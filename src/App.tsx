import { Outlet } from "react-router";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import ChatBot from "./components/ChatBot/ChatBot";

export default function App() {
  
  return (
    <div className="App">
      <Cabecalho/>
      <Outlet/>
      <ChatBot/>
      <Rodape/>
    </div>
  );
}
