interface NavigationTab {
    title: string;
    path: string;
}

export const navigationTabs: NavigationTab[] = [
  {title: 'Поиск', path: '/search'},
  {title: 'Моя анкета', path: '/my'},
  {title: 'Избранное', path: '/favorite'},
];
