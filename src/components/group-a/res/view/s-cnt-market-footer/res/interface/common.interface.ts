/**
 * Элементы компонента Footer
 */

export interface MarketFooterMenuInterface {
  title: string;
  items: string[];
}

// export interface MarketUpFooterFormInterface {
//   number: string;
//   time: string;
//   input: string;
//   text: string;
// }

export interface MarketDownFooterInterface {
  copyright: string;
  company: string;
  download: string;
}

export interface footerContactColumnInterface {
  number: string;
  time: string;
  input: string;
  text: string;
}

export interface footerMenuInterface {
  title: string;
  menuItems: {
    title: string;
    link: string;
  };
}

export interface footerCopyrightRowInterface {
  copyright: string;
  nameCompany: string;
  download: string;
}

export interface footerItemsInterface {
  title: string;
  link: string;
}

export interface footerLinksPoliticsInterface {
  title: string;
  link: string;
}

export interface footerDataInterface {
  logoFooter: any;
  footerMenu: any;
  footerContactColumn: any;
  footerCopyrightRow: any;
  footerLinksPolitics: any;
}

// export interface MarketFooterInfoInterface {
//   forFooterInfo: string[]
// }
