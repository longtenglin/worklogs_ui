import { Component } from '@angular/core';
import {MatTree, MatTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle} from '@angular/material/tree';
import {menuList} from '../../mockdata/menu.data';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

export type MenuItem = {
  title: string;
  icon: string;
  path?: string;
  subMenu?: MenuItemList;
}
export type MenuItemList = MenuItem[];

@Component({
  selector: 'app-ltl-left-navigator',
    imports: [
        MatTree,
        MatTreeNode,
        MatTreeNodePadding,
        MatTreeNodeDef,
        MatIconButton,
        MatTreeNodeToggle,
        MatIcon,
        RouterLink
    ],
  templateUrl: './ltl-left-navigator.component.html',
  standalone: true,
  styleUrl: './ltl-left-navigator.component.scss'
})
export class LtlLeftNavigatorComponent {

  protected readonly menuList: MenuItemList = menuList;

  childrenAccessor = (node: MenuItem) => node.subMenu ?? [];

  hasChild = (_: number, node: MenuItem) => !!node.subMenu && node.subMenu.length > 0;
}
