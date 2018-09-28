import { ListItem } from "./list-item.model";

export class List{
    id : Number;
    title : String;
    createDate : Date;
    finishedDate : Date;
    finished : Boolean;
    items : ListItem[];

    constructor( title : String ){
        this.title = title;
        this.finished = false;
        this.createDate = new Date();
        this.items = [];
        this.id = new Date().getTime();
    }
}