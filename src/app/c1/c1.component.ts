import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(private abc:DemoService) { }
  lmn()
  {
   this.abc.service()
  }

  ngOnInit(): void {
  }

}
