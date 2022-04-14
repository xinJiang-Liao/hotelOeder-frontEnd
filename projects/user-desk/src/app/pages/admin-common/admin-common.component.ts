import { Component, OnInit } from '@angular/core';
import { AdminService } from '@service/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { message3error } from '@service/_utils';

@Component({
  selector: 'app-admin-common',
  templateUrl: './admin-common.component.html',
  styleUrls: ['./admin-common.component.scss'],
})
export class AdminCommonComponent implements OnInit {
  public formData!: FormGroup;

  public datasource?: any;
  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.data();
    this.formData = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      post: [null, [Validators.required]],
      resume: [null, [Validators.required]],
      code: [null, [Validators.required]],
    });
  }

  data() {
    this.adminService.getCommon(1).subscribe((response: any) => {
      console.log(response);
      this.datasource = response;
    });
  }

  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {}

  pushAdmin() {
    this.visible = false;
    this.adminService.pushAdmin(this.formData.value).subscribe(
      (response: any) => {
        this.message.create('success', '添加成功');
        this.data();
      },
      (error) => {
        this.message.create('error', message3error(error));
      }
    );
  }
}
