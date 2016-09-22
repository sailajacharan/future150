export class MessageBoardsService {
  public static $inject: string[] = ['$http', 'config'];

  public constructor(private $http, private config) { }

  public getAllThreads(q, page, pageSize) {
    var params = {
      q: q,
      page: page,
      pageSize: pageSize
    };
    return this.$http.get(this.config.baseApiUrl + '/api/messageBoardThreads', { params: params }).then(function (result) {
      return result.data;
    });
  }

  public getThreadBySlug(slug) {
    return this.$http.get(this.config.baseApiUrl + '/api/messageBoardThreads/' + slug).then(function (result) {
      return result.data;
    });
  }
}
