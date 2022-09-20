
export interface OrderListInt {
  userId: number,
  id: number,
  title: string,
  body: string,
}
export interface SelectDataInt {
  title: string,
  body: string,
  page: number,
  count: number,
}

export class initData {
  selectData:SelectDataInt = {
    title: '',
    body: '',
    page: 1,
    count: 0
  }
  orderList:OrderListInt[] = []
}