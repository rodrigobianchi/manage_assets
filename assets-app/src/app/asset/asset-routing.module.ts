import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppBaseComponent } from '../app-base/app-base.component';
import { AuthGuard } from '../security/auth.guard';
import { AssetFormComponent } from './asset-form/asset-form.component';
import { AssetListComponent } from './asset-list/asset-list.component';


const routes: Routes = [
  {
    path: 'asset', component: AppBaseComponent, canActivate: [AuthGuard], children:
      [
        {
          path: '', redirectTo: '/asset/list', pathMatch: 'full'
        },
        {
          path: 'form', component: AssetFormComponent
        },
        {
          path: 'list', component: AssetListComponent
        },
        {
          path: 'form/:assetId', component: AssetFormComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetRoutingModule { }
