import 'webcomponentpolyfills'
import './elements'
import { HelloWorld } from './elements/hello-world'

import { Version } from '@microsoft/sp-core-library';

import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

export default class NgHelloWorldWebPartWebPart extends BaseClientSideWebPart<HelloWorld> {
  constructor(){
    super();
  }
  ngElement: HTMLElement;
  public render(): void {
    const HelloWorldEl = customElements.get('hello-world');
    if(!this.renderedOnce){      
      const element = new HelloWorldEl();
      element.context = this.context;
      element.name = this.properties.name;
      this.domElement.appendChild(element);
      this.ngElement = element;
    }
    else{      
      this.ngElement.remove();
      const element = new HelloWorldEl();
      element.context = this.context;
      element.name = this.properties.name;
      this.domElement.appendChild(element);
      this.ngElement = element;
    }
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: 'Description'
          },
          groups: [
            {
              groupName: "Options",
              groupFields: [
                PropertyPaneTextField('name', {
                  label: "Username",
                  value: "Rob"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
