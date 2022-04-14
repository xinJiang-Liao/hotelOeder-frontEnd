import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '@service/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'lib-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  @Output() pre = new EventEmitter<string>();
  @Input() tag: any;
  @Input() datasource!: any;

  @Output() status = new EventEmitter<any>();

  public formData!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    if (this.datasource) {
      console.log('datasource:', this.datasource);
      this.formData = this.fb.group({
        username: [this.datasource.username, [Validators.required]],
        password: [this.datasource.password, [Validators.required]],
        name: [this.datasource.name, [Validators.required]],
        phone: [this.datasource.phone, [Validators.required]],
        post: [this.datasource.post, [Validators.required]],
        resume: [this.datasource.resume, [Validators.required]],
        code: [this.datasource.code, [Validators.required]],
      });
    }
  }

  /*output广播触发父级的pre方法，含义：返回登录界面*/
  exid() {
    this.pre.emit();
  }

  delete() {
    this.adminService
      .deleteAdmin(this.datasource)
      .subscribe((response: any) => {
        this.status.emit();
        this.message.create(
          'success',
          '已删除用户名为:' + this.datasource.username + '的管理员信息'
        );
      });
  }

  /**------------------------------------------信息修改抽屉弹窗--------------------------------------------------*/
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  submit(): void {
    this.adminService
      .upDate(this.datasource.id, this.datasource.code, this.formData.value)
      .subscribe(
        (response: any) => {
          this.message.create('success', '信息修改成功');
          this.visible = false;
          this.status.emit(null);
        },
        (error) => {
          this.message.create('warning', '修改失败');
        }
      );
  }
}
