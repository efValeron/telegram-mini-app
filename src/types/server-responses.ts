import { Horoscope } from './instanses.ts'

export type GetHoroscopes = {
  language: string;
  period: string;
  horoscope: Horoscope;
}

export type GetHoroscope = {
  sign: string;
  language: string;
  period: string;
  horoscope: string;
}
