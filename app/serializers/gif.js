import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class GifSerializer extends JSONAPISerializer {
  normalize(modelClass, hash) {
    const newHash = hash;

    newHash['attributes'] = {};

    newHash.attributes['original-fixed-height-small-url'] = hash.images.fixed_height_small.url;

    // iterate through hash properties and move most under new attributes subkey
    Object.keys(hash).forEach((key) => {
      if(key !== 'id' && key !== 'type' && key !== 'attributes') {
        newHash.attributes[key] = hash[key];
        delete hash[key];
      }
    });

    return super.normalize(modelClass, newHash);
  }
}
