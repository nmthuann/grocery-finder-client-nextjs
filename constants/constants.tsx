import { Category } from "@/types/products.type";

export type SideNavItem = {
    id: number;
    categoryName: string;
    path: string;
    leftValue: number;
    rightValue: number;
    subMenuItems?: SideNavItem[];
};

export function createMenuFromLeftRight(categories: Category[]): SideNavItem[] {
    const stack: SideNavItem[] = [];
    const menu: SideNavItem[] = [];

    categories.forEach((category) => {
        const newItem: SideNavItem = {
            id: category.id,
            categoryName: category.categoryName,
            path: category.categoryUrl,
            leftValue: category.leftValue,
            rightValue: category.rightValue,
            subMenuItems: [],
        };

        while (
            stack.length > 0 &&
            stack[stack.length - 1].rightValue < newItem.rightValue
        ) {
            stack.pop();
        }

        if (stack.length > 0) {
            stack[stack.length - 1].subMenuItems?.push(newItem);
        } else {
            menu.push(newItem);
        }

        stack.push(newItem);
    });

    return menu;
}
