const fs = require('fs');

describe('README Test Note Validation', () => {
  const readmeContent = fs.readFileSync('readme.md', 'utf-8');

  test('should have a comprehensive test note section', () => {
    // Validate presence of test note
    expect(readmeContent).toMatch(/## Testing Status/i);

    // Check test note length (at least 3 sentences)
    const testNoteRegex = /### Current Test Coverage([\s\S]*?)### Testing Approach/;
    const testNoteMatch = readmeContent.match(testNoteRegex);
    
    expect(testNoteMatch).toBeTruthy();
    
    const testNoteContent = testNoteMatch[1];
    const sentenceCount = (testNoteContent.match(/[.!?]+/g) || []).length;
    
    expect(sentenceCount).toBeGreaterThanOrEqual(3);
  });

  test('test note should contain key testing quality indicators', () => {
    const requiredTestIndicators = [
      'test coverage',
      'test framework',
      'initial status',
      'testing approach'
    ];

    requiredTestIndicators.forEach(indicator => {
      expect(readmeContent.toLowerCase()).toContain(indicator);
    });
  });

  test('test note should provide meaningful context', () => {
    const testNoteRegex = /### Current Test Coverage([\s\S]*?)### Testing Approach/;
    const testNoteMatch = readmeContent.match(testNoteRegex);
    
    expect(testNoteMatch).toBeTruthy();
    
    const testNoteContent = testNoteMatch[1];
    
    // Check for descriptive language
    expect(testNoteContent.length).toBeGreaterThan(100);
    expect(testNoteContent).toMatch(/\b(initial|baseline|in progress|establishing)\b/i);
  });
});