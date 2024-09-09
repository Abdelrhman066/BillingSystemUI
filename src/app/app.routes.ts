import { Routes } from '@angular/router';
import { CompanyComponent } from '../Components/company/company.component';
import { UnitsComponent } from '../Components/units/units.component';
import { SalesInvoiceComponent } from '../Components/sales-invoice/sales-invoice.component';
import { HomeComponent } from '../Components/home/home.component';


import { TypesComponent } from '../Components/types/types.component';
import { SalesreportComponent } from'../Components/salesreport/salesreport.component';
export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'sales-invoice', component: SalesInvoiceComponent },
    {path:"company",component:CompanyComponent,title:"Company"},
    {path:"unit",component:UnitsComponent,title:"Units"},
    {path:"types",component:TypesComponent,title:"Types"},
    {path:"salesreport",component:SalesreportComponent,title:"Salesreport"}
];
