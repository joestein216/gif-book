import Model, { attr } from '@ember-data/model';

export default class GifModel extends Model {
  @attr('string') originalFixedHeightSmallUrl;
  @attr('string') title
}
