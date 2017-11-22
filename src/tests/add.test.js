const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}`
test('should add two numbers', () => {
  const result = add(3, 8);

  expect(result).toBe(11);
});

test('Should generate greeting from name', () => {
  const result = generateGreeting("Mike");
  expect(result).toBe("Hello Mike");
});

test("should generate for no name ", () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous');
});