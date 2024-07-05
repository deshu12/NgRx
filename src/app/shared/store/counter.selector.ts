import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterModel } from "./counter.model";

const getcounterstate=createFeatureSelector<counterModel>('counter');
export const getCounter=createSelector(getcounterstate,(state)=>{
    return state.counter;
})
export const getChannalName=createSelector(getcounterstate,(state)=>{
    return state.channalName;
})