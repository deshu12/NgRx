import { createReducer, on } from "@ngrx/store";
import { blogState } from "./blog.state";
import { loadblog } from "./blog.action";

const _blogReducer = createReducer(blogState,
    on(loadblog,(state) => {
   return{
       ...state,
    
   }
})

)

export function blogReducer(state:any,action:any){
   return _blogReducer(state,action);
}