import { reducer, StateType, TOGGLE_COLLAPSED } from "./reducer"

test('reducer toggles value',()=>{

const state: StateType = {collapsed:false}

const newState = reducer(state,{type:TOGGLE_COLLAPSED})

expect(newState.collapsed).toBe(true)

})