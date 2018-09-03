import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  currentFeatureSelected: string = 'recipe';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //console.log(this.currentFeaureSelected);
  }

  headerlinkChanged(feature:string) {
    console.log(feature);
    this.currentFeatureSelected = feature;
    //this.currentFeaureSelected = 'shopping';
  }
}
