import { Component, OnInit } from '@angular/core';
import { X, DisplayHints } from '../models/display-hints.model';

@Component({
  selector: 'app-label-presenter',
  templateUrl: './label-presenter.component.html',
  styleUrls: ['./label-presenter.component.css']
})
export class LabelPresenterComponent implements OnInit {

  displayHints: typeof DisplayHints = DisplayHints;

  label: X = {
    hint: DisplayHints.TextSingleLine,
    text: "One liner label"
  };
  /*label: X = {
    hint: DisplayHints.Icon,
    name: "delete"
  };
  label: X = {
    hint: DisplayHints.ImageLink,
    url: "assets/pic.jpg",
    width: 256,
    height: 256
  };*/


  constructor() { }

  ngOnInit() {
  }

}
