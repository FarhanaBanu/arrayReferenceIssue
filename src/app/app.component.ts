import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'sample';
b2: any = [];
a1: any = {descripton : [
  {variableName: 'student.Name'},
 {variableName: 'student.id', },
{variableName: 'student.bag',},
 {variableName: 'student.books', },
 {variableName: 'student.vehicle'},
]};
ngOnInit() {
  console.log('hiii');
  this.setMethod();

}
setMethod() {
  console.log(this.a1);
  // this.a1.disp = []
  this.a1.disp = Object.assign([{}], this.a1.descripton);
  for (let i = 0 ; i < this.a1.descripton.length; i++) {
    console.log(this.a1.descripton[i]);
  //  this.a1.disp[i].variableName = this.a1.disp[i].variableName.split('.');
   this.a1.disp[i] = this.a1.disp[i].variableName.split('.');


 }
  console.log('*****');
  console.log(this.a1);
 }
}
