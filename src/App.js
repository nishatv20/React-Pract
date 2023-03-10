import React, { Component } from 'react' ;
import logo from './logo.svg';
import './App.css';
import  Greet    from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylessheet from './components/Stylessheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
function App() {
  return (
    <div className="App">
      <ClickCounter/>
      <HoverCounter/>
      {/* <ErrorBoundary>
      <Hero heroName = "Batman"></Hero>
      </ErrorBoundary>

      <ErrorBoundary
      <Hero heroName="Superman"></Hero>
      <ErrorBoundary/>

      <ErrorBoundary>
      <Hero heroName= "Joker"></Hero>
      </ErrorBoundary> */}
    
      {/* <PortalDemo></PortalDemo> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo/> */}
      {/* <ParentComp/> */}
      {/* <Table/> */}
      {/* <FragmentDemo /> */}
      {/* <Form></Form> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className= {styles.success}>Success</h1>
      <Inline></Inline> */}
      {/* <Stylessheet primary = {true}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
     {/* <Counter/> */}
      {/* <Message /> */}
    {/* <Greet name = "Bruce" heroName = "Batman" > 
    <p>This is Children Props </p>
    </Greet>
    <Greet name = "Clark" heroName = "Superman" > 
    <button>Action</button>
    </Greet>
    <Greet name = "Diana" heroName = "Wonder Woman" />


    <Welcome name="Bruce" heroName ="Batman" /> 
    <Welcome name = "Clark" heroName = "Superman"/>
    <Welcome name = "Diana" heroName = "Wonder Woman"/> */}
    {/* <Greet name = "Diana" heroName = "Wonder Woman"/>
    <Welcome name = "Bruce" heroName = "Batman" /> */}
    {/* <EventBind></EventBind> */}
    </div>
  );
}

export default App;
