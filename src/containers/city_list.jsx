import React, {Component} from 'react';
import City from './city';


class CityList extends Component{

    UNSAFE_componentWillMount(){
        this.props.setCities();
    }
    
    render(){
        return(
            <div className="col-sm-7">
                {this.props.cities.map((city)=>
                    <City city={city} key={city.name}/>
                )}
            </div>
        )
    }
}

// using redux
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {setCities} from '../actions'
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {setCities: setCities}, dispatch
    )
}
const mapStateToProps=(state)=>{
    return{
        cities: state.cities
    }
}

// export default CityList
export default connect(mapStateToProps,mapDispatchToProps)(CityList)