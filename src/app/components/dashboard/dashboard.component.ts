import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
// count = {
  //   from: 0,
  //   duration: 1,

  //   Orders: 1000,
  //   ShippingAmount: 500,
  //   CashOnDelivery: 100,
  //   Cancelled: 200
  //  };


  // count = {
  //   from: 0,
  //   duration: 1,

  //   Orders: 0,
  //   ShippingAmount: 0,
  //   CashOnDelivery: 0,
  //   Cancelled: 0
  //  };

  count = {
    from: 0,
    duration: 1
  };

  objCountData = [
    {
      bgColorClass: 'bg-warning card-body',
      fontColorClass: 'font-warning',
      icon: 'navigation',
      title: 'Orders',
      count: 0
    },
    {
      bgColorClass: 'bg-secondary card-body',
      fontColorClass: 'font-secondary',
      icon: 'box',
      title: 'Shipping Amount',
      count: 0
    },
    {
      bgColorClass: 'bg-primary card-body',
      fontColorClass: 'font-primary',
      icon: 'message-square',
      title: 'Cash On Delivery',
      count: 0
    },
    {
      bgColorClass: 'bg-danger card-body',
      fontColorClass: 'font-danger',
      icon: 'users',
      title: 'Cancelled',
      count: 0
    }
  ];

  settings = {
    actions: false,
    hideSubHeader : true,
    columns : {
      orderId : {
        title : "Order Id"
      },
      orderStatus : {
        title : "Order Status", type : "html"
      },
      paymentDate : {
        title : "Payment Date"
      },
      paymentMethod : {
        title : 'Payment Method'
      },
      paymentStatus : {
        title : "Payment Status", type : "html"
      },
      shippingAmount: {
        title : "Shipping Amount"
      },
      subTotalAmount : {
        title :"SubTotal Amount"
      },
      totalAmount: {
        title: "Total Amount"
      }
    }
  };

  orders = [];

  constructor(private _httpService: HttpService, private _toastr: ToastrService) { }

  ngOnInit(): void {
    this.getNetFigure();
    this.getOrdersData();
  }

  getOrdersData() {
    this._httpService.get(environment.BASE_API_PATH + "PaymentMaster/GetReportManageOrder").subscribe(res => {
      if (res.isSuccess) {
        this.orders = res.data;
      } else {
        this._toastr.error(res.errors[0], "Dashboard");
      }
    });
  }

  getNetFigure() {
    this._httpService.get(environment.BASE_API_PATH + "PaymentMaster/GetReportNetFigure").subscribe(res => {
      if (res.isSuccess) {
        // this.count.Orders = res.data[0].orders;
        // this.count.CashOnDelivery = res.data[0].cashOnDelivery;
        // this.count.Cancelled = res.data[0].cancelled;
        // this.count.ShippingAmount = res.data[0].shippingAmount;

        this.objCountData[0].count = res.data[0].orders;
        this.objCountData[1].count = res.data[0].shippingAmount;
        this.objCountData[2].count = res.data[0].cashOnDelivery;
        this.objCountData[3].count = res.data[0].cancelled;

      } else {
        this._toastr.error(res.errors[0], "Dashboard");
      }
    });
  }

}
