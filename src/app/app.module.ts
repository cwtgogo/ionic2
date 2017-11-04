import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ActionSheetsPage } from '../pages/action-sheets/action-sheets';
import { AlertsPage } from '../pages/alerts/alerts';
import { BadgesPage } from '../pages/badges/badges';
import { ButtonsPage } from '../pages/buttons/buttons';
import { CardsPage } from '../pages/cards/cards';
import { BasicCardPage } from '../pages/basic-card/basic-card';
import { ListCardPage } from '../pages/list-card/list-card';
import { ImageCardPage } from '../pages/image-card/image-card';
import { BackgroundCardPage } from '../pages/background-card/background-card';
import { SocialCardPage } from '../pages/social-card/social-card';
import { MapCardPage } from '../pages/map-card/map-card';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { DateTimePage } from '../pages/date-time/date-time';
import { FabsPage } from '../pages/fabs/fabs';
import { GesturesPage } from '../pages/gestures/gestures';
import { GridPage } from '../pages/grid/grid';
import { IconsPage } from '../pages/icons/icons';
import { InputsPage } from '../pages/inputs/inputs';
import { FixedInlineInputPage } from '../pages/fixed-inline-input/fixed-inline-input';
import { FloatingInputPage } from '../pages/floating-input/floating-input';
import { InlineInputPage } from '../pages/inline-input/inline-input';
import { InsetInputPage } from '../pages/inset-input/inset-input';
import { PlaceholderInputPage } from '../pages/placeholder-input/placeholder-input';
import { StackedInputPage } from '../pages/stacked-input/stacked-input';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ActionSheetsPage,
    AlertsPage,
    BadgesPage,
    ButtonsPage,
    CardsPage,
    BasicCardPage,
    ListCardPage,
    ImageCardPage,
    BackgroundCardPage,
    SocialCardPage,
    MapCardPage,
    CheckboxPage,
    DateTimePage,
    FabsPage,
    GesturesPage,
    GridPage,
    IconsPage,
    InputsPage,
    FixedInlineInputPage,
    FloatingInputPage,
    InlineInputPage,
    InsetInputPage,
    PlaceholderInputPage,
    StackedInputPage,
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ActionSheetsPage,
    AlertsPage,
    BadgesPage,
    ButtonsPage,
    CardsPage,
    BasicCardPage,
    ListCardPage,
    ImageCardPage,
    BackgroundCardPage,
    SocialCardPage,
    MapCardPage,
    CheckboxPage,
    DateTimePage,
    FabsPage,
    GesturesPage,
    GridPage,
    IconsPage,
    InputsPage,
    FixedInlineInputPage,
    FloatingInputPage,
    InlineInputPage,
    InsetInputPage,
    PlaceholderInputPage,
    StackedInputPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
