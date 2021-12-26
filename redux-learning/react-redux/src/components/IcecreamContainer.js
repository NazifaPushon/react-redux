import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyIcecream } from '../redux';
const IcecreamContainer = () => {
    const numOfIcecream =  useSelector(state => state.iceCream.numOfIcecream)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Number of Ice cream - {numOfIcecream}</h1>
            <button onClick={() => dispatch(buyIcecream())}>Buy Icecream</button>
        </div>
    );
};

export default IcecreamContainer;