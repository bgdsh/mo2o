import { Mapper } from './mapper.interface';
import { MapperType } from './mapper-type.enum';
import { setFieldByConstant } from './set-field-by-constant';
import { setFieldByFunction } from './set-field-by-function';
import { setFieldByMapping } from './set-field-by-mapping';
import { StringIndexedObject } from './string-indexed-object.interface';

export * from './mapper-type.enum';
export * from './mapper.interface';

export const o2o = (obj: StringIndexedObject, mappers: Mapper[]) => {
  const result: StringIndexedObject = {};
  for (const mapper of mappers) {
    switch (mapper.type) {
      case MapperType.constant:
        setFieldByConstant(result, obj, mapper);
        break;
      case MapperType.function:
        setFieldByFunction(result, obj, mapper);
        break;
      case MapperType.mapping:
        setFieldByMapping(result, obj, mapper);
        break;
      default:
        continue;
    }
  }
  return result;
};
