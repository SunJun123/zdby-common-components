/*
 * @Description: 
 * @Author: sunjun
 * @Date: 2023-03-25 08:36:10
 * @LastEditors: sunjun
 * @LastEditTime: 2023-05-17 11:31:43
 */
import {SelectVarDialog as _SelectVarDialog} from './components'
const SelectVarDialog = {
  install(app: any, options: any) {
    app.component(_SelectVarDialog.name, _SelectVarDialog)
  }
}

export {
  SelectVarDialog
}
