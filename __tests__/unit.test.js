// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('is 123-456-7890 a valid phone number?', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('is +1 123-456-7890 a valid phone number?', () => {
  expect(isPhoneNumber('+1 123-456-7890')).toBe(true);
});

test('is 1234567890 a valid phone number?', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('is ABC-DEF-GHIJ a phone number?', () => {
  expect(isPhoneNumber('ABC-DEF-GHIJ')).toBe(false);
});

test('is mew038@ucsd.edu a valid email?', ()=> {
  expect(isEmail('mew038@ucsd.edu')).toBe(true);
});

test('is mew038@gmail.com a valid email?', ()=> {
  expect(isEmail('mew038@gmail.com')).toBe(true);
});

test('is mew038ucsd.edu a valid email?', ()=> {
  expect(isEmail('mew038ucsd.edu')).toBe(false);
});

test('is mew038@ a valid email?', ()=> {
  expect(isEmail('mew038@')).toBe(false);
});

test('is CSE110 a strong password?', ()=> {
  expect(isStrongPassword('CSE110')).toBe(true);
});

test('is CSE150B a strong password?', ()=> {
  expect(isStrongPassword('CSE150B')).toBe(true);
});

test('is A a strong password?', ()=> {
  expect(isStrongPassword('A')).toBe(false);
});

test('is 123456789 a strong password?', ()=> {
  expect(isStrongPassword('123456789')).toBe(false);
});

test('is 9/23/2003 a valid date?', ()=> {
  expect(isDate('9/23/2003')).toBe(true);
});

test('is 5/07/2024 a valid date?', ()=> {
  expect(isDate('5/07/2024')).toBe(true);
});

test('is 9232003 a valid date?', ()=> {
  expect(isDate('9232003')).toBe(false);
});

test('is 5/7/24 a valid date?', ()=> {
  expect(isDate('5/7/24')).toBe(false);
});

test('is #abc a hex color?', ()=> {
  expect(isHexColor('#abc')).toBe(true);
});

test('is #aabbcc a hex color?', ()=> {
  expect(isHexColor('#aabbcc')).toBe(true);
});

test('is #aabc a hex color?', ()=> {
  expect(isHexColor('#aabc')).toBe(false);
});

test('is #aabbc a hex color?', ()=> {
  expect(isHexColor('#aabbc')).toBe(false);
});