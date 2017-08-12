import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GamesService} from "../shared/services/games.service";
import {IRespose} from "../shared/interface/i.respose";

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.sass']
})
export class ShippingComponent implements OnInit {
  shipping = {
    fn: '',
    ln: '',
    em: '',
    addr: {
      l1: '',
      l2: '',
    },
    postal: '',
    country: {
      name: 'India',
      code: 'IN'
    },
  };

  payment = {
    card_no: '',
    month: '',
    year: '',
    ccv: ''
  };

  displayPay = false;
  shippingForm: FormGroup;
  paymentForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private gamesService: GamesService
  ) { }

  ngOnInit() {
    this.shippingForm = this._formBuilder.group({
      first_name: [this.shipping.fn, Validators.required],
      last_name: [this.shipping.ln, Validators.required],
      email: [this.shipping.em, [
          Validators.required,
          Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')
        ]
      ],
      addr_l1: [this.shipping.addr.l1, Validators.required],
      addr_l2: [this.shipping.addr.l2, Validators.required],
      postal: [this.shipping.postal, Validators.required],
    });

    this.paymentForm = this._formBuilder.group({
      card_no: [this.payment.card_no, Validators.required],
      month: [this.payment.month, [
        Validators.required,
        Validators.maxLength(2),
        Validators.minLength(2)
      ]],
      year: [this.payment.year, [
        Validators.required,
        Validators.maxLength(4),
        Validators.minLength(4)
      ]],
      ccv: [this.payment.ccv, [
        Validators.required,
        Validators.maxLength(3),
        Validators.minLength(3)
      ]]
    });
  }

  onSubmitHandle() {
    const paylod = {
      shipping: this.shipping,
      payment: this.payment
    };
    this.gamesService
      .checkout(paylod)
      .subscribe((res: IRespose) => {
        console.log(res);
      });
  }
}
