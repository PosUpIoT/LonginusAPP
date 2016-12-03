import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PostPage } from '../pages/post/post';

import { PostService } from '../providers/post-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    PostPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PostPage
  ],
  providers: [
    PostService
  ]
})
export class AppModule {}
