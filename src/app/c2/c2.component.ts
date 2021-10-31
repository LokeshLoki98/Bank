import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor(private xyz:DemoService) { }
  abc()
  {
    this.xyz.service();
  }

  ngOnInit(): void {
  }

}
