import React, {Component} from 'react';
import CityList from '../containers/city_list'
import City from '../containers/city'

class App extends Component{
  render(){
      return (
        <div className="app" style ={{height:"100vh"}}>
          <CityList />
          {this.props.chosenCity==null && <City/>}
          {this.props.chosenCity && <City city={this.props.chosenCity}/>}
        </div>
      );
  }
};

// export default App;

import {connect} from 'react-redux'
const mapStateToProps=(state)=>{
  return{
      chosenCity: state.selectedCity
  }
}
export default connect(mapStateToProps,null)(App)

