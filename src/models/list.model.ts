import { ListItem } from "./list-item.model";

export class List{
    id : Number;
    title : String;
    createDate : Date;
    finishedDate : Date;
    wasFinished : Boolean;
    items : ListItem[];

    constructor( title : String ){
        this.title = title;
        this.wasFinished = false;
    }
}