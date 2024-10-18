import { describe, it, expect } from 'vitest';
import { guid } from './index';

describe('guid', () => {
  it('should generate a valid GUID of 36 characters including dashes', () => {
    const generatedGuid = guid();
    expect(generatedGuid).toHaveLength(36);
  });

  it('should generate a GUID in the correct format (xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx)', () => {
    const generatedGuid = guid();
    const regex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
    expect(generatedGuid).toMatch(regex);
  });

  it('should generate unique GUIDs across multiple invocations', () => {
    const guid1 = guid();
    const guid2 = guid();
    expect(guid1).not.toBe(guid2);
  });
});
