import { Mapper } from './mapper.interface';
import { StringIndexedObject } from './string-indexed-object.interface';
import { ok } from 'assert';
import { MapperType } from './mapper-type.enum';
import { setFieldValue } from './set-field-value';

export const setFieldByConstant = (
  result: StringIndexedObject,
  originalObj: StringIndexedObject,
  mapper: Mapper
) => {
  ok(mapper.type === MapperType.constant, 'wrong way to use setFieldByMapping');
  ok(mapper.constant !== undefined, 'invalid mapper');
  if (mapper.originalFieldName !== undefined) {
    const value = mapper.constant;
    setFieldValue(result, mapper.fieldName, value);
  }
};
