"https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}";

class Github {
  constructor() {
    this.client_id = "b1feac3922578dd2f006";
    this.client_secret = "dc415e6512746f3cf4f40c0a7f52b6fc7e1dacf8";
  }

  async getUser(user) {
    const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile: profile,
    }


  }
}