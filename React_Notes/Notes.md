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

## Hook in React
### Hook allows you to use state and other react features with a function-based component,  that is without writing a class.

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
### [Resource Link](https://www.codewithharry.com/videos/react-tutorials-in-hindi-1)
