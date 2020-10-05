import React, {Component} from 'react';

class ActiveCity extends Component{
    static defaultProps = {
         city: {name: 'Singapore', address: '360, #08-02 Orchard Rd, International Building, 238869', slug: 'singapore' }
    }

    render(){
        return(
            <div className="active-city">
                   <img style={{width: "100%"}} src={`https://kitt.lewagon.com/placeholder/cities/${this.props.city.slug}`} />
                <h2>{this.props.city.name}</h2>
                <p>{this.props.city.address}</p>
            </div>
            // <div className="card-trip">
            // <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.city.slug}`} />
            // <div className="card-trip-infos">
            //     <div>
            //     <h2>{this.props.city.name}</h2>
            //     <p>{this.props.city.address}</p>
            //     </div>
            //     <h2 className="card-trip-pricing">£99.99</h2>
            //     <img src="https://kitt.lewagon.com/placeholder/users/krokrob" className="card-trip-user avatar-bordered img-circle" />
            // </div>
            // </div>
        )
    }
}
export default ActiveCity
// import {connect} from 'react-redux'

// const mapStateToProps=(state)=>{
//     return{
//         selectedCity: state.selectedCity
//     }
// }
// export default connect(mapStateToProps,null)(ActiveCity)