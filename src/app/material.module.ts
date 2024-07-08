import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardActions, MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule, MatIconModule } from "@angular/material";



@NgModule({
    exports:[
       MatButtonModule,
       MatCardModule,
       MatInputModule,
       MatSelectModule,
       MatIconModule,
       MatDialogModule,
      
    ]
})
export class MaterialModule{}