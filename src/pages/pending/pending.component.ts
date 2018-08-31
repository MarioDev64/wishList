import { Component } from "@angular/core";
import { wishService } from "../../services/wish.service";

@Component({
    selector: 'page-pending',
    templateUrl: 'pending.component.html'
})

export class PendingComponent{
    constructor(public wishService:wishService){

    }
}