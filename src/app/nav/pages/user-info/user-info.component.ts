import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/shared/models/IUser.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  user!: IUser;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.params['id'];
    this.userService.getUser(userId).subscribe((res) => {
      this.user = res;
    });
  }
}
