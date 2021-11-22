import { Component, OnInit } from '@angular/core';
import {Overlay,OverlayConfig,OverlayRef} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { MatSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//constructor설정
export class AppComponent implements OnInit{
  cdkSpinnerCreate(): OverlayRef {
    throw new Error('Method not implemented.');
  }
  
  public spinnerRef: OverlayRef = this.cdkSpinnerCreate();
  constructor(
    private overlay: Overlay
  ){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}



