import { createFeatureSelector, createSelector } from "@ngrx/store";
import { blogModel, blogs } from "./blog.model";

const getblogstate=createFeatureSelector<blogs>('blog');
export const getBlog=createSelector(getblogstate,(state)=>{
    return state.bloglist;
})