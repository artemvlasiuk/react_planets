import { Planet } from '../types/Planet';

export const BASE_URL = './api/data.json';

export const getAllPlanets = (): Promise<Planet[]> => {
  return fetch(BASE_URL).then(response => response.json());
};
