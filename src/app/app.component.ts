import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import * as moment from 'moment';

import { TypeService } from './services/type.service';
import { TransactionService } from './services/transaction.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	transactions: Array<any> = [1,];
	types: Array<any> = [];

	formGroup: FormGroup = new FormGroup({
		getTransactionOrigin: new FormControl('CHANNEL', [Validators.required]),
		serviceType: new FormControl('', [Validators.required]),
		startDate: new FormControl(new Date(), [Validators.required]),
		endDate: new FormControl(new Date(), [Validators.required]),
		pageNumber: new FormControl(1, [Validators.required]),
		pageSize: new FormControl(10, [Validators.required]),
	}); 

	constructor(
		private transactionService: TransactionService,
		private typeService: TypeService,
		) {
		this.typeService.getAll().subscribe(response => {
			this.types = response.data;
			if (this.types.length !== 0) {
				const type = this.types[0];
				this.formGroup.patchValue({
					serviceType: type.code,
				});
				this.getAll();
			}
		});
	}

	ngOnInit(): void { }

	onChangePagination($event: PageEvent){
		this.formGroup.patchValue({
			pageNumber: $event['pageIndex']+1,
			pageSize: $event['pageSize'],
		});
		console.log($event);
		this.getAll();
	}

	getAll() {
		const form = this.formGroup.value;
		const startDate = moment(form.startDate).format('YYYYMMDD');
		const endDate = moment(form.endDate).format('YYYYMMDD');

		const body = {
			...this.formGroup.value,
			startDate: startDate,
			endDate: endDate,
		};
		
		this.transactionService.getAll({
			body: this.formGroup.value,
		}).subscribe(response => this.transactions = response.data);
	}
}
