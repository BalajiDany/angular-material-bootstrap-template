import { Component, OnInit } from '@angular/core';
import { SeoManagerService } from 'src/app/@core/services/seo-manager.service';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'app-server-error',
    templateUrl: './server-error.component.html',
    styleUrls: ['./server-error.component.scss']
})
export class ServerErrorComponent implements OnInit {

    errorCode: string = '500';

    constructor(
        private translocoService: TranslocoService,
        private seoManagerService: SeoManagerService,
    ) {
        this.setPageTitle();
    }

    ngOnInit(): void {
    }

    private setPageTitle(): void {
        this.translocoService.selectTranslate('errorPageTitle', { errorCode: this.errorCode }, { scope: 'errors' })
            .subscribe(pageTitle => this.seoManagerService.setTitle(pageTitle));
    }

}
