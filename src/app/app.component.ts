import { Component } from "@angular/core";
import { NavigationEnd, Router, RouterOutlet } from "@angular/router";
import { slideInAnimation } from "./shared/animations";
import { Constants } from "./shared/constants";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [slideInAnimation],
})
export class AppComponent {
  title = "Vijay";
  nextComponent: string;
  showResumeDownload: boolean;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        document.getElementById(
          "main"
        ).style.background = Constants.COLOR_MAP.get(val.url);
        this.nextComponent = Constants.NEXT_MAP.get(val.url);
        this.showResumeDownload = "/resume" == val.url;
      }
    });
  }
  downloadResume() {}
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  navigateToNext() {
    this.router.navigateByUrl(this.nextComponent);
  }
}
