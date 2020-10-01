import React, {Component} from 'react';

class City extends Component{
    static defaultProps = {
         city: {name: 'TODO NAME Chengdu', address: 'TODO ADDRESS', slug: 'chengdu' }
    }
    render(){
        const style={
            backgroundImage: ""
        }
        return(
            <div className="card-trip">
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

export default City