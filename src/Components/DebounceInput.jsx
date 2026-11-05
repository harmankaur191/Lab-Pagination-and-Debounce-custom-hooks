import { useEffect } from "react";
import { useState } from "react";
import useDebounce from "../CustomHooks/useDebounce";

export default function DebounceInput() {
    const countries =['Argentina','Afghanistan','Bermuda','Bolivia','Brazil','Canada','Columbia','Cabo Verde','Ecuador','France','Peru'];
    const [searchItem, setSearchItem] = useState("");
    const [delay, setDelay] = useState(500);
    const [searchResults, setSearchResults] = useState([]);
    const [status,setStatus]=useState('Simulated Search Results')
    const handleChange = (e) => {
        const debounceTime = Number(e.target.value);
        setDelay(debounceTime);

    }
    const debouncedSearchItem = useDebounce(searchItem,delay,status);
    useEffect(()=>{
        
        if(!debouncedSearchItem.trim()){
            console.log(debouncedSearchItem)
             setSearchResults(['No results found']);
             setStatus('Simulated Search Results:')
             return;
        }
            const filterItems = countries.filter((country)=>
                country.toLowerCase().includes(debouncedSearchItem.toLowerCase())

             
            );
            console.log(filterItems)
             setStatus('Simulated Search Results:')
           setSearchResults(filterItems);
            
        
       
    },[debouncedSearchItem])
console.log(debouncedSearchItem)
console.log(searchResults)

    const handleInputChange=(e)=>{
        e.preventDefault();
        const search=e.target.value;
        setSearchItem(search);
        setStatus('Searching..')
        console.log(searchItem)
    }
console.log(searchItem)


    return (
        <div className="flex flex-col border-white border-1 p-10 gap-2 text-sm">
            <h2 className="self-center text-lg">Debounce Search Demo</h2>
            <div>
                <label>Debounce Delay(ms):</label>
                <input type='number' id='debounceDelay' min={500} max={100000} step={100} onChange={handleChange} value={delay} />
            </div>

            <input type="text" id="searchInput" placeholder='Type to search' value={searchItem} onChange={handleInputChange} className="border-white border-1 rounded-sm" />
            <label>Current Input:{searchItem}</label>
            <label>Debounced Value(after {delay}ms):{debouncedSearchItem}</label>
            
            <label>{status}</label>   
            <ul className="list-disc">{
                searchItem === ''? ('Type to search'):
                searchResults.length===0? ('No matching results found'):(
                
                searchResults.map((searchResult,index)=>{
                   return  <li key={index}>{searchResult}</li>;
                }))}
            </ul>

        </div>
    )
}