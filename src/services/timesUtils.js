export default function times(n, fn) {
  if (n < 0) throw new Error("The first argumet cannot be negative");
  return (arg) => {
    for (let i = 0; i < Math.floor(n); i++) {
      arg = fn(arg);
    }
    if (Math.random() < n % 1) arg = fn(arg);
    return arg;
  };
}
