import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";


@NgModule({
    exports:[
       MatButtonModule,
       MatCardModule,
       MatInputModule,
       MatSelectModule
    ]
})
export class MaterialModule{}