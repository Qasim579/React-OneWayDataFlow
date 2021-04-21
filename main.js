//sepration of responsibilities
function Button(props){
  return (
  <button onClick = {props.Onclick}>
      +1
      </button>
  );
}

function Display(props){
  return (
    <div>{props.message}</div>
    );
}


function App(){
  const [counter,setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter+1);
  
  return (
  <div>
      <Button  Onclick={incrementCounter}/>
      <Display message = {counter} />
     
      </div>
  );
}



ReactDOM.render(
    <App/>,
  document.getElementById('mountNode'),
);
