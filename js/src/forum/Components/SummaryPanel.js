import Component from 'flarum/common/Component';
import Button from 'flarum/common/components/Button';

export default class SummaryPanel extends Component {
  view() {
    const { selectedParts, loading } = this.attrs;
    const total = Object.values(selectedParts).reduce((sum, part) => sum + (part?.price || 0), 0);

    return (
      <div className="SummaryPanel">
        <h3>Your Grow Box</h3>
        
        <div className="SelectedParts">
          {Object.entries(selectedParts).map(([type, part]) => part && (
            <div className="SelectedPart">
              <span className="PartType">{type}:</span>
              <span className="PartName">{part.name}</span>
              <span className="PartPrice">{part.price} ₽</span>
            </div>
          ))}
        </div>
        
        <div className="TotalPrice">
          Total: {total} ₽
        </div>
        
        <Button 
          className="Button Button--primary GenerateButton"
          onclick={this.attrs.onGenerateLinks}
          loading={loading}
          disabled={Object.keys(selectedParts).length === 0}
        >
          Generate Marketplace Links
        </Button>
      </div>
    );
  }
}