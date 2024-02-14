import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/messages.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
