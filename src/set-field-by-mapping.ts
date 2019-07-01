import { Mapper } from './mapper.interface';
import { ok } from 'assert';
import { StringIndexedObject } from './string-indexed-object.interface';
import { MapperType } from './mapper-type.enum';
import { getFieldValue } from './get-field-value';
import { setFieldValue } from './set-field-value';

export const setFieldByMapping = (
  result: StringIndexedObject,
  originalObj: StringIndexedObject,
  mapper: Mapper
) => {
  ok(mapper.type === MapperType.mapping, 'wrong way to use setFieldByMapping');
  ok(mapper.originalFieldName !== undefined, 'invalid mapper');
  if (mapper.originalFieldName !== undefined) {
    const value = getFieldValue(originalObj, mapper.originalFieldName);
    setFieldValue(result, mapper.fieldName, value);
  }
};
