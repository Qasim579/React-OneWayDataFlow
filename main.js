function Button(props){
  const handleClick = () => props.Onclick(props.increment);
  return (
  <button onClick = {handleClick}>
      +{props.increment}
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
  const incrementCounter = (incrementvalue) => setCounter(counter+incrementvalue);
  
  return (
  <div>
      <Button  Onclick={incrementCounter} increment={1} />
      <Button  Onclick={incrementCounter} increment={5} />
      <Button  Onclick={incrementCounter} increment={10} />
      <Display message = {counter} />
     
      </div>
  );
}



ReactDOM.render(
    <App/>,
  document.getElementById('mountNode'),
);
