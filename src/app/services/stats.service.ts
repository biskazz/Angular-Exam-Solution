import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class StatsService {

  constructor(private apiService: ApiService) {
  }

  getStats() {
    return this.apiService.get('/stats');
  }
}
