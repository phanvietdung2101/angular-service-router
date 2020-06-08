import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent,
  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  },
  {
    path: 'dictionary',
    component: DictionaryComponent,
    children: [{
      path: ':key',
      component: DictionaryDetailComponent
    }]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
