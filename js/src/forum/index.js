import app from 'flarum/forum/app';
import addConstructorButton from './addConstructorButton';
import ConstructorModal from './components/ConstructorModal';

app.initializers.add('growbox-constructor', () => {
  app.modalComponents.constructor = ConstructorModal;
  
  addConstructorButton();
});