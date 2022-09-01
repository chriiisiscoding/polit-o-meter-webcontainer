import { Injectable } from "@angular/core";

import * as _ from 'underscore';

import { SentimentService } from "./sentiment.service";

@Injectable()
export class TweetsOrganizerService {
  private parties: any[];

  constructor(private sentimentService: SentimentService) {
    let tweets = sentimentService.getTweets();
    this.parties = [];
    for (var tweet of tweets) {
      try {
        let party = tweet.user.screen_name;
        let partyObj = _.find(this.parties,function(p){return p.name == party});
        if(partyObj == null){
           partyObj = {name: party, tweets:[]}
          this.parties.push(partyObj);
        }
        partyObj.tweets.push(tweet);

        
      } catch (e) {
        console.log(e);
      }
    }
    console.log(this.parties);
  }

  getTweets() {
    return this.parties;
  }
}
