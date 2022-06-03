import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {
   @Input('srvElement') element: {type: string, name:string, content:string};

   @ViewChild('heading', {static:true}) header: ElementRef;
   @ContentChild('contentParagraph', {static:true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called');
    console.log('Changes'+ changes);

  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('The viewChild'+ this.header.nativeElement.textContent);
    console.log('The contentChild'+ this.paragraph.nativeElement.textContent);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    console.log('The contentChild'+ this.paragraph.nativeElement.textContent);
  }
}
