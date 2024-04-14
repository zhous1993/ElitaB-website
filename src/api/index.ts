/*
 * @Author: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @Date: 2023-02-23 17:41:55
 * @LastEditors: DESKTOP-ER2OAAD\zs_lq zhous@ai-cloud.edu
 * @LastEditTime: 2023-03-01 10:20:15
 * @FilePath: \website-edu\src\api\index.ts
 *
 */
import service from "./http";

export const submit = (data: {
  userName: string;
  userPhone: string;
  userUnit: string;
  remark: string;
  type: number;
}) => {
  return service.post("/system/apply", data);
};
export const get = () => {
  console.log(11);
};
