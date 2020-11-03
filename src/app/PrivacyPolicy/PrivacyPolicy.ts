import {
    Component,
    ChangeDetectorRef
} from '@angular/core';
import {
    ApperyioHelperService
} from '../scripts/apperyio/apperyio_helper';
import {
    ApperyioMappingHelperService
} from '../scripts/apperyio/apperyio_mapping_helper';
import {
    $aio_empty_object
} from '../scripts/interfaces';
@Component({
    templateUrl: 'PrivacyPolicy.html',
    selector: 'page-privacy-policy',
    styleUrls: ['PrivacyPolicy.scss']
})
export class PrivacyPolicy {
    public currentItem: any = null;
    public mappingData: any = {};
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef) {
    }
}