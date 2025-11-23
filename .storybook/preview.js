import { setup } from '@storybook/vue3';
import { Quasar } from 'quasar';

// Quasar styles
import 'quasar/src/css/index.sass';
import '@quasar/extras/material-icons/material-icons.css';

// Tailwind (optional)
import './tailwind.css'

setup((app) => {
  app.use(Quasar, {
    config: {},
  });
});
