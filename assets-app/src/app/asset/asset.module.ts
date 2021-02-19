import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetRoutingModule } from './asset-routing.module';
import { AssetFormComponent } from './asset-form/asset-form.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AssetFormComponent, 
    AssetListComponent],
  imports: [
    CommonModule,
    AssetRoutingModule,
    FormsModule
  ],
  exports: [
    AssetFormComponent,
    AssetListComponent
  ]
})
export class AssetModule { }
