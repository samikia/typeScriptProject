
import { Dispatch, FC, FormEvent, SetStateAction, useState } from 'react'
import { Modal } from 'react-bootstrap'
import {FaUserEdit} from 'react-icons/fa'
import { IPeople } from '../App'
interface IProps{
    person:IPeople,
    people:IPeople[],
    setPeople:Dispatch<SetStateAction<IPeople[]>>
}
const Edit:FC<IProps>=({person,people,setPeople})=>{
    const[showModal,setShowModal]=useState<boolean>(false)
    const[fullName,setFullName]=useState<string>(person.fullName);
    const[age,setAge]=useState<string|number>(person.age);
    const[img_url,setImg_url]=useState<string>(person.img_url);
    const[bio,setBio]=useState<string|undefined>(person.bio);
const handelSubmit=(event:FormEvent<HTMLFormElement>):void=>{
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
    const persons=[...people];
    const index:number=persons.findIndex((p)=>p.id===person.id)
    persons[index]={
        id:person.id,
        fullName,
        age:Number(age),
        img_url,
        bio,
    }
    setPeople(persons)
    setShowModal(false)
}
return(<>
<FaUserEdit size={30} onClick={()=>setShowModal(true)} className="text-primary m-1"/>
<Modal
        size="lg"
        centered
       show={showModal}
       onHide= {()=>setShowModal(false)}
      >
        <Modal.Header>
          <Modal.Title>{person.fullName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            autoComplete="off"
            className="mt-3"
            onSubmit={(e)=>handelSubmit(e)}
          >
            <input
              type="text"
              className="form-control mb-2"
              name="fullName"
              placeholder="fullName"
              value={fullName}
              onChange={(e)=>setFullName(e.target.value)}
            />
            <input
              type="number"
              className="form-control mb-2"
              name="age"
              placeholder="age"
              value={age}
              onChange={(e)=>setAge(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2"
              name="img_url"
              placeholder="image url"
              value={img_url}
              onChange={(e)=>setImg_url(e.target.value)}
            />
            <textarea
              className="form-control mb-2"
              name="bio"
              rows={7}
              placeholder="biography"
              value={bio}
              onChange={(e)=>setBio(e.target.value)}
            />
            <button type="submit" className="btn btn-success">
             Edit profile
            </button>
            <button
              type="button"
              className="btn btn-danger me-2"
              onClick={()=>setShowModal(false)}
            >
            close
            </button>
          </form>
        </Modal.Body>
      </Modal>
</>)
}
export default Edit