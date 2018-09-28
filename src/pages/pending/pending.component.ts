import { Component } from "@angular/core";
import { NavController, AlertController } from "ionic-angular";
import { AddListComponent } from "../addList/addList.component";

@Component({
    selector: 'page-pending',
    templateUrl: 'pending.component.html'
})

export class PendingComponent{
    
    constructor(private navCtrl: NavController, private alertCtrl : AlertController){

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

    
}