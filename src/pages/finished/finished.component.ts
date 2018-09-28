import { Component } from "@angular/core";
import { wishesService } from "../../services/wishes.service";
import { List } from "../../models";
import { NavController, AlertController } from "ionic-angular";
import { AddListComponent } from "../addList/addList.component";

@Component({
    selector: 'page-finished',
    templateUrl: 'finished.component.html'
})

export class FinishedComponent{

    constructor(public wishesService:wishesService, private navCtrl: NavController, private alertCtrl : AlertController){

    }

    listSelected(list:List){
        console.log(list);
        this.navCtrl.push(AddListComponent, {
            title: list.title,
            list: list
        })
    }

    addAList(){
        const alert = this.alertCtrl.create({
            title: 'New List',
            message: 'Name of the New List',
            inputs: [{
                name: 'title',
                placeholder: 'Type the name of the new list'
            }],
            buttons: [{
                text: 'Cancel',
            },
            {
                text: 'Done',
                handler: data => {
                    let title = data.title.trim();
                        
                    if(title.length == 0){
                        return;
                    }

                    this.navCtrl.push(AddListComponent, {
                        title: title
                    });
                }
            }]
        });

        alert.present();
    }

    deleteList(list : List){
        this.wishesService.deleteList(list);
    }

}