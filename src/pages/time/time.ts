import { Component } from '@angular/core';

@Component({
  templateUrl: 'time.html'
})

export class TimeDetails {
    mytimeout = null;
    time: any;
    atTime = 0;
    duraTion:any;
    constructor() { 
        if (typeof(Storage) !== "undefined") {
        this.duraTion = parseInt(localStorage.getItem('duraTion')) || 10;
        }
        this.startTimer();
    }
    onTimeout = function() {
        if(this.time ===  0) {
            clearInterval(this.mytimeout);
            return 0;
        }
        else{
            this.time --;       
        }
    };
    startTimer(){
        this.time = this.duraTion;      
        var _this = this;
        this.mytimeout = setInterval(function(){
            _this.onTimeout();
        }, 1000);
    }
    start_stopTimer(){

        if(this.time == 0)
        {
            this.time = this.duraTion;
            this.atTime = 1;
        }
        if(this.atTime == 0){
            this.atTime = 1;
            this.time = this.duraTion;
            clearTimeout(this.mytimeout);
        }
        else{
            this.atTime = 0;
            this.startTimer();
        }
    }
}
