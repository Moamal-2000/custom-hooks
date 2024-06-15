import { hooksData } from "./hooksData";

export const myName = "Moamal Alaa";
export const MY_REPOS_URL = "https://api.github.com/users/Moamal-2000/repos";
export const WEBSITE_REPO_ID = 744430639;
export const HOOKS_PER_PAGE = 5;
export const NUMBER_OF_HOOKS = hooksData.length;
export const NUMBER_OF_PAGES = Math.ceil(NUMBER_OF_HOOKS / HOOKS_PER_PAGE);
export const ICON_TOGGLE_DELAY = 1000
export const SCREEN_SIZES = {
  desktop: 1200,
  laptop: 992,
  tablet: 768,
  mobile: 428,
};
