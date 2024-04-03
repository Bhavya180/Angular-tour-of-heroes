import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  imports: [
    ServerModule,
    HeroesComponent
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
