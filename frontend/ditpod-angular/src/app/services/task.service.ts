import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Task {
    _id?: string;
    title: string;
    description: string;
}

@Injectable({
    providedIn: 'root',
})
export class TaskService {
    private API_URL = 'http://localhost:5000/tasks';

    constructor(private http: HttpClient) {}

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.API_URL);
    }

    createTask(task: Task): Observable<Task> {
        return this.http.post<Task>(this.API_URL, task);
    }

    updateTask(id: string, task: Task): Observable<Task> {
        return this.http.put<Task>(`${this.API_URL}/${id}`, task);
    }

    deleteTask(id: string): Observable<void> {
        return this.http.delete<void>(`${this.API_URL}/${id}`);
    }
}

