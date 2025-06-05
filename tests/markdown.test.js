const fs = require('fs');
const path = require('path');

describe('README Documentation', () => {
  const readmePath = path.resolve(__dirname, '../readme.md');
  const readmeContent = fs.readFileSync(readmePath, 'utf8');

  test('README should have comprehensive API documentation', () => {
    expect(readmeContent).toContain('## API Endpoint Technical Specification');
    expect(readmeContent).toContain('### Endpoints');
    expect(readmeContent).toContain('User Registration');
    expect(readmeContent).toContain('User Login');
  });

  test('API documentation includes key sections', () => {
    const sections = [
      'Base URL',
      'Authentication',
      'Endpoints',
      'Common Error Codes',
      'Request/Response Guidelines',
      'Rate Limiting',
      'Security Recommendations'
    ];

    sections.forEach(section => {
      expect(readmeContent).toContain(section);
    });
  });

  test('Code examples are present and formatted', () => {
    expect(readmeContent).toMatch(/```json\n{[\s\S]*?}\n```/);
  });
});