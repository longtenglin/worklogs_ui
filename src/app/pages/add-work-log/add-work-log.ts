import {Component, ViewEncapsulation} from '@angular/core';
import {MatFormField, MatOption, MatSelect} from '@angular/material/select';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {LogType} from '../../common/ltl-log-type/ltl-log-type.component';
import {MatError, MatInput, MatLabel} from '@angular/material/input';
import {QuillEditorComponent, QuillViewHTMLComponent} from 'ngx-quill';
import {MatChip} from '@angular/material/chips';
import {MatButton} from '@angular/material/button';

type LogTypeOption = {
    name: string;
    value: LogType;
}

@Component({
    selector: 'app-add-work-log',
    imports: [
        MatSelect,
        MatFormField,
        ReactiveFormsModule,
        MatOption,
        MatInput,
        MatError,
        MatLabel,
        QuillEditorComponent,
        FormsModule,
        MatChip,
        MatButton,
        QuillViewHTMLComponent,
    ],
    standalone: true,
    templateUrl: './add-work-log.html',
    styleUrl: './add-work-log.scss',
    encapsulation: ViewEncapsulation.None
})
export class AddWorkLogComponent {

    logTypeControl = new FormControl<LogType | null>(null, Validators.required);
    logTitleControl = new FormControl<String | null>(null, Validators.required);

    editorContent: string = "";

    isEditor: boolean = true;

    logTypeOptionArr: LogTypeOption[] = [
        {
            name: "BUG",
            value: LogType.BUG
        },
        {
            name: "QA"
            , value: LogType.QA
        },
        {
            name: "TASK"
            , value: LogType.TASK
        }
    ];

    quillModules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // 字体样式
            ['blockquote', 'code-block'],                     // 代码块
            [{'header': 1}, {'header': 2}],               // 自定义按钮值
            [{'list': 'ordered'}, {'list': 'bullet'}],
            [{'script': 'sub'}, {'script': 'super'}],      // 下标/上标
            [{'indent': '-1'}, {'indent': '+1'}],          // 减缩/增加缩进
            [{'direction': 'rtl'}],                         // 文本方向
            [{'size': ['small', false, 'large', 'huge']}],  // 自定义下拉菜单
            [{'header': [1, 2, 3, 4, 5, 6, false]}],
            [{'color': []}, {'background': []}],          // 主题默认值的下拉菜单
            [{'font': []}],
            [{'align': []}],
            ['clean'],                                         // 清除格式按钮
            ['link', 'image', 'video']                         // 链接、图片和视频
        ]
    };

    getLogTypeName(value: LogType | null): string {
        if (value) {
            return "DEFAULT";
        }

        return (this.logTypeOptionArr.find(item => {
            return item.value === value;
        }) as LogTypeOption).name;
    }
}
