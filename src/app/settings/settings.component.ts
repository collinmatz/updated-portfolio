import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Toggle } from './toggle';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  @Input("options") options?: Map<string, boolean>;
  @Output() toggleState = new EventEmitter<Map<string, boolean>>();

  toggles: Toggle[] = [];

  ngOnChanges() {
    if (this.options) {
      for (const [title, state] of this.options.entries()) {
        this.toggles.push(new Toggle(title, state));
      }
    }
  }

  checkBoxToggled(toggle: Toggle) {
    toggle.state = !toggle.state;
    const stateMap = new Map([
      [toggle.title, toggle.state]
    ])
    this.toggleState.emit(stateMap);
  }
}
