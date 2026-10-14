import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

/*
 * A program egy rombusz területének kiszámítására használható a két átló alapján.
 * Dátum: 2026. október 14.
 */
@Component({
  selector: 'app-diamond',
  imports: [ReactiveFormsModule],
  templateUrl: './diamond.component.html',
  styleUrl: './diamond.component.css',
})
export class DiamondComponent {
  builder = inject(FormBuilder);

  diamondForm = this.builder.group({
    diagonal_e: ['', [Validators.required, Validators.min(1)]],
    diagonal_f: ['', [Validators.required, Validators.min(1)]],
    area: [''],
  });

  showArea = false;
  error = '';

  startCalc() {
    this.showArea = false;
    this.error = '';

    if (this.diamondForm.invalid) {
      this.error = 'Mindkét átló hosszához legalább 1-et adj meg!';
      return;
    }

    const diagonal_e = Number(this.diamondForm.value.diagonal_e);
    const diagonal_f = Number(this.diamondForm.value.diagonal_f);
    const area = this.calcArea(diagonal_e, diagonal_f);
    this.diamondForm.get('area')?.setValue(String(area));
    this.showArea = true;
  }

  calcArea(diagonal_e: number, diagonal_f: number): number {
    return diagonal_e * diagonal_f / 2;
  }

  clearResult() {
    this.showArea = false;
    this.error = '';
  }
}
