// Imports
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./admin-routing-module";

//Components
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminAddComponent } from "./admin-add/admin-add.component";
import { AdminEditComponent } from "./admin-edit/admin-edit.component";
import { AdminListComponent } from "./admin-list/admin-list.component";

@NgModule({
    declarations: [
      AdminMainComponent,
      AdminEditComponent,
      AdminListComponent,
      AdminAddComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule
    ],
    providers: [
      
    ],
    bootstrap: []
  })
  export class AdminModule { }