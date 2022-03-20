import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  public validateForm!: FormGroup;
  public passwordVisible: Boolean = false;

  constructor(public login: FormBuilder, private message: NzMessageService) {}

  // 提交表单
  onSubmit(): void {
    // 更新表单未通过验证的控件高亮显示
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    // 如果验证未通过
    if (this.validateForm.status == 'INVALID') {
      this.message.create('warning', '请填写用户名和密码');
      return;
    }

    // 如果验证通过
    if (this.validateForm.status == 'VALID') {
      let { username, password } = this.validateForm.value;
      if (username == 'admin' && password == '123456') {
        this.message.create('success', '登录成功');
      } else {
        this.message.create('error', '用户名密码错误');
      }
    }
  }

  // 初始化
  ngOnInit(): void {
    this.validateForm = this.login.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [true],
    });
  }
}
