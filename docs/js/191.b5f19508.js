(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[191],{"44c9":function(e,n,t){"use strict";t.r(n),n["default"]='<template>\n  <q-calendar\n    v-model="selectedDate"\n    view="day"\n    locale="en-us"\n    style="height: 400px;"\n  >\n    <template #head-day="{ timestamp }">\n      {{ getHeadDay(timestamp) }}\n    </template>\n  </q-calendar>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: \'\'\n    }\n  },\n\n  methods: {\n    getHeadDay (timestamp) {\n      return `The date is: ${timestamp.date}`\n    }\n  }\n}\n<\/script>\n'}}]);