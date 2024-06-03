import { DatabaseEntities, DatabaseEntitiesType } from '../types';

function camelToSnakeCase(key: string): string {
  return key.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);
}

function convertEntitiesToStrings(): Record<keyof DatabaseEntitiesType, string> {
  const entities = DatabaseEntities;
  const stringEntities: Record<string, string> = {};
  for (const key in entities) {
    stringEntities[key] = camelToSnakeCase(key);
  }
  return stringEntities as Record<keyof DatabaseEntitiesType, string>;
}
export const databaseTables: Record<keyof DatabaseEntitiesType, string> = <const>{
  ...convertEntitiesToStrings(),
};
