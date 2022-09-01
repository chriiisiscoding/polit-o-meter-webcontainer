import { Injectable } from "@angular/core";

import Sentiment from "sentiment";

import { TwitterService } from "./twitter.service";

@Injectable()
export class SentimentService {
  
  private tweets: any[];

  constructor(private twitterService: TwitterService) {
    this.tweets = twitterService.getTweets();
    for (let tweet of this.tweets) {
      tweet.sentiment = this.analyze(tweet.text);
    }
  }

  analyze(text) {
    let sent = new Sentiment();
    let result = sent.analyze(text);
    return result;
  }

  getTweets() {
    return this.tweets;
  }
}
