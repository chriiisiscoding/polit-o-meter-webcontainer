import { Component } from "@angular/core";

import { TweetsOrganizerService } from "../../services/tweets-organizer.service";

@Component({
  selector: "tweets",
  templateUrl: "./tweets.component.html",
  styleUrls: ["./tweets.component.scss"]
})
export class TweetsComponent{

  private tweets: Object;

  constructor(private tweetsOrganizerService: TweetsOrganizerService) {
    this.tweets = tweetsOrganizerService.getTweets();
  }
}
