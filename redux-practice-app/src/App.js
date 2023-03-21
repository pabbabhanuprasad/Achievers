import './App.css';
import {connect} from 'react-redux';
import {IncrementAction} from "./actions";
import {DecrementAction} from "./actions";

const App = ({local_variable,IncrementAction,DecrementAction}) => {
  return (
    <div>
      <center>
        <h1>{local_variable}</h1><br/>
        <button onClick={IncrementAction}>Increment</button>
        <button onClick={DecrementAction}>Decrement</button>
      </center>
    </div>
  );
}
const mapStateToProps = state => ({
  local_variable : state
})

export default connect(mapStateToProps,{IncrementAction,DecrementAction})(App);
