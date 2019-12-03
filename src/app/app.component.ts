import { Component, OnInit } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { GiphyService } from "../app/giphy.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "giphy-search";
  items = [];
  animatedgif = "";

  constructor(private giphy: GiphyService) {}

  ngOnInit() {}
  clickgif(item) {
    this.animatedgif = item.images.fixed_height.url;
  }
  giphySearch(str) {
    this.giphy.getGiphy(str).subscribe(res => {
      this.items = res["data"];
    });
  }
}
