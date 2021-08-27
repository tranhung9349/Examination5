import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {PlayerService} from '../serivce/player.service';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent implements OnInit {
  playerForm: FormGroup;
  id: number;
  constructor(private activatedRoute: ActivatedRoute, private playerService: PlayerService, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getPlayer(this.id);
    });
  }
  ngOnInit(): void {
  }
  getPlayer(id: number) {
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
  updatePlayer(id: number) {
    const category = this.playerForm.value;
    this.playerService.updateCategory(id, category).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigate(['']);
    }, e => {
      console.log(e);
    });
  }
  back() {
    this.router.navigate(['']);
  }
}
