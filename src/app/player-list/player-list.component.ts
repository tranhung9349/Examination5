import { Component, OnInit } from '@angular/core';
import {Player} from '../player';
import {PlayerService} from '../serivce/player.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  playerList: Player[] = [];

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.playerService.getAll().subscribe(players => {
      this.playerList = players;
      console.log(players);
    });
  }
  delete(id: number) {
    if (confirm('Do you want to delete this player?') === true) {
      this.playerService.deleteCategory(id).subscribe(() => {
        this.getAll();
        this.router.navigate(['']);
      }, e => {
        console.log(e);
      });
    } else {
      this.router.navigate(['']);
    }
  }
}
