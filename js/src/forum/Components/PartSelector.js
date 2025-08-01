import Component from 'flarum/common/Component';
import Button from 'flarum/common/components/Button';

export default class PartSelector extends Component {
  view() {
    const categories = [
      {
        id: 'light',
        name: 'Lighting',
        parts: [
          { id: 'led-100w', name: 'LED 100W', price: 5000 },
          { id: 'led-150w', name: 'LED 150W', price: 7500 }
        ]
      },
      {
        id: 'ventilation',
        name: 'Ventilation',
        parts: [
          { id: 'fan-120mm', name: '120mm Fan', price: 1500 },
          { id: 'fan-200mm', name: '200mm Fan', price: 2500 }
        ]
      },
      // Add more categories and parts
    ];

    return (
      <div className="PartSelector">
        {categories.map(category => (
          <div className="PartCategory">
            <h3>{category.name}</h3>
            <div className="PartOptions">
              {category.parts.map(part => (
                <Button 
                  className={`PartOption ${this.attrs.selectedParts[category.id]?.id === part.id ? 'active' : ''}`}
                  onclick={() => this.attrs.onSelectPart(category.id, part)}
                >
                  <div className="PartName">{part.name}</div>
                  <div className="PartPrice">{part.price} ₽</div>
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}