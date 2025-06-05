const fs = require('fs');
const path = require('path');

describe('README Error Handling Documentation', () => {
  let readmeContent;

  beforeAll(() => {
    readmeContent = fs.readFileSync(path.resolve(__dirname, '../readme.md'), 'utf-8');
  });

  test('README contains API error handling section', () => {
    expect(readmeContent).toContain('## API Error Handling');
  });

  test('Contains HTTP status code explanations', () => {
    expect(readmeContent).toContain('### HTTP Status Codes');
    expect(readmeContent).toContain('200 OK');
    expect(readmeContent).toContain('400 Bad Request');
    expect(readmeContent).toContain('500 Internal Server Error');
  });

  test('Contains error response format', () => {
    expect(readmeContent).toContain('### Error Response Format');
    expect(readmeContent).toContain('"error": {');
    expect(readmeContent).toContain('"code": "ERROR_TYPE"');
  });

  test('Contains error handling best practices', () => {
    expect(readmeContent).toContain('### Best Practices for Error Handling');
    expect(readmeContent).toContain('Always check for error responses');
  });

  test('Contains example error scenarios', () => {
    expect(readmeContent).toContain('### Common Error Scenarios');
    expect(readmeContent).toContain('Authentication Errors');
    expect(readmeContent).toContain('Validation Errors');
  });
});