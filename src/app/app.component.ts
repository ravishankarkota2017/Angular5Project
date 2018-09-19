import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  currentFeatureSelected: string = 'recipe';

  ngOnInit(): void {
   
  }

  headerlinkChanged(feature:string) {
    console.log(feature);
    this.currentFeatureSelected = feature;
   }
}
