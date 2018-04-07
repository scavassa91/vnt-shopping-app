import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

// Routes
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './router/app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './shopping-list/shopping-list-item/shopping-list-item.component';
import { AboutComponent } from './about/about.component';

// Services
import { ShoppingListService } from './services/shopping-list.service';
import { AuthService } from './services/auth.service';

// Http Client
import { HttpClientModule } from '@angular/common/http';

// Pesquisar sobre activated route
// CanActivateChild, CanDeactivate, CanLoad

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    ShoppingListService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
