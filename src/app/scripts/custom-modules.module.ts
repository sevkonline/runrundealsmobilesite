import {
    NgModule
} from '@angular/core';
import {
    ExportedClass as Rating
} from './custom/Rating';
@NgModule({
    declarations: [],
    imports: [],
    exports: [
        Rating,
    ]
})
export class CustomModulesModule {}