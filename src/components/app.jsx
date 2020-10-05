import React, {Component} from 'react';
import CityList from '../containers/city_list'
import ActiveCity from '../containers/city'

class App extends Component{
  render(){
      return (
        <div className="app" style ={{height:"100vh"}}>
          <CityList />
          {this.props.chosenCity==null && <ActiveCity/>}
          {this.props.chosenCity && <ActiveCity city={this.props.chosenCity}/>}
        </div>
      );
  }
};

// export default App;

import {connect} from 'react-redux'
const mapStateToProps=(state)=>{
  return{
      chosenCity: state.activeCity
  }
}
export default connect(mapStateToProps,null)(App)

