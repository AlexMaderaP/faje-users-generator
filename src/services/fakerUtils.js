import { fakerES_MX, fakerEN_US, fakerPL } from "@faker-js/faker";
import applyErrors from "./applyErrorUtils";

export function chooseFaker(region) {
  switch (region) {
    case "USA":
      return fakerEN_US;
    case "Mexico":
      return fakerES_MX;
    case "Poland":
      return fakerPL;
    default:
      return "Not available";
  }
}

export function generateUser(faker, errorNum) {
  const user = {
    id: faker.string.uuid(),
    name: `${faker.person.fullName()}`,
    address: getRandAddress(faker),
    phone: `${faker.phone.number()}`,
  };

  return applyErrors(errorNum, user);
}

function getRandAddress(faker) {
  return [
    faker.location.streetAddress(),
    faker.location.city(),
    faker.location.state(),
    faker.location.zipCode(),
  ]
    .join(", ")
    .trim();
}

export function getRandSeed() {
  return fakerES_MX.string.numeric({ length: { min: 1, max: 10 } });
}
