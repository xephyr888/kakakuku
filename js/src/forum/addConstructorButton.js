import Button from 'flarum/common/components/Button';

export default function addConstructorButton() {
  // Add to discussion controls
  extend('flarum/forum/components/DiscussionControls', 'items', function(items) {
    items.add(
      'growbox-constructor',
      Button.component({
        className: 'Button Button--icon',
        icon: 'fas fa-box-open',
        onclick: () => app.modal.show('constructor'),
      }, app.translator.trans('growbox-constructor.forum.open_constructor'))
    );
  });
}