import { Injectable } from "@angular/core";

import { TweetsOrganizerService } from "./tweets-organizer.service";

@Injectable()
export class AggregatorService {
  constructor(private tweetsOrganizerService: TweetsOrganizerService) {
    let tweets = tweetsOrganizerService.getTweets();

    // Create histogram
    let months = {};
    for (var party of tweets) {
      for (var tweet of party.tweets) {
        let dt = new Date(tweet.created_at);
        let month = dt.getMinutes() % 10; // fake month
        if (!(month in months)) {
          months[month] = [];
        }
        months[month].push(tweet.sentiment.comparative);
      }
    }
  }

  // Calculate average sentiment for each months

  //console.log(Math.round(Math.random() * 10))

  //   { data: [65, 59, 80, 81, 56, 55, 40], label: "GOP" },
  //{ data: [28, 48, 40, 19, 86, 27, 90], label: "Dems" }
}
