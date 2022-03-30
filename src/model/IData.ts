import {IProfile} from './IProfile';

export interface IData {
  status: number;
  body: {
    // tslint:disable-next-line:no-unused-expression
    'banner-url': string,
    'contestant-type': string,
    'game-id': string,
    info: string,
    'max-rank': number,
    template: {
      'compete-metric': {
        'in-one-life': number,
        min: number,
        type: string
      },
      'display-format': string,
      'display-icon': string,
      'display-icon-url': string
    };
    tenure: {
      end: number,
      start: number
    };
    title: string;
    result: IProfile[];
  };
}
