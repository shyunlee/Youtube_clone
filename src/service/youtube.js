class Youtube {
  constructor(URI, apiKey) {
    this.URI=URI
    this.apiKey = apiKey
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  async mostPopular() {
    try {
      const response = await fetch(`${this.URI}/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.apiKey}`, this.requestOptions);
      const result = await response.json();
      return result.items
    } catch (error) {
      return console.log('error', error);
    }
  }

  async search(query) {
    try {
      const response = await fetch(`${this.URI}/search?part=snippet&maxResults=25&type=video&q=${query}&key=${this.apiKey}`, this.requestOptions);
      const result_1 = await response.json();
      const items = result_1.items.map(item => ({ ...item, id: item.id.videoId }));
      return items
    } catch (error) {
      return console.log('error', error);
    }
  }
}

export default Youtube;