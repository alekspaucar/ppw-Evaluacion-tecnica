export interface Country {
  name: {
    common: string;
  };
  capital: string[];
  flags: {
    png: string;
    alt: string;
  };
  population?: number;
  maps?: {
    googleMaps: string;
  };
}
