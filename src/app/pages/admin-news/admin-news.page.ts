import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { News } from 'src/app/shared/News';

@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.page.html',
  styleUrls: ['./admin-news.page.scss'],
})
export class AdminNewsPage implements OnInit {

  @Input() notice: News;

  //notice: News = new News();
  suppliedData = false

  constructor(private dbService: DatabaseService) { }

  saveNoticeCreated(): void {
    this.dbService.createNotice(this.notice).then(() => {
      console.log('Se guardó la noticia correctamente');
      this.suppliedData = true;
    });
  }

  newNotice(): void {
    this.suppliedData = false
    this.notice = new News();
  }

  ngOnInit() {
  }

}
