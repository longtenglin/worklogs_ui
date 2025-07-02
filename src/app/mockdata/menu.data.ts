import {MenuItemList} from '../common/ltl-left-navigator/ltl-left-navigator.component';

export const menuList: MenuItemList = [
    {
        title: "添加工作日志"
        , icon: "icon_1"
        , path: "addWorkLog"
    }
    , {
        title: "工作日志一览"
        , icon: "icon_2"
        , subMenu: [
            {
                title: "Title_2"
                , icon: "icon_2_sub_1"
                , subMenu: [
                    {
                        title: "title_2_sub_1_sub_1",
                        icon: "icon_2_sub_1_sub_1",
                        subMenu: [
                            {
                                title: "工作日志一览",
                                icon: "icon_2_sub_1_sub_1_sub_1",
                                path: "workLogList"
                            }
                        ]
                    }
                    , {
                        title: "title_2_sub_1_sub_2",
                        icon: "icon_2_sub_1_sub_2",
                    }
                ]
            }
            , {
                title: "title_2_sub_2"
                , icon: "icon_2_sub_2",
            }
        ]
    }
]
