import { defaultValues, validate } from './ExampleForm';

describe('ExampleForm', () => {
  describe('validate', () => {
    it('should check if name is empty', () => {
      expect(validate({ ...defaultValues, name: '' })).toMatchSnapshot();
    });
  });
});
