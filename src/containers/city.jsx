import React, {Component} from 'react';

class City extends Component{
    static defaultProps = {
         city: {name: 'Singapore', address: 'Orchard Road', slug: 'singapore' }
    }
    handleClick= ()=>{
        //Redux Action (connect null,mapdispatchtoprops city)
        this.props.chooseThisCity(this.props.city)
    }

    render(){
        let classes = "card-trip"
        if (this.props.city === this.props.selectedCity){
            classes += " active-city"
        }
        return(
            <div className={classes} onClick={() =>this.handleClick(this.props.city)}>
            <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.city.slug}`} />
            <div className="card-trip-infos">
                <div>
                <h2>{this.props.city.name}</h2>
                <p>{this.props.city.address}</p>
                </div>
                <h2 className="card-trip-pricing">£99.99</h2>
                <img src="https://kitt.lewagon.com/placeholder/users/krokrob" className="card-trip-user avatar-bordered img-circle" />
            </div>
            </div>
        )
    }
}

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectCity} from '../actions'

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {chooseThisCity: selectCity}, dispatch
    )
}
const mapStateToProps=(state)=>{
    return{
        selectedCity: state.selectedCity
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(City)
// export default City