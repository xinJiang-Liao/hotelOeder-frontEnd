import { Component, OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManuService } from '@service/manu.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { message3error } from '@service/_utils';

const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

interface ItemData {
  id: number;
  price: number;
  number: number;
  volume: string;
}

interface foodData {
  type: string;
  introduce: string;
  foodName: string;
  price: number;
  number: number;
  volume: string;
  food_Image: string;
}

@Component({
  selector: 'app-goods-add',
  templateUrl: './goods-add.component.html',
  styleUrls: ['./goods-add.component.scss'],
})
export class GoodsAddComponent implements OnInit {
  i = 0;
  datasource: ItemData[] = [];
  editID: number | string | null = null;

  previewImage: string | undefined = '';
  previewVisible = false;

  validateForm!: FormGroup;
  public body: any = [];
  public foodData?: foodData;

  constructor(
    private fb: FormBuilder,
    private manuService: ManuService,
    private message: NzMessageService
  ) {}
  ngOnInit(): void {
    /*表单输入*/
    this.validateForm = this.fb.group({
      type: [null, [Validators.required]],
      foodName: [null, [Validators.required]],
      introduce: [null, [Validators.required]],
    });
  }

  onSubmit() {
    this.foodData = this.validateForm.value;
    for (let x of this.datasource) {
      // /*还没有解决跨域问题，暂时不上传图片*/
      // this.foodData!.food_Image = `url:${x.id}`;
      this.body = this.body.concat([
        {
          type: this.validateForm.value.type,
          foodName: this.validateForm.value.foodName,
          introduce: this.validateForm.value.introduce,
          price: x.price,
          number: x.number,
          volume: x.volume,
        },
      ]);
    }
    this.manuService.pushFoods(this.body).subscribe(
      (response: any) => {
        this.message.create('success', '创建成功');
        console.log(response);
        this.body = [];
      },
      (error) => {
        this.message.create('error', message3error(error));
      }
    );

    console.log(this.body);
  }

  /*-------------------------------------------------可编辑单元格-------------------------------------------------------*/
  startEdit(id: any): void {
    this.editID = id;
  }

  stopEdit(): void {
    this.editID = null;
  }

  addRow(): void {
    this.datasource = [
      ...this.datasource,
      {
        id: this.i,
        price: this.datasource.length > 0 ? this.datasource[0].price : 0,
        number: this.datasource.length > 0 ? this.datasource[0].number : 0,
        volume: this.datasource.length > 0 ? this.datasource[0].volume : '小份',
      },
    ];
    this.i++;
  }

  deleteRow(id: number): void {
    this.datasource = this.datasource.filter((d) => d.id !== id);
  }

  /*---------------------------------------------------图片上传方法------------------------------------------------------------*/
  fileList: NzUploadFile[] = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    // {
    //   uid: '-xxx',
    //   percent: 50,
    //   name: 'image.png',
    //   status: 'uploading',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
    // {
    //   uid: '-5',
    //   name: 'image.png',
    //   status: 'error',
    // },
  ];
  handlePreview = async (file: NzUploadFile): Promise<void> => {
    if (!file.url && !file['preview']) {
      file['preview'] = await getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file['preview'];
    this.previewVisible = true;
  };
}
