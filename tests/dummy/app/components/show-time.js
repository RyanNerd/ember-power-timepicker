import Component from '@ember/component';
import layout from '../templates/components/show-time';

export default Component.extend(
{
  layout: layout,
  timeSelected: null,
  time: null,

  timeSelected2: null,
  time2: null,

  hours1: null,
  minutes1: null,
  hours2: null,
  minutes2: null,
  hours3: null,
  minutes3: null,

  customTimeSelectedEventValue: null,
  customTimeSelected: null,
  customTimes:
  [
    "8:00 AM",
    "9:00 AM",
    "9:15 AM",
    "9:30 AM",
    "9:45 AM",
    "10:00 AM",
    "10:15 AM",
    "10:30 AM",
    "10:45 AM",
    "11:00 AM",
    "11:15 AM",
    "11:30 AM",
    "11:45 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM"
  ],

  actions:
  {
    onChange(value, hours, minutes)
    {
      this.set('hours1', hours);
      this.set('minutes1', minutes);
      this.set('time', value);
    },

    onChange2(value, hours, minutes)
    {
      this.set('hours2', hours);
      this.set('minutes2', minutes);
      this.set('time2', value);
    },

    onChange3(value, hours, minutes)
    {
      this.set('hours3', hours);
      this.set('minutes3', minutes);
      this.set('customTimeSelectedEventValue', value);
    }
  }
});
