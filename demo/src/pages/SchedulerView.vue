<template>
  <div class="q-markdown">
    <q-markdown>
::: tip
To use the scheduler, you need to use the `resources` property, which is an array of objects, containing a key as defined by the `resource-key` (default `label`). It's this key that will be displayed in your scheduler.
```js
const rooms = [
  { id: 1, label: 'Room 1' /* any other keys you want associated with the data */ },
  { id: 2, label: 'Room 2' },
  { id: 3, label: 'Room 3' },
  ...
]
```
:::
    </q-markdown>

    <example-title title="Scheduler View" />
    <example-viewer title="Basic" file="SchedulerViewBasic" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
    <example-viewer title="Dark" file="SchedulerViewDark" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />

    <example-title title="Disabled" />
    <q-markdown>
When the property `disabled-days` has an array of disabled days, you can hook into the `resource-style` property to change the background color of the disabled day.
    </q-markdown>
    <example-viewer title="Disabled Days" file="SchedulerViewDisabledDays" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />

    <q-markdown>
In this example, the `disabled-before` is set to the monday of this week and the `disabled-after` is set to the friday of this week.
    </q-markdown>
    <example-viewer title="Disabled Before/After" file="SchedulerViewDisabledBeforeAfter" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />

    <q-markdown>
In this example, the `disabled-weekdays` is set to disable the weekends.
    </q-markdown>
    <example-viewer title="Disabled Weekdays" file="SchedulerViewDisabledWeekdays" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />

    <example-title title="Navigation" />
    <example-viewer title="Prev/Next" file="SchedulerViewPrevNext" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
    <example-viewer title="Swipe" file="SchedulerViewSwipe" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />

    <example-title title="Hierarchy" />
    <q-markdown>
The example below uses the keys `children` and `expanded`, in the `resources` object, to show a tree hierarchy.
    </q-markdown>
    <example-viewer title="Children" file="SchedulerViewChildren" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />

    <example-title title="Events" />
    <q-markdown>
::: tip
The events below won't show up unless there is a listener for it. Therefore, if using `Vue Dev Tools`, you won't see it unless you add it.
:::

You can add a listener for the following events. An event is comprised of an `event + suffix`. By adding the event with the suffix, you get the completed listener name.

| Event       | `:day:header2`     | `:resource2`       | `:resource:header2` | `resource:day2`    | `:date2`           |
| ----------- | :----------------: | :----------------: | :-----------------: | :----------------: | :----------------: |
| click       | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :heavy_check_mark: |
| contextmenu | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :heavy_check_mark: |
| mousedown   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |
| mousemove   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |
| mouseup     | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |
| mouseenter  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |
| mouseleave  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |
| touchstart  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |
| touchmove   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |
| touchend    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |

::: warning
Do NOT combine suffixes. Only one suffix per event. A different suffix will give you a different event.
:::

| Suffix | Description | Data |
| ------ | ----------- | ---- |
| `:day:header2` | The header day area | `{ scope: { timestamp: { "..." } }, event: { "..." } } |
| `:resource2` | A resource | `{ scope: { resource: { "..."}, index, days: [ "..." ] }, event: { "..." } } |
| `:resource:day2` | The day associated with a resource | `{ scope: { timestamp: { "..." }, index, resource: { "..."} }, event: { "..." } } |
| `:resource:header2` | The header area above the resources | `{ scope: { days: [ "..." ] }, event: { "..." } } |
| `:date2` | The date button | Date in format YYYY-MM-DD |

::: tip
`:resource:header2` is new since v2.4.0
:::

::: warning
The events `:day` (now `:day:header2`), `:resource`, `:resource:day` and `:date` still exist, but have been marked as deprecated starting with v2.4.0
:::

The example below is only showing `click` events as well as the `input` event.
    </q-markdown>
    <example-viewer title="Events" file="SchedulerViewEvents" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />

    <example-title title="Slots" />
    <q-markdown>
For slots that return `timestamp`, it looks like this:
```js
{
  date: '',       // YYYY-MM-DD
  time: '',       // 00:00:00 (optional)
  year: 0,        // YYYY
  month: 0,       // mm (Jan = 1, etc)
  day: 0,         // day of the month
  weekday: 0,     // week day
  hour: 0,        // 24-hr
  minute: 0,      // mm
  doy: 0,         // day of year
  workweek: 0,    // workweek number
  hasDay: false,  // if this timestamp is supposed to have a date
  hasTime: false, // if this timestamp is supposed to have a time
  past: false,    // if timestamp is in the past (based on `now` property)
  current: false, // if timestamp is current date (based on `now` property)
  future: false,  // if timestamp is in the future (based on `now` property)
  disabled: false // if timestamp is disabled
}
```

Below, the slot receives an array of `timestamp`s for the days that are being displayed.
    </q-markdown>
    <example-viewer title="Slot (scheduler-resources-header)" file="SchedulerViewSlotResourcesHeader" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />

    <example-viewer title="Slot (head-day)" file="SchedulerViewSlotHeadDay" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />

    <q-markdown>
Below, the slot receives the `timestamp` for the day being displayed.
    </q-markdown>
    <example-viewer title="Slot (scheduler-day-header)" file="SchedulerViewSlotDayHeader" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />

    <q-markdown>
Below, the slot receives the `timestamp` for the day being displayed, an index, and the resource.
    </q-markdown>
    <example-viewer title="Slot (scheduler-resource-day)" file="SchedulerViewSlotResourceDay" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />

    <q-markdown>
Below, the slot receives the `resource` to be displayed. In this case, an avatar (or icon) is being displayed along with the resource name.
    </q-markdown>
    <example-viewer title="Slot (scheduler-resource)" file="SchedulerViewSlotResource" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />

    <example-title title="Theme" />
    <example-viewer title="Theme" file="SchedulerViewTheme" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />

    <example-title title="Locale Support" />
    <example-viewer title="Locale" file="SchedulerViewLocale" :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />

  </div>
</template>

<script>
import ExampleTitle from '../components/ExampleTitle'
import { slugify } from 'assets/page-utils'
import { version } from 'ui'

export default {
  name: 'SchedulerView',

  components: {
    ExampleTitle
  },

  data () {
    return {
      tempToc: [],
      locationUrl: 'https://github.com/quasarframework/quasar-ui-qcalendar/tree/dev/demo/src/examples/',
      jsPaths: [`https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qcalendar@${version}/dist/index.umd.min.js`],
      cssPaths: [
        `https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qcalendar@${version}/dist/index.min.css`,
        'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.12.0/css/all.css'
      ]
    }
  },

  mounted () {
    this.toc = []
    this.tempToc = []
    this.addToToc('Scheduler View')
    this.addToToc('Basic', 2)
    this.addToToc('Dark', 2)

    this.addToToc('Disabled')
    this.addToToc('Disabled Days', 2)
    this.addToToc('Disabled Before/After', 2)
    this.addToToc('Disabled Weekdays', 2)

    this.addToToc('Navigation')
    this.addToToc('Prev/Next', 2)
    this.addToToc('Swipe', 2)

    this.addToToc('Hierarchy')
    this.addToToc('Children', 2)

    this.addToToc('Events')
    this.addToToc('Events', 2)

    this.addToToc('Slots')
    this.addToToc('Slot (scheduler-resources-header)', 2)
    this.addToToc('Slot (head-day)', 2)
    this.addToToc('Slot (scheduler-day-header)', 2)
    this.addToToc('Slot (scheduler-resource-day)', 2)
    this.addToToc('Slot (scheduler-resource)', 2)

    this.addToToc('Theme')
    this.addToToc('Theme', 2)

    this.addToToc('Locale Support')
    this.addToToc('Locale', 2)

    this.toc = this.tempToc
  },

  computed: {
    toc:
    {
      get () {
        return this.$store.state.common.toc
      },
      set (toc) {
        this.$store.commit('common/toc', toc)
      }
    }
  },

  methods: {
    addToToc (name, level = 1) {
      let n = name
      if (level === 1) {
        n = 'title-' + n
      }
      else {
        n = 'example-' + n
      }
      const slug = slugify(n)
      this.tempToc.push({
        children: [],
        id: slug,
        label: name,
        level: level
      })
    }
  }
}
</script>
