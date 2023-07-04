export const ALPHABET_ONLY= "^[a-zA-Z -']+";
export const ALPHABET_ONLY_REGEX_EXTRAFIELDS = "^[a-zA-Z -'/./ //]+";
export const ALPHABET_ONLY_WITH_SPECIALCHAR= "^[a-zA-Z -'.!@#$%^&*()_-]+";
export const ONLY_NUMERIC = '^[0-9]*$';
export const NO_SPECIAL_CHAR_REGEX_NO_LENGTH = '^[a-zA-Z0-9-_@.]{0,255}$';
export const NO_SPECIAL_CHAR = '^[a-zA-Z0-9 ]{0,255}$';
export const NO_SPECIAL_CHAR_REGEX_PROSPECT = '^[a-zA-Z0-9]{12,12}$';
export const NO_SPECIAL_CHAR_REGEX_PROSPECT_20 = '^[0-9a-zA-Z -]{3,20}$';
export const NO_SPECIAL_CHAR_REGEX_WITHOUT = '^[a-zA-Z0-9-]{1,21}$';
export const UNDERSCORES_WITH_LIMITS = '[A-Za-z0-9_ ]{1,255}';
export const EMAIL= '^[^ ]+@[^ ]+.[a-z]$';
export const ONLY_ALPHABET_REGEX = "^[a-zA-Z']+";
export const FAX_NUMBER = '/^+{0,1}[1-9]{1}[0-9]/';
export const DECIMAL_NUMBER_REGEX = /^\d*\.?\d*$/;
export const UNDERSCORES_WITH_LIMIT = '[A-Za-z0-9_ ]{1,25}';
export const REGEX_NRIC_12 = '^[0-9]{12,12}$';
export const REGEX_PASSPORT_20 = '^[a-zA-Z0-9(),-./\\\\]{3,20}$';
export const PHONE_NUMBER="^[0-9]{10,12}$";