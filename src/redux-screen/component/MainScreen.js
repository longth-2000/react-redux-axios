import React, { Component, useEffect, useState } from 'react';
import showFirstScreen from "../action/showFirstScreen"
import showSecondScreen from "../action/showSecondScreen"
import showThirdScreen from "../action/showThirdScreen"
import {useSelector, useDispatch} from 'react-redux'

import { connect } from 'react-redux'
const MainScreen = () => {
    const screen = useSelector(state => state.screen)
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => {dispatch({type:'SHOW_FIRST'})}}>oke1</button>
            <button onClick={() => {dispatch({type:'SHOW_SECOND'})}} >oke2</button>
            <button onClick={() => {dispatch({type:'SHOW_THIRD'})}} >oke3</button>
            <div><h1>{screen}</h1></div>
        </div>
    )

}

export default MainScreen;