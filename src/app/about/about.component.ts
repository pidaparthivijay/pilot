import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  animations: [
    trigger("visibilityChanged", [
      state("show", style({ opacity: 1 })),
      state("hide", style({ opacity: 0 })),
      transition("show => hide", animate("1000ms")),
      transition("hide => show", animate("1000ms")),
    ]),
  ],
})
export class AboutComponent implements OnInit {
  constructor() {}

  visiblityState = "hide";
  bringUpName() {
    if (this.visiblityState === "hide") {
      document.getElementById("fullName").style.display = "inline";
      this.visiblityState = "show";
    } else {
      this.visiblityState = "hide";
      setTimeout(function () {
        document.getElementById("fullName").style.display = "none";
      }, 500);
    }
  }
  ngOnInit(): void {}
}
