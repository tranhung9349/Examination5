import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PlayerService} from '../serivce/player.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {
  playerForm: FormGroup = new FormGroup({
    name: new FormControl(),
    champ: new FormControl(),
    kda: new FormControl(),
    des: new FormControl(),
  });
  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit(): void {
  }
  create() {
    const player = this.playerForm.value;
    this.playerService.saveCategory(player).subscribe(() => {
      this.playerForm.reset();
      alert('Tạo thành công');
      this.router.navigate(['']);
    }, e => {
      console.log(e);
    });
  }
  back() {
    this.router.navigate(['']);
  }
}
