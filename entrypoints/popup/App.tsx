import './App.css';
import LinkRow from "../../components/LinkRow";
import {mockData, MockDataType} from "@/entrypoints/popup/data.ts";
import {useState} from "react";
import NewMenu from "@/components/NewMenu";


const renderTree = () =>{
    const loop = (data:MockDataType[]):any => {
        if (data.length === 0)return
       return  data.map((obj) => {
            return <div key={obj.url}>
                <LinkRow  name={obj.name} isFather={!!obj.children} url={obj.url} iconName={obj.iconName}/>
                {loop(obj?.children || [])}
            </div>
        })
    }
    return loop(mockData)
}

function App() {
    const [onAdd,setOnAdd] = useState<boolean>(false)
    return (
    <>
        <button onClick={()=>{
            setOnAdd(true);
        }}>new menu</button>
        {onAdd ? <NewMenu/> : renderTree()}
    </>
  );
}

export default App;
