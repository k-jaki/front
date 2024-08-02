import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-similarity',
  templateUrl: './similarity.component.html',
  styleUrls: ['./similarity.component.css']
})
export class SimilarityComponent {
  sentence1: string = '';
  sentence2: string = '';
  cosineSimilarity: number | null = null;

  set1: string = '';
  set2: string = '';
  jaccardSimilarity: number | null = null;

  constructor(private http: HttpClient) {}

  onSubmitCosine() {
    const data = {
      sentence1: this.sentence1,
      sentence2: this.sentence2
    };

    this.http.post<{ cosine_similarity: number }>('http://127.0.0.1:5000/cosine_similarity', data)
      .subscribe(response => {
        this.cosineSimilarity = response.cosine_similarity;
      }, error => {
        console.error('There was an error!', error);
      });
  }

  onSubmitJaccard() {
    const data = {
      set1: this.set1.split(',').map(item => item.trim()),
      set2: this.set2.split(',').map(item => item.trim())
    };

    this.http.post<{ jaccard_similarity: number }>('http://127.0.0.1:5000/jaccard_similarity', data)
      .subscribe(response => {
        this.jaccardSimilarity = response.jaccard_similarity;
      }, error => {
        console.error('There was an error!', error);
      });
  }
}
