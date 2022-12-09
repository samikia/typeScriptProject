import React, { FC } from "react";
import { IPeople } from "../App";

interface IProps {
  people: IPeople[];
}
const List: FC<IProps> = ({ people }) => {
  const renderList: JSX.Element[] = people.map((person) => (
    <div className="col-12 col-lg-6 mb-2">
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
              <span className="badge bg-primary me-3">age {person.age}</span>
            </p>
            <p className="text-muted">{person.bio}</p>
            <div/>
          </div>
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
