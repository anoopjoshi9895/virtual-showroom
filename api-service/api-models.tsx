export interface ICarSeries {
  productID?: string;
  name: string;
  seriesName: string;
  seriesKey: string;
  modelCode: string;
  leftFacingImage: string;
  rightFacingImage: string;
  productImages?: string[];
  availableColors?: AvailableOption[];
}
export interface AvailableOption {
  variantID: string;
  customOptionID: string;
  variantCode: string;
  variantName: string;
  isDefault: string;
  selected: string;
  thumbNail: string;
  productImage?: string;
  productImages?: string[];
}

export interface ColorVariantDetails {
  productID: string;
  productTitle: string;
  productShortDescription: string;
  bodyStyle: string;
  variantCode: string;
  year: string;
  monthlyInstallment: string;
  leasePrice: string;
  offerPrice: string;
  brandName: string;
  productMinBuyLimit: string;
  availableColors: AvailableOption[];
}

export interface IConfigurationDetails {
  productID: string;
  productTitle: string;
  productShortDescription: string;
  bodyStyle: string;
  variantCode: string;
  year: string;
  monthlyInstallment: string;
  leasePrice: string;
  offerPrice: string;
  brandName: string;
  productMinBuyLimit: string;
  availableColors: AvailableOption[];
  availableUpholstery: AvailableOption[];
  availableWheels: AvailableOption[];
  availableTrim: AvailableOption[];
}

export interface SpecificationDetail {
  profileCode: string;
  value: string;
}

export interface ShowRoomsList {
  showroomID: string;
  name: string;
}

export interface ConfigDetails {
  productID: string;
  productTitle: string;
  productShortDescription: string;
  bodyStyle: string;
  variantCode: string;
  year: string;
  monthlyInstallment: string;
  leasePrice: string;
  offerPrice: string;
  brandName: string;
  productMinBuyLimit: string;
  specificationDetails: SpecificationDetail[];
  showRoomsList: ShowRoomsList[];
  availableColors: AvailableOption[];
  availableUpholstery: AvailableOption[];
  availableWheels: AvailableOption[];
  availableTrim: AvailableOption[];
}
