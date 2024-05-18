import { Planet } from '../types/Planet';

export const loadContent = (tab: string, planet: Planet) => {
  switch (tab) {
    case 'overview':
      return [
        planet.overview.content,
        planet.overview.source,
        planet.images.planet,
      ];
    case 'structure':
      return [
        planet.structure.content,
        planet.structure.source,
        planet.images.internal,
      ];
    case 'surface':
      return [
        planet.geology.content,
        planet.geology.source,
        planet.images.planet,
      ];
    default:
      return [];
  }
};
