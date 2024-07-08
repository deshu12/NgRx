import { createReducer, on } from "@ngrx/store";
import { blogState } from "./blog.state";
import { addblogs, loadblog } from "./blog.action";

const _blogReducer = createReducer(blogState,
    on(loadblog,(state) => {
   return{
       ...state,
    
   }
}),
on(addblogs,(state,action)=>{
    const _blog={...action.blogInput}
   return{ ...state,
    bloglist:[...state.bloglist,_blog]
   }
})

)

export function blogReducer(state:any,action:any){
   return _blogReducer(state,action);
}