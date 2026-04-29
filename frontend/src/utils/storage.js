const KEY = "tm_auth";

export const setAuth = (auth) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(auth));
  } catch (err) {
    console.error("Failed to save auth", err);
  }
};

export const getAuth = () => {
  const raw = localStorage.getItem(KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw);
    if (!parsed?.token || !parsed?.user) return null;
    return parsed;
  } catch {
    localStorage.removeItem(KEY);
    return null;
  }
};

export const clearAuth = () => {
  localStorage.removeItem(KEY);
};

// optional helpers
export const getToken = () => getAuth()?.token || null;
export const getUser = () => getAuth()?.user || null;