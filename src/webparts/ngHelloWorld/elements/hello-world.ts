import { Component, NgModule, Input, ViewEncapsulation } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';
import { WebPartContext } from '@microsoft/sp-webpart-base';

@Component({
  selector: 'hello-world',
  templateUrl: `./hello-world.html`,
  styleUrls: [ './hello-world.scss' ],
  host: {
    class: 'hello-world'
  },
  encapsulation: ViewEncapsulation.None
})
export class HelloWorld {
  @Input() name = 'Angular'
  @Input() context: WebPartContext;
}

@NgModule({
  imports: [BrowserModule],
  declarations: [HelloWorld],
  entryComponents: [HelloWorld]
})
export class HelloWorldModule {
  ngDoBootstrap(){}
}
