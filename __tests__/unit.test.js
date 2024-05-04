// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test("Correctly accept phone number with parenthesis", () => {
  expect(isPhoneNumber("(626)-626-6262")).toBe(true);
})

test("Correctly accept phone number without parenthesis", () => {
  expect(isPhoneNumber("626-626-6262")).toBe(true);
})

test("Correctly reject invalid phone number with space", () => {
  expect(isPhoneNumber("626 - 626 - 6262")).toBe(false);
})

test("Correctly reject invalid phone number with alphabets", () => {
  expect(isPhoneNumber("abc-abc-abca")).toBe(false);
})


test("Correctly accept email address", () => {
  expect(isEmail("abc@ucsd.edu")).toBe(true);
})

test("Correctly accept email address with upper case", () => {
  expect(isEmail("ABC@ucsd.edu")).toBe(true);
})

test("Correctly reject email address with number in domain name", () => {
  expect(isEmail("123@ucsd.123")).toBe(false);
})

test("Correctly reject email address with dots in name", () => {
  expect(isEmail("123.123@ucsd.edu")).toBe(false);
})


test("Correctly accept password", () => {
  expect(isStrongPassword("powell")).toBe(true);
})

test("Correctly accept password with 15 characters", () => {
  expect(isStrongPassword("powerpowerpower")).toBe(true);
})

test("Correctly reject password with 16 characters", () => {
  expect(isStrongPassword("powerpowerpowerr")).toBe(false);
})

test("Correctly reject password with 2 characters", () => {
  expect(isStrongPassword("po")).toBe(false);
})

test("Correct accept date with 1 digit as month", () => {
  expect(isDate("1/12/2024")).toBe(true);
})

test("Correct accept date with 2 digits as month", () => {
  expect(isDate("11/12/2024")).toBe(true);
})

test("Correct reject date with 3 digits as month", () => {
  expect(isDate("111/12/2024")).toBe(false);
})

test("Correct reject date with alphabets", () => {
  expect(isDate("hello/world/ok")).toBe(false);
})

test("Correct accept hex with 3 letters", () => {
  expect(isHexColor("#000")).toBe(true);
})

test("Correct accept hex with 6 letters", () => {
  expect(isHexColor("#FFFFFF")).toBe(true);
})

test("Correct reject hex with 1 letter", () => {
  expect(isHexColor("#0")).toBe(false);
})

test("Correct reject hex with 5 letters", () => {
  expect(isHexColor("FFFFF")).toBe(false);
})