import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateAddOne, updateAddTwo, updateAddThree } from '../../ducks/reducer';

class WizardNine extends Component {
    render(){
        const{ updateAddOne, updateAddTwo, updateAddThree} = this.props
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your address?</p> <br />

                    <input type="text" placeholder="Line One" onChange={(e)=>{updateAddOne(e.target.value)}}/>
                    <input type="text" placeholder="Line Two" onChange={(e)=>{updateAddTwo(e.target.value)}}/>
                    <input type="text" placeholder="Line Three" onChange={(e)=>{updateAddThree(e.target.value)}}/>
                
                    
                    <Link to="/wTen"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state){
    const {addressOne, addressTwo, addressThree} = state;
    return{
        addressOne,
        addressTwo,
        addressThree
    }

}

export default connect(mapStateToProps, {updateAddOne, updateAddThree, updateAddTwo})( WizardNine);