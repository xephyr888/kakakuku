import Modal from 'flarum/common/components/Modal';
import PartSelector from './PartSelector';
import SummaryPanel from './SummaryPanel';

export default class ConstructorModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);
    
    this.state = {
      selectedParts: {},
      loading: false
    };
  }

  className() {
    return 'GrowBoxConstructorModal';
  }

  title() {
    return 'Grow Box Constructor';
  }

  content() {
    return (
      <div className="Modal-body">
        <div className="constructor-container">
          <div className="part-selection">
            <PartSelector 
              selectedParts={this.state.selectedParts}
              onSelectPart={(type, part) => this.selectPart(type, part)}
            />
          </div>
          <div className="summary-panel">
            <SummaryPanel 
              selectedParts={this.state.selectedParts}
              onGenerateLinks={() => this.generateLinks()}
              loading={this.state.loading}
            />
          </div>
        </div>
      </div>
    );
  }

  selectPart(type, part) {
    this.state.selectedParts[type] = part;
    this.updateState();
  }

  async generateLinks() {
    this.state.loading = true;
    this.updateState();
    
    try {
      const links = {};
      
      for (const [type, part] of Object.entries(this.state.selectedParts)) {
        const response = await app.request({
          method: 'POST',
          url: app.forum.attribute('apiUrl') + '/growbox/generate-link',
          body: {
            partId: part.id,
            marketplace: 'ozon'
          }
        });
        
        links[type] = response.url;
      }
      
      // Show links to user
      alert('Links generated!'); // Replace with proper UI
      console.log(links);
    } catch (e) {
      console.error(e);
      alert('Error generating links');
    } finally {
      this.state.loading = false;
      this.updateState();
    }
  }

  updateState() {
    this.setState(this.state);
  }
}