import { Component, OnInit } from "@angular/core";
import { LocalServiceService } from "../services/local-service.service";
@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.css"]
})
export class TodolistComponent implements OnInit {
  //循环数据的数组
  public list = [];
  //接收输入内容
  public msg: any = "";
  //依赖注入  localstorage服务
  constructor(private localStorage: LocalServiceService) {}

  ngOnInit() {
    //初始化就获取本地存储的内容
    var localList = this.localStorage.getItem("todoList");
    if (localList) {
      this.list = localList;
    }
  }
  //键盘按回车键或者点击按钮就存储输入的数据
  getTodoBykey(e) {
    //如果是点击按钮就触发这里的代码
    if (!e&&this.msg.trim()!="") {
      //先定义一个对象，用来暂时存储输入信息和记录这条信息的状态
      var obj = {
        status: 1,
        listName: this.msg
      };
      //从localstorage中获取到数组内容
      var todolist = this.localStorage.getItem("todoList");
      //如果是有值，就直接让后面添加进去
      if (todolist) {
        todolist.push(obj);
        this.localStorage.setItem("todoList", todolist);
      } else {
        //如果没有，手动的给他添加进去
        var arr = [];
        arr.push(obj);
        this.localStorage.setItem("todoList", arr);
      }
      this.list.push(obj);
      this.msg = "";
      //如果是点击回车按键就触发这里的代码
    } else {
      if (e.key == "Enter"&&this.msg.trim()!="") {
        //先定义一个对象，用来暂时存储输入信息和记录这条信息的状态
        var obj = {
          status: 1,
          listName: this.msg
        };
        //从localstorage中获取到数组内容
        var todolist = this.localStorage.getItem("todoList");
        //如果是有值，就直接让后面添加进去
        if (todolist) {
          todolist.push(obj);
          this.localStorage.setItem("todoList", todolist);
        } else {
          //如果没有，手动的给他添加进去
          var arr = [];
          arr.push(obj);
          this.localStorage.setItem("todoList", arr);
        }
        this.list.push(obj);
        this.msg = "";
      }
    }
  }

  changeStatus(i, e) {
    this.list[i].status = e;
    this.localStorage.setItem("todoList", this.list);
  }

  deleteList(i) {
    this.list.splice(i, 1);
    this.localStorage.setItem("todoList", this.list);
  }
}
