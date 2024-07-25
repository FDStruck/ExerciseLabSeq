import { Component } from '@angular/core';
import axios from 'axios';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-sequence',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './get-sequence.component.html',
  styleUrls: ['./get-sequence.component.css']
})
export class GetSequenceComponent {
  result: string = '';
  sequenceNumber: number | null = null; // Bind input 
  isCicle: boolean = false; // checkbox to determine the API

  async fetchSequence() {
    if (this.sequenceNumber === null) {
      this.result = 'Please enter a sequence number';
      return;
    }

    if (this.sequenceNumber < 0) {
      this.result = "The number can't be negative";
      return;
    }

    // Create the URL depending on checkbox
    const url = this.isCicle
      ? `http://localhost:8080/labseq/cicle/${this.sequenceNumber}`
      : `http://localhost:8080/labseq/${this.sequenceNumber}`;

    try {
      const response = await axios.get(url);
      console.log(JSON.stringify(response.data));
      this.result = JSON.stringify(response.data);
    } catch (error) {
      console.error("Error getting sequence...", error);
      this.result = 'Error getting sequence...';
    }
  }
}
