import _ from "lodash";
import getErrorFunction from "./errorFunctions";
import times from "./timesUtils";

export default function applyErrors(errorNum, user) {
  return times(errorNum, applyErrorToRandomField)(user);
}

function applyErrorToRandomField(user) {
  console.log(1);
  const field = _.sample(["name", "address", "phone"]);
  const func = getErrorFunction();
  return {
    ...user,
    [field]: func(user[field]),
  };
}
