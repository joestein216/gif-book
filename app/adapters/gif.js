import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class GifAdapter extends JSONAPIAdapter {
  host = 'https://api.giphy.com';
  namespace = 'v1';
  pathForType(type) {
    return `${type}s/search`;
  }
}
