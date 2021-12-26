import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCakes } from '../redux';
const HooksCakeContainer = () => {
    const numOfCakes =  useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCakes())}>Bye cake</button>
        </div>
    );
};

export default HooksCakeContainer;