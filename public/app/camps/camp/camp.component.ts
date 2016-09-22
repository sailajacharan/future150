export class CampController {
  public static $inject: string[] = ['$state', '$sce', 'campsService'];

  public constructor(private $state, private $sce, private campsService) {
    this.activate();
  }

  private activate(): void {
    if (this.$state.params.slug) {
      this.campsService.getBySlug(this.$state.params.slug).then(function (camp) {
        camp.description = this.$sce.trustAsHtml(camp.description);
        this.camp = camp;
      });
    }
  }
}
