import { Component } from '@angular/core';
import { BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  qrData = null;
  createdCode = null;
  scannedCode = null;
  constructor(private barcodeScanner: BarcodeScanner) {}

  createCode() {
    this.createdCode = this.qrData;
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    });
  }

}
