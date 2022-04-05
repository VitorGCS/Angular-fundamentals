import {Component} from "@angular/core";

@Component({
    selector: 'app-server',
    template: `<p 
      [ngStyle]="{backgroundColor: getColor()}" 
      [ngClass]="{online: serverStatus === 'online'}">
      with ID {{serverId}} is {{getServerStatus()}}
      </p>`,
    styles: [`
      .online{
        color: white;
      }
    `]
  })
export class ServerComponent {
    serverId: number = 40;
    serverStatus: string = 'online';

    constructor(){
      this.serverStatus = Math.random() > 0.5? 'online':'offline';
    }

    getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online'? 'green': 'red';
  }
}
