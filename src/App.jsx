import DebounceInput from "./Components/DebounceInput"
import Page from "./Components/Page"
export default function App(){
  
 

  return(
    <div className="min-h-screen min-w-screen flex flex-col bg-black text-white border-white border-1 p-10 place-items-center gap-5">
      <DebounceInput/>
      <Page />
    </div>
  )
}