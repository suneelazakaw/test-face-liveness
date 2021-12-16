import { Component, OnInit } from '@angular/core';
import { FaceSDKResultCode } from '@regulaforensics/facesdk-webclient';
import { IFaceLiveness } from './models/face-liveness.response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-face-liveness';


  constructor() {

  }

  ngOnInit() {
    const component = document.getElementsByTagName('face-liveness')[0];

    function listener(event: any) {
      if (event.detail) {
        const response = event.detail as IFaceLiveness;
        console.log(response);
        if (response && response?.code == -1) {
          console.log("close");
        } else if (response && response?.code == FaceSDKResultCode.FACER_OK && response?.images && response?.images?.length) {
          console.log("Verified");
        } else {
          console.log("FACER_LOW_QUALITY");
        }
      }
    }

    if (component) {
      var style = document.createElement('style')
      style.innerHTML = 'header, footer { display: none !important; }';
      component.shadowRoot!.appendChild(style);
      component.addEventListener('face-liveness', listener);
    }
  }
}
