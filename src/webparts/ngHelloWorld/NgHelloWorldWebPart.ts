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

  public render(): void {
    let ngElement = this.domElement.getElementsByTagName('hello-world')[0]

    if(ngElement) {
      this.domElement.removeChild(ngElement);
    }

    const ElementHelloWorld = customElements.get('hello-world');
    const element = new ElementHelloWorld();
    element.description = this.properties.description;
    this.domElement.appendChild(element);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: 'Hello World with Angular Elements Configuration'
          },
          groups: [
            {
              groupName: "Options",
              groupFields: [
                PropertyPaneTextField('description', {
                  label: "Description"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
