import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import { IPeople } from "../App";

interface IAddPeople{
    people:IPeople[];
    setPeople:Dispatch<SetStateAction<IPeople[]>>
}


const AddPeople:FC<IAddPeople> = ({people,setPeople}) => {
    const[fullName,setFullName]=useState<string>('');
const[age,setAge]=useState<string|number>('');
const[img_url,setImg_url]=useState<string>('');
const[bio,setBio]=useState<string>('');
const handleResetState=():void=>{
    setFullName('');
    setAge('');
    setImg_url('');
    setBio('');
}
const handleSubmit=(event:FormEvent<HTMLFormElement>):void=>{
    event.preventDefault();
if(!fullName){
    return alert("please enter fullname")
}
if(!age){
    return alert("please nter your age")
}
if(!img_url){
    return alert('Please enter your image url')
}
setPeople([...people,{
    id:2,
    fullName,
    age:Number(age),
    img_url,
    bio,
}])
}
    return ( <>
    <div className="col-md-6 col mx-auto">
        <form autoComplete="off" onSubmit={(e)=>handleSubmit(e)} className="mt-3">
            <input
            type='text'
            className="form-control mb-2"
            name="fullname"
            value={fullName}
            placeholder="name"
            onChange={(e)=>setFullName(e.target.value)}/>

            <input
            type='number'
            className="form-control mb-2"
            name="age"
            value={age}
            placeholder="age"
            onChange={(e)=>setAge(e.target.value)}
            />

            <input
            type='text'
            className="form-control mb-2"
            name="img_url"
            value={img_url}
            placeholder="image"
            onChange={(e)=>setImg_url(e.target.value)}
            />

            <textarea
            className="form-control mb-2"
            name="bio"
            value={bio}
            rows={7}
            placeholder="biography"
            onChange={(e)=>setBio(e.target.value)}/>
            <button type="submit" className="btn btn-success">add</button>
        </form>
    </div>
    
    </> );
}
 
export default AddPeople;