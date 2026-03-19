import { Component, output } from '@angular/core';

@Component({
  selector: 'app-chat-controls',
  imports: [],
  templateUrl: './chat-controls.html',
  styleUrl: './chat-controls.css',
})
export class ChatControls {
  hideChatLog = output<void>();
  expandPanel = output<boolean>();

  panelStatus: boolean = false;

  close(event: Event) {
    event.stopPropagation();
    this.hideChatLog.emit();
  }

  onTogglePanel(event: Event) {
    event.stopPropagation();
    this.panelStatus = !this.panelStatus;
    this.expandPanel.emit(this.panelStatus);
  }
}
