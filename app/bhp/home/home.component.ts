import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  bhpForm: FormGroup;
  bhp: {
    area: number,
    bedrooms: number,
    bathrooms: number,
    location: string
  } = {
    area: null,
    bedrooms: null,
    bathrooms: null,
    location: ''
  };
  formSubmitted: boolean;
  locations: Array<string>;

  constructor(
    private fb: FormBuilder,
    private homeService: HomeService
    ) {
    this.createBHPForm();
    this.formSubmitted = false;
  }

  ngOnInit(): void {
    this.homeService.getLocations().subscribe((result: {locations: Array<string>}) => {
      this.locations = result.locations;
      console.log(result.locations);
    });
  }

  createBHPForm(): void {
    this.bhpForm = this.fb.group({
      area: new FormControl(this.bhp.area, [Validators.required]),
      bedrooms: new FormControl(this.bhp.bedrooms, [Validators.required]),
      bathrooms: new FormControl(this.bhp.bathrooms, [Validators.required]),
      location: new FormControl(this.bhp.location, [Validators.required])
    });
  }

  getPrediction(): void {
    this.formSubmitted = true;
  }



}
