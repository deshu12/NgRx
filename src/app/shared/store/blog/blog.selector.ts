import { createFeatureSelector, createSelector } from "@ngrx/store";
import { blogModel } from "./blog.model";

const getblogstate=createFeatureSelector<blogModel[]>('blog');
export const getBlog=createSelector(getblogstate,(state)=>{
    return state;
})