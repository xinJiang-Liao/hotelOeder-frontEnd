import { ReportingService } from './reporting.service';
import { Router } from '@angular/router';
import * as moment from 'moment/moment';

export function httpOptions2(params?: any): any {
  const query: any = {};
  if (params) {
    Object.keys(params).map((x) => {
      if (params[x] || params[x] === 0 || params[x] === false) {
        query[x] = params[x];
      }
    });
  }

  const options = { params: query };
  return options;
}

export function message3error(error: any, reporting?: ReportingService): string {
  let msg;
  if (typeof error === 'string') {
    msg = error;
  } else if (error.resultStatus) {
    msg = error.resultStatus; // 支付宝
  } else if (error.errMsg || error.err_msg) {
    msg = error.errMsg || error.err_msg; // 微信
  } else if (error.error && error.error.msg === 'Provided credentials are wrong') {
    msg = '用户名或密码错误';
  } else if (error.error && error.error.msg === 'Provided sms code are wrong') {
    msg = '手机动态验证码错误';
  } else if (error.status === 413 && error.statusText === 'Request Entity Too Large') {
    msg = `上传的图片或文件太大, 建议小于10M. ${error.url}`;
  } else if (
    error.error &&
    !error.error.msg &&
    !error.error.message &&
    !error.message &&
    error.name === 'HttpErrorResponse'
  ) {
    msg = `网络繁忙, 请稍后再试 (${error.url || error.error?.target.__zone_symbol__xhrURL})`;
  } else {
    msg = error.error?.msg || error.error?.message || error.message;
    // msg = error.error && error.error.msg ? error.error.msg : error.message;
  }

  try {
    if (reporting) reporting.app(error);
  } catch (e) {
    console.log(e);
  }

  return msg;
}

export function parseQueryParams(url: string, key?: string): any {
  const query = url.split('?');
  if (query.length === 1) {
    return {};
  }
  const params = query[1].split('&');
  const res: any = {};
  for (const item of params) {
    const param = item.split('=');
    if (key && param[0] === key) {
      return param[1];
    } else {
      res[param[0]] = param[1];
    }
  }
  // console.log(res);
  return key ? null : res;
}

export function queryParams2Url(queryParams: any): string {
  if (!queryParams) return '';

  const str = Object.keys(queryParams)
    .map((k) => `${k}=${queryParams[k]}`)
    .join('&');
  return `?${str}`;
}

// export function locationPath(prepareExternalUrl: string, path: string): string {
//   let peUrl = prepareExternalUrl;
//   if (peUrl.charAt(peUrl.length - 1) === '/' && path.charAt(0) === '/') {
//     peUrl = peUrl.substring(0, peUrl.length - 1);
//   }
//
//   return `${peUrl}${path}`;
// }

export function Round(value: number, precision?: number): number {
  const p = precision && precision % 10 === 0 ? precision : 100;
  return Math.round(value * p) / p;
}

export function policy2scope2(resource: any, policy: any): string {
  if (!policy) return '';

  const resources = policy.resources.filter(
    (x: any) =>
      x === '<.*>:<.*>:<.*>:<.*>' || x.indexOf('jinkeh:') === 0 || x.indexOf('hms:') === 0,
  );

  if (resources.length === 1 && resources[0] === '<.*>:<.*>:<.*>:<.*>') {
    return '*';
  }

  const t = resource.split(':');
  const matches = resources.filter((r: any) => {
    const s = r.split(':');
    return (
      matchPolicyItem(t[0], s[0]) && matchPolicyItem(t[1], s[1]) && matchPolicyItem(t[2], s[2])
    );
  });

  return matches.length > 0 ? matches[0].split(':')[3] : '';
}

function matchPolicyItem(a: string, b: string): boolean {
  if (a === '*' || b === '*') {
    return true;
  }

  const la = a.split('|');
  const lb = b.split('|');

  return la.filter((xa) => lb.filter((xb) => xa === xb).length > 0).length > 0;
}

export function string2Bin(str: string): any[] {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str.charCodeAt(i));
  }
  return result;
}

export function verifyPhoneNumber(phone: string): boolean {
  const PHONE_STRICT = /^1[3456789]\d{9}$/;
  const res = PHONE_STRICT.test(phone);
  return res;
}

export function bin2String(array: number[]): string {
  return String.fromCharCode.apply(String, array);
}

export function bytesize(s: string): number {
  // return encodeURI(s).split(/%..|./).length - 1;
  return encodeURI(s).split(/%(?:u[0-9A-F]{2})?[0-9A-F]{2}|./).length - 1;
}

export function getBrowser(): string {
  const userAgent: string = navigator.userAgent.toLowerCase();
  return userAgent.indexOf('micromessenger') !== -1
    ? 'wechat'
    : userAgent.indexOf('alipay') !== -1
    ? 'alipay'
    : 'other';
}

export function getEnv2(environment: any): string {
  if (environment.env === 'prod' || environment.env === 'dev') {
    switch (window.location.host) {
      case 'dev.jkh.mobi':
      case 'hmsd.jkh.mobi':
        return 'dev';
      case 'test.jkh.mobi':
      case 'hmst.jkh.mobi':
        return 'test';
      case 'j.jkh.mobi':
      case 'hms.jkh.mobi':
        return 'prod';
      default:
        return 'dev';
    }
  }

  return '';
}

export function goto(path: string, queryParams?: any, router?: Router): void {
  if (path.indexOf('http') === 0) {
    window.location.assign(path);
  } else if (path.indexOf('goto:') === 0) {
    let origin = window.location.origin;
    if (origin.indexOf('localhost:') > 0) origin = 'http://dev.jkh.mobi';
    // switch (window.location.hostname) {
    //   case 'localhost':
    //   case 'hmst.jkh.mobi':
    //     origin = 'http://dev.jkh.mobi';
    //     break;
    //   case 'hmst.jkh.mobi':
    //     origin = 'https://test.jkh.mobi';
    //     break;
    //   case 'hms.jkh.mobi':
    //     origin = 'https://j.jkh.mobi';
    //     break;
    // }

    let url = `${origin}${path.split('goto:')[1]}`;
    if (queryParams) url += `${queryParams2Url(queryParams)}`;
    window.location.assign(url);
  } else if (router) {
    router.navigate([path], { queryParams: queryParams });
  }
}

export function isValidDate(d: any) {
  return d instanceof Date && !isNaN(d.getTime());
}

export function compareValue(a: any, b: any): boolean {
  if ((a === null || a === undefined) && (b === null || b === undefined)) return true;
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
  if (a instanceof moment || b instanceof moment) return moment(a).isSame(b, 'millisecond');

  const ta = typeof a;
  const tb = typeof b;
  if (ta !== tb) return false;
  if (ta === 'string' || ta === 'number') return a === b;
  return JSON.stringify(a) === JSON.stringify(b);
}

export function stringSorter(a: string | undefined, b: string | undefined): number {
  return (b || '') > (a || '') ? -1 : 1;
}

// contentType example: 'image/png', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
export function b64toBlob(b64Data: string, contentType = '', sliceSize = 512): Blob {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
}
