export interface IFaceLiveness {
  code: number;
  images?: string[],
  msg?: string;
  results?: IResults;
  versionDescriptor?: string;
  versionSDK?: string;
}

export interface IResults {
  faceIdx: number;
  livenessStatus: number;
  metadata: IMetaData;
}

export interface IMetaData {
  ageNear?: string;
  ageNormal?: string;
  distance?: number;
  evaluationTime?: number;
  eyesNear?: IEyesNear;
  eyesNormal?: IEyesNormal;
  faceTrackBreak?: -1;
  occlusionNear?: IOcclusionNear;
  occlusionNormal?: IOcclusionNormal;
  predArtMaskNear?: number;
  predArtMaskNormal?: number;
  predElectronicDeviceNear?: number;
  predElectronicDeviceNormal?: number;
  predGeometryClassifier?: number;
  predLivenessViewNear?: number;
  predLivenessViewNormal?: number;
  predOpticalFlow?: number;
  predTotal?: number;
  probArtMaskNear?: number;
  probArtMaskNormal?: number;
  probElectronicDeviceNear?: number;
  probElectronicDeviceNormal?: number;
  probGeometryClassifier?: number;
  probOpticalFlow?: number;
  qualityNear?: IQualityNear;
  qualityNormal?: IQualityNormal;
  smileNear?: string;
  smileNormal?: string;
  symNear?: number;
  symNormal?: number;
}

export interface IEyesNear {
  predLeft?: number;
  predRight?: number;
  probLeft?: number;
  probRight?: number;
}

export interface IEyesNormal {
  predLeft?: number;
  predRight?: number;
  probLeft?: number;
  probRight?: number;
}

export interface IOcclusionNear {
  foreheadGlasses?: boolean;
  glasses?: boolean;
  hat?: boolean;
  medicineMask?: boolean;
  occlusion?: boolean;
  openedMouth?: boolean;
  sunglasses?: boolean;
}

export interface IOcclusionNormal {
  foreheadGlasses?: boolean;
  glasses?: boolean;
  hat?: boolean;
  medicineMask?: boolean;
  occlusion?: boolean;
  openedMouth?: boolean;
  sunglasses?: boolean;
}

export interface IQualityNear {
  blur?: number;
  brightness?: number;
  noise?: number;
}
export interface IQualityNormal {
  blur?: number;
  brightness?: number;
  noise?: number;
}