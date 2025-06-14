import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FuturEvent } from '../models/FuturEvent';
import { CompetitionSummary } from '../models/CompetitionSummary';
import { ActualiteSummary } from '../models/ActualiteSummary';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private domain = 'http://localhost:';

  constructor(private http: HttpClient) { }

  getCompetitions(): Observable<FuturEvent[]> {
    return of(this.getMockCompetitions());
  }

  getEvents(): Observable<FuturEvent[]> {
    return of(this.getMockEvents());
  }

  getAnnouncements(): Observable<string[]> {
    return of(this.getMockAnnoucements());
  }

  getCompetitionsSummary(): Observable<CompetitionSummary[]> {
    return of(this.getMockCompetitionsSummary());
  }

  getActualiteSummary(): Observable<ActualiteSummary[]> {
    return of(this.getMockActualiteSummary());
  }

  // Mock data for competitions
  private getMockCompetitions(): FuturEvent[] {
    return [
      {
        id: 1,
        name: 'Coupe Louis Deschênes',
        date: new Date('2025-09-15'),
        link: 'https://example.com/competition1',
        location: 'Centre Pierre-Charbonneau, Montréal'
      },
      {
        id: 2,
        name: 'Championnat provincial',
        date: new Date('2025-10-05'),
        link: 'https://example.com/competition2',
        location: 'Centre Claude-Robillard, Montréal'
      },
      {
        id: 3,
        name: 'Tournoi Ne-waza',
        date: new Date('2025-10-25'),
        location: 'Complexe sportif Claude-Robillard'
      }
    ];
  }

  // Mock data for other events
  private getMockEvents(): FuturEvent[] {
    return [
      {
        id: 1,
        name: 'Journée portes ouvertes',
        date: new Date('2025-09-05'),
        location: 'Dojo de Boucherville'
      },
      {
        id: 2,
        name: 'Remise de ceintures',
        date: new Date('2025-11-15'),
        location: 'Dojo de Boucherville'
      },
      {
        id: 3,
        name: 'Camp d\'entraînement',
        date: new Date('2025-12-05'),
        link: 'https://example.com/event3',
        location: 'Centre sportif'
      }
    ];
  }

  private getMockAnnoucements(): string[] {
    return [
      'Le dojo sera fermé le 1er janvier pour le Nouvel An.'
    ];
  }

  // Mock data for competition summaries
  private getMockCompetitionsSummary(): CompetitionSummary[] {
    return [
      {
        id: 1,
        name: 'Championnat provincial de judo 2024',
        date: new Date('2024-11-15'),
        location: 'Centre Claude-Robillard, Montréal',
        image: '/assets/images/forTesting/comp1-V.jpg',
        participantCount: 8,
        medals: {
          gold: 3,
          silver: 2,
          bronze: 4
        }
      },
      {
        id: 2,
        name: 'Coupe Louis Deschênes 2024',
        date: new Date('2024-09-20'),
        location: 'Centre Pierre-Charbonneau, Montréal',
        image: '/assets/images/forTesting/comp2-H.jpg',
        participantCount: 12,
        medals: {
          gold: 5,
          silver: 3,
          bronze: 2
        }
      },
      {
        id: 3,
        name: 'Tournoi régional de Boucherville',
        date: new Date('2024-06-10'),
        location: 'Complexe sportif de Boucherville',
        image: '/assets/images/forTesting/comp3-H.jpg',
        participantCount: 15,
        medals: {
          gold: 2,
          silver: 4,
          bronze: 6
        }
      },
      {
        id: 4,
        name: 'Championnats du Québec 2024',
        date: new Date('2024-03-22'),
        location: 'Université Laval, Québec',
        image: '/assets/images/forTesting/comp4-V.jpg',
        participantCount: 6,
        medals: {
          gold: 1,
          silver: 2,
          bronze: 1
        }
      },
      {
        id: 5,
        name: 'Tournoi Ne-waza 2024',
        date: new Date('2024-01-18'),
        location: 'Centre sportif Claude-Robillard',
        //No image for this one
        participantCount: 10,
        medals: {
          gold: 4,
          silver: 1,
          bronze: 3
        }
      }
    ];
  }

  // Mock data for actualite summaries
  private getMockActualiteSummary(): ActualiteSummary[] {
    return [
      {
        id: 1,
        title: 'Nouvelle saison de judo : inscriptions ouvertes',
        publishedDate: new Date('2024-12-10'),
        image: '/assets/images/forTesting/act1-H.jpg'
      },
      {
        id: 2,
        title: 'Excellent résultats au championnat provincial',
        publishedDate: new Date('2024-11-28'),
        image: '/assets/images/forTesting/act2-V.jpg'
      },
      {
        id: 3,
        title: 'Stage d\'été avec maître Yamamoto',
        publishedDate: new Date('2024-11-15'),
        image: '/assets/images/forTesting/act3-H.jpg'
      },
      {
        id: 4,
        title: 'Nouveaux horaires pour les cours adultes',
        publishedDate: new Date('2024-10-30')
        // No image for this one
      },
      {
        id: 5,
        title: 'Démonstration de judo à l\'école primaire',
        publishedDate: new Date('2024-10-15'),
        image: '/assets/images/forTesting/act4-V.jpg'
      },
      {
        id: 6,
        title: 'Remise des ceintures de fin d\'année',
        publishedDate: new Date('2024-09-20')
        // No image for this one
      }
    ];
  }
}
