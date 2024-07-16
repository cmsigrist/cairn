import { Die } from "../types/die";

export const rand = (die: Die) =>
  Math.floor(Math.random() * (+die - 1)) + 1;

export const rollRand = (die: Die, number: number) => {
  let sum = 0;
  for(let i = 0; i < number; i++) {
    sum += rand(die)
  }

  return sum
}