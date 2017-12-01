//web components ES5 shim
import '../../../elements/wc-shim'
import { registerAsCustomElements } from '@angular/elements';
import { platformBrowser } from '@angular/platform-browser'

import { HelloWorld, HelloWorldModule } from './hello-world'
import { HelloWorldModuleNgFactory } from './hello-world.ngfactory'

registerAsCustomElements(
  [HelloWorld],
  () => platformBrowser().bootstrapModuleFactory(HelloWorldModuleNgFactory))
  .catch(err => console.log(err));
