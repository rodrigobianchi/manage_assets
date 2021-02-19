import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from 'src/app/asset/asset.service';
import { AssetInput } from '../asset';

@Component({
  selector: 'asset-form',
  templateUrl: './asset-form.component.html'
})
export class AssetFormComponent implements OnInit {

  asset: AssetInput;
  showMsgSuccess: boolean = false;
  errors: String[];
  assetId: String;

  constructor(
    private service: AssetService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.asset = new AssetInput();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.assetId = (params['assetId']);
      if (this.assetId) {
        this.service.findById(this.assetId)
        .subscribe(({ data }) => {
          this.asset.id = data.findAssetById.id;
          this.asset.name = data.findAssetById.name;
          this.asset.serialNumber = data.findAssetById.serialNumber;
          this.asset.maker = data.findAssetById.maker;
          this.asset.estimatedValue = data.findAssetById.estimatedValue;
        });
      }
    });
  }

  onSubmit() {
    if (this.assetId) {
      this.service.update(this.asset)
        .subscribe(data => {
          this.showMsgSuccess = true;
          this.errors = [];
        }
          , error => {
            this.showMsgSuccess = false;
            this.errors = [error];
          })

    } else {

      this.service.save(this.asset)
        .subscribe(data => {
          this.showMsgSuccess = true;
          this.errors = [];
        }
          , error => {
            this.showMsgSuccess = false;
            this.errors = [error];
          })

          console.log(this.asset)
    }
  }

  currencyInputChanged(value) {
    var num = value.replace(/[$,]/g, "");
    return Number(num);
  }

  returnSearch() {
    this.router.navigate(['/asset'])
  }

}
