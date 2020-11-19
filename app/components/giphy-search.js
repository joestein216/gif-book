import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class GiphySearchComponent extends Component {
  @tracked currentSearchTerm;
  @tracked searchResults;
  @service store;

  constructor() {
    super(...arguments);
    this.currentSearchTerm = "Default";
    this.query();
  }

  @action 
  async query() {
    let searchResults =  await this.store.query('gif', {
      api_key: 'bc5jZ7UQ68vSfHngVtoxUuUH68o8Jc2v',
      q: this.currentSearchTerm,
      limit: 13,
      offset: 2,
      rating: 'g',
      lang: 'en',
    });

    this.searchResults = searchResults;
  }

  @action searchTermChanged(event) {
    this.currentSearchTerm = event.target.value;
    this.query();
  }
}
