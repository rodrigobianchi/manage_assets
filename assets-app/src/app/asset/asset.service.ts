import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AssetInput } from './asset';
import { Observable } from 'rxjs';
import { Apollo } from "apollo-angular";
import { SAVE_ASSET, FIND_ALL_ASSETS, DELETE_ASSET, FIND_ASSET_BY_ID } from '../graphql/asset/graphql';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private http: HttpClient,
    private apollo: Apollo) {
  }

  save(asset: AssetInput): Observable<any> {
    return this.apollo.mutate<any>({
      mutation: SAVE_ASSET,
      variables: {
        asset: asset
      }
    });
  }

  update(asset: AssetInput): Observable<any> {
    return this.apollo.mutate<any>({
      mutation: SAVE_ASSET,
      variables: {
        asset: asset
      }
    });
  }

  findAll(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: FIND_ALL_ASSETS,
      variables: {
        orderBy: "name"
      }
    })
    .valueChanges
  }

  findById(assetId: String): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: FIND_ASSET_BY_ID,
      variables: {
        assetId: assetId
      }
    })
    .valueChanges
  }

  delete(assetId: String): Observable<any> {
    return this.apollo.mutate<any>({
      mutation: DELETE_ASSET,
      variables: {
        assetId: assetId
      }
    })
  }

}
