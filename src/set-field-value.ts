import { StringIndexedObject } from './string-indexed-object.interface';

export const setFieldValue = (
  obj: StringIndexedObject,
  fields: string[] | string,
  value: number | string | null
) => {
  if (typeof obj !== 'object') {
    return;
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
    obj[realFields[0]] = value;
  } else {
    const firstIndex = realFields.shift();
    if (firstIndex !== undefined) {
      if (!obj[firstIndex]) {
        obj[firstIndex] = {};
      }
      if (typeof obj[firstIndex] === 'object') {
        setFieldValue(
          obj[firstIndex] as StringIndexedObject,
          realFields,
          value
        );
      }
    }
  }
};
