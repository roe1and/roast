import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
    imports: [
        MatToolbarModule,
        MatSelectModule,
        MatCardModule,
        MatButtonModule,
        MatGridListModule,

    ],
    exports: [
        MatToolbarModule,
        MatSelectModule,
        MatCardModule,
        MatButtonModule,
        MatGridListModule,

    ]
})
export class MaterialModule { }