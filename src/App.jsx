import Page from "./Components/Page"
export default function App(){
  const items = new Array(100);
  for(let i=0; i<items.length;i++){
    items[i]='Item-'+(i+1);
  }

console.log(items);
 

  return(
    <div className=" min-h-screen flex flex-col border-white border-1 bg-black text-white">
      <Page items={items}/>
    </div>
  )
}