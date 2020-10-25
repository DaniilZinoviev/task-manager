export default class LocalStorage {
  key = "app-data";

  saveData(data) {
    window.localStorage.setItem(
      this.key,
      JSON.stringify(data)
    );
  }

  getData() {
    return JSON.parse(
      window.localStorage.getItem(this.key)
    );
  }
}
