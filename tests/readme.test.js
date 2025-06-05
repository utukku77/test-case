const fs = require('fs');
const path = require('path');

describe('README Documentation', () => {
  let readmeContent;

  beforeAll(() => {
    readmeContent = fs.readFileSync(path.resolve(__dirname, '../readme.md'), 'utf-8');
  });

  test('README should have a title', () => {
    expect(readmeContent).toMatch(/^# /);
  });

  test('Should have server setup section', () => {
    expect(readmeContent).toContain('## Server Setup');
  });

  test('Should include installation instructions', () => {
    expect(readmeContent).toContain('npm install');
  });

  test('Should have connection methods section', () => {
    expect(readmeContent).toContain('## Connection Methods');
  });

  test('Should include troubleshooting section', () => {
    expect(readmeContent).toContain('## Troubleshooting');
  });

  test('Should have comprehensive sections', () => {
    const requiredSections = [
      'Overview',
      'Prerequisites',
      'Server Setup',
      'Connection Methods',
      'Troubleshooting',
      'Security Recommendations',
      'Support'
    ];

    requiredSections.forEach(section => {
      expect(readmeContent).toContain(`## ${section}`);
    });
  });

  test('README length should be reasonable', () => {
    expect(readmeContent.length).toBeGreaterThan(500);
    expect(readmeContent.length).toBeLessThan(5000);
  });
});