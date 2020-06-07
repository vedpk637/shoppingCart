import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ProductComponent } from './product/product.component';
import { MatButtonModule} from '@angular/material/button';
import { MatListModule} from '@angular/material/list';
import { MatDividerModule} from '@angular/material/divider';
import { MatBadgeModule} from '@angular/material/badge';
import { RouterModule } from '@angular/router';
import { MatCardModule} from '@angular/material/card';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatTableModule} from '@angular/material/table';
import { MatDialogModule} from '@angular/material/dialog';


const materialModule=[
  MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatBadgeModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule
]

@NgModule({    
  declarations:[
    ProductComponent,
    HeaderComponent,
    SideNavComponent,
  ],  
  imports: [
    CommonModule,
    materialModule,
    RouterModule
  ],
  exports:[materialModule,
    ProductComponent,
    HeaderComponent,
    SideNavComponent,]
})
export class ProductModule { }
