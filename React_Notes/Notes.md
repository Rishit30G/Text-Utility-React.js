# React.js Notes

## Why React.js ? 
### React Js is a javascript library originally developed by Facebook. It helps in building highly engaging Single page web applications. React Js helps in breaking down complex UI into Simpler components. React JS has a high demand in the field of Web development.


## Advantage of dividing our app into components:
- By dividing your app into components, you can reuse the component in the same or different app repeatedly
- We can change the component of our app using Props and State
- It also makes it easier to find errors in a large set of your code



## Props
### Props stand for Properties.  It is used to Pass information into the React Components. 
### For example, if we create a custom Component, then by using Props, we can pass data into it in the form of Objects, strings, numbers, etc.  


## React has two types of Components
- Function-based Component: In short they are the Javascript functions. Nowadays, Function-based components are primarily used.
- Class-based Component: They are quite complex than the function-based component as the class components can work with each other.

## Multi-Page Application 
### In a Multi-Page application, A request is being sent by the client to the server and in response to this request the HTML, CSS, JS of that specific page is rendered by the server in the client’s device. In Multi-Page Applications, corresponding to every page their HTML, CSS, JS is rendered by the server.  

## Single-Page Application 
- In this case, the Request will be sent once by the client to the server, and all the HTML, CSS, JS will be rendered with the first request. 
- Then, Javascript will take control of the whole application and with the help of APIs, the same page will be populated. This means that on the new request of the user it will serve the page without reloading it.
- By using a single-page Application we can save a lot of bandwidth in the case of those applications which are getting a huge amount of traffic. It provides an improved user experience and also results in quick loading time.

## Understanding State

### A state depicts the local information of a Component. For example: If we write something in our text box it will be the state of our object for that specific point in time. The state is the changeable variable of our app. Whenever the state object changes, the component re-render itself.

## Class-based component.
### Class components are basically ES7 Classes. A class Component can also receive props as Input and return HTML. A class component can also maintain some information that is private to that component and can use that information to describe the user interface. 

## Difference between Functional and Class Component

Functional Component | Class Component 
------------- | -------------
Simple Function  | More feature rich 
Use function component as much as possible  | Mainatin their own private data - state 
Absence of 'this' key word  | Complex UI logic 
Mainly responsible for UI  | Provide lifecycle hooks
Stateless/Dumb/Presentational  | Stateful/Smart/Container


## Map() method
### The map() method is the most commonly used function to iterate over an array of data in JSX. You can attach the map() method to the array and use a callback function that gets called for each iteration.

## ComponentDidMount() Method
### This method gets invoked once the component has been rendered. As a result, the constructor of our application gets executed first, followed by the ‘render method,’ and at last, the ComponentDidMount() method is invoked. ComponentDidMount() is a lifecycle method.

## Using Async and Await
### Async keyword is used to make a function asynchronous. Async can wait inside its body to resolve for some of the promises. The await keyword will stop the execution until a defined task is completed. In our case, it will wait for the promise to be resolved. 

## Prop types in Class-Based Component
### React has a mechanism for props authentication called prop types. As some functions need compulsory arguments, similarly in react components might require a prop to be defined. Otherwise, it won’t render properly.

## Static variable

### The static variable can be used to refer to the common property of all objects. Static is the property that belongs to the class only. Earlier in React, we used to define props outside of the class. But now we will be defining them inside the class by using the static variable.

## React Component Lifecycle Method
Component LifeCycle: The series of events that happens from the mounting of a React Component to its unmounting.
- Mounting: Birth of your component
- Update: Growth of your component
- Unmount: Death of your component

## Methods in React Component Lifecycle

- Render() Method: It is used to render the HTML of the component in React. It is used to render the DOM while using the class-based component. Remember, Inside the Render method we cannot modify the state in React.
- ComponentDidMount(): This method executes after the component output has been rendered to the DOM. We have already used this method in the NewsMonkey Application for fetching the Data from the API. You can also use setState, async, and await methods in ComponentDidMount().
- ComponentDidUpdate(): This method is used to update the DOM in response to the prop or state changes. Remember that props are read-only. That’s why here, ‘changes in the prop’ means that it can be received again in the component.
- ComponentWillUnmount(): It is invoked just before the component is unmounted and destroyed. It is usually used to perform cleanups.


### While Mounting
- In this case, the ‘Constructor’ runs first after that the ‘render’ lifecycle method is invoked. After that, React will update the DOM and finally, the ComponentDidMount will be executed.

### While Updating
- The three possible ways in which one can update the React component are:

### New props
- Using setState
- Using forceupdate()
- After updating the component, the render method will be executed at the start. After that, The react Updates the  ‘DOM and references’ and in the end, the ComponentDidUpdate method will be run.

### While Unmounting
- At the time of unmounting, only the ComponentWillUnmount method will be executed and the component will be unmounted.


## What are React Hooks?
- React Hooks allows us to use the features of class-based components in Function-based Components.
- It even allows us to use ‘state’ and other React features without writing a class. 
- For example: Earlier, we were using ‘this.state’ whenever we needed to access the state but now we can use the ‘UseState’ Hook.
- Hooks are the functions which “hook into” react state and lifecycle features from the function components.


## Commonly used React Hooks

- **UseState**: It is used to update the state and to set the initial value of the state. The ‘useState’ is similar to ‘this.setState’ in class. The useState returns a pair where the first element is the current state value/initial value, and the second one is a function that allows us to update it. For example: If we create a text variable and we want to make it a part of the state, then we can return two elements (like ‘text’ and ‘set text’) from the state hook. 
- **Use Effect**: It is used to perform the side effect. For example: If we want to perform a certain task when the content of our application is updated, then we can take the help of the UseEffect hook. In other words, Effects Hooks are similar to componentDidMount(), componentDidUpdate(), and componentWillUnmount() lifecycle methods. 
Use Context
This hook allows us to use the context API. Context API allows us to share data within its component tree without passing through props. In short, it helps in removing prop drilling from the application. Prop drilling is a situation when the same data is being sent at every level due to requirements. We will be discussing the Context hook in detail later in this React Course.
- **UseRef**: It returns a mutable reference object, which has a .current property.  It can be used to point an element inside a DOM. In most simple words, it is a holder which can store an element of the DOM inside its .current property.













### [Resource Link](https://www.codewithharry.com/videos/react-tutorials-in-hindi-1)
