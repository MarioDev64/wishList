import { Component, Input } from "@angular/core";
import { wishesService } from "../../services/wishes.service";
import { NavController, AlertController, ItemSliding } from "ionic-angular";
import { AddListComponent } from "../../pages/addList/addList.component";
import { List } from "../../models";


@Component({
    selector: 'app-lists',
    templateUrl: 'lists.component.html'
})

export class ListsComponent{

    @Input() listFinished : boolean = false;
    
    constructor(public wishesService:wishesService, private navCtrl: NavController, private alertCtrl : AlertController){
    }

    listSelected(list:List){
        this.navCtrl.push(AddListComponent, {
            title: list.title,
            list: list
        })
    }

    deleteList(list : List){
        this.wishesService.deleteList(list);
    }

    updateListTitle(list, slidingItems : ItemSliding){
        slidingItems.close();
        const alert = this.alertCtrl.create({
            title: 'Edit Title',
            message: 'Change the List Title',
            inputs: [{
                name: 'title',
                placeholder: 'Type the name of the list',
                value: list.title
            }],
            buttons: [{
                text: 'Cancel',
            },
            {
                text: 'Done',
                handler: data => {
                    let title = data.title.trim();
                        
                    if(title.length == 0){
                        return false;
                    }

                    list.title = data.title;
                    this.wishesService.saveInStorage();
                    
                }
            }]
        });

        alert.present();
    }
}