const DATA = `Happiness,Collaboration,Trust &_Respect,Creativity &_Innovation,Accountability,Vision &_Purpose,Goals &_Outcomes,Roadmap,Release,Sprint,Generalizing_Specialists,Sustainable_Pace, Self_Organization,Development_Practices,Planning,Daily Scrum,Review,Retrospective,Effective_Facilitation,Leadership,Impediment_Management,Leadership,Technical_Expertise,Engagement,Engagement,Backlog_Management,Leadership
8,9,8,8,10,6,7,5,5,6,3,8,7,9,5,8,5,7,6,8,6,9,7,9,7,5,5
7,8,8,7,10,7,9,6,5,7,4,7,7,7,7,8,4,4,5,9,7,7,7,4,5,6,6
7,8,7,6,7,5,6,5,7,7,2,6,7,5,6,9,6,5,4,5,2,7,7,6,6,5,5
8,7,9,5,8,7,8,6,6,7,5,7,7,8,7,10,5,5,8,7,5,5,9,7,8,8,8
8,10,8,8,10,9,10,8,8,8,0,8,8,3,8,3,5,3,3,5,5,3,8,6,8,9,8
7,6,7,4,6,4,6,4,4,4,6,4,6,7,6,9,4,6,6,6,7,9,3,3,6,8,6
8,9,0,9,0,8,8,9,8,8,0,5,8,7,8,9,2,4,7,5,8,6,9,9,8,9,8
9,9,9,8,9,7,7,8,8,8,5,8,7,8,8,10,7,7,8,8,8,8,8,8,8,8,8
8,8,9,7,9,6,8,7,7,8,1,7,8,6,8,8,1,7,7,6,9,5,7,0,8,7,7`

const DATA2 = `Happiness,Collaboration,Trust &_Respect,Creativity &_Innovation,Accountability,Vision &_Purpose,Goals &_Outcomes,Roadmap,Release,Sprint,Generalizing Specialists,Sustainable Pace, Self Organization,Development Practices,Planning,Daily Stand-Up,Review,Retrospective,Effective Facilitation,Leadership,Impediment Management,Leadership,Technical Expertise,Engagement,Engagement,Backlog Management,Leadership
9,8,8,8,7,6,7,7,7,8,7,7,8,4,7,7,6,7,8,8,7,7,7,8,7,7,7
8,8,9,8,10,8,9,8,8,9,7,7,7,8,8,10,10,10,9,8,9,9,8,8,8,9,8
7,8,7,9,8,7,8,9,9,8,6,8,8,8,9,8,8,7,7,7,7,7,7,8,8,7,7
5,7,6,8,8,5,8,5,8,7,7,5,7,7,8,8,8,8,7,5,5,5,5,5,8,9,8
10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10`

const GROUPS = [
  [1, 'Happiness'],
  [1, 'Collaboration'],
  [1, 'Trust &_Respect'],
  [1, 'Creativity &_Innovation'],
  [1, 'Accountability'],

  [2, 'Vision'],
  [3, 'Planning'],
  [1, 'Generalizing_Specialists'],

  [1, 'Sustainable_Pace'],
  [1, 'Self_Organization'],
  [1, 'Development_Practices'],
  [4, 'Effective_Meeting'],
  [3, 'Team Facilitator'],
  [3, 'Technical Ownership'],
  [3, 'Product Ownership'],
]
const CLASSES = [
  [5, 'CULTURE', '#614d9c'],
  [3, 'CLARITY', '#da3b31'],
  [4, 'FOUNDATION', '#3953a0'],
  [3, 'LEADERSHIP', '#efaa54'],
  // [6, 'PERFORMANCE', '#4f8c4c'],
]
