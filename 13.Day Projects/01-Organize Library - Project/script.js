class Media {
  constructor (title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title () {
    return this._title;
  }
  get isCheckedOut () {
    return this._isCheckedOut;
  }
  get ratings () {
    return this._ratings;
  }
  set isCheckedOut (value){
    return this._isCheckedOut=value;
  }
  toggleCheckOutStatus () {
    if (this._isCheckedOut==false) {
      this._isCheckedOut=true;
    } else {
      this._isCheckedOut=false;
    }
  }
  getAverageRating () {
   let a=this._ratings.reduce ((a, b) => a + b)/this._ratings.length
   return a;
  }
  addRating (rating) {
    this._ratings.push (rating);
  }
}
class Book extends Media {
  constructor (author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}
class Movie extends Media {
  constructor(director, title, runtime) {
    super(title);
    this._director = director;
    this._runtime = runtime;
  }
  get director() {
    return this._director;
  }
  get runtime() {
    return this._runtime;
  }
}
const historyOfMovies = new Book('Édouard Louis', 'History of Violence', 224);
historyOfMovies.addRating(4);
historyOfMovies.addRating(3);
historyOfMovies.addRating(2);
historyOfMovies.addRating(5);
historyOfMovies.getAverageRating();
console.log(historyOfMovies);
console.log(historyOfMovies.getAverageRating());