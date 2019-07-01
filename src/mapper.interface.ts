import { MapperType } from './mapper-type.enum';

export interface Mapper {
  type: MapperType;
  fieldName: string;
  originalFieldName?: string;
  constant: '';
  functionName: '';
}
