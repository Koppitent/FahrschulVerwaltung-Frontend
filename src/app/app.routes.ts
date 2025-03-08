import { Routes } from '@angular/router';
import { UiHeaderComponent } from './ui-header/ui-header.component';
import { FahrschuelerOverviewComponent } from './fahrschueler/fahrschueler-overview/fahrschueler-overview.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OverviewComponent } from './overview/overview.component';
import { FahrschuelerAddComponent } from './fahrschueler/fahrschueler-add/fahrschueler-add.component';
import { FahrlehrerAddComponent } from './fahrlehrer/fahrlehrer-add/fahrlehrer-add.component';
import { FahrlehrerOverviewComponent } from './fahrlehrer/fahrlehrer-overview/fahrlehrer-overview.component';
import { PraxisstundeCreateComponent } from './praxisstunden/praxisstunde-create/praxisstunde-create.component';

export const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'fahrschueler', component: FahrschuelerOverviewComponent },
  { path: 'create-fahrschueler', component: FahrschuelerAddComponent },
  { path: 'fahrlehrer', component: FahrlehrerOverviewComponent },
  { path: 'create-fahrlehrer', component: FahrlehrerAddComponent },
  { path: 'create-praxis', component: PraxisstundeCreateComponent },
  { path: '**', component: NotFoundComponent },
];
