import { StringIndexedObject } from './string-indexed-object.interface';

export const getFieldValue = (
  obj: StringIndexedObject,
  fields: string | string[]
): number | string | null => {
  if (typeof obj !== 'object') {
    return null;
  }
  let realFields: string[];
  if (Array.isArray(fields)) {
    realFields = fields;
  } else if (typeof fields === 'string') {
    realFields = fields.split('.');
  } else {
    throw new Error('invalid fields');
  }
  if (realFields.length === 1) {
    const value = obj[realFields[0]] as (string | number);
    if (value) {
      return value;
    } else {
      return null;
    }
  } else {
    const firstIndex = realFields.shift();
    if (firstIndex !== undefined) {
      const firstValue = obj[firstIndex];
      if (typeof firstValue === 'object') {
        return getFieldValue(firstValue as StringIndexedObject, realFields);
      }
    }
  }
  return null;
};
