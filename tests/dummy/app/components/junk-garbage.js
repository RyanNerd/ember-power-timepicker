import Ember from 'ember';
import layout from '../templates/components/junk-garbage';

export default Ember.Component.extend({
  layout: layout,
  highNoon: null,

  actions:
  {
    onChange(value, hours, minutes)
    {
      this.set('hours', hours);
      this.set('minutes', minutes);
      // this.set('time', value);
      alert(value);
    },
  }
});
