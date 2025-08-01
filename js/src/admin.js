import app from 'flarum/admin/app';
import ConfigurePage from './src/admin/ConfigurePage';

app.initializers.add('growbox-constructor', () => {
  app.extensionData
    .for('growbox-constructor')
    .registerPage(ConfigurePage);
});