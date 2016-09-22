import { Component, Input } from '@angular/core';

import {
    Site,
    Article
} from '../../shared';

@Component({
    selector: 'f150-article-detail',
    templateUrl: '/app/news/article-detail/article-detail.component.html',
    styleUrls: [
        'app/news/article-detail/article-detail.component.css'
    ]
})
export class ArticleDetailComponent {
    @Input()
    public article: Article;
    @Input()
    public defaultArticleImageUrl: string;
    @Input()
    public selectedSite: Site;
}
