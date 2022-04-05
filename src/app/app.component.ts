import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
  .colorLetter{
    color:white;
  }
  h3 {
    color: dodgerblue;
  }`]
})
export class AppComponent {
  title = 'angular-project';
  userName:string = '';
  displayContent = false;
  log=[];
  
  onToggleDisplay(){
    this.displayContent = !this.displayContent;
    /* this.log.push(this.log.length + 1); */
    this.log.push(new Date());
  }
}
