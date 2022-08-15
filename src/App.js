
import './App.css';
import Person from './components/Person';
import React from 'react'; 
import Button from 'react-bootstrap/esm/Button';










class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      show : false ,
      count : 1 ,
    }

  }
  
 

  render () {
    
  return (
    <div className='app'>
      

      
      
      
      
        
      <Button variant="primary" size="lg" onClick={()=>this.setState({show : !this.state.show})}>{this.state.show ? 'Hide' : 'Show'}
        
      </Button>
      
      
      {
        this.state.show &&   <Person/>
      }

      
    </div>
  );
}
}

export default App;
