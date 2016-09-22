export class CollegeController {
  public static $inject: string[] = ['$state', '$rootScope', 'collegesService', 'rankingsService'];

  public constructor(private $state, private $rootScope, private collegesService, private rankingsService) {
    this.activate();
  }

  private activate(): void {
    if (this.$state.params.slug) {
      this.collegesService.getBySlug(this.$state.params.slug).then(function (college) {
        this.$rootScope.title = college.name;

        this.college = college;
      });
      this.rankingsService.getAll('national', this.$rootScope.site).then(function (result) {
        this.rankings = result.rankings;
      });
    }
  }

  public selectRankings(id): void {
    this.rankingsService.getById(id).then(function (ranking) {
      this.selectedRanking = ranking;
    });
  }
}
