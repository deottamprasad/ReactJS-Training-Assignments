import Counter from "./Counter";

import "./styles.css";

//Here I have creater a Counter components which I passed as a prop to a Higher order components like HOCRed, HOCGreen, HOCBlue.
//These higher order components basically work as a wrapper to the Counter component and return a new component.

export default function App() {
  return (
    <div className="App">
      <HOCRed component={Counter}/>
      <HOCGreen component={Counter}/>
      <HOCBlue component={Counter}/>
    </div>
  );
}

function HOCRed(props) {
  return (<h2 style={{backgroundColor:"red", width:"100px"}}>Red<props.component /></h2>);
}
function HOCGreen(props) {
  return (<h2 style={{backgroundColor:"green", width:"100px"}}>Red<props.component /></h2>);
}
function HOCBlue(props) {
  return (<h2 style={{backgroundColor:"blue", width:"100px"}}>Red<props.component /></h2>);
}
