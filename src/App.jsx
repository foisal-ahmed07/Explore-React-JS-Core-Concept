import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";

function App() {
  const actors = ["Sarukh", "Salman", "Roky Bhai", "Prabash", "Allu Arjun"];
  const singers = [
    { name: "Arijit Singh", age: 40 },
    { name: "Kumar Sanu", age: 60 },
    { name: "Junaed Evan", age: 40 },
    { name: "Ather", age: 32 },
    { name: "Estiak", age: 35 },
    { name: "Jems", age: 80 },
  ];
  return (
    <>
      <h2>Vite + React</h2>
      <Person></Person>
      <Person name="Foisal" age="17" sub="CSE"></Person>;
      <Person name="Sadman" age="17" sub="EEE"></Person>;
      <Person name="Naim" age="18" sub="CE"></Person>;
      <Person name="Mahim" age="18" sub="CST"></Person>;

      <Actor name={"Sakib Khan"}></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}

      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}
    </>
  );
 }

function Person({ name, age, sub }) {
  console.log(name, sub, age);
  const personStyle = {
    border: "2px solid red",
    borderRadius: "20px",
    padding: "20px",
    marginTop: "20px",
  };
  return (
    <div style={personStyle}>
      <h2>Hello i am {name}</h2>
      <p>my age is {age}</p>
      <p>my depertment subject is {sub}</p>
      <Todo task="learn JavaScript"></Todo>
      <Todo task="learn React JS"></Todo>
      <Todo task="learn Node JS"></Todo>
      <Todo task="learn Express JS"></Todo>
    </div>
  );
}

export default App;
