export const make = (makeValue) => typeof makeValue === 'function' ? makeValue() : makeValue
