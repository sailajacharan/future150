import { Component } from '@angular/core';

@Component({
  templateUrl: '/app/search/search.component.html'
})
export class SearchComponent {
  /*public page = 1;
  public pageSize = 10;
  public q;
  public isLoading: boolean;

  public static $inject: string[] = ['$rootScope', '$scope', '$stateParams', 'config', 'playersService'];

  public constructor($rootScope, $scope, private $stateParams, config, private playersService) {
    this.q = $stateParams.q;
    $rootScope.title = 'Search';
    $rootScope.description = '';

    this.activate();
    $scope.$watchGroup(['vm.page'], this.activate);
  }

  private activate(): void {
      this.isLoading = true;
      this.playersService.getAll(this.$stateParams.q, this.page, this.pageSize).then(function(result) {
        if (result.players) {
          result.players.forEach(function(player) {
            player.imageUrl = player.imageUrl || this.config.defaultProfileImageUrl;
          });
        }
        this.players = result.players;
        this.count = result.count;
        this.isLoading = false;
      });
  }*/
}
