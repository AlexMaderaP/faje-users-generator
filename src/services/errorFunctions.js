import _ from "lodash";

function addRandomCharacter(str) {
  const chars = str.replaceAll(/[,\s-]/g, "");
  const randomIndex = getRandIdx(str);
  const charrToAdd = _.sample(chars);
  if (!charrToAdd) return str;
  return str.slice(0, randomIndex) + charrToAdd + str.slice(randomIndex);
}

function eliminateRandomCharacter(str) {
  const chars = str.replaceAll(/[,\s-]/g, "");
  const charToRemove = _.sample(chars);
  if (!charToRemove) return str;
  return str.replace(charToRemove, "");
}

function swapAdjacentCharacters(str) {
  if (str.length < 2) return str;
  let randomIndex = getRandIdx(str) - 1;
  randomIndex = randomIndex < 0 ? 0 : randomIndex;
  return (
    str.slice(0, randomIndex) +
    str[randomIndex + 1] +
    str[randomIndex] +
    str.slice(randomIndex + 2)
  );
}

function getRandIdx(str) {
  return Math.floor(Math.random() * str.length);
}

export default function getErrorFunction() {
  return _.sample([
    addRandomCharacter,
    eliminateRandomCharacter,
    swapAdjacentCharacters,
  ]);
}

console.log(
  addRandomCharacter(
    "al. Bednarczyk 39a, Czechowice-Dziedzice, małopolskie, 24-163"
  )
);
