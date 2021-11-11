import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Card from './components/Card'

const App = () => {
  const [people, setPeople] = useState([]); // for useEffect
  const [addPeople, setAddPeople] = useState({ // for useState
    name: "",
    age: null,
    discipline: "",
  });

  const [count, setCount] = useState(0)

  

  useEffect(() => {
    setPeople([
      {
        name: "rameez",
        age: 21,
        discipline: "software",
      },
      {
        name: "rafay",
        age: 21,
        discipline: "CS",
      },
      {
        name: "umar123",
        age: 22,
        discipline: "software ",
      },
      {
        name: "khalid",
        age: 35,
        discipline: "Bsc",
      },
      {
        name: "khalid",
        age: 35,
        discipline: "Bsc",
      },
    ]);
  }, []);

  console.log(addPeople);

  const addEntry = (e) => {
    e.preventDefault();

    setPeople([...people, addPeople]);
  };

  const clicker = () => {
    setCount(count+1)
  }

  return (
    <div className="App">
    
    <p>Total Count</p>
    <p>{count}</p>
    <div className = 'Comp-Practice'>
      {
        people.map((e,index)=>{
          return(
            <Card 
              name={e.name}
              discipline={e.discipline}
              click={clicker}
            />
          )
        })
      }

    </div>
      <form onSubmit={addEntry} className="space-me">
        <div className="input-holder">
          <input
            type="text"
            placeholder="name"
            className="form-control"
            onChange={(e) =>
              setAddPeople({ ...addPeople, name: e.target.value })
            }
            required
          />
          <input
            type="number"
            placeholder="age"
            className="form-control"
            onChange={(e) =>
              setAddPeople({ ...addPeople, age: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="discipline"
            className="form-control"
            onChange={(e) =>
              setAddPeople({ ...addPeople, discipline: e.target.value })
            }
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Discipline</th>
          </tr>
        </thead>
        <tbody>
          {people.map((eachPeople, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{eachPeople.name}</td>
                <td>{eachPeople.age}</td>
                <td>{eachPeople.discipline}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;