import {MenuItemList} from '../common/ltl-left-navigator/ltl-left-navigator.component';


export const menuList: MenuItemList = [
  {
    title: "title_1"
    , icon: "icon_1"
  }
  , {
    title: "title_2"
    , icon: "icon_2"
    , subMenu: [
      {
        title: "title_2_sub_1"
        , icon: "icon_2_sub_1"
        , subMenu: [
          {
            title: "title_2_sub_1_sub_1",
            icon: "icon_2_sub_1_sub_1",
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
