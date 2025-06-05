// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    'target-group-and-students-profile',
    'expected-results-and-evaluation-method',
    'lesson-review',
    'didactic-tools-and-environmental-demands',

    {
      type: 'category',
      label: 'L101: Co je IoT',
      link: {
        type: 'doc',
        id: 'L101/L101-what-is-iot-cs',
      },
      collapsed: true,
      items: [
        'L101/L101-introduction-cs',
        'L101/L101-theory-cs',
        'L101/L101-experiment-cs',
        'L101/L101-projects-cs',
        'L101/L101-presentation-cs',
        'L101/L101-assessment-cs'
      ],
    },

    {
      type: 'category',
      label: 'L102: IoT stavebnice HARDWARIO TOWER',
      link: {
        type: 'doc',
        id: 'L102/L102-hardwario-tower-iot-kit-cs',
      },
      collapsed: true,
      items: [
        'L102/L102-introduction-cs',
        'L102/L102-theory-cs',
        'L102/L102-experiment-cs',
        'L102/L102-projects-cs',
        'L102/L102-presentation-cs',
        'L102/L102-assessment-cs'
      ],
    },

    {
      type: 'category',
      label: 'L103: IoT tlačítko',
      link: {
        type: 'doc',
        id: 'L103/L103-iot-push-button-cs',
      },
      collapsed: true,
      items: [
        'L103/L103-introduction-cs',
        'L103/L103-theory-cs',
        'L103/L103-experiment-cs',
        'L103/L103-projects-cs',
        'L103/L103-presentation-cs',
        'L103/L103-assessment-cs'
      ],
    },

    {
      type: 'category',
      label: 'L104: IoT teploměr a vlhkoměr',
      link: {
        type: 'doc',
        id: 'L104/L104-iot-temperature-and-humidity-monitor-cs',
      },
      collapsed: true,
      items: [
        'L104/L104-introduction-cs',
        'L104/L104-theory-cs',
        'L104/L104-experiment-cs',
        'L104/L104-projects-cs',
        'L104/L104-presentation-cs',
        'L104/L104-assessment-cs'
      ],
    },

    {
      type: 'category',
      label: 'L105: IoT Air Quality Monitor',
      link: {
        type: 'doc',
        id: 'L105/L105-iot-indoor-air-quality-monitor',
      },
      collapsed: true,
      items: [
        'L105/L105-introduction',
        'L105/L105-theory',
        'L105/L105-experiment',
        'L105/L105-projects',
        'L105/L105-presentation',
        'L105/L105-assessment'
      ],
    },

    {
      type: 'category',
      label: 'L106: IoT monitor vibrací',
      link: {
        type: 'doc',
        id: 'L106/L106-iot-vibration-monitor-cs',
      },
      collapsed: true,
      items: [
        'L106/L106-introduction-cs',
        'L106/L106-theory-cs',
        'L106/L106-experiment-cs',
        'L106/L106-projects-cs',
        'L106/L106-presentation-cs',
        'L106/L106-assessment-cs'
      ],
    },
    {
      type: 'category',
      label: 'L107: IoT osvětlení',
      link: {
        type: 'doc',
        id: 'L107/L107-iot-light-monitor-cs',
      },
      collapsed: true,
      items: [
        'L107/L107-introduction-cs',
        'L107/L107-theory-cs',
        'L107/L107-experiment-cs',
        'L107/L107-projects-cs',
        'L107/L107-presentation-cs',
        'L107/L107-assessment-cs'

      ],
    },
    {
      type: 'category',
      label: 'L108: IoT čítač impulzů',
      link: {
        type: 'doc',
        id: 'L108/L108-iot-pulse-monitor-cs',
      },
      collapsed: true,
      items: [
        'L108/L108-introduction-cs',
        'L108/L108-theory-cs',
        'L108/L108-experiment-cs',
        'L108/L108-projects-cs',
        'L108/L108-presentation-cs',
        'L108/L108-assessment-cs'

      ],
    },

    {
      type: 'category',
      label: 'L109: IoT Soil Monitor',
      link: {
        type: 'doc',
        id: 'L109/L109-iot-soil-monitor',
      },
      collapsed: true,
      items: [
        'L109/L109-introduction',
        'L109/L109-theory',
        'L109/L109-experiment',
        'L109/L109-projects',
        'L109/L109-presentation',
        'L109/L109-assessment'
      ],
    },
    {
      type: 'doc',
      id: 'L110-iot-alarm-cs',
      label: 'L110: IoT Alarm',
    },
    {
      type: 'doc',
      id: 'L111-iot-thermostat-cs',
      label: 'L111: IoT termostat',
    },
     {
      type: 'doc',
      id: 'L112-iot-controller-cs',
      label: 'L112: IoT ovladač',
    },
    {
      type: 'doc',
      id: 'L113-iot-display-cs',
      label: 'L113: IoT displej',
    },
    {
      type: 'doc',
      id: 'L114-iot-gps-locator-cs',
      label: 'L114: IoT GPS lokátor',
    },

    /*{
      type: 'category',
      label: 'Thingsboard',
      link: {
        type: 'doc',
        id: 'thingsboard/index',
      },
      collapsed: true,
      items: [

      ],
    }*/
  ],
};

module.exports = sidebars;
