import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCakes } from '../redux';

const NewCakeContainer = (props) => {
    const [number,setNumber] = useState(1)
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
            <button onClick={() => props.buyCakes(number)}>Buy {number} cakes</button>
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
      buyCakes :number => dispatch(buyCakes(number))
    }
  }
export default connect (mapStoreToProps,mapDispatchToProps)(NewCakeContainer);