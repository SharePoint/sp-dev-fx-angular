import { Component, NgModule, Input, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { GraphHttpClient, HttpClientResponse, IGraphHttpClientOptions } from '@microsoft/sp-http'

export interface IOffice365Group {
  displayName: string;
  mail: string;
  description: string;
 }

@Component({
  selector: 'ms-graph-demo',
  templateUrl: `./graph-demo.html`,
  styleUrls: [ './graph-demo.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class GraphDemo {
  @Input() context: WebPartContext;

  groups:Promise<IOffice365Group[]>

  ngOnInit(){
    if(!this.context){
      console.error('you forgot to set the context!');
    }
    this.groups = this.context.graphHttpClient.get(`v1.0/groups?$orderby=displayName`, GraphHttpClient.configurations.v1)
      .then(res => res.json())
      .then(res => res.value)
      .catch(err => console.log(err));
  }

}

@NgModule({
  imports: [BrowserModule],
  declarations: [GraphDemo],
  entryComponents: [GraphDemo]
})
export class GraphDemoModule {
  ngDoBootstrap(){}
}
