import { ArticlesService } from './articles.service';

describe('ArticlesService', () => {
    var articlesService = new ArticlesService(null);

    it('should be defined', () => {
        expect(articlesService).toBeDefined();
    });

    describe('getAll', () => {
        it('should be defined', () => {
            expect(articlesService.getAll).toBeDefined();
        });
    });
});
