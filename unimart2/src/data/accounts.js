export const ACCOUNTS = [];

export function normalizeAccountEmail(email = "") {
  return email.trim().toLowerCase();
}

function toAccountId(normalizedEmail) {
  return `account-${normalizedEmail.replace(/[^a-z0-9]+/g, "-")}`;
}

export function createAccount({ name, email, password }) {
  const normalizedEmail = normalizeAccountEmail(email);

  return {
    id: toAccountId(normalizedEmail),
    name: name.trim(),
    email: normalizedEmail,
    password,
    favorites: [],
  };
}

export function getAccountByEmail(accounts = [], email) {
  const normalizedEmail = normalizeAccountEmail(email);
  return accounts.find((account) => account.email === normalizedEmail) ?? null;
}

export function getAccountById(accounts = [], accountId) {
  return accounts.find((account) => account.id === accountId) ?? null;
}

export function updateAccountById(accounts = [], accountId, updater) {
  return accounts.map((account) =>
    account.id === accountId ? updater(account) : account
  );
}
