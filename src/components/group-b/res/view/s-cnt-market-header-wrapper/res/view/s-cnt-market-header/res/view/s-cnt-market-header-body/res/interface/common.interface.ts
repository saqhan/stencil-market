/*
 * Интерфейс для массива меню и лого
 * */

export interface navMenuItemInterface {
  id: string;
  name: string;
}

export interface NavMenuItemInterface {
  logo: string;
  navMenuItem: navMenuItemInterface[];
}


