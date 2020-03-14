import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    imports: [
        MatToolbarModule,
        MatSelectModule,

    ],
    exports: [
        MatToolbarModule,
        MatSelectModule,

    ]
})
export class MaterialModule { }