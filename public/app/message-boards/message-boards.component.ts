import { Component, Inject } from '@angular/core';

import { MessageBoardsService } from '../shared';

@Component({
  templateUrl: '/app/message-boards/message-boards.component.html'
})
export class MessageBoardsComponent {
  /*public page = 1;
  public pageSize = 10;
  public threads: any[];
  public count: number;

  public static $inject: string[] = ['$rootScope', '$scope', 'messageBoardsService'];

  public constructor($rootScope, $scope, private messageBoardsService) {
    $rootScope.title = 'Message Boards';
    $rootScope.description = '';

    this.activate();
  }

  private activate(): void {
    this.messageBoardsService.getAllThreads(null, this.page, this.pageSize).then((result) => {
      this.threads = result.messageBoardThreads;
      this.count = result.count;
    });
  }*/
}
