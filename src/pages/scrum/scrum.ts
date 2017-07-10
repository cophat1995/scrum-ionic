import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { NavController, NavParams,ModalController } from 'ionic-angular';
import { ScrumDetails } from '../scrum-details/scrum-details';
import { TimeDetails } from '../time/time';

@Component({
    selector:'scrum',
    templateUrl: 'scrum.html'
})
export class Scrum { 
    IMG_SEQUENCE = ['assets/coffee.png']
    SPECIAL_SEQUENCE = ['$'];
    FIBONACI_SEQUENCE = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    NATURAL_SEQUENCE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    PLANING_POCKER_SEQUENCE = [0, 1/2, 1, 2, 3, 5, 8, 13, 20, 40];
    T_SHIRT_SEQUENCE = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
    arrCard = [];
    bgColor = 'white';
    selectedItem: any;
    scrumPoker: string = "ppoker"
    maxCardNumber;

    constructor(storage: Storage,
        public navCtrl: NavController, 
        public navParams: NavParams, 
        public modalCtrl: ModalController){      
        var sequenceType; // fibonaci, planing-pocker, natural, t-shirt
        var backgroundColor; // default is #fffff;\
        if (typeof(Storage) !== "undefined") {
            backgroundColor = localStorage.getItem('backgroundColor');
            this.maxCardNumber = parseInt(localStorage.getItem('maxCardNumber')) || 200;
        }
        if(sequenceType == null){
            sequenceType = "fibonaci"; // fibonaci, planing-pocker, natural, t-shirt
        }
        if(backgroundColor == null){
            backgroundColor = "white"; // white, gray, cyan
        }
        this.bgColor = backgroundColor;
        var curSequenceArray = this.PLANING_POCKER_SEQUENCE; //default = Planning Poker
        for(var i = 0; i < curSequenceArray.length; i++) {
            if(curSequenceArray[i] <= this.maxCardNumber) {
                if (curSequenceArray[i] == 0.5) {
                    this.arrCard[i] = "1/2";
                } else {
                    this.arrCard[i] = "" + curSequenceArray[i];
                }
            }
        }
        var maxCard = curSequenceArray.length + this.SPECIAL_SEQUENCE.length;
        for(var i = curSequenceArray.length; i < maxCard; i++)
            this.arrCard[i] = "" + this.SPECIAL_SEQUENCE[i-curSequenceArray.length];
    }

    itemTapped(event, item) {
        this.navCtrl.push(ScrumDetails, { item: item });
    }
    timeOver(){
        this.navCtrl.push(TimeDetails);
    }
    changeSegment() {
        if (typeof(Storage) !== "undefined") {
            this.maxCardNumber = parseInt(localStorage.getItem('maxCardNumber')) || 200;
        }
        var curSequenceArray = [];
        this.arrCard = [];

        if(this.scrumPoker == "fibonacci") {
            curSequenceArray = this.FIBONACI_SEQUENCE;
        } else if(this.scrumPoker == "ppoker") {
            curSequenceArray = this.PLANING_POCKER_SEQUENCE;
        } else if(this.scrumPoker == "natural") {
            curSequenceArray = this.NATURAL_SEQUENCE;
        } else if(this.scrumPoker == "tshirt") {
            curSequenceArray = this.T_SHIRT_SEQUENCE;
        }
        if(this.scrumPoker != "tshirt"){
            for(var i = 0; i < curSequenceArray.length; i++) {
                if(curSequenceArray[i] <= this.maxCardNumber) {
                    if (curSequenceArray[i] == 0.5) {
                        this.arrCard[i] = "1/2";
                    } else {
                        this.arrCard[i] = "" + curSequenceArray[i];
                    }
                }
            }
            var maxCard = curSequenceArray.length + this.SPECIAL_SEQUENCE.length;
            for(var i = curSequenceArray.length; i < maxCard; i++)
                this.arrCard[i] = "" + this.SPECIAL_SEQUENCE[i-curSequenceArray.length];
        } else {
            this.arrCard = this.T_SHIRT_SEQUENCE;
        }
    }

}
