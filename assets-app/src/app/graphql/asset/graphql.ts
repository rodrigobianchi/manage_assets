import gql from "graphql-tag";

export const SAVE_ASSET = gql`
  mutation ($asset: AssetInput) {
    saveAsset(assetInput: $asset) {
      id
      name
      serialNumber
      maker
      estimatedValue
    }
  }
`;

export const DELETE_ASSET = gql`
  mutation ($assetId: String) {
    deleteAsset(assetId: $assetId)
  }
`;

export const FIND_ALL_ASSETS = gql`
  query ($orderBy : String) {
    findAllAssets(orderBy: $orderBy) {
      id
      name
      serialNumber
      maker
      estimatedValue
    }
  }
`;

export const FIND_ASSET_BY_ID = gql`
  query ($assetId : String) {
    findAssetById(assetId: $assetId) {
      id
      name
      serialNumber
      maker
      estimatedValue
    }
  }
`;