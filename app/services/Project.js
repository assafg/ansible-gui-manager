/**
 * Created by assafgannon on 24/06/2016.
 */
import Datastore from 'nedb';

export default class Project {
  static db = new Datastore({ filename: __dirname + '/data/db', autoload: true });

  newProject(name, cb){
    const doc = { hello: 'world'
      , n: 5
      , today: new Date()
      , nedbIsAwesome: true
      , notthere: null
      , notToBeSaved: undefined  // Will not be saved
      , fruits: [ 'apple', 'orange', 'pear' ]
      , infos: { name: 'nedb' }
    };

    this.db.insert(doc, cb);
  }
}
