import './elements'
import { NgElement } from '@angular/elements'
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
    if(!this.renderedOnce){
      const GraphDemoEl = customElements.get('ms-graph-demo');
      const element = new GraphDemoEl();
      element.context = this.context;
      this.domElement.appendChild(element);
      this.graphElement = element;
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
