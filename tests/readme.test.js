const fs = require('fs');

// Helper function to count sentences, accounting for markdown
function countSentences(text) {
  // Remove markdown formatting, handle common markdown constructs
  const cleanText = text
    .replace(/\*\*([^*]+)\*\*/g, '$1')  // Remove bold markdown
    .replace(/\*([^*]+)\*/g, '$1')      // Remove italic markdown
    .replace(/[_`]/g, '');              // Remove other markdown characters

  // More lenient sentence splitting
  const sentences = cleanText
    .split(/[.!?]+/)
    .filter(sentence => 
      sentence.trim().length > 0 && 
      !/^\s*[-•]/.test(sentence.trim())  // Exclude list items
    );

  return sentences.length;
}

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
    const sentenceCount = countSentences(testNoteContent);
    
    expect(sentenceCount).toBeGreaterThanOrEqual(3);
  });

  test('test note should contain key testing quality indicators', () => {
    const requiredTestIndicators = [
      'testing',
      'test coverage',
      'infrastructure',
      'initial status',
      'implementation'
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
    expect(testNoteContent).toMatch(/\b(initial|baseline|establishing)\b/i);
  });
});