import logo from './logo.svg';
import './App.css';
import ProductList from './Component/ProductList';
import Pure from './Component/Pure';


function App() {
  return (
    <div className="App">
      <h2>Ques1: Higher order component</h2>
      <p style={{backgroundColor:"yellowgreen",width:"800px",margin:"auto"}}>We previously recommended mixins as a way to handle cross-cutting concerns.
      <br></br> We’ve since realized that mixins create more trouble than they are worth. 
      <br></br>Read more about why we’ve moved away from mixins and how you can transition your existing components.</p>
      <pre>
        syntax:const enhancedComponent = higherOrderComponent(originalComponent);
      </pre>
      <h3>Implemetation:Example-search functionality</h3>
      <ProductList /><br></br><br></br>
      <h2>Ques2: React Pure Component</h2>
      <p style={{backgroundColor:"yellowgreen",width:"800px",margin:"auto"}}>
      React lets you define components as classes or functions.<br></br> 
      Components defined as classes currently provide more features which are described in detail on this page.<br></br> 
      To define a React component class, you need to extend React.Component.<br></br>
      </p>
      <h4>Implemetation: state update</h4>
      <Pure />
    </div>
  );
}

export default App;
