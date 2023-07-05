import { Component, Input, OnInit } from '@angular/core';
import { Observable, switchMap, take, timer } from 'rxjs';
// import { Observable } from 'rxjs';
import { UserMsgService } from 'src/app/services/user-msg.service';

@Component({
  selector: 'user-msg',
  templateUrl: './user-msg.component.html',
  styleUrls: ['./user-msg.component.scss']
})
export class UserMsgComponent implements OnInit {
  constructor(private userMsgService: UserMsgService) { }
  @Input() userMsg$!: Observable<string>;

  ngOnInit(): void {
    this.userMsg$ = this.userMsgService.userMsg$.pipe(
      switchMap((msg) =>
        timer(0, 2000).pipe(
          take(2),
          switchMap((count) => {
            if (count === 0) {
              return [msg]; // Display the message
            } else {
              return ['']; // Clear the message
            }
          })
        )
      )
    )
  }
}
