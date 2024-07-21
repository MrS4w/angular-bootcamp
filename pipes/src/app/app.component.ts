import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  TitleCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConvertPipe } from './convert.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    JsonPipe,
    ConvertPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name!: string;
  date!: string;
  amount!: number;
  height!: number;
  miles!: number;

  onNameChange(target: any) {
    this.name = target.value;
  }

  onDateChange(target: any) {
    this.date = target.value;
  }

  onAmountChange(target: any) {
    this.amount = target.value;
  }

  onHeightChange(target: any) {
    this.height = target.value;
  }

  onMilesChange(target: any) {
    this.miles = target.value;
  }
}
