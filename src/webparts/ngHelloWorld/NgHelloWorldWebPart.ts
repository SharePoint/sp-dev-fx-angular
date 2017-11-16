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
    this.domElement.innerHTML = `<insert element here>`
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
