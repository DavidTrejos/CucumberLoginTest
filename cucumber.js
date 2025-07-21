module.exports = {
  default: {
    require: ['features/step_definitions/*.ts'],
    requireModule: ['ts-node/register'],
    format: ['progress', 'html:reports/cucumber-report.html'],
    paths: ['features/*.feature'],
    publishQuiet: true
  }
};
