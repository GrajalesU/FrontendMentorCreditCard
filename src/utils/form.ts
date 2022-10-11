/**
 * @param {string} cardNumber
 * @returns {boolean}
 * @description Validate card number to check if it is valid or not
 */
function validateCardNumber(cardNumber: string): boolean {
  const cardNumberLength = cardNumber.length;
  const cardNumberRegex = /^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/;
  const cardNumberRegexResult = cardNumberRegex.test(cardNumber);
  if (cardNumberLength === 0) {
    return false;
  }
  if (cardNumberRegexResult) {
    return true;
  }
  return false;
}

/**
 * @param {string} cardNumber
 * @return {string} formatted card number
 * @description Format card number to display it in the form of XXXX XXXX XXXX XXXX
 */
function formatCardNumber(cardNumber: string): string {
  const fourthDigit = /[0-9A-Za-z]{4}/g;
  const spacing = /\s+/g;
  let modifiedNumber = cardNumber.replace(fourthDigit, '$& ');

  if (spacing.test(modifiedNumber)) {
    modifiedNumber = modifiedNumber.replace(spacing, ' ');
  }
  if (modifiedNumber.length > 19) {
    modifiedNumber = modifiedNumber.slice(0, 19);
  }

  return modifiedNumber;
}

/**
 * @param {string} cardCVC
 * @returns {boolean}
 * @description Validate card CVC to check if it is valid or not
 * @description CVC is the last 3 digits of the card number
 */
function validateCardCVC(cardCVC: string): boolean {
  const cardCVCLength = cardCVC.length;
  const cardCVCRegex = /^[0-9]{3}$/;
  const cardCVCRegexResult = cardCVCRegex.test(cardCVC);
  if (cardCVCLength === 0) {
    return false;
  }
  if (cardCVCRegexResult) {
    return true;
  }
  return false;
}

/**
 * @param {string} input
 * @returns {boolean}
 * @description Validate input to check if it is void or not
 */
function isBlank(input: string): boolean {
  const inputLength = input.length;
  if (inputLength === 0) {
    return true;
  }
  return false;
}

export { validateCardNumber, formatCardNumber, validateCardCVC, isBlank };
