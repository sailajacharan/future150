import { Component } from '@angular/core';

import { ArticlesService } from '../shared/articles.service';

@Component({
    templateUrl: '/app/news/articles-admin/articles-admin.component.html'
})
export class ArticlesAdminComponent {
    public articles: any[] = [];

    public constructor(private articlesService: ArticlesService) {
        this.activate();
    }

    private activate(): void {
        this.articlesService.getAll()
            .subscribe(result => {
                this.articles = result.articles;
            });
    }
}
