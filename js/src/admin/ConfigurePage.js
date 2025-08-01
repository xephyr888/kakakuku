import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import Switch from 'flarum/common/components/Switch';

export default class ConfigurePage extends ExtensionPage {
  content() {
    return (
      <div className="GrowBoxConstructorSettings">
        <div className="Form-group">
          <label>Enable Ozon Integration</label>
          <Switch 
            state={this.setting('growbox-constructor.ozon_enabled', true)()}
            onchange={this.setting('growbox-constructor.ozon_enabled', true)}
          />
        </div>
        
        <div className="Form-group">
          <label>Ozon Partner ID</label>
          <input 
            className="FormControl" 
            bidi={this.setting('growbox-constructor.ozon_partner_id')}
          />
        </div>
        
        <div className="Form-group">
          <label>Enable Wildberries Integration</label>
          <Switch 
            state={this.setting('growbox-constructor.wb_enabled', false)()}
            onchange={this.setting('growbox-constructor.wb_enabled', false)}
          />
        </div>
        
        <div className="Form-group">
          <label>Wildberries Partner ID</label>
          <input 
            className="FormControl" 
            bidi={this.setting('growbox-constructor.wb_partner_id')}
          />
        </div>
        
        {this.submitButton()}
      </div>
    );
  }
}