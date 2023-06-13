
const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", () => {
  let number = phoneInput.value.replace(/\D/g, "");

  const ddd = number.slice(0, 2);
  const prefix = number.slice(2, 7);
  const suffix = number.slice(7, 11);

  if (number.length <= 2) {
    phoneInput.value = `${number}`;
  } else if (number.length <= 7) {
    phoneInput.value = `(${ddd}) ${prefix}`;
  } else {
    phoneInput.value = `(${ddd}) ${prefix}-${suffix}`;
  }
});
