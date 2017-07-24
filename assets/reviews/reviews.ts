import { Review } from '../../app/dashboard';

// Check for production status, see #15
declare var process: any;
const PREFIX = process.env.NODE_ENV === 'production' ? '/jenz' : '';
 
export const OPEN_HPI_REVIEWS: Review[] = [
  {statement: '120 Schüler waren beim openHPI-Programmierkurs auch in ihrer Freizeit mit viel Engagement und großem Interesse bei der Sache.', imageUrl: PREFIX + '/assets/reviews/square_dominik.jpg', author: 'Dominik Hausner, Informatik-Lehrer'},
  {statement: 'Prof. Meinel begeisterte mich für das Thema Web-Technologien.', imageUrl: PREFIX + '/assets/reviews/square_elisabeth.jpg', author: 'Elisabeth Jass (Jahrgang 1934), openHPI Nutzerin'},
  {statement: 'Hello. I\'m a random guy. This is a very long text. Bla bli blub di blub. This is a very long text. Bla bli blub di blub.', imageUrl: 'https://static.tildacdn.com/tild6231-3138-4531-b132-313863343037/28m.jpg', author: 'I\'m PROud being at the HPI :)'},
  {statement: 'openHPI offers a variety of interesting courses. Video indexation or collaboration spaces make it easier to follow and learn.', imageUrl: PREFIX + '/assets/reviews/square_oriol.jpg', author: 'Oriol Borras Gene, Ph.D. Student - Technical University of Madrid'},
  {statement: 'Hello. I\'m a random guy. This is a very long text. Bla bli blub di blub. This is a very long text. Bla bli blub di blub.', imageUrl: 'https://static.tildacdn.com/tild6231-3138-4531-b132-313863343037/28m.jpg', author: 'I\'m PROud being at the HPI :)'},
];

export const OPEN_SAP_REVIEWS: Review[] = [
  {statement: '120 Schüler waren beim openHPI-Programmierkurs auch in ihrer Freizeit mit viel Engagement und großem Interesse bei der Sache.', imageUrl: PREFIX + '/assets/reviews/square_dominik.jpg', author: 'Dominik Hausner, Informatik-Lehrer'},
  {statement: 'Prof. Meinel begeisterte mich für das Thema Web-Technologien.', imageUrl: PREFIX + '/assets/reviews/square_elisabeth.jpg', author: 'Elisabeth Jass (Jahrgang 1934), openHPI Nutzerin'},
  {statement: 'Hello. I\'m a random guy. This is a very long text. Bla bli blub di blub. This is a very long text. Bla bli blub di blub.', imageUrl: 'https://static.tildacdn.com/tild6231-3138-4531-b132-313863343037/28m.jpg', author: 'I\'m PROud being at the HPI :)'},
  {statement: 'openHPI offers a variety of interesting courses. Video indexation or collaboration spaces make it easier to follow and learn.', imageUrl: PREFIX + '/assets/reviews/square_oriol.jpg', author: 'Oriol Borras Gene, Ph.D. Student - Technical University of Madrid'},
  {statement: 'Hello. I\'m a random guy. This is a very long text. Bla bli blub di blub. This is a very long text. Bla bli blub di blub.', imageUrl: 'https://static.tildacdn.com/tild6231-3138-4531-b132-313863343037/28m.jpg', author: 'I\'m PROud being at the HPI :)'},
];

export const MOOC_HOUSE_REVIEWS: Review[] = [
  {statement: '120 Schüler waren beim openHPI-Programmierkurs auch in ihrer Freizeit mit viel Engagement und großem Interesse bei der Sache.', imageUrl: PREFIX + '/assets/reviews/square_dominik.jpg', author: 'Dominik Hausner, Informatik-Lehrer'},
  {statement: 'Prof. Meinel begeisterte mich für das Thema Web-Technologien.', imageUrl: PREFIX + '/assets/reviews/square_elisabeth.jpg', author: 'Elisabeth Jass (Jahrgang 1934), openHPI Nutzerin'},
  {statement: 'Hello. I\'m a random guy. This is a very long text. Bla bli blub di blub. This is a very long text. Bla bli blub di blub.', imageUrl: 'https://static.tildacdn.com/tild6231-3138-4531-b132-313863343037/28m.jpg', author: 'I\'m PROud being at the HPI :)'},
  {statement: 'openHPI offers a variety of interesting courses. Video indexation or collaboration spaces make it easier to follow and learn.', imageUrl: PREFIX + '/assets/reviews/square_oriol.jpg', author: 'Oriol Borras Gene, Ph.D. Student - Technical University of Madrid'},
  {statement: 'Hello. I\'m a random guy. This is a very long text. Bla bli blub di blub. This is a very long text. Bla bli blub di blub.', imageUrl: 'https://static.tildacdn.com/tild6231-3138-4531-b132-313863343037/28m.jpg', author: 'I\'m PROud being at the HPI :)'},
];

export const OPEN_WHO_REVIEWS: Review[] = [
  {statement: '120 Schüler waren beim openHPI-Programmierkurs auch in ihrer Freizeit mit viel Engagement und großem Interesse bei der Sache.', imageUrl: PREFIX + '/assets/reviews/square_dominik.jpg', author: 'Dominik Hausner, Informatik-Lehrer'},
  {statement: 'Prof. Meinel begeisterte mich für das Thema Web-Technologien.', imageUrl: PREFIX + '/assets/reviews/square_elisabeth.jpg', author: 'Elisabeth Jass (Jahrgang 1934), openHPI Nutzerin'},
  {statement: 'Hello. I\'m a random guy. This is a very long text. Bla bli blub di blub. This is a very long text. Bla bli blub di blub.', imageUrl: 'https://static.tildacdn.com/tild6231-3138-4531-b132-313863343037/28m.jpg', author: 'I\'m PROud being at the HPI :)'},
  {statement: 'openHPI offers a variety of interesting courses. Video indexation or collaboration spaces make it easier to follow and learn.', imageUrl: PREFIX + '/assets/reviews/square_oriol.jpg', author: 'Oriol Borras Gene, Ph.D. Student - Technical University of Madrid'},
  {statement: 'Hello. I\'m a random guy. This is a very long text. Bla bli blub di blub. This is a very long text. Bla bli blub di blub.', imageUrl: 'https://static.tildacdn.com/tild6231-3138-4531-b132-313863343037/28m.jpg', author: 'I\'m PROud being at the HPI :)'},
];