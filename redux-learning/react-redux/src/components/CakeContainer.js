import React from 'react';
import { connect } from 'react-redux';
import { buyCakes } from '../redux';

const CakeContainer = (props) => {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCakes}>Buy cakes</button>
        </div>
    );
};
const mapStoreToProps = state => {
    return {
      numOfCakes : state.cake.numOfCakes
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      buyCakes : () => dispatch(buyCakes())
    }
  }
export default connect (mapStoreToProps,mapDispatchToProps)(CakeContainer);