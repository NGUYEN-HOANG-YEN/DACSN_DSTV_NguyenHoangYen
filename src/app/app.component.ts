import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
=======
//import { AppRoutingModule } from './app-routing.module'; 

>>>>>>> 1397b9f (Initial commit)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'Thaivm2';
  info = {
    name: 'thaivm2',
    email: 'thaivm2@fpt.edu.vn',
=======
  title = 'anhyvm2';
  info = {
    name: 'anhyvm2',
    email: 'anhyvm2@fpt.edu.vn',
>>>>>>> 1397b9f (Initial commit)
    gender: 'male',
  }
  name='';
  count = 0;
<<<<<<< HEAD
  //khai báo hàm: 
  //khai báo kiểu dữ liệu trả về: tenHam(): kieuDulieu {}
  //ko khai báo kiểu dữ liệu trả về: tenHam() {} 
  countClick(): void {
    this.count = this.count + 1; //tăng giá trị của count lên 1 đơn vị
=======

  countClick(): void {
    this.count = this.count + 1; 
>>>>>>> 1397b9f (Initial commit)
  }
  
  logout(): void {
    const userinfo = localStorage.getItem('user');
<<<<<<< HEAD
    if (userinfo !== null) { //đang tồn tại biến user trong localStorage
      localStorage.removeItem('user'); //xóa user khỏi localStorage-> kết thúc phiên đăng nhập
=======
    if (userinfo !== null) { 
      localStorage.removeItem('user'); 
>>>>>>> 1397b9f (Initial commit)
    }
  }
}
