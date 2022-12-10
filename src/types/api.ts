export interface ApiDataDocuments<T> {
  documents: ApiDocument<T>[];
}

export interface ApiDocument<I> {
  name: string;
  fields: I;
  createTime: string;
  updateTime: string;
}

export interface ProductFields {
  categories: {
    stringValue: string;
  };
  weight: {
    doubleValue: number;
  };
  mainPhoto: {
    stringValue: string;
  };
  depth: {
    doubleValue: number;
  };
  secondaryPhotos: {
    arrayValue: {
      values: [{ stringValue: string }];
    };
  };
  height: {
    doubleValue: number;
  };
  width: {
    doubleValue: number;
  };
  name: {
    stringValue: string;
  };
  inStock: {
    doubleValue: number;
  };
  description: {
    stringValue: string;
  };
  price: {
    stringValue: string;
  };
}
