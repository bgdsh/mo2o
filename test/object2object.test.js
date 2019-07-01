const { o2o, MapperType } = require('../build');

describe('test', () => {
  it('it works', () => {
    const result = o2o({}, []);
    expect(JSON.stringify(result)).toBe('{}');
  });
  it('can map', () => {
    const result = o2o(
      {
        abc: 'abc',
      },
      [
        {
          type: MapperType.mapping,
          originalFieldName: 'abc',
          fieldName: 'cba',
        },
      ],
    );
    expect(result.cba).toBe('abc');
  });

  it('can map from deep fields', () => {
    const original = {
      abc: {
        def: {
          ghi: 'ghi',
        },
      },
    };
    const mapper = {
      type: MapperType.mapping,
      originalFieldName: 'abc.def.ghi',
      fieldName: 'cba',
    };
    const result = o2o(original, [mapper]);
    expect(result.cba).toBe('ghi');
  });

  it('can map from constants', () => {
    const original = {
      abc: {
        def: {
          ghi: 'ghi',
        },
      },
    };
    const mapper = {
      type: MapperType.mapping,
      originalFieldName: 'abc.def.ghi',
      fieldName: 'cba',
    };
    const result = o2o(original, [mapper]);
    expect(result.cba).toBe('ghi');
  });

  it('can set to deep fields', () => {
    const original = {
      abc: {
        def: {
          ghi: 'ghi',
        },
      },
    };
    const mapper = {
      type: MapperType.mapping,
      originalFieldName: 'abc.def.ghi',
      fieldName: 'cba.ihg',
    };
    const result = o2o(original, [mapper]);
    expect(result.cba.ihg).toBe('ghi');
  });

  it('can map many fields', () => {
    const original = {
      abc: {
        def1: {
          ghi1: 'ghi1',
        },
        def2: {
          ghi2: 'ghi2',
        },
      },
    };
    const mapper1 = {
      type: MapperType.mapping,
      originalFieldName: 'abc.def1.ghi1',
      fieldName: 'cba1',
    };
    const mapper2 = {
      type: MapperType.mapping,
      originalFieldName: 'abc.def2.ghi2',
      fieldName: 'cba2',
    };
    const result = o2o(original, [mapper1, mapper2]);
    expect(result.cba1).toBe('ghi1');
    expect(result.cba2).toBe('ghi2');
  });

  it('get null when original fields not found', () => {
    const original = {
      abc: {
        def: 'def',
      },
    };
    const mapper = {
      type: MapperType.mapping,
      originalFieldName: 'abc.def.ghi',
      fieldName: 'cba',
    };
    const result = o2o(original, [mapper]);
    expect(result.cba).toBe(null);
  });
});
