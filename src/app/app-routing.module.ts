import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlayerListComponent} from './player-list/player-list.component';
import {PlayerCreateComponent} from './player-create/player-create.component';
import {PlayerEditComponent} from './player-edit/player-edit.component';
import {PlayerDetailComponent} from './player-detail/player-detail.component';

const routes: Routes = [{
  path: '',
  component: PlayerListComponent,
}, {
  path: 'players/create',
  component: PlayerCreateComponent,
}, {
  path: 'players/:id/edit',
  component: PlayerEditComponent,
}, {
  path: 'players/:id/detail',
  component: PlayerDetailComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
