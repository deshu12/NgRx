import { createAction, props } from "@ngrx/store";
import { blogModel } from "./blog.model";

export const loadblog=createAction('loadblog')
export const addblogs=createAction('addblogs',props<{blogInput:blogModel}>())