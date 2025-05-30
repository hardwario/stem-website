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
        id: 'L101-what-is-iot-cs',
      },
      collapsed: true,
      items: [
        'L101-introduction-cs',
        'L101-theory-cs',
        'L101-experiment-cs',
        'L101-application-cs',
        'L101-presentation-cs',
        'L101-assessment-cs'
      ],
    },

    {
      type: 'category',
      label: 'L102: IoT stavebnice HARDWARIO TOWER',
      link: {
        type: 'doc',
        id: 'L102-hardwario-tower-iot-kit-cs',
      },
      collapsed: true,
      items: [
        'L102-introduction-cs',
        'L102-theory-cs',
        'L102-experiment-cs',
        'L102-application-cs',
        'L102-presentation-cs',
        'L102-assessment-cs'
      ],
    },

    {
      type: 'category',
      label: 'L103: IoT tlačítko',
      link: {
        type: 'doc',
        id: 'L103-iot-push-button-cs',
      },
      collapsed: true,
      items: [
        'L103-introduction-cs',
        'L103-theory-cs',
        'L103-experiment-cs',
        'L103-application-cs',
        'L103-presentation-cs',
        'L103-assessment-cs'
      ],
    },

    {
      type: 'category',
      label: 'L105: IoT Air Quality Monitor',
      link: {
        type: 'doc',
        id: 'L105-iot-indoor-air-quality-monitor',
      },
      collapsed: true,
      items: [
        'L105-introduction',
        'L105-theory',
        'L105-experiment',
        'L105-application',
        'L105-presentation',
        'L105-assessment'
      ],
    },

    {
      type: 'category',
      label: 'L109: IoT Soil Monitor',
      link: {
        type: 'doc',
        id: 'L109-iot-soil-monitor',
      },
      collapsed: true,
      items: [
        'L109-introduction',
        'L109-theory',
        'L109-experiment',
        'L109-projects',
        'L109-presentation',
        'L109-assessment'
      ],
    }
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
