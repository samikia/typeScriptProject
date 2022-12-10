import { Dispatch, FC, SetStateAction } from "react";
import { IPeople } from "../App";
import {AiOutlineUserDelete} from 'react-icons/ai'
interface IProps {
  people: IPeople[];
  setPeople:Dispatch<SetStateAction<IPeople[]>>
}
const List: FC<IProps> = ({ people,setPeople }) => {
  const handleDeletePeople=(id:number):void=>{
const persons:IPeople[]=[...people]
const filteredPeople:IPeople[]=persons.filter(p=>p.id!==id)
setPeople(filteredPeople)
  }
  const renderList: JSX.Element[] = people.map((person) => (
    <div key={person.id} className="col-12 col-lg-6 mb-2">
    <div className="card">
      <div className="card-body d-flex align-items-center">
        <img
          className="img-fluid rounded img-thumbnail"
          width={100}
          height={100}
          src={person.img_url}
          alt={person.fullName}
        />
        <div className="me-3">
          <p>
            <span className="h2">{person.fullName}</span>
            <span className="badge bg-primary me-3">{person.age} سال </span>
          </p>
          <p className="text-muted">{person.bio}</p>
        </div>
      </div>
      <div className="operation_btns">
        <AiOutlineUserDelete
          className="text-danger m-1"
          size={30}
          onClick={()=>handleDeletePeople(person.id)}
        />
      </div>
    </div>
  </div>
  ));
  return (
    <>
      <div className="row">{renderList}</div>
    </>
  );
};

export default List;
