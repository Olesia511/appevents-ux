export function isEmailValid(email) {
  const regex =
    /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9]+\.)+))([a-zA-Z]{2,6}|[0-9]{1,3})(\]?)$/;
  return regex.test(email);
}
