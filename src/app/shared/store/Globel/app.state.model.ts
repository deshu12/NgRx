import { blogModel } from "../blog/blog.model";
import { counterModel } from "../counter.model";

export interface AppstateModel{
    counter:counterModel;
    blog:blogModel
}