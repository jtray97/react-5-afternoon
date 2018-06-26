import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

import {connect} from 'react-redux';
import {updateRealEstate} from '../../ducks/reducer'

class WizardFive extends Component {

    render(){
        const{updateRealEstate} = this.props
        return(
            <div className="parent-div">
                    <div className="vert-align">    

                    <p>Are you currently working with a real estate agent?</p> <br />
                    <div className="row">
                        <Link to="/wSix"><button onClick={updateRealEstate(true)}>Yes</button></Link>
                        <Link to="/wSix"><button onClick={updateRealEstate(false)}>No </button></Link>
                    </div>
                </div>
            </div>
        )
    }
} 

function mapStateToProps(state){
    const {realEstateAgent}=state;
    return{realEstateAgent}

}
export default connect(mapStateToProps, {updateRealEstate})(WizardFive)