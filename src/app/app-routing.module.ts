import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchBoxComponent} from "./find-property/search-box/search-box.component";

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    declarations: [
        SearchBoxComponent
    ],
    exports: [RouterModule, SearchBoxComponent]
})
export class AppRoutingModule { }
