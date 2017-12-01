import './elements'
import { GraphDemo } from './elements/graph-demo'

import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

export default class GraphDemoWebPartWebPart extends BaseClientSideWebPart<GraphDemo> {
  graphElement: HTMLElement;

  public render(): void {
    let ngElement = this.domElement.getElementsByTagName('ms-graph-demo')[0]

    if(ngElement) {
      this.domElement.removeChild(ngElement);
    }

    const ElementHelloWorld = customElements.get('ms-graph-demo');
    const element = new ElementHelloWorld();
    element.context = this.context;
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
            description: 'Graph Demo'
          },
          groups: [
            {
              groupName: 'Options',
              groupFields: [
                PropertyPaneTextField('description', {
                  label: 'Description'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
