import { Category } from "./category";
import { User } from "./user"

export class Post{
    id: number;
    title: string;
    description: string;
    type: number;
    status: number;
    latitude: number;
    longitude: number;
    category: Category;
    user: User;

    constructor (){};
}