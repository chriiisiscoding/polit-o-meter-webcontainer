import { Injectable } from "@angular/core";

import tweets_data from "../../data/example_tweets.json";

@Injectable()
export class TwitterService {

  getTweets() {
    return tweets_data;
  }
}
