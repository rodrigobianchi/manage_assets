import { Component, OnInit } from '@angular/core';
import { AssetService } from 'src/app/asset/asset.service';
import { AssetInput } from '../asset';

@Component({
  selector: 'asset-list',
  templateUrl: './asset-list.component.html'
})
export class AssetListComponent implements OnInit {

  assets: AssetInput[] = [];
  assetSelected: AssetInput;
  msgSuccess: String;
  msgError: String;

  constructor(
    private service: AssetService) {
  }

  ngOnInit(): void {
    this.service.findAll()
      .subscribe(({ data }) => {
        this.assets = data.findAllAssets;
      });
  }

  prepareDelete(asset: AssetInput) {
    this.assetSelected = asset;
  }

  deleteAsset() {
    this.service.delete(this.assetSelected.id)
      .subscribe(data => {
        this.msgSuccess = 'Record deleted successfully';
        this.assets = this.assets.filter(item => item !== this.assetSelected);
      },
      error => this.msgError = 'An error occurred while deleting the record'
      )

  }

}
