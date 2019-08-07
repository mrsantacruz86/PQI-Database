import { CLOSE_MENU, OPEN_MENU, TOGGLE_DRAWER, TOGGLE_USER_MENU } from './types';

// Toggle drawer
export const toggleDrawer = () => {
  return {
    type: TOGGLE_DRAWER
  };
};

// Open context menu
export const openMenu = target => {
  return {
    type: OPEN_MENU,
    payload: target
  };
};

// Close context menu
export const closeMenu = () => {
  return {
    type: CLOSE_MENU
  };
};

// Toggle user menu
export const toggleUserMenu = () => {
  return {
    type: TOGGLE_USER_MENU
  };
};
