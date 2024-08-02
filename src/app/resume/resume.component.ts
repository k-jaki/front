import { Component, OnInit } from '@angular/core';
import { AnalyseService } from '../service/analyse.service';
import { NzTypographyModule } from 'ng-zorro-antd/typography'; // Ensure correct import

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  selectedFiles: File[] = [];
  resume: any;
  errorMessage: string = '';
  loading: boolean = false;

  constructor(private resumeService: AnalyseService) { }

  ngOnInit(): void { }

  onFileSelected(event: any): void {
    this.selectedFiles = Array.from(event.target.files);
  }

  onUpload(): void {
    const formData: FormData = new FormData();
    this.selectedFiles.forEach(file => {
      formData.append('file', file, file.name);
    });

    this.loading = true;  

    this.resumeService.resumeExtraction(formData).subscribe(
      response => {
        console.log('Upload successful', response);
        this.resume = response;
        this.loading = false;  
      },
      error => {
        console.error('Upload error', error);
        this.errorMessage = error.message;
        this.loading = false; 
      }
    );
  }
}
