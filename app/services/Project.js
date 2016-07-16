/**
 * Created by assafgannon on 24/06/2016.
 */
import Datastore from 'nedb';
import path from 'path';

export default class Project {
  static db = new Datastore({ filename: path.join(__dirname, 'data', 'db'), autoload: true });

  newProject(name, cb) {
    const doc = { name };

    this.db.insert(doc, cb);
  }
}
