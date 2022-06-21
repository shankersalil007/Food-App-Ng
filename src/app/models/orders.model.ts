export class orders {
  id: number;
  userid: number;
  feedId: number;
  orderstatus: string;
  paymentStatus: string;
  orderDateTime: Date;

  constructor(id: number, userid: number, feedId: number, orderstatus: string, paymentStatus: string, orderDateTime: Date)
  {
    this.id = id;
    this.userid = userid;
    this.feedId = feedId;
    this.orderstatus = orderstatus;
    this.paymentStatus = paymentStatus;
    this.orderDateTime = orderDateTime;
  }
}
