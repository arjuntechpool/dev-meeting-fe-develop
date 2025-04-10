import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { CreateAccountHeadsComponent } from './create-account-heads/create-account-heads.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SearchSecondaryHeadsComponent } from './modals/search-secondary-heads/search-secondary-heads.component';
import { FormsModule } from '@angular/forms';
import { CommonModalComponent } from './modals/common-modal/common-modal.component';
import { BanksComponent } from './banks/banks.component';
import {MatTabsModule} from '@angular/material/tabs';
import { SearchOfficeComponent } from './modals/search-office/search-office.component';
import { SearchAccountHeadsComponent } from './modals/search-account-heads/search-account-heads.component';
import { DemandsComponent } from './demands/demands.component';
import {  MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    CreateAccountHeadsComponent,
    SearchSecondaryHeadsComponent,
    CommonModalComponent,
    BanksComponent,
    SearchOfficeComponent,
    SearchAccountHeadsComponent,
    DemandsComponent
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule

  ]
})
export class FinanceModule { }
