import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SharedService } from 'src/app/services/shared.service';
import { Usuario } from 'src/app/models/usuario';


@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {
  urls: string;
  uploadedFiles: any[] = [];
  file: any[] = [];


  constructor(private http: HttpClient) {
    this.urls = environment.urlpath;

   }
  ngOnInit() {
  }

  inputFileChange(event) {
    for (const item of event.files) {
      const file = new FormData();
      file.append('file', item);
      file.append('plataforma', 'bradesco');
      this.http.post(this.urls + '/api/files', file).subscribe(resposta => {
        this.uploadedFiles.push({'FILENAME': resposta['data']['FILENAME'], 'SHA256': resposta['data']['SHA256'] });
      });
    }
  }

}
