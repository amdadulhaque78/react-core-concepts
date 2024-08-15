import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'
import Book from './Book'

function App() {

  const actors = ['salman', 'sakib', 'raj', 'jasim', 'rubel'];

  const books =[
    {id: 1, name: 'physics', price: 200},
    {id: 2, name: 'chemistry', price: 400},
    {id: 3, name: 'biology', price: 300},
    {id: 4, name: 'math', price: 250},
  ]

  const singers = [
    {id: 1, name: 'eva', age: 38},
    {id: 2, name: 'shuvro', age: 58},
    {id: 3, name: 'mahfujur', age: 68},
    {id: 4, name: 'pritom', age: 28},
    
  ]

  return (
    <>
      <h3>Vite + React</h3>

      <BookStore books={books}></BookStore>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <Actor name={"Bappa"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore Core Concepts" isDone={false}></Todo>
      <Todo task="Try Jsx" isDone={true}></Todo>
      <Device name="laptop" price="55"></Device>
      <Device name="mobile" price="17"></Device>
      <Device name="watch" price="3"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade={12} score="85"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props){
  // console.log(props)
  return <h2>This device: {props.name} price: {props.price}</h2>
}

function Person(){
  const age = 25;
  const money = 20;
  const person = {name: 'sakib', age: 12}
  return <h3>Iam {person.name} a developer with age: {age + money}</h3>
}

const {grade, score} = {grade: '7', score: '99'};

function Student ({grade=1, score=0}) {
  console.log(grade, score);
  return (
    <div className='student'>
    <h3>This is a student</h3>
    <p>class: {grade} </p>
    <p>score: {score} </p>
  </div>
  )
  
}

function Developer(){
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return(
    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>Coding: </p>
    </div>
  )
}

export default App
