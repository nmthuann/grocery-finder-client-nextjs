export type SideNavItem = {
    id: number;
    categoryName: string;
    path: string;
    subMenuItems?: SideNavItem[];
};

export type FAQ = {
    question: string;
    answer: string;
}