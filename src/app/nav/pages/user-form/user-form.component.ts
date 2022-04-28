import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/shared/models/IUser.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  user!: IUser;
  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    website: new FormControl('')
  });
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.params['id'];
    this.userService.getUser(userId).subscribe((res) => {
      this.user = res;
      this.userForm.patchValue(this.user);
    });
  }
}
