// Test for Task 7: Loops - sumArray function

describe('Task 7: SumArray Function', () => {
  let task7;
  
  beforeEach(() => {
    // Clear the require cache to ensure fresh imports
    delete require.cache[require.resolve('../tasks/task7.js')];
    try {
      task7 = require('../js-basics/tasks/task7.js');
    } catch (error) {
      task7 = {};
    }
  });

  test('should export a sumArray function', () => {
    expect(task7).toHaveProperty('sumArray');
    expect(typeof task7.sumArray).toBe('function');
  });

  test('should sum positive numbers correctly', () => {
    if (typeof task7.sumArray === 'function') {
      expect(task7.sumArray([1, 2, 3, 4, 5])).toBe(15);
      expect(task7.sumArray([10, 20, 30])).toBe(60);
    }
  });

  test('should handle negative numbers', () => {
    if (typeof task7.sumArray === 'function') {
      expect(task7.sumArray([-1, -2, -3])).toBe(-6);
      expect(task7.sumArray([5, -3, 2])).toBe(4);
    }
  });

  test('should handle decimal numbers', () => {
    if (typeof task7.sumArray === 'function') {
      expect(task7.sumArray([1.5, 2.5, 3.0])).toBeCloseTo(7.0);
    }
  });

  test('should return 0 for empty array', () => {
    if (typeof task7.sumArray === 'function') {
      expect(task7.sumArray([])).toBe(0);
    }
  });

  test('should handle single element array', () => {
    if (typeof task7.sumArray === 'function') {
      expect(task7.sumArray([42])).toBe(42);
      expect(task7.sumArray([-7])).toBe(-7);
    }
  });

  test('should handle array with zeros', () => {
    if (typeof task7.sumArray === 'function') {
      expect(task7.sumArray([0, 0, 0])).toBe(0);
      expect(task7.sumArray([1, 0, 2])).toBe(3);
    }
  });
});
