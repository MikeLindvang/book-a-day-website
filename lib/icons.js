// lib/icons.js
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import {
  faBook,
  faInfoCircle,
  faBoxOpen,
  faEnvelope,
  faEye,
  faPencilAlt,
  faTrash,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

// Register icons for use throughout the app
library.add(
  faBook,
  faInfoCircle,
  faBoxOpen,
  faEnvelope,
  faEye,
  faPencilAlt,
  faTrash,
  faPlus
);
