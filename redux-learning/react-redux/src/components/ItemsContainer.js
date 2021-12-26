import React from 'react';
import { connect } from 'react-redux';
import { buyCakes, buyIcecream } from '../redux';

const ItemsContainer = (props) => {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>buy </button>
        </div>
    );
};
const mapStoreToProps = (state,ownProps) => { 
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIcecream
    return {
       item:itemState
    }
}

const mapDispatchToProps = (dispatch,ownProps) =>{
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCakes()) :() => dispatch(buyIcecream())
    return {
        buyItem : dispatchFunction
    }
}

export default connect(mapStoreToProps,mapDispatchToProps)(ItemsContainer);