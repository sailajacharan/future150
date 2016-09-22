export class CollegesService {
  public static $inject: string[] = ['$http', 'config'];

  public constructor(private $http, private config) { }

  public getAll(q, page, pageSize) {
    var params = {
      q: q,
      page: page,
      pageSize: pageSize
    };
    return this.$http.get(this.config.baseApiUrl + '/colleges', { params: params }).then(function (result) {
      return result.data;
    });
  }

  public getBySlug(slug) {
    return this.$http.get(this.config.baseApiUrl + '/colleges/' + slug).then(function (result) {
      return result.data;
    });
  }
}
