[![Ember Observer Score](http://emberobserver.com/badges/ember-power-timepicker.svg)](http://emberobserver.com/addons/ember-power-timepicker)

# Ember-Power-Timepicker

This is an Ember addon that uses the wonderful [ember-power-select](https://github.com/cibernox/ember-power-select)
component for the singular purpose of allowing the user to select a time of day from a picklist.

## IMPORTANT
**This project is no longer being worked on** other than for security related issues.
If you are interested in taking over this project please create an issue and I'll work out the details of transfering the project with you.
See #13 for more information.

## Installation

Ember Time Picker has the same requirements as ember-power-select namely Ember **2.3.1+**

This is an ember-cli addon so this will install the addon:
```
ember install ember-power-timepicker
```

## Properties

**Ember Power Select (pass-through) Properties**

These properties behave the same as [documented](http://www.ember-power-select.com/docs/api-reference) in ember-power-select:

```javascript
    /**
     * The component rendered after the list of options. It is empty by default in both single and multiple selects
     * @property {string | null}
     * @public
     */
  afterOptionsComponent: null

  /**
   * When true the time can be cleared by clicking [x].
   * @property {boolean}
   * @public
   */
  allowClear: true

  /**
   * The component rendered before the list of options defaults to the searchbox.
   * @property {string | undefined}
   * @public
   */
  beforeOptionsComponent: undefined

  /**
   * The CSS class of the power-select component.
   * @property {string | null}
   * @public
   */
  class: null

    /**
     * Defaults to true. When false, the component won't be closed after the user chooses an option, either with the
     * mouse/keyboard or using the `choose` action in the publicAPI.
     * @property {boolean}
     * @public
     */
  closeOnSelect: true

  /**
   * Id of the element used as target for the dropdown's content, when not rendered in place.
   * @property {string | undefined}
   * @public
   */
  destination: undefined

  /**
   * Indicates if the component is disabled or not.
   * @property {boolean}
   * @public
   */
  disabled: false

  /**
   * CSS class applied to the dropdown only.
   * @property {string | null}
   * @public
   */
  dropdownClass: null

  /**
   * When true the component is rendered initially in the open state.
   * @property {boolean}
   * @public
   */
  initiallyOpened: false

    /**
     * Message shown in the list of times while the times are still not resolved, typically after a search...
     * @property {string}
     * @public
     */
  loadingMessage: 'Loading times...'

    /**
     * When enabled (and it's enabled by default) the dropdown with match the width of the trigger.
     * @property {boolean}
     * @public
     */
  matchTriggerWidth: true

  /**
   * The default message displayed when searching for a time and the search has no match
   * in the times array.
   * @property {string}
   * @public
   */
  noMatchesMessage: "No matching time found"

  /**
   *  Text to show when no time has been selected.
   *  @property {string}
   *  @public
   */
  placeholder: ""

  /**
   * When truthy, the list of options will be rendered in place instead of being attached to the root of the body and
   * positioned with javascript.Enabling this option also adds a wrapper div around the trigger and the content with
   * class .ember-power-select.
   * @property {boolean}
   * @public
   */
  renderInPlace: false

  /**
   * Indicates if the search box is enabled.
   * @property {boolean}
   * @public
   */
  searchEnabled: true

    /**
     * Class to be applied to the trigger only
     * @property {string | undefined}
     * @public
     */
  triggerClass: undefined

  /**
   * Component to be rendered as placeholder. It can be used along with placeholder and has access to it.
   * @property {string}
   * @public
   */
  placeholderComponent: 'power-select/placeholder'

  /**
   * The component to render instead of the default one inside the trigger.
   * @property {string}
   * @public
   */
  triggerComponent: 'power-select/trigger'

  /**
   * The id to be applied to the trigger.
   * Useful link the select to a <label> tag.
   * @property {string}
   * @public
   */
  triggerId: ''
```

**Ember Time Picker Properties**

```javascript
  /**
   * List of times to choose from (corresponds to the options property in power-select).
   * If not set a default times[] array is used.
   * @property {string[] | null}
   * @public
   */
  times: null

  /**
   * The currently selected time (if not null it should be set to an element in the times[] property).
   * This corresponds to Ember Power Select property: selected.
   * @property {string | null}
   * @public
   */
  selectedTime: null

  /**
   * Component to render for each time element.
   * @property {string}
   * @public
   */
  timeComponent: 'time-element'

  /**
   * Component to render for the selected time (corresponds to the selectedItemComponent in power-select)
   * @property {string}
   * @public
   */
  selectedTimeComponent: 'selected-time'
  
  /**
   * If selectedTime === null and defaultTimeToNow is true then the current clock time will be used.
   * defaultTimeToNow is ignored if selectedTime !==null
   * @property {boolean}
   * @public
   */
  defaultTimeToNow: true

  /**
   * When set to true then military time format will be used (Only applies if the times[] array is generated).
   * @property {boolean}
   * @public
   */
  military: false

  /**
   * Indicates the number of minute intervals. If not specified 30 will be used.
   * @property {int | null}
   * @public
   * @default 30
   */
  increment: null

  /**
   * Indicates the beginning hour in the picklist. If not set then 1 will be used.
   * @property {int | null}
   * @public
   * @default 1
   */
  startTimeHour: null

  /**
   * Indicates the ending hour in the picklist. If not set the 24 is the default.
   * @property {int | null}
   * @public
   * @default 24
   */
  endTimeHour: null
``` 

**Actions**

All actions are pass-through actions to the Ember Power Select component:

```javascript
    /**
     * Invoked when component or any of its subitems looses the focus.
     * The last argument is the FocusEvent, that can be used to disambiguate what gained the focus.
     * @param select
     * @param e
     */
    onblur(select, e)

    /**
     * Invoked when the user selects/changes a time.
     * Two-way binding is established by setting the selectedTime property when a new selection is made.
     * @param {string | null} timeString The time string of the selected time (can be null if no time selected, or cleared).
     * @param {int | null} hours The hours from the time string as an integer.
     * @param {int | null} minutes The minutes from the time string as an integer. 
     */
    onchange(timeString, hours, minutes)

    /**
     * Invoked when the component is closed.
     * @param select
     * @param e
     */
    onclose(select, e)

    /**
     * Invoked when the component gets focus.
     * @param select
     * @param e
     */
    onfocus(select, e)

    /**
     * Invoked when the user changes the text in any any search input of the component.
     * If the function returns false the default behaviour (filter/search) is prevented.
     * @param select
     * @param e
     */
    oninput(select, e)

    /**
     * Invoked when the user presses a key being the component or the inputs inside it focused.
     * @param dropdown
     * @param e
     */
    onkeydown(dropdown, e)

    /**
     * Invoked when the component is opened.
     * @param select
     * @param e
     */
    onopen(select, e)
```

## Simple Example

```handlebars
<p>Calculated Times Selection</p>

<div style="text-align: right; clear: both; float: left; margin-right: 15px;">
  Time:
</div>
<div style="width: 220px;">
    {{time-picker
      selectedTime=timeSelected
      onchange=(action "onChange")
      increment=5
    }}
</div>
<br/>
<p>timeSelected property: {{timeSelected}}</p>
<p>Time from Action.onChange(): {{time}} </p>
```

```javascript
import Controller from '@ember/controller';

export default Controller.extend(
{
  timeSelected: null,
  time: null,
  
  actions:
  {
    onChange(value)
    {
      this.set('time', value);
    }
  }
});
```

## Running Dummy Website

* `ember serve`
* Visit [http://localhost:4200](http://localhost:4200).
![Example](https://github.com/ryannerd/ember-power-timepicker/blob/screenshots/screenshots/example-2.png)
![Example](https://github.com/ryannerd/ember-power-timepicker/blob/screenshots/screenshots/example-1.png)

## Running Tests

* `ember serve`
* Visit [http://localhost:4200/tests](http://localhost:4200/tests).
