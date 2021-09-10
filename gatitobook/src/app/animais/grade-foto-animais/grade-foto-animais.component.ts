import { Component, OnInit, Input } from '@angular/core';
import { Animais } from '../animais';

@Component({
  selector: 'app-grade-foto-animais',
  templateUrl: './grade-foto-animais.component.html',
  styleUrls: ['./grade-foto-animais.component.css']
})
export class GradeFotoAnimaisComponent implements OnInit {
  @Input() animais!: Animais;

  constructor() { }

  ngOnInit(): void {
  }

}
