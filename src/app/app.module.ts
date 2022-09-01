import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgChartsModule } from 'ng2-charts';

import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/';
// import { MatSelectModule } from '@angular/material/';
// import { MatIconModule } from '@angular/material/';
// import { MatCardModule } from '@angular/material/';
// import { MatFormFieldModule } from '@angular/material/';
// import { MatChipsModule } from '@angular/material/';
// import { MatListModule } from '@angular/material/';
// import { MatGridListModule } from '@angular/material/';
// import { MatToolbarModule } from '@angular/material/';

import { AppComponent } from './components/app/app.component';
import { VisualizationComponent } from './components/visualization/visualization.component';
import { SentimentService } from './services/sentiment.service';
import { TwitterService } from './services/twitter.service';
import { TweetComponent } from './components/tweet/tweet.component';
import { TweetsComponent } from './components/tweets/tweets.component';
import { TweetsOrganizerService } from './services/tweets-organizer.service';
import { AggregatorService } from './services/aggregator.service';
import { ChartService } from './services/chart.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgChartsModule,
    MatInputModule,
    // MatIconModule,
    // MatCardModule,
    // MatFormFieldModule,
    // MatSelectModule,
    // MatButtonModule,
    // MatChipsModule,
    // MatListModule,
    // MatGridListModule,
    // MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
