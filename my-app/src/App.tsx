import { useState } from "react";
import AddPeople from "./components/addPeople";
import List from "./components/list";
export interface IPeople{
  id:number;
  fullName?:string;
  age?:number;
  img_url?:string;
  bio?:string;

}
const App = ()=> {
  const[people,setPeople]=useState<IPeople[]>([{
    id:1,
    fullName:"samira Kian",
    age:35,
    img_url:"https://media.istockphoto.com/id/1382459668/ro/fotografie/femeie-destul-de-t%C3%A2n%C4%83r%C4%83-afro-printre-palmieri.jpg?s=612x612&w=is&k=20&c=ThPaw5nLn_qu9bUugdFg3PLEz2sJ72rcj9A3GfVDSBo=",
    bio:"frontend developer"
  }]);
  return (
    <div className="container">
     <h4 className="alert alert-info">People management</h4>
    <List people={people} setPeople={setPeople}/>
    <AddPeople people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
