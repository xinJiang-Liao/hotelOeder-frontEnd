import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ActivatedRoute, Router } from '@angular/router';
// import { StorageService } from '@service/storage.service';

@Component({
  selector: 'lib-login-distinguish',
  templateUrl: './login-distinguish.component.html',
  styleUrls: ['./login-distinguish.component.css'],
})
export class LoginDistinguishComponent implements OnInit {
  public validateForm!: FormGroup;
  public passwordVisible: Boolean = false;

  constructor(
    public login: FormBuilder,
    private message: NzMessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

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
        sessionStorage.setItem('user', username + password);
        this.router
          .navigate(['/welcome'], {
            relativeTo: this.activatedRoute,
          })
          .then((r) => {
            console.log('跳轉了');
          });
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
