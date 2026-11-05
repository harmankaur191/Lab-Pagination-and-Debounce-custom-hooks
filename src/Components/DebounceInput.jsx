import { useState } from "react";

export default function DebounceInput(){

const [searchItem, setSearchItem]= useState("");
const [delay, setDelay]=useState(500);
const [searchResults, setSearchResults]=useState('');
const handleChange=(e)=>{
    const debounceTime = Number(e.target.value);
    setDelay(debounceTime);
    
    }






    return(
        <div className="flex flex-col border-white border-1 p-10 gap-2">
            <h2>Debounce Search Demo</h2>
            <div>
            <label>Debounce Delay(ms):</label>
            <input type='number' id='debounceDelay' min={500} max={100000} step={100} onChange={handleChange}  value={delay}/>
            </div>
            
            <input type="text" id="searchInput" placeholder='Type to search' className="border-white border-1 rounded-sm"/>
            <label>Current Value:Value</label>
            <label>Debounced Value(after ms):</label>

        </div>
    )
}