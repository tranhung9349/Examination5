import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../serivce/player.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  playerForm: FormGroup;
  id: number;
  constructor(private playerService: PlayerService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getPlayerById(this.id);
    });
  }

  ngOnInit(): void {
  }
  getPlayerById(id: number) {
    return this.playerService.findById(id).subscribe(player => {
      this.playerForm = new FormGroup({
        id: new FormControl(player.id),
        name: new FormControl(player.name),
        champ: new FormControl(player.champ),
        kda: new FormControl(player.kda),
        des: new FormControl(player.des),
      });
    });
  }
  back() {
    this.router.navigate(['']);
  }
}
