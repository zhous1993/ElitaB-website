/*
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2023-03-01 15:08:20
 * @LastEditors: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @LastEditTime: 2023-03-01 15:12:44
 * @FilePath: \website-edu\src\store\modules\app.ts
 *
 */
interface AppState {
  screenWidth: number;
}
const useAppStore = defineStore("app", {
  state: (): AppState => {
    return {
      screenWidth: 1920,
    };
  },
  getters: {
    getScreenWidth(): number {
      return this.screenWidth;
    },
  },
  actions: {
    setScreenWidth(width: number) {
      this.screenWidth = width;
    },
  },
});
export default useAppStore;
