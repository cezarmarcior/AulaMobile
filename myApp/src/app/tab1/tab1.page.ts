import { Component } from '@angular/core';
import { ToolsService } from '../services/tools.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private tools: ToolsService
    ) { }

  executar() {
    this.tools.msgShow('Atenção', 'Ola pessoal....');
  }

  execToast() {
    this.tools.msgToast('Teste toast...');
  }

}
