export class CollegesController {
  public page = 1;
  public pageSize = 10;
  public colleges: any[];
  public count: number;

  public static $inject: string[] = ['$rootScope', '$scope', 'collegesService'];

  public constructor($rootScope, $scope, private collegesService) {
    $rootScope.title = 'Colleges';
    $rootScope.description = '';

    this.activate();
  }

  private activate(): void {
    this.collegesService.getAll(null, this.page, this.pageSize).then((result) => {
      this.colleges = result.colleges;
      this.count = result.count;
    });
  }
}
