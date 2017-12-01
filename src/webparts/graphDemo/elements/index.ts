//web components ES5 shim
import '../../../elements/wc-shim'
import { registerAsCustomElements } from '@angular/elements';
import { platformBrowser } from '@angular/platform-browser'

import { GraphDemo, GraphDemoModule } from './graph-demo'
import { GraphDemoModuleNgFactory } from './graph-demo.ngfactory'

registerAsCustomElements(
  [ GraphDemo ],
  () => platformBrowser().bootstrapModuleFactory(GraphDemoModuleNgFactory))
.catch(err => console.log(err));
