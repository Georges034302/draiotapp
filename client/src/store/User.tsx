export const KEY = "user:storage"
export default class User {
  static save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  static load(): string {
    const data: string = localStorage.getItem(KEY) || '';
    return data ;
  }

  static clear() {
    localStorage.removeItem(KEY);
  }
}
