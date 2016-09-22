export class CampRegisterController {
  public static $inject: string[] = ['$state', 'campsService'];

  public constructor(private $state, private campsService) {
    this.activate();
  }

  private activate(): void {
    if (this.$state.params.slug) {
      this.campsService.getBySlug(this.$state.params.slug).then(function(camp) {
        this.camp = camp;
      });
    }
  }
}
