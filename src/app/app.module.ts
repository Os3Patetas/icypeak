import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { GamesComponent } from "./games/games.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    GamesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        component: HomeComponent,
        data: { title: "Home Component", description: "" },
      },
      {
        path: "",
        component: HeaderComponent,
        data: { title: "Header Component", description: "" },
      },
      {
        path: "",
        component: FooterComponent,
        data: { title: "Footer Component", description: "" },
      },
      {
        path: "games",
        component: GamesComponent,
        data: { title: "Games Component", description: "" },
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
