export const operators = ["+", "-", "*", "/", "%"] as const;

export type Operators = typeof operators[number];
