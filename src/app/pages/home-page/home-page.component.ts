import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  user: User | null = null


  constructor(
    private userService: UserService
    // private bitcoinService:BitcoinService
  ) { }

  ngOnInit(): void {
    this.user = this.userService.getLoggedInUser()
  }

}
