/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-power-timepicker',

  included()
  {
    this._super.included.apply(this, arguments);

    try {
       // this.ui.writeLine('Initializing ember-power-timepicker.');
    } catch (e) {
      // NOP
    }
  }
};
