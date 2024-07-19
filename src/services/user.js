import { chooseFaker, generateUser } from "./fakerUtils";

export default function generateRandomUsers(
  region,
  seed,
  errorNum,
  page = 0,
  limit = 20
) {
  const myFaker = chooseFaker(region);
  myFaker.seed(+seed + page);
  const data = [];
  for (let i = 0; i < limit; i++) {
    const user = generateUser(myFaker, errorNum);
    data.push(user);
  }
  return data;
}
