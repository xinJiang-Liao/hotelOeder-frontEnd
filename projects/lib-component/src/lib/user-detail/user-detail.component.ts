import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  @Output() pre = new EventEmitter<string>();
  @Input() tag: any;
  @Input() datasource!: any;

  public formData!: FormGroup;
  constructor(private fb: FormBuilder) {}

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
        level: [this.datasource.level, [Validators.required]],
      });
    }
  }

  /*output广播触发父级的pre方法，含义：返回登录界面*/
  exid() {
    this.pre.emit();
  }

  /**------------------------------------------信息修改抽屉弹窗--------------------------------------------------*/
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    console.log(this.formData.value)
    this.visible = false;
  }
}
