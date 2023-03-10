import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {translateConfiguration} from './config/translate.config';
import {IsAuthenticatedDirective} from './directives/is-authenticated.directive';
import {IsAnonymousDirective} from './directives/is-anonymous.directive';
import {ArticleCategoryService} from './services/article/article-category.service';
import {DateViewerComponent} from './components/date-viewer/date-viewer.component';
import {DateService} from './services/date/date.service';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import {TranslateFirstErrorPipe} from './pipes/first-form-error-key.pipe';
import {ConfirmDialogComponent} from './components/confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {SnackbarService} from './services/snackbar/snackbar.service';

@NgModule({
  declarations: [
    IsAuthenticatedDirective,
    IsAnonymousDirective,
    DateViewerComponent,
    TranslateFirstErrorPipe,
    ConfirmDialogComponent,
  ],
  imports: [
    TranslateModule.forRoot(translateConfiguration),
    MatTooltipModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    TranslateModule,
    IsAuthenticatedDirective,
    IsAnonymousDirective,
    DateViewerComponent,
    TranslateFirstErrorPipe,
  ],
  providers: [
    ArticleCategoryService,
    DateService,
    SnackbarService,
    {
      provide: ErrorStateMatcher,
      useClass: ShowOnDirtyErrorStateMatcher,
    },
  ],
})
export class SharedModule {
}
