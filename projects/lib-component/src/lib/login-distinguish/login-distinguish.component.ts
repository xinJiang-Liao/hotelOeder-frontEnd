import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ActivatedRoute, Router } from '@angular/router';

// import { StorageService } from '@service/storage.service';

import { Container, Main, ISourceOptions } from 'tsparticles';
import { Observable } from 'rxjs';
import { AdminService } from '@service/admin.service';

@Component({
  selector: 'lib-login-distinguish',
  templateUrl: './login-distinguish.component.html',
  styleUrls: ['./login-distinguish.component.css'],
})
export class LoginDistinguishComponent implements OnInit {
  @Input() public tag: any;

  public type: any;
  public status: any = 1;
  public validateForm!: FormGroup;
  public passwordVisible: Boolean = false;

  constructor(
    public login: FormBuilder,
    private message: NzMessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private adminService: AdminService
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.type = params['type'];
    });
  }

  // 提交表单
  onSubmit(): void {
    // 更新表单未通过验证的控件高亮显示
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    // 如果输入验证未通过
    if (this.validateForm.status == 'INVALID') {
      this.message.create('warning', '请填写用户名和密码');
      return;
    }

    // 如果输入验证通过
    if (this.validateForm.status == 'VALID') {
      let { username, password } = this.validateForm.value;
      this.adminService.login(username, password).subscribe((response: any) => {
        console.log('response', response);
        if (response.status === true) {
          sessionStorage.setItem('user', username + password);
          sessionStorage.setItem('adminID', response.coupons.username);

          if (this.type === 'common') {
            this.message.create('success', '登录成功');
            console.log(this.type);
            this.router
              .navigate(['/user'], {
                relativeTo: this.activatedRoute,
              })
              .then((r) => {
                console.log('跳轉了');
              });
          } else if (!this.tag && response.code === 1) {
            this.message.create('success', '登录成功');
            this.router
              .navigate(['/welcome'], {
                relativeTo: this.activatedRoute,
              })
              .then((r) => {
                console.log('跳轉了');
              });
          } else if (this.tag === 'super' && response.code === 1) {
            this.message.create('success', '登录成功');
            this.status = this.status + 1;
            console.log(this.status);
            // this.router
            //   .navigate(['/welcome'], {
            //     relativeTo: this.activatedRoute,
            //   })
            //   .then((r) => {
            //     console.log('跳轉了');
            //   });
          } else {
            this.message.create('error', '权限不足，无法登录');
          }
        } else {
          this.message.create('error', '用户名密码错误');
        }
      });
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

  /**************************************************************************/
  id = 'tsparticles';

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = 'http://foo.bar/particles.json';

  /* or the classic JavaScript object */
  particlesOptions: ISourceOptions = {
    background: {
      color: {
        value: '#0d47a1',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: 'bounce',
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1600,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  particlesLoaded(container: Container): void {
    // console.log(container);
  }

  async particlesInit(main: Main): Promise<any> {
    // console.log(main);
    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  }
}
