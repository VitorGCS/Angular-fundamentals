import {Component} from "@angular/core";

@Component({
    selector: 'app-server',
    template: `<p>{{'Servers'}} with ID {{serverId}} is {{getServerStatus()}} </p>`
  })
export class ServerComponent {
    serverId: number = 40;
    serverStatus: string = 'online';

    getServerStatus(){
    return this.serverStatus;
  }
}
