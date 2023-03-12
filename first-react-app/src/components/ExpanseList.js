import React from "react";
const ExpanseList = (props) => {
  const deleteHandler = () => {
    const x = document.getElementById(props.id);
    x.remove();
  };

  return (
    <ul>
      {props.Expanses.map((Expanse) => (
        <li key={Expanse.id}>
          {Expanse.Amount}-{Expanse.Discription}-{Expanse.Option}-
          <button onClick={deleteHandler}>Delete Item</button>
        </li>
      ))}
    </ul>
  );
};
export default ExpanseList;
