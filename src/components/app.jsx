import React, {Component} from 'react';
import CityList from '../containers/city_list'
import City from '../containers/city'

class App extends Component{
  render(){
      return (
        <div className="app" style ={{height:"100vh"}}>
          <CityList />
          <City />
        </div>
      );
  }
};
// const App = () => {
//   return (
//     <div className="app">
//       <p>React + Redux starter</p>
//       <CityList />
//       <City />
//     </div>
//   );
// };

export default App;
