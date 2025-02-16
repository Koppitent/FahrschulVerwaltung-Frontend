import { Routes } from '@angular/router';
import { UiHeaderComponent } from './ui-header/ui-header.component';
import { FahrschuelerOverviewComponent } from './fahrschueler-overview/fahrschueler-overview.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OverviewComponent } from './overview/overview.component';
import { FahrschuelerAddComponent } from './fahrschueler-add/fahrschueler-add.component';

export const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'fahrschueler', component: FahrschuelerOverviewComponent },
  { path: 'create-fahrschueler', component: FahrschuelerAddComponent },
  { path: '**', component: NotFoundComponent },
];
