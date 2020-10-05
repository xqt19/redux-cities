import React, {Component} from 'react';


class CityList extends Component{

    UNSAFE_componentWillMount(){
        this.props.loadUpTheCities();
    }
    handleClick= (city)=>{
        this.props.chooseThisCity(city)
    }
    
    render(){
        let classes = "list-group-item"
        if (this.props.city === this.props.selectedCity){
            classes += " active-city"
        }
        return(
            <div className="col-sm-7">
                    {this.props.cities.map((city)=>
                    <div key={city.slug} className={classes} onClick={() =>this.handleClick(city)}>{city.name}</div>
                    )} 

            </div>
        )
    }
}

// using redux
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {setCities, setActiveCity} from '../actions'
const mapDispatchToProps = (dispatch) => {
    return {
        loadUpTheCities: bindActionCreators(setCities, dispatch),
        chooseThisCity: bindActionCreators(setActiveCity, dispatch),
    }
}
const mapStateToProps=(state)=>{
    return{
        cities: state.cities
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CityList)