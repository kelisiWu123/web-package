import './App.css';
import LinkRow from "../../components/LinkRow";
import {mockData, MockDataType} from "@/entrypoints/popup/data.ts";
import { v4 as uuidv4 } from 'uuid';
const renderTree = () =>{
    const loop = (data:MockDataType[]):any => {
        if (data.length === 0)return
       return  data.map((obj) => {
            return <div key={uuidv4()}>
                <LinkRow  name={obj.name} isFather={!!obj.children} url={obj.url} iconName={obj.iconName}/>
                {loop(obj?.children || [])}
            </div>
        })
    }
    return loop(mockData)
}
function App() {
  return (
    <>
        {renderTree()}
    </>
  );
}

export default App;
