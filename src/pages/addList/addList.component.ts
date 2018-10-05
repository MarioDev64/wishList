import { Component } from "@angular/core";
import { wishesService } from "../../services/wishes.service";
import { NavParams } from "ionic-angular";
import { List, ListItem } from "../../models";


@Component({
    selector: 'page-add-list',
    templateUrl: 'addList.component.html'
})

export class AddListComponent{

    list : List;
    itemDescription : string;

    constructor( public wishesService:wishesService, 
                 private navParams : NavParams){

        let title = navParams.get('title');

        if(this.navParams.get('list')){
            this.list = this.navParams.get('list');
        }else{
            this.list = new List(title);
            this.wishesService.saveList(this.list);
        }
 
    }

    addItem(){
        
        let itemDescription = this.itemDescription.trim();
        
        if(itemDescription.length == 0){
            return false;
        }
        
        const newItem = new ListItem(itemDescription);
        this.list.items.push(newItem);
        this.wishesService.saveInStorage();
        this.itemDescription = "";
    }


    updateItem( item : ListItem ){
        item.completed = !item.completed;

        const itemsPending = this.list.items.filter(itemData => {
            return !itemData.completed;
        }).length;

        if(itemsPending === 0){
            this.list.finished = true;
            this.list.finishedDate = new Date();
        }else{
            this.list.finished = false;
            this.list.finishedDate = null;
        }

        this.wishesService.saveInStorage();
    }


    deleteItem( index : number ){
        this.list.items.splice(index , 1);
        this.wishesService.saveInStorage();
    }
}