import { ElaborationRow, RubricConfig } from '../types/rubric';

export interface LearningAreaConfig {
  name: string;
  hasBands: boolean;
  subjects: string[];
}

export const LEARNING_AREAS: LearningAreaConfig[] = [
  {
    name: 'Science',
    hasBands: false,
    subjects: ['Science']
  },
  {
    name: 'Technologies',
    hasBands: true,
    subjects: ['Technologies', 'Design and Technologies', 'Digital Technologies']
  },
  {
    name: 'The Arts',
    hasBands: true,
    subjects: ['Drama', 'Music', 'Visual Arts']
  },
  {
    name: 'English',
    hasBands: false,
    subjects: ['English']
  },
  {
    name: 'Mathematics',
    hasBands: false,
    subjects: ['Mathematics']
  },
  {
    name: 'HASS',
    hasBands: false,
    subjects: ['History', 'Geography', 'Economics and Business', 'Civics and Citizenship']
  },
  {
    name: 'Health & Physical Education',
    hasBands: true,
    subjects: ['Health & Physical Education']
  },
  {
    name: 'Languages',
    hasBands: true,
    subjects: ['French']
  }
];

export const STANDARDS_DATA: ElaborationRow[] = [
  {
    "id": "dra-y910-elements",
    "orderIndex": 1,
    "learningArea": "The Arts",
    "subject": "Drama",
    "yearLevel": "Years 9\u201310",
    "strand": "Exploring and responding",
    "subStrand": "",
    "descriptors": {
      "A": "discerning analysis of how and why the elements of drama, performance skills and/or conventions are manipulated in drama they create, perform and/or experience",
      "B": "informed analysis of how and why the elements of drama, performance skills and/or conventions are manipulated in drama they create, perform and/or experience",
      "C": "analysis of how and why the elements of drama, performance skills and/or conventions are manipulated in drama they create, perform and/or experience",
      "D": "description of how and/or why the elements of drama, performance skills and/or conventions are used in drama they create, perform and/or experience",
      "E": "identification of elements of drama, performance skills and/or conventions used in drama they create, perform and/or experience"
    }
  },
  {
    "id": "dra-y910-contexts",
    "orderIndex": 2,
    "learningArea": "The Arts",
    "subject": "Drama",
    "yearLevel": "Years 9\u201310",
    "strand": "Exploring and responding",
    "subStrand": "",
    "descriptors": {
      "A": "discerning evaluation of how drama in a range of styles and/or from a range of contexts communicates ideas, perspectives and/or meaning",
      "B": "informed evaluation of how drama in a range of styles and/or from a range of contexts communicates ideas, perspectives and/or meaning",
      "C": "evaluation of how drama in a range of styles and/or from a range of contexts communicates ideas, perspectives and/or meaning",
      "D": "description of how drama in a range of styles and/or from a range of contexts communicates ideas, perspectives and/or meaning",
      "E": "identification of drama in a range of styles and/or from a range of contexts"
    }
  },
  {
    "id": "dra-y910-identity",
    "orderIndex": 3,
    "learningArea": "The Arts",
    "subject": "Drama",
    "yearLevel": "Years 9\u201310",
    "strand": "Exploring and responding",
    "subStrand": "",
    "descriptors": {
      "A": "discerning evaluation of how drama is used to celebrate and challenge perspectives of Australian identity",
      "B": "informed evaluation of how drama is used to celebrate and challenge perspectives of Australian identity",
      "C": "evaluation of how drama is used to celebrate and challenge perspectives of Australian identity",
      "D": "description of how drama is used to celebrate or challenge perspective/s of Australian identity",
      "E": "identification of drama used to celebrate or challenge perspective/s of Australian identity"
    }
  },
  {
    "id": "dra-y910-shaping",
    "orderIndex": 4,
    "learningArea": "The Arts",
    "subject": "Drama",
    "yearLevel": "Years 9\u201310",
    "strand": "Creating and making",
    "subStrand": "",
    "descriptors": {
      "A": "collaborative and/or individual: shaping, manipulation and use of elements of drama, conventions and/or dramatic structures to purposefully communicate ideas, perspectives and/or meaning",
      "B": "collaborative and/or individual: shaping, manipulation and use of elements of drama, conventions and/or dramatic structures to effectively communicate ideas, perspectives and/or meaning",
      "C": "collaborative and/or individual: shaping, manipulation and use of elements of drama, conventions and/or dramatic structures to communicate ideas, perspectives and/or meaning",
      "D": "collaborative and/or individual: use of elements of drama, conventions and/or dramatic structures to communicate aspects of ideas, perspectives and/or meaning",
      "E": "collaborative or individual: use of elements of drama, conventions and/or dramatic structures"
    }
  },
  {
    "id": "dra-y910-performance",
    "orderIndex": 5,
    "learningArea": "The Arts",
    "subject": "Drama",
    "yearLevel": "Years 9\u201310",
    "strand": "Presenting and performing",
    "subStrand": "",
    "descriptors": {
      "A": "discerning use of performance skills relevant to style and/or form to sustain belief, roles and characters in performances of improvised, devised and/or scripted drama for audiences",
      "B": "informed use of performance skills relevant to style and/or form to sustain belief, roles and characters in performances of improvised, devised and/or scripted drama for audiences",
      "C": "use of performance skills relevant to style and/or form to sustain belief, roles and characters in performances of improvised, devised and/or scripted drama for audiences",
      "D": "variable use of performance skills relevant to style and/or form in performances of improvised, devised and/or scripted drama for audiences",
      "E": "fragmented use of performance skills relevant to style and/or form in performances of improvised, devised and/or scripted drama for audiences"
    }
  },
  {
    "id": "dra-y78-elements",
    "orderIndex": 1,
    "learningArea": "The Arts",
    "subject": "Drama",
    "yearLevel": "Years 7\u20138",
    "strand": "Exploring and responding",
    "subStrand": "",
    "descriptors": {
      "A": "discerning analysis of how elements of drama and/or conventions are manipulated in drama they create and/or experience",
      "B": "informed analysis of how elements of drama and/or conventions are manipulated in drama they create and/or experience",
      "C": "analysis of how elements of drama and/or conventions are manipulated in drama they create and/or experience",
      "D": "description of how elements of drama and/or conventions are manipulated in drama they create and/or experience",
      "E": "identification of elements of drama and/or conventions in drama they create and/or experience"
    }
  },
  {
    "id": "dra-y78-cultures",
    "orderIndex": 2,
    "learningArea": "The Arts",
    "subject": "Drama",
    "yearLevel": "Years 7\u20138",
    "strand": "Exploring and responding",
    "subStrand": "",
    "descriptors": {
      "A": "discerning evaluation of the ways drama created and/or performed across cultures, times, places and/or other contexts communicates ideas, perspectives and/or meaning",
      "B": "informed evaluation of the ways drama created and/or performed across cultures, times, places and/or other contexts communicates ideas, perspectives and/or meaning",
      "C": "evaluation of the ways drama created and/or performed across cultures, times, places and/or other contexts communicates ideas, perspectives and/or meaning",
      "D": "description of the ways drama created and/or performed across cultures, times, places and/or other contexts communicates ideas, perspectives and/or meaning",
      "E": "identification of drama created and/or performed across cultures, times, places and/or other contexts"
    }
  },
  {
    "id": "dra-y78-respect",
    "orderIndex": 3,
    "learningArea": "The Arts",
    "subject": "Drama",
    "yearLevel": "Years 7\u20138",
    "strand": "Exploring and responding",
    "subStrand": "",
    "descriptors": {
      "A": "discerning description of respectful approaches to creating, performing and/or responding to drama",
      "B": "informed description of respectful approaches to creating, performing and/or responding to drama",
      "C": "description of respectful approaches to creating, performing and/or responding to drama",
      "D": "identification of respectful approaches to creating, performing and/or responding to drama",
      "E": "statement/s about respect in drama"
    }
  },
  {
    "id": "dra-y78-shape-action",
    "orderIndex": 4,
    "learningArea": "The Arts",
    "subject": "Drama",
    "yearLevel": "Years 7\u20138",
    "strand": "Creating and making",
    "subStrand": "",
    "descriptors": {
      "A": "discerning manipulation of the elements of drama and conventions to shape dramatic action in improvised, devised and/or scripted drama, working collaboratively",
      "B": "informed manipulation of the elements of drama and conventions to shape dramatic action in improvised, devised and/or scripted drama, working collaboratively",
      "C": "manipulation of the elements of drama and conventions to shape dramatic action in improvised, devised and/or scripted drama, working collaboratively",
      "D": "use of the elements of drama and/or conventions to shape aspects of dramatic action in improvised, devised and/or scripted drama",
      "E": "fragmented use of the elements of drama in improvised, devised and/or scripted drama"
    }
  },
  {
    "id": "dra-y78-performance",
    "orderIndex": 5,
    "learningArea": "The Arts",
    "subject": "Drama",
    "yearLevel": "Years 7\u20138",
    "strand": "Presenting and performing",
    "subStrand": "",
    "descriptors": {
      "A": "discerning employment of performance skills to convey and sustain dramatic action to communicate ideas, perspectives and/or meaning when performing drama to audiences",
      "B": "informed employment of performance skills to convey and sustain dramatic action to communicate ideas, perspectives and/or meaning when performing drama to audiences",
      "C": "employment of performance skills to convey and sustain dramatic action to communicate ideas, perspectives and/or meaning when performing drama to audiences",
      "D": "variable employment of performance skills to convey dramatic action to communicate aspects of ideas, perspectives and/or meaning when performing drama to audiences",
      "E": "fragmented employment of performance skills when performing drama to audiences"
    }
  },
  {
    "id": "mus-y910-elements",
    "orderIndex": 1,
    "learningArea": "The Arts",
    "subject": "Music",
    "yearLevel": "Years 9\u201310",
    "strand": "Exploring and responding",
    "subStrand": "",
    "descriptors": {
      "A": "discerning analysis of ways composers and/or performers use the elements of music and compositional devices to engage audiences",
      "B": "informed analysis of ways composers and/or performers use the elements of music and compositional devices to engage audiences",
      "C": "analysis of ways composers and/or performers use the elements of music and compositional devices to engage audiences",
      "D": "description of ways composers and/or performers use the elements of music and compositional devices to engage audiences",
      "E": "identification of use the elements of music and compositional devices"
    }
  },
  {
    "id": "mus-y910-cultures",
    "orderIndex": 2,
    "learningArea": "The Arts",
    "subject": "Music",
    "yearLevel": "Years 9\u201310",
    "strand": "Exploring and responding",
    "subStrand": "",
    "descriptors": {
      "A": "discerning evaluation of how music and/or performances in a range of styles and/or from across cultures, times, places and/or other contexts communicate ideas, perspectives and/or meaning",
      "B": "informed evaluation of how music and/or performances in a range of styles and/or from across cultures, times, places and/or other contexts communicate ideas, perspectives and/or meaning",
      "C": "evaluation of how music and/or performances in a range of styles and/or from across cultures, times, places and/or other contexts communicate ideas, perspectives and/or meaning",
      "D": "description of how music and/or performances in a range of styles and/or from across cultures, times, places and/or other contexts communicate ideas, perspectives and/or meaning",
      "E": "identification of music and/or performances in a range of styles and/or from across cultures, times, places and/or other contexts"
    }
  },
  {
    "id": "mus-y910-identity",
    "orderIndex": 3,
    "learningArea": "The Arts",
    "subject": "Music",
    "yearLevel": "Years 9\u201310",
    "strand": "Exploring and responding",
    "subStrand": "",
    "descriptors": {
      "A": "discerning evaluation of how music is used to celebrate and challenge perspectives of Australian identity",
      "B": "informed evaluation of how music is used to celebrate and challenge perspectives of Australian identity",
      "C": "evaluation of how music is used to celebrate and challenge perspectives of Australian identity",
      "D": "description of how music is used to celebrate or challenge perspective/s of Australian identity",
      "E": "identification of music used to celebrate or challenge perspective/s of Australian identity"
    }
  },
  {
    "id": "mus-y910-composing",
    "orderIndex": 4,
    "learningArea": "The Arts",
    "subject": "Music",
    "yearLevel": "Years 9\u201310",
    "strand": "Creating and making",
    "subStrand": "",
    "descriptors": {
      "A": "demonstration of listening and aural skills relevant to the styles and/or contexts in which they are working and discerning manipulation of the elements of music and use of compositional devices to communicate ideas, perspectives and/or meanings in compositions in selected style/s, form/s and/or using selected instrumentation [using] notation, documentation and/or recording their music",
      "B": "demonstration of listening and aural skills relevant to the styles and/or contexts in which they are working and informed manipulation of the elements of music and use of compositional devices to communicate ideas, perspectives and/or meanings in compositions in selected style/s, form/s and/or using selected instrumentation [using] notation, documentation and/or recording their music",
      "C": "demonstration of listening and aural skills relevant to the styles and/or contexts in which they are working and manipulation of the elements of music and use of compositional devices to communicate ideas, perspectives and/or meanings in compositions in selected style/s, form/s and/or using selected instrumentation [using] notation, documentation and/or recording their music",
      "D": "variable demonstration of listening and aural skills and use of the elements of music and compositional devices to communicate aspects of ideas, perspectives and/or meanings in compositions [using] notation, documentation and/or recording their music",
      "E": "fragmented use of the elements of music and/or compositional devices in compositions"
    }
  },
  {
    "id": "mus-y910-styles-perf",
    "orderIndex": 5,
    "learningArea": "The Arts",
    "subject": "Music",
    "yearLevel": "Years 9\u201310",
    "strand": "Presenting and performing",
    "subStrand": "",
    "descriptors": {
      "A": "discerning application of knowledge of styles and/or forms when performing their own and/or others\u2019 music",
      "B": "informed application of knowledge of styles and/or forms when performing their own and/or others\u2019 music",
      "C": "application of knowledge of styles and/or forms when performing their own and/or others\u2019 music",
      "D": "variable application of knowledge of styles and/or forms when performing their own and/or others\u2019 music",
      "E": "fragmented application of knowledge of styles and/or forms when performing their own and/or others\u2019 music"
    }
  },
  {
    "id": "mus-y910-techniques",
    "orderIndex": 6,
    "learningArea": "The Arts",
    "subject": "Music",
    "yearLevel": "Years 9\u201310",
    "strand": "Presenting and performing",
    "subStrand": "",
    "descriptors": {
      "A": "demonstration of listening and aural skills relevant to the styles and/or contexts in which they are working and discerning demonstration of appropriate vocal and/or instrumental techniques and performance skills when performing music for audiences",
      "B": "demonstration of listening and aural skills relevant to the styles and/or contexts in which they are working and informed demonstration of appropriate vocal and/or instrumental techniques and performance skills when performing music for audiences",
      "C": "demonstration of listening and aural skills relevant to the styles and/or contexts in which they are working and appropriate vocal and/or instrumental techniques and performance skills when performing music for audiences",
      "D": "variable demonstration of listening and aural skills and appropriate vocal and/or instrumental techniques and/or performance skills when performing music for audiences",
      "E": "fragmented demonstration of vocal and/or instrumental techniques and/or performance skills when performing music for audiences"
    }
  },
  {
    "id": "mus-y78-elements",
    "orderIndex": 1,
    "learningArea": "The Arts",
    "subject": "Music",
    "yearLevel": "Years 7\u20138",
    "strand": "Exploring and responding",
    "subStrand": "",
    "descriptors": {
      "A": "discerning analysis of how the elements of music and/or compositional devices are manipulated in music they compose, perform and/or experience",
      "B": "informed analysis of how the elements of music and/or compositional devices are manipulated in music they compose, perform and/or experience",
      "C": "analysis of how the elements of music and/or compositional devices are manipulated in music they compose, perform and/or experience",
      "D": "description of the elements of music and/or compositional devices used in music they compose, perform and/or experience",
      "E": "identification of element/s of music and/or compositional devices used in music they compose, perform and/or experience"
    }
  },
  {
    "id": "mus-y78-cultures",
    "orderIndex": 2,
    "learningArea": "The Arts",
    "subject": "Music",
    "yearLevel": "Years 7\u20138",
    "strand": "Exploring and responding",
    "subStrand": "",
    "descriptors": {
      "A": "discerning evaluation of the ways music from across cultures, times, places and/or other contexts communicates ideas, perspectives and/or meaning",
      "B": "informed evaluation of the ways music from across cultures, times, places and/or other contexts communicates ideas, perspectives and/or meaning",
      "C": "evaluation of the ways music from across cultures, times, places and/or other contexts communicates ideas, perspectives and/or meaning",
      "D": "description of the ways music from across cultures, times, places and/or other contexts communicates ideas, perspectives and/or meaning",
      "E": "identification of music from across cultures, times, places and/or other contexts"
    }
  },
  {
    "id": "mus-y78-respect",
    "orderIndex": 3,
    "learningArea": "The Arts",
    "subject": "Music",
    "yearLevel": "Years 7\u20138",
    "strand": "Exploring and responding",
    "subStrand": "",
    "descriptors": {
      "A": "discerning description of respectful approaches to composing, performing and/or responding to music",
      "B": "informed description of respectful approaches to composing, performing and/or responding to music",
      "C": "description of respectful approaches to composing, performing and/or responding to music",
      "D": "identification of respectful approaches to composing, performing and/or responding to music",
      "E": "statement/s about respect in music"
    }
  },
  {
    "id": "mus-y78-composing",
    "orderIndex": 4,
    "learningArea": "The Arts",
    "subject": "Music",
    "yearLevel": "Years 7\u20138",
    "strand": "Creating and making",
    "subStrand": "",
    "descriptors": {
      "A": "demonstration of listening and aural skills when purposefully manipulating the elements of music and compositional devices to compose music that communicates ideas, perspectives and/or meaning, [using] notation, documentation and/or recording",
      "B": "demonstration of listening and aural skills when effectively manipulating the elements of music and compositional devices to compose music that communicates ideas, perspectives and/or meaning, [using] notation, documentation and/or recording",
      "C": "demonstration of listening and aural skills when manipulating the elements of music and compositional devices to compose music that communicates ideas, perspectives and/or meaning, [using] notation, documentation and/or recording",
      "D": "variable demonstration of listening and aural skills when using the elements of music and compositional devices to compose music that communicates aspects of ideas, perspectives and/or meaning, [using] notation, documentation and/or recording",
      "E": "fragmented use of the elements of music to compose music"
    }
  },
  {
    "id": "mus-y78-perf-audience",
    "orderIndex": 5,
    "learningArea": "The Arts",
    "subject": "Music",
    "yearLevel": "Years 7\u20138",
    "strand": "Presenting and performing",
    "subStrand": "",
    "descriptors": {
      "A": "demonstration of discerning performance skills when performing music for audiences",
      "B": "demonstration of informed performance skills when performing music for audiences",
      "C": "demonstration of performance skills when performing music for audiences",
      "D": "variable demonstration of performance skills when performing music for audiences",
      "E": "fragmented demonstration of performance skills when performing music for audiences"
    }
  },
  {
    "id": "mus-y78-perf-elements",
    "orderIndex": 6,
    "learningArea": "The Arts",
    "subject": "Music",
    "yearLevel": "Years 7\u20138",
    "strand": "Presenting and performing",
    "subStrand": "",
    "descriptors": {
      "A": "demonstration of listening and aural skills and discerning manipulation of the elements of music when performing their own and/or others\u2019 music",
      "B": "demonstration of listening and aural skills and informed manipulation of the elements of music when performing their own and/or others\u2019 music",
      "C": "demonstration of listening and aural skills and manipulation of the elements of music when performing their own and/or others\u2019 music",
      "D": "variable demonstration of listening and aural skills and use of the elements of music when performing their own and/or others\u2019 music",
      "E": "fragmented use of the elements of music when performing their own and/or others\u2019 music"
    }
  },
  {
    "id": "va-y910-processes",
    "orderIndex": 1,
    "learningArea": "The Arts",
    "subject": "Visual Arts",
    "yearLevel": "Years 9\u201310",
    "strand": "Exploring and responding",
    "subStrand": "",
    "descriptors": {
      "A": "discerning analysis of how and why visual conventions, visual arts processes and materials are manipulated in artworks they create and/or experience",
      "B": "informed analysis of how and why visual conventions, visual arts processes and materials are manipulated in artworks they create and/or experience",
      "C": "analysis of how and why visual conventions, visual arts processes and materials are manipulated in artworks they create and/or experience",
      "D": "description of how and/or why visual conventions, visual arts processes and materials are used in artworks they create and/or experience",
      "E": "identification of visual conventions, visual arts processes and/or materials used in artworks they create and/or experience"
    }
  },
  {
    "id": "va-y910-cultures",
    "orderIndex": 2,
    "learningArea": "The Arts",
    "subject": "Visual Arts",
    "yearLevel": "Years 9\u201310",
    "strand": "Exploring and responding",
    "subStrand": "",
    "descriptors": {
      "A": "discerning evaluation of how and why artists from across cultures, times, places and/or other contexts use visual conventions, visual arts processes and materials in their visual arts practice and/or artworks to represent and/or challenge ideas, perspectives and/or meaning",
      "B": "informed evaluation of how and why artists from across cultures, times, places and/or other contexts use visual conventions, visual arts processes and materials in their visual arts practice and/or artworks to represent and/or challenge ideas, perspectives and/or meaning",
      "C": "evaluation of how and why artists from across cultures, times, places and/or other contexts use visual conventions, visual arts processes and materials in their visual arts practice and/or artworks to represent and/or challenge ideas, perspectives and/or meaning",
      "D": "description of how and/or why artists from across cultures, times, places and/or other contexts use visual conventions, visual arts processes and materials in their visual arts practice and/or artworks to represent and/or challenge ideas, perspectives and/or meaning",
      "E": "identification of artists from across cultures, times, places and/or other contexts use visual conventions, visual arts processes and materials in their visual arts practice and/or artworks"
    }
  },
  {
    "id": "va-y910-identity",
    "orderIndex": 3,
    "learningArea": "The Arts",
    "subject": "Visual Arts",
    "yearLevel": "Years 9\u201310",
    "strand": "Exploring and responding",
    "subStrand": "",
    "descriptors": {
      "A": "discerning evaluation of how visual arts are used to celebrate and challenge perspectives of Australian identity",
      "B": "informed evaluation of how visual arts are used to celebrate and challenge perspectives of Australian identity",
      "C": "evaluation of how visual arts are used to celebrate and challenge perspectives of Australian identity",
      "D": "description of how visual arts are used to celebrate or challenge perspective/s of Australian identity",
      "E": "identification of visual arts used to celebrate or challenge perspective/s of Australian identity"
    }
  },
  {
    "id": "va-y910-ideas",
    "orderIndex": 4,
    "learningArea": "The Arts",
    "subject": "Visual Arts",
    "yearLevel": "Years 9\u201310",
    "strand": "Creating and making",
    "subStrand": "",
    "descriptors": {
      "A": "inspiration drawn from multiple sources to purposefully generate and develop ideas for artworks",
      "B": "inspiration drawn from multiple sources to effectively generate and develop ideas for artworks",
      "C": "inspiration drawn from multiple sources to generate and develop ideas for artworks",
      "D": "inspiration drawn from source/s to partially generate or develop ideas for artworks",
      "E": "fragmented development of ideas for artworks"
    }
  },
  {
    "id": "va-y910-document",
    "orderIndex": 5,
    "learningArea": "The Arts",
    "subject": "Visual Arts",
    "yearLevel": "Years 9\u201310",
    "strand": "Creating and making",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful documentation and reflection on their own visual arts practice",
      "B": "detailed documentation and reflection on their own visual arts practice",
      "C": "documentation and reflection on their own visual arts practice",
      "D": "partial documentation or reflection on their own visual arts practice",
      "E": "fragmented documentation or reflection on their own visual arts practice"
    }
  },
  {
    "id": "va-y910-create",
    "orderIndex": 6,
    "learningArea": "The Arts",
    "subject": "Visual Arts",
    "yearLevel": "Years 9\u201310",
    "strand": "Creating and making",
    "subStrand": "",
    "descriptors": {
      "A": "discerning use of knowledge of visual conventions, visual arts processes and materials to create artworks that represent and/or communicate ideas, perspectives and/or meaning",
      "B": "informed use of knowledge of visual conventions, visual arts processes and materials to create artworks that represent and/or communicate ideas, perspectives and/or meaning",
      "C": "use of knowledge of visual conventions, visual arts processes and materials to create artworks that represent and/or communicate ideas, perspectives and/or meaning",
      "D": "use of knowledge of visual conventions, visual arts processes and/or materials to create artworks that represent and/or communicate aspects of ideas, perspectives and/or meaning",
      "E": "fragmented use of knowledge of visual conventions, visual arts processes and/or materials to create artworks"
    }
  },
  {
    "id": "va-y910-exhibitions",
    "orderIndex": 7,
    "learningArea": "The Arts",
    "subject": "Visual Arts",
    "yearLevel": "Years 9\u201310",
    "strand": "Presenting and performing",
    "subStrand": "",
    "descriptors": {
      "A": "curation and purposeful presentation of exhibitions to engage audiences of either: their own artworks and visual arts practice; others\u2019 artworks and visual arts practice [that effectively represent and/or communicate ideas, perspectives and/or meaning]",
      "B": "curation and presentation of exhibitions to engage audiences of either: their own artworks and visual arts practice and/or others\u2019 artworks and visual arts practice [that effectively represent and/or communicate ideas, perspectives and/or meaning]",
      "C": "curation and presentation of exhibitions to engage audiences of: their own artworks and visual arts practice and/or others\u2019 artworks and visual arts practice [that represent and/or communicate ideas, perspectives and/or meaning]",
      "D": "variable presentation of exhibitions to engage audiences of: their own artworks and visual arts practice and/or others\u2019 artworks and visual arts practice [that represent and/or communicate aspects of ideas, perspectives and/or meaning]",
      "E": "fragmented presentation exhibitions to audiences of either: their own artworks and visual arts practice and/or others\u2019 artworks and visual arts practice"
    }
  },
  {
    "id": "va-y78-processes",
    "orderIndex": 1,
    "learningArea": "The Arts",
    "subject": "Visual Arts",
    "yearLevel": "Years 7\u20138",
    "strand": "Exploring and responding",
    "subStrand": "",
    "descriptors": {
      "A": "discerning analysis of how visual conventions, visual arts processes and materials are manipulated in artworks they create and/or experience",
      "B": "informed analysis of how visual conventions, visual arts processes and materials are manipulated in artworks they create and/or experience",
      "C": "analysis of how visual conventions, visual arts processes and materials are manipulated in artworks they create and/or experience",
      "D": "description of visual conventions, visual arts processes or materials used in artworks they create and/or experience",
      "E": "identification of visual conventions, visual arts processes or materials used in artworks they create and/or experience"
    }
  },
  {
    "id": "va-y78-artists",
    "orderIndex": 2,
    "learningArea": "The Arts",
    "subject": "Visual Arts",
    "yearLevel": "Years 7\u20138",
    "strand": "Exploring and responding",
    "subStrand": "",
    "descriptors": {
      "A": "discerning evaluation of the ways that visual artists communicate ideas, perspectives and/or meaning through their visual arts practice across cultures, times, places and/or other contexts",
      "B": "informed evaluation of the ways that visual artists communicate ideas, perspectives and/or meaning through their visual arts practice across cultures, times, places and/or other contexts",
      "C": "evaluation of the ways that visual artists communicate ideas, perspectives and/or meaning through their visual arts practice across cultures, times, places and/or other contexts",
      "D": "description of the ways that visual artists communicate ideas, perspectives and/or meaning through their visual arts practice across cultures, times, places and/or other contexts",
      "E": "identification of visual artists and/or their visual arts practice across cultures, times, places and/or other contexts"
    }
  },
  {
    "id": "va-y78-respect",
    "orderIndex": 3,
    "learningArea": "The Arts",
    "subject": "Visual Arts",
    "yearLevel": "Years 7\u20138",
    "strand": "Exploring and responding",
    "subStrand": "",
    "descriptors": {
      "A": "discerning description of respectful approaches to creating, and/or responding to artworks",
      "B": "informed description of respectful approaches to creating, and/or responding to artworks",
      "C": "description of respectful approaches to creating, and/or responding to artworks",
      "D": "identification of respectful approaches to creating, and/or responding to artworks",
      "E": "statement/s about respect in artworks"
    }
  },
  {
    "id": "va-y78-ideas",
    "orderIndex": 4,
    "learningArea": "The Arts",
    "subject": "Visual Arts",
    "yearLevel": "Years 7\u20138",
    "strand": "Creating and making",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful generation, documentation, and development of ideas for artworks",
      "B": "detailed generation, documentation, and development of ideas for artworks",
      "C": "generation, documentation, and development of ideas for artworks",
      "D": "partial generation, documentation, or development of ideas for artworks",
      "E": "fragmented development of ideas for artworks"
    }
  },
  {
    "id": "va-y78-reflection",
    "orderIndex": 5,
    "learningArea": "The Arts",
    "subject": "Visual Arts",
    "yearLevel": "Years 7\u20138",
    "strand": "Creating and making",
    "subStrand": "",
    "descriptors": {
      "A": "discerning reflection on their visual arts practices",
      "B": "informed reflection on their visual arts practices",
      "C": "reflection on their visual arts practices",
      "D": "variable reflection of their visual arts practice/s",
      "E": "description of their visual arts practice/s"
    }
  },
  {
    "id": "va-y78-manipulation",
    "orderIndex": 6,
    "learningArea": "The Arts",
    "subject": "Visual Arts",
    "yearLevel": "Years 7\u20138",
    "strand": "Creating and making",
    "subStrand": "",
    "descriptors": {
      "A": "informed selection and effective manipulation of visual conventions, visual arts processes and/or materials to create artworks that represent ideas, perspectives and/or meaning",
      "B": "informed selection and manipulation of visual conventions, visual arts processes and/or materials to create artworks that represent ideas, perspectives and/or meaning",
      "C": "selection and manipulation of visual conventions, visual arts processes and/or materials to create artworks that represent ideas, perspectives and/or meaning",
      "D": "use of visual conventions, visual arts processes and/or materials to create artworks that represent aspects of ideas, perspectives and/or meaning",
      "E": "fragmented use of visual conventions, visual arts processes and/or materials to create artworks"
    }
  },
  {
    "id": "va-y78-exhibits",
    "orderIndex": 7,
    "learningArea": "The Arts",
    "subject": "Visual Arts",
    "yearLevel": "Years 7\u20138",
    "strand": "Presenting and performing",
    "subStrand": "",
    "descriptors": {
      "A": "curation and purposeful presentation of exhibits and/or displays for audiences of: their own artworks or visual arts practice and/or others\u2019 artworks or visual arts practice [that effectively represent ideas, perspectives and/or meaning]",
      "B": "curation and presentation of exhibits and/or displays for audiences of: their own artworks or visual arts practice and/or others\u2019 artworks or visual arts practice [that effectively represent ideas, perspectives and/or meaning]",
      "C": "curation and presentation of exhibits and/or displays for audiences of: their own artworks or visual arts practice and/or others\u2019 artworks or visual arts practice [that represent ideas, perspectives and/or meaning]",
      "D": "presentation of exhibits and/or displays for audiences of: their own artworks or visual arts practice and/or others\u2019 artworks or visual arts practice [that represent aspects of ideas, perspectives and/or meaning]",
      "E": "fragmented presentation of exhibits and/or displays for audiences of: their own artworks or visual arts practice and/or others\u2019 artworks or visual arts practice"
    }
  },
  {
    "id": "digi-y910-systems",
    "orderIndex": 1,
    "learningArea": "Technologies",
    "subject": "Digital Technologies",
    "yearLevel": "Years 9\u201310",
    "strand": "Knowledge and understanding",
    "subStrand": "Digital systems",
    "descriptors": {
      "A": "considered explanation of how digital systems manage, control and secure access to data",
      "B": "detailed explanation of how digital systems manage, control and secure access to data",
      "C": "explanation of how digital systems manage, control and secure access to data",
      "D": "description of how digital systems manage, control and/or secure access to data",
      "E": "statement/s about data management, control and/or secure access to data"
    }
  },
  {
    "id": "digi-y910-representation",
    "orderIndex": 2,
    "learningArea": "Technologies",
    "subject": "Digital Technologies",
    "yearLevel": "Years 9\u201310",
    "strand": "Knowledge and understanding",
    "subStrand": "Data representation",
    "descriptors": {
      "A": "reasoned representation of documents as content, structure and presentation",
      "B": "effective representation of documents as content, structure and presentation",
      "C": "representation of documents as content, structure and presentation",
      "D": "partial representation of documents as content, structure and/or presentation",
      "E": "directed representation of documents as content, structure and/or presentation"
    }
  },
  {
    "id": "digi-y910-databases",
    "orderIndex": 3,
    "learningArea": "Technologies",
    "subject": "Digital Technologies",
    "yearLevel": "Years 9\u201310",
    "strand": "Processes and production skills",
    "subStrand": "Acquiring, managing and analysing data",
    "descriptors": {
      "A": "proficient acquisition, interpretation and modelling of complex data with databases",
      "B": "effective acquisition, interpretation and modelling of complex data with databases",
      "C": "acquisition, interpretation and modelling of complex data with databases",
      "D": "partial acquisition, interpretation and/or modelling of complex data with databases",
      "E": "fragmented acquisition, interpretation and/or modelling of data with databases"
    }
  },
  {
    "id": "digi-y910-decomposition",
    "orderIndex": 4,
    "learningArea": "Technologies",
    "subject": "Digital Technologies",
    "yearLevel": "Years 9\u201310",
    "strand": "Processes and production skills",
    "subStrand": "Investigating and defining",
    "descriptors": {
      "A": "reasoned decomposition of real-world problems",
      "B": "effective decomposition of real-world problems",
      "C": "decomposition of real-world problems",
      "D": "partial decomposition of real-world problems",
      "E": "statement/s about real-world problems"
    }
  },
  {
    "id": "digi-y910-algorithms",
    "orderIndex": 5,
    "learningArea": "Technologies",
    "subject": "Digital Technologies",
    "yearLevel": "Years 9\u201310",
    "strand": "Processes and production skills",
    "subStrand": "Generating and designing",
    "descriptors": {
      "A": "considered design and validation of algorithms",
      "B": "effective design and validation of algorithms",
      "C": "design and validation of algorithms",
      "D": "guided design and validation of algorithms",
      "E": "directed design and/or validation of algorithms"
    }
  },
  {
    "id": "digi-y910-solutions",
    "orderIndex": 6,
    "learningArea": "Technologies",
    "subject": "Digital Technologies",
    "yearLevel": "Years 9\u201310",
    "strand": "Processes and production skills",
    "subStrand": "Generating and designing",
    "descriptors": {
      "A": "considered development and modification of innovative digital solutions",
      "B": "effective development and modification of innovative digital solutions",
      "C": "development and modification of innovative digital solutions",
      "D": "partial development and modification of innovative digital solutions",
      "E": "fragmented development and/or modification of digital solutions"
    }
  },
  {
    "id": "digi-y910-oop",
    "orderIndex": 7,
    "learningArea": "Technologies",
    "subject": "Digital Technologies",
    "yearLevel": "Years 9\u201310",
    "strand": "Processes and production skills",
    "subStrand": "Producing and implementing",
    "descriptors": {
      "A": "proficient implementation of algorithms, including in an object-oriented programming language",
      "B": "effective implementation of algorithms, including in an object-oriented programming language",
      "C": "implementation of algorithms, including in an object-oriented programming language",
      "D": "partial implementation of algorithms, including in an object-oriented programming language",
      "E": "directed implementation of algorithms"
    }
  },
  {
    "id": "digi-y910-evaluating",
    "orderIndex": 8,
    "learningArea": "Technologies",
    "subject": "Digital Technologies",
    "yearLevel": "Years 9\u201310",
    "strand": "Processes and production skills",
    "subStrand": "Evaluating",
    "descriptors": {
      "A": "discerning critical evaluation of alternative solutions against stakeholder elicited user stories",
      "B": "effective critical evaluation of alternative solutions against stakeholder elicited user stories",
      "C": "critical evaluation of alternative solutions against stakeholder elicited user stories",
      "D": "partial evaluation of alternative solutions against stakeholder elicited user stories",
      "E": "identification of alternative solutions against stakeholder elicited user stories"
    }
  },
  {
    "id": "digi-y910-collab-content",
    "orderIndex": 9,
    "learningArea": "Technologies",
    "subject": "Digital Technologies",
    "yearLevel": "Years 9\u201310",
    "strand": "Processes and production skills",
    "subStrand": "Collaborating and managing",
    "descriptors": {
      "A": "proficient use of advanced features of digital tools to create interactive content",
      "B": "effective use of advanced features of digital tools to create interactive content",
      "C": "use of advanced features of digital tools to create interactive content",
      "D": "variable use of advanced features of digital tools to partially create interactive content",
      "E": "directed use of digital tools to create content"
    }
  },
  {
    "id": "digi-y910-collab-agile",
    "orderIndex": 10,
    "learningArea": "Technologies",
    "subject": "Digital Technologies",
    "yearLevel": "Years 9\u201310",
    "strand": "Processes and production skills",
    "subStrand": "Collaborating and managing",
    "descriptors": {
      "A": "proficient use of advanced features of digital tools to plan, collaborate on and manage agile projects",
      "B": "effective use of advanced features of digital tools to plan, collaborate on and manage agile projects",
      "C": "use of advanced features of digital tools to plan, collaborate on and manage agile projects",
      "D": "variable use of advanced features of digital tools to partially plan, collaborate on and/or manage agile projects",
      "E": "directed use of digital tools to manage projects"
    }
  },
  {
    "id": "digi-y910-cybersecurity",
    "orderIndex": 11,
    "learningArea": "Technologies",
    "subject": "Digital Technologies",
    "yearLevel": "Years 9\u201310",
    "strand": "Processes and production skills",
    "subStrand": "Privacy and security",
    "descriptors": {
      "A": "discerning modelling of cyber security threats and exploration of a vulnerability",
      "B": "plausible modelling of cyber security threats and exploration of a vulnerability",
      "C": "modelling of cyber security threats and exploration of a vulnerability",
      "D": "partial modelling of cyber security threats and/or exploration of a vulnerability",
      "E": "statement/s about cyber security threats"
    }
  },
  {
    "id": "digi-y910-footprint",
    "orderIndex": 12,
    "learningArea": "Technologies",
    "subject": "Digital Technologies",
    "yearLevel": "Years 9\u201310",
    "strand": "Processes and production skills",
    "subStrand": "Privacy and security",
    "descriptors": {
      "A": "proficient application of privacy principles to manage digital footprints",
      "B": "informed application of privacy principles to manage digital footprints",
      "C": "application of privacy principles to manage digital footprints",
      "D": "partial application of privacy principles to manage digital footprints",
      "E": "directed application of privacy principles to manage digital footprints"
    }
  },
  {
    "id": "digi-y78-hardware",
    "orderIndex": 1,
    "learningArea": "Technologies",
    "subject": "Digital Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Knowledge and understanding",
    "subStrand": "Digital systems",
    "descriptors": {
      "A": "proficient selection of appropriate hardware for particular tasks",
      "B": "effective selection of appropriate hardware for particular tasks",
      "C": "selection of appropriate hardware for particular tasks",
      "D": "guided selection of appropriate hardware for particular tasks",
      "E": "directed selection of appropriate hardware for particular tasks"
    }
  },
  {
    "id": "digi-y78-networks",
    "orderIndex": 2,
    "learningArea": "Technologies",
    "subject": "Digital Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Knowledge and understanding",
    "subStrand": "Digital systems",
    "descriptors": {
      "A": "considered explanation of how data is transmitted and secured in networks",
      "B": "detailed explanation of how data is transmitted and secured in networks",
      "C": "explanation of how data is transmitted and secured in networks",
      "D": "description of how data is transmitted and/or secured in networks",
      "E": "statement/s about data transmission and/or security"
    }
  },
  {
    "id": "digi-y78-binary",
    "orderIndex": 3,
    "learningArea": "Technologies",
    "subject": "Digital Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Knowledge and understanding",
    "subStrand": "Data representation",
    "descriptors": {
      "A": "reasoned representation of data with integers and binary",
      "B": "effective representation of data with integers and binary",
      "C": "representation of data with integers and binary",
      "D": "partial representation of data with integers and binary",
      "E": "fragmented representation of data with integers and/or binary"
    }
  },
  {
    "id": "digi-y78-spreadsheets",
    "orderIndex": 4,
    "learningArea": "Technologies",
    "subject": "Digital Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Acquiring, managing and analysing data",
    "descriptors": {
      "A": "proficient acquisition, interpretation and modelling of data with spreadsheets",
      "B": "effective acquisition, interpretation and modelling of data with spreadsheets",
      "C": "acquisition, interpretation and modelling of data with spreadsheets",
      "D": "partial acquisition, interpretation and/or modelling of data with spreadsheets",
      "E": "fragmented acquisition, interpretation and/or modelling of data with spreadsheets"
    }
  },
  {
    "id": "digi-y78-decomposition",
    "orderIndex": 5,
    "learningArea": "Technologies",
    "subject": "Digital Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Investigating and defining",
    "descriptors": {
      "A": "reasoned decomposition of real-world problems",
      "B": "logical decomposition of real-world problems",
      "C": "decomposition of real-world problems",
      "D": "partial decomposition of real-world problems",
      "E": "statement/s about real-world problems"
    }
  },
  {
    "id": "digi-y78-algorithms",
    "orderIndex": 6,
    "learningArea": "Technologies",
    "subject": "Digital Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Generating and designing",
    "descriptors": {
      "A": "proficient design and tracing of algorithms",
      "B": "effective design and tracing of algorithms",
      "C": "design and tracing of algorithms",
      "D": "guided design and/or tracing of algorithms",
      "E": "directed design and/or tracing of algorithms"
    }
  },
  {
    "id": "digi-y78-solutions",
    "orderIndex": 7,
    "learningArea": "Technologies",
    "subject": "Digital Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Generating and designing",
    "descriptors": {
      "A": "considered development and modification of creative digital solutions",
      "B": "effective development and modification of creative digital solutions",
      "C": "development and modification of creative digital solutions",
      "D": "partial development and modification of aspects of creative digital solutions",
      "E": "fragmented development and/or modification of aspects of creative digital solutions"
    }
  },
  {
    "id": "digi-y78-programming",
    "orderIndex": 8,
    "learningArea": "Technologies",
    "subject": "Digital Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Producing and implementing",
    "descriptors": {
      "A": "proficient implementation of algorithms in a general-purpose programming language",
      "B": "effective implementation of algorithms in a general-purpose programming language",
      "C": "implementation of algorithms in a general-purpose programming language",
      "D": "partial implementation of algorithms in a general-purpose programming language",
      "E": "directed implementation of algorithms"
    }
  },
  {
    "id": "digi-y78-evaluating",
    "orderIndex": 9,
    "learningArea": "Technologies",
    "subject": "Digital Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Evaluating",
    "descriptors": {
      "A": "discerning evaluation of alternative solutions against user stories and design criteria",
      "B": "plausible evaluation of alternative solutions against user stories and design criteria",
      "C": "evaluation of alternative solutions against user stories and design criteria",
      "D": "description of alternative solutions against user stories and design criteria",
      "E": "identification of features of solutions"
    }
  },
  {
    "id": "digi-y78-collab-content",
    "orderIndex": 10,
    "learningArea": "Technologies",
    "subject": "Digital Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Collaborating and managing",
    "descriptors": {
      "A": "proficient selection and use of a range of digital tools to efficiently and responsibly create, locate and share content",
      "B": "effective selection and use of a range of digital tools to efficiently and responsibly create, locate and share content",
      "C": "selection and use of a range of digital tools to efficiently and responsibly create, locate and share content",
      "D": "variable selection and use of a range of digital tools to partially create, locate and/or share content",
      "E": "directed selection and use of a range of digital tools to share content"
    }
  },
  {
    "id": "digi-y78-collab-projects",
    "orderIndex": 11,
    "learningArea": "Technologies",
    "subject": "Digital Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Collaborating and managing",
    "descriptors": {
      "A": "proficient selection and use of a range of digital tools to efficiently and responsibly plan, collaborate on and manage projects",
      "B": "effective selection and use of a range of digital tools to efficiently and responsibly plan, collaborate on and manage projects",
      "C": "selection and use of a range of digital tools to efficiently and responsibly plan, collaborate on and manage projects",
      "D": "variable selection and use of a range of digital tools to partially plan, collaborate on and/or manage projects",
      "E": "directed selection and use of a range of digital tools to manage projects"
    }
  },
  {
    "id": "digi-y78-security",
    "orderIndex": 12,
    "learningArea": "Technologies",
    "subject": "Digital Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Privacy and security",
    "descriptors": {
      "A": "discerning identification of cyber security threats",
      "B": "informed identification of cyber security threats",
      "C": "identification of cyber security threats",
      "D": "partial identification of cyber security threats",
      "E": "directed identification of cyber security threats"
    }
  },
  {
    "id": "digi-y78-footprint",
    "orderIndex": 13,
    "learningArea": "Technologies",
    "subject": "Digital Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Privacy and security",
    "descriptors": {
      "A": "justified management of their digital footprint",
      "B": "informed management of their digital footprint",
      "C": "management of their digital footprint",
      "D": "management of aspects of their digital footprint",
      "E": "directed management of their digital footprint"
    }
  },
  {
    "id": "dt-y910-sustainable",
    "orderIndex": 1,
    "learningArea": "Technologies",
    "subject": "Design and Technologies",
    "yearLevel": "Years 9\u201310",
    "strand": "Knowledge and understanding",
    "subStrand": "Technologies and society",
    "descriptors": {
      "A": "discerning explanation of how people consider factors that impact on design decisions and the technologies used to design and produce products, services and environments for sustainable living",
      "B": "detailed explanation of how people consider factors that impact on design decisions and the technologies used to design and produce products, services and environments for sustainable living",
      "C": "explanation of how people consider factors that impact on design decisions and the technologies used to design and produce products, services and environments for sustainable living",
      "D": "description of how people consider factors that impact on design decisions and the technologies used to design and produce products, services and environments for sustainable living",
      "E": "statement/s about factors that impact on design decisions and/or the technologies used to design and produce designed solutions"
    }
  },
  {
    "id": "dt-y910-innovation",
    "orderIndex": 2,
    "learningArea": "Technologies",
    "subject": "Design and Technologies",
    "yearLevel": "Years 9\u201310",
    "strand": "Knowledge and understanding",
    "subStrand": "Technologies and society",
    "descriptors": {
      "A": "discerning explanation of the contribution of innovation, enterprise skills and emerging technologies to global preferred futures",
      "B": "detailed explanation of the contribution of innovation, enterprise skills and emerging technologies to global preferred futures",
      "C": "explanation of the contribution of innovation, enterprise skills and emerging technologies to global preferred futures",
      "D": "description of the contribution of innovation, enterprise skills and emerging technologies to global preferred futures",
      "E": "statement/s about innovation, enterprise skills, and/or emerging technologies"
    }
  },
  {
    "id": "dt-y910-contexts",
    "orderIndex": 3,
    "learningArea": "Technologies",
    "subject": "Design and Technologies",
    "yearLevel": "Years 9\u201310",
    "strand": "Knowledge and understanding",
    "subStrand": "Technologies contexts",
    "descriptors": {
      "A": "discerning explanation of the features of technologies and their appropriateness for purpose for one or more of the prescribed technologies contexts",
      "B": "detailed explanation of the features of technologies and their appropriateness for purpose for one or more of the prescribed technologies contexts",
      "C": "explanation of the features of technologies and their appropriateness for purpose for one or more of the prescribed technologies contexts",
      "D": "description of the features of technologies and their appropriateness for purpose for one or more of the prescribed technologies contexts",
      "E": "statement/s about the features of technologies and/or their appropriateness for purpose"
    }
  },
  {
    "id": "dt-y910-needs",
    "orderIndex": 4,
    "learningArea": "Technologies",
    "subject": "Design and Technologies",
    "yearLevel": "Years 9\u201310",
    "strand": "Processes and production skills",
    "subStrand": "Investigating and defining",
    "descriptors": {
      "A": "proficient analysis of needs or opportunities for one or more of the prescribed technologies contexts",
      "B": "effective analysis of needs or opportunities for one or more of the prescribed technologies contexts",
      "C": "analysis of needs or opportunities for one or more of the prescribed technologies contexts",
      "D": "superficial analysis of needs or opportunities for one or more of the prescribed technologies contexts",
      "E": "identification of needs or opportunities for one or more of the prescribed technologies contexts"
    }
  },
  {
    "id": "dt-y910-criteria-sustainability",
    "orderIndex": 5,
    "learningArea": "Technologies",
    "subject": "Design and Technologies",
    "yearLevel": "Years 9\u201310",
    "strand": "Processes and production skills",
    "subStrand": "Generating and designing",
    "descriptors": {
      "A": "development of reasoned design criteria that include sustainability",
      "B": "development of effective design criteria that include sustainability",
      "C": "development of design criteria that include sustainability",
      "D": "guided development of design criteria that include sustainability",
      "E": "directed development of design criteria that include sustainability"
    }
  },
  {
    "id": "dt-y910-criteria-refinement",
    "orderIndex": 6,
    "learningArea": "Technologies",
    "subject": "Design and Technologies",
    "yearLevel": "Years 9\u201310",
    "strand": "Processes and production skills",
    "subStrand": "Generating and designing",
    "descriptors": {
      "A": "proficient creation, adaptation and refinement of comprehensive design ideas, processes and solutions based on analysis of needs or opportunities",
      "B": "informed creation, adaptation and refinement of effective design ideas, processes and solutions based on analysis of needs or opportunities",
      "C": "creation, adaptation and refinement of design ideas, processes and solutions based on analysis of needs or opportunities",
      "D": "partial creation, adaptation and refinement of simple design ideas, processes and solutions based on analysis of needs or opportunities",
      "E": "fragmented creation, adaptation and refinement of basic design ideas, processes and solutions based on needs or opportunities"
    }
  },
  {
    "id": "dt-y910-communication",
    "orderIndex": 7,
    "learningArea": "Technologies",
    "subject": "Design and Technologies",
    "yearLevel": "Years 9\u201310",
    "strand": "Processes and production skills",
    "subStrand": "Generating and designing",
    "descriptors": {
      "A": "communication of comprehensive design ideas, processes and solutions to a range of audiences, including using digital tools",
      "B": "communication of effective design ideas, processes and solutions to a range of audiences, including using digital tools",
      "C": "communication of design ideas, processes and solutions to a range of audiences, including using digital tools",
      "D": "communication of superficial design ideas, processes and solutions to a range of audiences, including using digital tools",
      "E": "communication of fragmented design ideas, processes and solutions"
    }
  },
  {
    "id": "dt-y910-production",
    "orderIndex": 8,
    "learningArea": "Technologies",
    "subject": "Design and Technologies",
    "yearLevel": "Years 9\u201310",
    "strand": "Processes and production skills",
    "subStrand": "Producing and implementing",
    "descriptors": {
      "A": "purposeful selection and use of technologies to proficiently, skilfully and safely produce designed solutions",
      "B": "effective selection and use of technologies to effectively, skilfully and safely produce designed solutions",
      "C": "selection and use of technologies to skilfully and safely produce designed solutions",
      "D": "simple selection and use of technologies to safely produce simple designed solutions",
      "E": "basic selection and use of technologies to safely produce basic solutions"
    }
  },
  {
    "id": "dt-y910-evaluating",
    "orderIndex": 9,
    "learningArea": "Technologies",
    "subject": "Design and Technologies",
    "yearLevel": "Years 9\u201310",
    "strand": "Processes and production skills",
    "subStrand": "Evaluating",
    "descriptors": {
      "A": "discerning justification of decisions against developed design criteria that include sustainability",
      "B": "logical justification of decisions against developed design criteria that include sustainability",
      "C": "justification of decisions against developed design criteria that include sustainability",
      "D": "partial justification of decisions against aspects of developed design criteria that include sustainability",
      "E": "statement/s about design decisions"
    }
  },
  {
    "id": "dt-y910-management-development",
    "orderIndex": 10,
    "learningArea": "Technologies",
    "subject": "Design and Technologies",
    "yearLevel": "Years 9\u201310",
    "strand": "Processes and production skills",
    "subStrand": "Collaborating and managing",
    "descriptors": {
      "A": "independent and collaborative: proficient development of production plans and project management plans",
      "B": "independent and collaborative: effective development of production plans and project management plans",
      "C": "independent and collaborative development of production and project management plans",
      "D": "independent and collaborative: partial development of production plans and project management plans",
      "E": "independent and/or collaborative: fragmented development of production plans and project management plans"
    }
  },
  {
    "id": "dt-y910-management-application",
    "orderIndex": 11,
    "learningArea": "Technologies",
    "subject": "Design and Technologies",
    "yearLevel": "Years 9\u201310",
    "strand": "Processes and production skills",
    "subStrand": "Collaborating and managing",
    "descriptors": {
      "A": "independent and collaborative: proficient application of production plans and project management plans, adjusting processes when necessary",
      "B": "independent and collaborative: effective application of production plans and project management plans, adjusting processes when necessary",
      "C": "independent and collaborative application of production and project management plans, adjusting processes when necessary",
      "D": "independent and collaborative: partial application of production plans and project management plans, adjusting processes when necessary",
      "E": "independent and/or collaborative: fragmented application of production plans and project management plans, adjusting processes when necessary"
    }
  },
  {
    "id": "dt-y78-society",
    "orderIndex": 1,
    "learningArea": "Technologies",
    "subject": "Design and Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Knowledge and understanding",
    "subStrand": "Technologies and society",
    "descriptors": {
      "A": "discerning explanation of how people design, innovate and produce products, services and environments for preferred futures",
      "B": "detailed explanation of how people design, innovate and produce products, services and environments for preferred futures",
      "C": "explanation of how people design, innovate and produce products, services and environments for preferred futures",
      "D": "description of how people design, innovate and produce products, services and environments for preferred futures",
      "E": "statement/s about how people design, innovate and/or produce designed solutions"
    }
  },
  {
    "id": "dt-y78-contexts",
    "orderIndex": 2,
    "learningArea": "Technologies",
    "subject": "Design and Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Knowledge and understanding",
    "subStrand": "Technologies contexts",
    "descriptors": {
      "A": "discerning explanation of how the features of technologies impact on design decisions for each of the 4 prescribed technologies contexts: Engineering principles and systems, Food and fibre production, Food specialisations, Materials and technologies specialisations",
      "B": "detailed explanation of how the features of technologies impact on design decisions for each of the 4 prescribed technologies contexts: Engineering principles and systems, Food and fibre production, Food specialisations, Materials and technologies specialisations",
      "C": "explanation of how the features of technologies impact on design decisions for each of the 4 prescribed technologies contexts: Engineering principles and systems, Food and fibre production, Food specialisations, Materials and technologies specialisations",
      "D": "description of how the features of technologies impact on design decisions for each of the 4 prescribed technologies contexts: Engineering principles and systems, Food and fibre production, Food specialisations, Materials and technologies specialisations",
      "E": "statement/s about the features of technologies for one or more of the 4 prescribed technologies contexts: Engineering principles and systems, Food and fibre production, Food specialisations, Materials and technologies specialisations"
    }
  },
  {
    "id": "dt-y78-needs",
    "orderIndex": 3,
    "learningArea": "Technologies",
    "subject": "Design and Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Investigating and defining",
    "descriptors": {
      "A": "proficient analysis of needs or opportunities for each of the 4 prescribed technologies contexts",
      "B": "effective analysis of needs or opportunities for each of the 4 prescribed technologies contexts",
      "C": "analysis of needs or opportunities for each of the 4 prescribed technologies contexts",
      "D": "superficial analysis of needs or opportunities for each of the 4 prescribed technologies contexts",
      "E": "identification of needs or opportunities for one or more of the 4 prescribed technologies contexts"
    }
  },
  {
    "id": "dt-y78-creating-ideas",
    "orderIndex": 4,
    "learningArea": "Technologies",
    "subject": "Design and Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Generating and designing",
    "descriptors": {
      "A": "proficient creation and adaptation of comprehensive design ideas, processes and solutions based on analysis of needs or opportunities",
      "B": "informed creation and adaptation of effective design ideas, processes and solutions based on analysis of needs or opportunities",
      "C": "creation and adaptation of design ideas, processes and solutions based on analysis of needs or opportunities",
      "D": "partial creation and adaptation of simple design ideas, processes and solutions based on analysis of needs or opportunities",
      "E": "fragmented creation of and/or adaptation of aspects of basic design ideas, processes and solutions based on needs or opportunities"
    }
  },
  {
    "id": "dt-y78-communication",
    "orderIndex": 5,
    "learningArea": "Technologies",
    "subject": "Design and Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Generating and designing",
    "descriptors": {
      "A": "communication of design ideas and solutions to audiences with: considered use of technical terms; comprehensive use of graphical representation techniques, including using digital tools",
      "B": "communication of design ideas and solutions to audiences with: effective use of technical terms; detailed use of graphical representation techniques, including using digital tools",
      "C": "communication of design ideas and solutions to audiences using: technical terms; graphical representation techniques, including using digital tools",
      "D": "communication of design ideas and solutions to audiences with: superficial use of technical terms and/or simple use of graphical representation techniques, including using digital tools",
      "E": "communication of design ideas and solutions with: fragmented use of technical terms and/or basic use of graphical representation techniques, including using digital tools"
    }
  },
  {
    "id": "dt-y78-production",
    "orderIndex": 6,
    "learningArea": "Technologies",
    "subject": "Design and Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Producing and implementing",
    "descriptors": {
      "A": "proficient and safe production of designed solutions for each of the 4 prescribed technologies contexts",
      "B": "effective and safe production of designed solutions for each of the 4 prescribed technologies contexts",
      "C": "safe production of designed solutions for each of the 4 prescribed technologies contexts",
      "D": "safe production of aspects of designed solutions for each of the 4 prescribed technologies contexts",
      "E": "safe production of a designed solution, with direction for one or more of the 4 prescribed technologies contexts"
    }
  },
  {
    "id": "dt-y78-evaluating",
    "orderIndex": 7,
    "learningArea": "Technologies",
    "subject": "Design and Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Evaluating",
    "descriptors": {
      "A": "discerning justification of their decisions against developed design criteria that include sustainability",
      "B": "logical justification of their decisions against developed design criteria that include sustainability",
      "C": "justification of their decisions against developed design criteria that include sustainability",
      "D": "partial justification of their decisions against aspects of developed design criteria that include sustainability",
      "E": "statement/s about design decisions"
    }
  },
  {
    "id": "dt-y78-management",
    "orderIndex": 8,
    "learningArea": "Technologies",
    "subject": "Design and Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Collaborating and managing",
    "descriptors": {
      "A": "independent and collaborative: comprehensive documentation; proficient management of production processes",
      "B": "independent and collaborative: detailed documentation; effective management of production processes",
      "C": "independent and collaborative documentation and management of production processes",
      "D": "independent and collaborative: partial documentation; guided management of production processes",
      "E": "independent and/or collaborative: fragmented documentation; directed management of production processes"
    }
  },
  {
    "id": "sci-y10-bio-heredity",
    "orderIndex": 1,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 10",
    "strand": "Science understanding",
    "subStrand": "Biological sciences",
    "descriptors": {
      "A": "reasoned explanation of the processes that underpin heredity and genetic diversity",
      "B": "plausible explanation of the processes that underpin heredity and genetic diversity",
      "C": "explanation of the processes that underpin heredity and genetic diversity",
      "D": "description of the processes that underpin heredity and genetic diversity",
      "E": "description of the processes that underpin heredity"
    }
  },
  {
    "id": "sci-y10-bio-evolution",
    "orderIndex": 2,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 10",
    "strand": "Science understanding",
    "subStrand": "Biological sciences",
    "descriptors": {
      "A": "considered description of the evidence supporting the theory of evolution by natural selection",
      "B": "informed description of the evidence supporting the theory of evolution by natural selection",
      "C": "description of the evidence supporting the theory of evolution by natural selection",
      "D": "identification of evidence supporting the theory of evolution by natural selection",
      "E": "statement/s about the theory of evolution by natural selection"
    }
  },
  {
    "id": "sci-y10-ess-bigbang",
    "orderIndex": 3,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 10",
    "strand": "Science understanding",
    "subStrand": "Earth and space sciences",
    "descriptors": {
      "A": "sequenced key events in the origin and evolution of the universe and considered description of the supporting evidence for the big bang theory",
      "B": "sequenced key events in the origin and evolution of the universe and informed description of the supporting evidence for the big bang theory",
      "C": "sequenced key events in the origin and evolution of the universe and description of the supporting evidence for the big bang theory",
      "D": "description of the origin of the universe",
      "E": "statement/s about the origin of the universe"
    }
  },
  {
    "id": "sci-y10-ess-climate",
    "orderIndex": 4,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 10",
    "strand": "Science understanding",
    "subStrand": "Earth and space sciences",
    "descriptors": {
      "A": "reasoned description of trends in patterns of global climate change; reasoned identification of causal factors",
      "B": "plausible description of trends in patterns of global climate change; plausible identification of causal factors",
      "C": "description of trends in patterns of global climate change; identification of causal factors",
      "D": "description of global climate change",
      "E": "statement/s about global climate change"
    }
  },
  {
    "id": "sci-y10-phys-newton-desc",
    "orderIndex": 5,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 10",
    "strand": "Science understanding",
    "subStrand": "Physical sciences",
    "descriptors": {
      "A": "reasoned explanation of how Newton\u2019s laws describe motion",
      "B": "informed explanation of how Newton\u2019s laws describe motion",
      "C": "explanation of how Newton\u2019s laws describe motion",
      "D": "partial explanation of how Newton\u2019s laws describe motion",
      "E": "statement/s about laws of motion"
    }
  },
  {
    "id": "sci-y10-phys-newton-apply",
    "orderIndex": 6,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 10",
    "strand": "Science understanding",
    "subStrand": "Physical sciences",
    "descriptors": {
      "A": "considered application of Newton\u2019s laws to predict motion of objects in a system",
      "B": "plausible application of Newton\u2019s laws to predict motion of objects in a system",
      "C": "application of Newton\u2019s laws to predict motion of objects in a system",
      "D": "partial application of Newton\u2019s laws to predict motion of objects in a system",
      "E": "statement/s about laws of motion"
    }
  },
  {
    "id": "sci-y10-chem-periodictable",
    "orderIndex": 7,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 10",
    "strand": "Science understanding",
    "subStrand": "Chemical sciences",
    "descriptors": {
      "A": "reasoned explanation of patterns and trends in the periodic table",
      "B": "plausible explanation of patterns and trends in the periodic table",
      "C": "explanation of patterns and trends in the periodic table",
      "D": "description of patterns or trends in the periodic table",
      "E": "identification of a pattern or trend in the periodic table"
    }
  },
  {
    "id": "sci-y10-chem-products",
    "orderIndex": 8,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 10",
    "strand": "Science understanding",
    "subStrand": "Chemical sciences",
    "descriptors": {
      "A": "reasoned prediction of the products of reactions",
      "B": "plausible prediction of the products of reactions",
      "C": "prediction of the products of reactions",
      "D": "guided prediction of the products of reactions",
      "E": "statement/s about products of reactions"
    }
  },
  {
    "id": "sci-y10-chem-conditions",
    "orderIndex": 9,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 10",
    "strand": "Science understanding",
    "subStrand": "Chemical sciences",
    "descriptors": {
      "A": "reasoned prediction of the effect of changing reactant and reaction conditions",
      "B": "plausible prediction of the effect of changing reactant and reaction conditions",
      "C": "prediction of the effect of changing reactant and reaction conditions",
      "D": "prediction of the effect of changing reactant or reaction conditions",
      "E": "description of the effect of changing reactant or reaction conditions"
    }
  },
  {
    "id": "sci-y10-she-peer-review",
    "orderIndex": 10,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 10",
    "strand": "Science as a human endeavour",
    "subStrand": "Nature and development of science",
    "descriptors": {
      "A": "thorough analysis of the importance of publication and peer review in the development of scientific knowledge",
      "B": "detailed analysis of the importance of publication and peer review in the development of scientific knowledge",
      "C": "analysis of the importance of publication and peer review in the development of scientific knowledge",
      "D": "description of the importance of publication and peer review in the development of scientific knowledge",
      "E": "statement/s about the importance of publication and peer review"
    }
  },
  {
    "id": "sci-y10-she-engineering",
    "orderIndex": 11,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 10",
    "strand": "Science as a human endeavour",
    "subStrand": "Nature and development of science",
    "descriptors": {
      "A": "thorough analysis of the relationship between science, technologies and engineering",
      "B": "detailed analysis of the relationship between science, technologies and engineering",
      "C": "analysis of the relationship between science, technologies and engineering",
      "D": "description of the relationship between science, technologies and engineering",
      "E": "statement/s about science, technologies and engineering"
    }
  },
  {
    "id": "sci-y10-she-society",
    "orderIndex": 12,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 10",
    "strand": "Science as a human endeavour",
    "subStrand": "Use and influence of science",
    "descriptors": {
      "A": "thorough analysis of the key factors that influence interactions between science and society",
      "B": "detailed analysis of the key factors that influence interactions between science and society",
      "C": "analysis of the key factors that influence interactions between science and society",
      "D": "description of factors that influence interactions between science and society",
      "E": "identification of factors that influence interactions between science and society"
    }
  },
  {
    "id": "sci-y10-inq-planning-models",
    "orderIndex": 13,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 10",
    "strand": "Science inquiry",
    "subStrand": "Questioning and predicting",
    "descriptors": {
      "A": "purposeful planning of investigations to test relationships or develop explanatory models",
      "B": "plausible planning of investigations to test relationships or develop explanatory models",
      "C": "planning of investigations to test relationships or develop explanatory models",
      "D": "planning of investigations to test relationships or develop explanatory models, with guidance",
      "E": "planning of investigations to test relationships or develop explanatory models, with direction"
    }
  },
  {
    "id": "sci-y10-inq-safe-valid",
    "orderIndex": 14,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 10",
    "strand": "Science inquiry",
    "subStrand": "Planning and conducting",
    "descriptors": {
      "A": "thorough planning and conducting of safe, valid and reproducible investigations",
      "B": "detailed planning and conducting of safe, valid and reproducible investigations",
      "C": "planning and conducting of safe, valid and reproducible investigations",
      "D": "planning and conducting of safe, valid investigations",
      "E": "planning and conducting of safe investigations"
    }
  },
  {
    "id": "sci-y10-inq-ethical",
    "orderIndex": 15,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 10",
    "strand": "Science inquiry",
    "subStrand": "Planning and conducting",
    "descriptors": {
      "A": "considered explanation of how they have addressed any ethical and intercultural considerations when generating or using primary and secondary data",
      "B": "informed explanation of how they have addressed any ethical and intercultural considerations when generating or using primary and secondary data",
      "C": "explanation of how they have addressed any ethical and intercultural considerations when generating or using primary and secondary data",
      "D": "description of ethical and intercultural considerations when generating or using primary and secondary data",
      "E": "identification of ethical and intercultural considerations when generating or using primary and secondary data"
    }
  },
  {
    "id": "sci-y10-inq-equipment",
    "orderIndex": 16,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 10",
    "strand": "Science inquiry",
    "subStrand": "Planning and conducting",
    "descriptors": {
      "A": "selection and efficient use of equipment for the purposeful generation and recording of appropriate sample sizes and replicable data with precision",
      "B": "selection and efficient use of equipment for the effective generation and recording of appropriate sample sizes and replicable data with precision",
      "C": "selection and efficient use of equipment for the generation and recording of appropriate sample sizes and replicable data with precision",
      "D": "selection and use of equipment for the generation and recording of replicable data with precision",
      "E": "use of equipment for the generation and recording of replicable data with precision"
    }
  },
  {
    "id": "sci-y10-inq-representations",
    "orderIndex": 17,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 10",
    "strand": "Science inquiry",
    "subStrand": "Processing, modelling and analysing",
    "descriptors": {
      "A": "selection and purposeful construction of effective representations to organise, process and summarise data and information",
      "B": "selection and plausible construction of effective representations to organise, process and summarise data and information",
      "C": "selection and construction of effective representations to organise, process and summarise data and information",
      "D": "construction of representations to organise, process and summarise data and information",
      "E": "construction of representations to organise and process data and information"
    }
  },
  {
    "id": "sci-y10-inq-analysis-anomalies",
    "orderIndex": 18,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 10",
    "strand": "Science inquiry",
    "subStrand": "Processing, modelling and analysing",
    "descriptors": {
      "A": "thorough analysis and connection of a variety of data and information to: identify patterns, trends, relationships and anomalies; explain patterns, trends, relationships and anomalies",
      "B": "detailed analysis and connection of a variety of data and information to: identify patterns, trends, relationships and anomalies; explain patterns, trends, relationships and anomalies",
      "C": "analysis and connection of a variety of data and information to: identify patterns, trends, relationships and anomalies; explain patterns, trends, relationships and anomalies",
      "D": "analysis and connection of data and information to describe patterns, trends, relationships and anomalies",
      "E": "connection of data and information to identify patterns, trends, relationships or anomalies"
    }
  },
  {
    "id": "sci-y10-inq-eval-methods",
    "orderIndex": 19,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 10",
    "strand": "Science inquiry",
    "subStrand": "Evaluating",
    "descriptors": {
      "A": "considered evaluation of the validity and reproducibility of methods",
      "B": "informed evaluation of the validity and reproducibility of methods",
      "C": "evaluation of the validity and reproducibility of methods",
      "D": "partial evaluation of the validity and reproducibility of methods",
      "E": "description of the reproducibility of methods"
    }
  },
  {
    "id": "sci-y10-inq-eval-conclusions",
    "orderIndex": 20,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 10",
    "strand": "Science inquiry",
    "subStrand": "Evaluating",
    "descriptors": {
      "A": "thorough evaluation of the validity of conclusions and claims",
      "B": "detailed evaluation of the validity of conclusions and claims",
      "C": "evaluation of the validity of conclusions and claims",
      "D": "partial evaluation of the validity of conclusions and claims",
      "E": "description of the validity of conclusions or claims"
    }
  },
  {
    "id": "sci-y10-inq-arguments",
    "orderIndex": 21,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 10",
    "strand": "Science inquiry",
    "subStrand": "Evaluating",
    "descriptors": {
      "A": "construction of logical purposeful arguments based on analysis of a variety of evidence to support conclusions and evaluate claims",
      "B": "construction of logical informed arguments based on analysis of a variety of evidence to support conclusions and evaluate claims",
      "C": "construction of logical arguments based on analysis of a variety of evidence to support conclusions and evaluate claims",
      "D": "construction of arguments based on a variety of evidence to support conclusions and evaluate claims",
      "E": "construction of arguments to support conclusions and evaluate claims"
    }
  },
  {
    "id": "sci-y10-inq-comm",
    "orderIndex": 22,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 10",
    "strand": "Science inquiry",
    "subStrand": "Communicating",
    "descriptors": {
      "A": "selection and use of content, language and text features effectively to achieve their purpose of considered communication of their ideas, findings and arguments to diverse audiences",
      "B": "selection and use of content, language and text features effectively to achieve their purpose of informed communication of their ideas, findings and arguments to diverse audiences",
      "C": "selection and use of content, language and text features effectively to achieve their purpose when communicating their ideas, findings and arguments to diverse audiences",
      "D": "selection and use of content, language and text features to achieve their purpose when communicating their ideas, findings and arguments to audiences",
      "E": "use of content, language or text features when communicating their ideas, findings and arguments to audiences"
    }
  },
  {
    "id": "sci-y9-bio-response",
    "orderIndex": 1,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 9",
    "strand": "Science understanding",
    "subStrand": "Biological sciences",
    "descriptors": {
      "A": "thorough explanation of how body systems provide a coordinated response to stimuli",
      "B": "detailed explanation of how body systems provide a coordinated response to stimuli",
      "C": "explanation of how body systems provide a coordinated response to stimuli",
      "D": "description of body systems that provide a coordinated response to stimuli",
      "E": "identification of a body system\u2019s coordinated response to stimuli"
    }
  },
  {
    "id": "sci-y9-bio-reproduction",
    "orderIndex": 2,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 9",
    "strand": "Science understanding",
    "subStrand": "Biological sciences",
    "descriptors": {
      "A": "thorough description of how the processes of sexual and asexual reproduction enable survival of the species",
      "B": "detailed description of how the processes of sexual and asexual reproduction enable survival of the species",
      "C": "description of how the processes of sexual and asexual reproduction enable survival of the species",
      "D": "description of how the processes of sexual or asexual reproduction enable survival of the species",
      "E": "description of how reproduction enables survival of the species"
    }
  },
  {
    "id": "sci-y9-ess-carbon",
    "orderIndex": 3,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 9",
    "strand": "Science understanding",
    "subStrand": "Earth and space sciences",
    "descriptors": {
      "A": "reasoned explanation of how interactions within and between Earth\u2019s spheres affect the carbon cycle",
      "B": "informed explanation of how interactions within and between Earth\u2019s spheres affect the carbon cycle",
      "C": "explanation of how interactions within and between Earth\u2019s spheres affect the carbon cycle",
      "D": "partial explanation of how interactions within and between Earth\u2019s spheres affect the carbon cycle",
      "E": "description of the carbon cycle"
    }
  },
  {
    "id": "sci-y9-phys-conservation",
    "orderIndex": 4,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 9",
    "strand": "Science understanding",
    "subStrand": "Physical sciences",
    "descriptors": {
      "A": "thorough analysis of energy conservation in simple systems",
      "B": "detailed analysis of energy conservation in simple systems",
      "C": "analysis of energy conservation in simple systems",
      "D": "partial analysis of energy conservation in simple systems",
      "E": "description of energy conservation"
    }
  },
  {
    "id": "sci-y9-phys-models",
    "orderIndex": 5,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 9",
    "strand": "Science understanding",
    "subStrand": "Physical sciences",
    "descriptors": {
      "A": "thorough description of energy transfer through application of wave and particle models",
      "B": "detailed description of energy transfer through application of wave and particle models",
      "C": "description of energy transfer through application of wave and particle models",
      "D": "description of energy transfer through application of wave or particle models",
      "E": "identification of energy transfer"
    }
  },
  {
    "id": "sci-y9-chem-atomic",
    "orderIndex": 6,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 9",
    "strand": "Science understanding",
    "subStrand": "Chemical sciences",
    "descriptors": {
      "A": "thorough explanation of observable chemical processes in terms of changes in atomic structure, atomic rearrangement and mass",
      "B": "detailed explanation of observable chemical processes in terms of changes in atomic structure, atomic rearrangement and mass",
      "C": "explanation of observable chemical processes in terms of changes in atomic structure, atomic rearrangement and mass",
      "D": "description of observable chemical processes in terms of changes in atomic structure, atomic rearrangement and mass",
      "E": "description of observable chemical processes"
    }
  },
  {
    "id": "sci-y9-she-peer-review",
    "orderIndex": 7,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 9",
    "strand": "Science as a human endeavour",
    "subStrand": "Nature and development of science",
    "descriptors": {
      "A": "considered explanation of the role of publication and peer review in the development of scientific knowledge",
      "B": "informed explanation of the role of publication and peer review in the development of scientific knowledge",
      "C": "explanation of the role of publication and peer review in the development of scientific knowledge",
      "D": "description of the role of publication and peer review in science",
      "E": "statement/s about publication and peer review"
    }
  },
  {
    "id": "sci-y9-she-engineering",
    "orderIndex": 8,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 9",
    "strand": "Science as a human endeavour",
    "subStrand": "Nature and development of science",
    "descriptors": {
      "A": "considered explanation of the relationship between science, technologies and engineering",
      "B": "informed explanation of the relationship between science, technologies and engineering",
      "C": "explanation of the relationship between science, technologies and engineering",
      "D": "description of the relationship between science, technologies and engineering",
      "E": "statement/s about science, technologies or engineering"
    }
  },
  {
    "id": "sci-y9-she-society",
    "orderIndex": 9,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 9",
    "strand": "Science as a human endeavour",
    "subStrand": "Use and influence of science",
    "descriptors": {
      "A": "thorough analysis of the different ways in which science and society are interconnected",
      "B": "detailed analysis of the different ways in which science and society are interconnected",
      "C": "analysis of the different ways in which science and society are interconnected",
      "D": "description of ways in which science and society are interconnected",
      "E": "identification of ways in which science and society are interconnected"
    }
  },
  {
    "id": "sci-y9-inq-planning-models",
    "orderIndex": 10,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 9",
    "strand": "Science inquiry",
    "subStrand": "Questioning and predicting",
    "descriptors": {
      "A": "purposeful planning of investigations to test or identify relationships and models",
      "B": "plausible planning of investigations to test or identify relationships and models",
      "C": "planning of investigations to test or identify relationships and models",
      "D": "planning of investigations to test or identify relationships and models, with guidance",
      "E": "planning of investigations to test or identify relationships and models, with direction"
    }
  },
  {
    "id": "sci-y9-inq-safe-investigations",
    "orderIndex": 11,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 9",
    "strand": "Science inquiry",
    "subStrand": "Planning and conducting",
    "descriptors": {
      "A": "thorough planning and conducting of safe, reproducible investigations",
      "B": "detailed planning and conducting of safe, reproducible investigations",
      "C": "planning and conducting of safe, reproducible investigations",
      "D": "planning and conducting of safe investigations",
      "E": "conducting of safe investigations"
    }
  },
  {
    "id": "sci-y9-inq-ethical",
    "orderIndex": 12,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 9",
    "strand": "Science inquiry",
    "subStrand": "Planning and conducting",
    "descriptors": {
      "A": "considered description of how they have addressed any ethical and intercultural considerations when generating or using primary and secondary data",
      "B": "informed description of how they have addressed any ethical and intercultural considerations when generating or using primary and secondary data",
      "C": "description of how they have addressed any ethical and intercultural considerations when generating or using primary and secondary data",
      "D": "description of ethical and intercultural considerations when generating or using primary and secondary data",
      "E": "identification of ethical and intercultural considerations when generating or using primary and secondary data"
    }
  },
  {
    "id": "sci-y9-inq-equipment",
    "orderIndex": 13,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 9",
    "strand": "Science inquiry",
    "subStrand": "Planning and conducting",
    "descriptors": {
      "A": "selection and use of equipment for the purposeful generation and recording of replicable data with precision",
      "B": "selection and use of equipment for the effective generation and recording of replicable data with precision",
      "C": "selection and use of equipment for the generation and recording of replicable data with precision",
      "D": "selection and use of equipment for the generation and recording of replicable data",
      "E": "use of equipment for the generation and recording of data"
    }
  },
  {
    "id": "sci-y9-inq-representations",
    "orderIndex": 14,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 9",
    "strand": "Science inquiry",
    "subStrand": "Processing, modelling and analysing",
    "descriptors": {
      "A": "selection and purposeful construction of appropriate representations to organise, process and summarise data and information",
      "B": "selection and effective construction of appropriate representations to organise, process and summarise data and information",
      "C": "selection and construction of appropriate representations to organise, process and summarise data and information",
      "D": "construction of representations to organise, process and summarise data and information",
      "E": "construction of representations to organise data and information"
    }
  },
  {
    "id": "sci-y9-inq-patterns",
    "orderIndex": 15,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 9",
    "strand": "Science inquiry",
    "subStrand": "Processing, modelling and analysing",
    "descriptors": {
      "A": "thorough analysis and connection of data and information to: identify patterns, trends, relationships and anomalies; explain patterns, trends, relationships and anomalies",
      "B": "detailed analysis and connection of data and information to: identify patterns, trends, relationships and anomalies; explain patterns, trends, relationships and anomalies",
      "C": "analysis and connection of data and information to: identify patterns, trends, relationships and anomalies; explain patterns, trends, relationships and anomalies",
      "D": "analysis and connection of data and information to identify patterns, trends, relationships or anomalies",
      "E": "connection of data and information to identify patterns, trends, relationships or anomalies"
    }
  },
  {
    "id": "sci-y9-inq-eval-error",
    "orderIndex": 16,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 9",
    "strand": "Science inquiry",
    "subStrand": "Evaluating",
    "descriptors": {
      "A": "considered analysis of the impact of assumptions and sources of error in methods",
      "B": "informed analysis of the impact of assumptions and sources of error in methods",
      "C": "analysis of the impact of assumptions and sources of error in methods",
      "D": "description of the impact of assumptions and sources of error in methods",
      "E": "identification of errors or assumptions in methods"
    }
  },
  {
    "id": "sci-y9-inq-eval-conclusions",
    "orderIndex": 17,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 9",
    "strand": "Science inquiry",
    "subStrand": "Evaluating",
    "descriptors": {
      "A": "considered evaluation of the validity of conclusions and claims",
      "B": "informed evaluation of the validity of conclusions and claims",
      "C": "evaluation of the validity of conclusions and claims",
      "D": "partial evaluation of the validity of conclusions and claims",
      "E": "description of the validity of conclusions and claims"
    }
  },
  {
    "id": "sci-y9-inq-arguments",
    "orderIndex": 18,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 9",
    "strand": "Science inquiry",
    "subStrand": "Evaluating",
    "descriptors": {
      "A": "purposeful construction of logical arguments based on evidence to support conclusions and evaluate claims",
      "B": "informed construction of logical arguments based on evidence to support conclusions and evaluate claims",
      "C": "construction of logical arguments based on evidence to support conclusions and evaluate claims",
      "D": "construction of arguments based on evidence to support conclusions and evaluate claims",
      "E": "construction of arguments to support conclusions and evaluate claims"
    }
  },
  {
    "id": "sci-y9-inq-comm",
    "orderIndex": 19,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 9",
    "strand": "Science inquiry",
    "subStrand": "Communicating",
    "descriptors": {
      "A": "selection and use of content, language and text features effectively to achieve their purpose for considered communication of their ideas, findings and arguments to specific audiences",
      "B": "selection and use of content, language and text features effectively to achieve their purpose for informed communication of their ideas, findings and arguments to specific audiences",
      "C": "selection and use of content, language and text features effectively to achieve their purpose when communicating their ideas, findings and arguments to specific audiences",
      "D": "selection and use of content, language and text features to achieve their purpose when communicating their ideas, findings and arguments to audiences",
      "E": "use of content, language or text features when communicating their ideas, findings and arguments to audiences"
    }
  },
  {
    "id": "sci-y8-bio-cells",
    "orderIndex": 1,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 8",
    "strand": "Science understanding",
    "subStrand": "Biological sciences",
    "descriptors": {
      "A": "thorough explanation of the role of specialised cell structures and organelles in cellular function",
      "B": "detailed explanation of the role of specialised cell structures and organelles in cellular function",
      "C": "explanation of the role of specialised cell structures and organelles in cellular function",
      "D": "description of specialised cell structures and organelles",
      "E": "identification of specialised cell structures and/or organelles"
    }
  },
  {
    "id": "sci-y8-bio-systems",
    "orderIndex": 2,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 8",
    "strand": "Science understanding",
    "subStrand": "Biological sciences",
    "descriptors": {
      "A": "purposeful analysis of the relationship between structure and function at organ and body system levels",
      "B": "informed analysis of the relationship between structure and function at organ and body system levels",
      "C": "analysis of the relationship between structure and function at organ and body system levels",
      "D": "description of the relationship between structure and function at organ and body system levels",
      "E": "statement/s about the structure and function at organ or body system levels"
    }
  },
  {
    "id": "sci-y8-ess-tectonics",
    "orderIndex": 3,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 8",
    "strand": "Science understanding",
    "subStrand": "Earth and space sciences",
    "descriptors": {
      "A": "reasoned explanation of patterns of change in the geosphere through application of an understanding of the theory of plate tectonics",
      "B": "informed explanation of patterns of change in the geosphere through application of an understanding of the theory of plate tectonics",
      "C": "explanation of patterns of change in the geosphere through application of an understanding of the theory of plate tectonics",
      "D": "description of patterns of change in the geosphere through guided application of an understanding of the theory of plate tectonics",
      "E": "statement/s about the theory of plate tectonics"
    }
  },
  {
    "id": "sci-y8-ess-rocks",
    "orderIndex": 4,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 8",
    "strand": "Science understanding",
    "subStrand": "Earth and space sciences",
    "descriptors": {
      "A": "considered explanation of how the properties of rocks relate to their formation and influence their use",
      "B": "informed explanation of how the properties of rocks relate to their formation and influence their use",
      "C": "explanation of how the properties of rocks relate to their formation and influence their use",
      "D": "description of the properties of sedimentary, igneous and metamorphic rocks",
      "E": "identification of properties of rocks"
    }
  },
  {
    "id": "sci-y8-phys-energy-forms",
    "orderIndex": 5,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 8",
    "strand": "Science understanding",
    "subStrand": "Physical sciences",
    "descriptors": {
      "A": "thorough comparison of different forms of energy",
      "B": "detailed comparison of different forms of energy",
      "C": "comparison of different forms of energy",
      "D": "description of different forms of energy",
      "E": "identification of forms of energy"
    }
  },
  {
    "id": "sci-y8-phys-transfer",
    "orderIndex": 6,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 8",
    "strand": "Science understanding",
    "subStrand": "Physical sciences",
    "descriptors": {
      "A": "purposeful representation of transfer and transformation of energy in simple systems",
      "B": "effective representation of transfer and transformation of energy in simple systems",
      "C": "representation of transfer and transformation of energy in simple systems",
      "D": "partial representation of transfer and transformation of energy in simple systems",
      "E": "directed representation of transfer and transformation of energy in simple systems"
    }
  },
  {
    "id": "sci-y8-chem-classify",
    "orderIndex": 7,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 8",
    "strand": "Science understanding",
    "subStrand": "Chemical sciences",
    "descriptors": {
      "A": "considered classification of different types of matter",
      "B": "informed classification of different types of matter",
      "C": "classification of different types of matter",
      "D": "description of different types of matter",
      "E": "identification of types of matter"
    }
  },
  {
    "id": "sci-y8-chem-representation",
    "orderIndex": 8,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 8",
    "strand": "Science understanding",
    "subStrand": "Chemical sciences",
    "descriptors": {
      "A": "purposeful representation of different types of matter",
      "B": "informed representation of different types of matter",
      "C": "representation of different types of matter",
      "D": "partial representation of different types of matter",
      "E": "directed representation of different types of matter"
    }
  },
  {
    "id": "sci-y8-chem-changes",
    "orderIndex": 9,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 8",
    "strand": "Science understanding",
    "subStrand": "Chemical sciences",
    "descriptors": {
      "A": "reasoned distinction between physical and chemical changes",
      "B": "informed distinction between physical and chemical changes",
      "C": "distinction between chemical and physical changes",
      "D": "description of physical and chemical changes",
      "E": "identification of physical or chemical changes"
    }
  },
  {
    "id": "sci-y8-she-knowledge",
    "orderIndex": 10,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 8",
    "strand": "Science as a human endeavour",
    "subStrand": "Nature and development of science",
    "descriptors": {
      "A": "thorough analysis of how different factors influence development of and lead to changes in scientific knowledge",
      "B": "detailed analysis of how different factors influence development of and lead to changes in scientific knowledge",
      "C": "analysis of how different factors influence development of and lead to changes in scientific knowledge",
      "D": "description of factors that influence the development of and lead to changes in scientific knowledge",
      "E": "identification of factors that influence the development of scientific knowledge"
    }
  },
  {
    "id": "sci-y8-she-responses",
    "orderIndex": 11,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 8",
    "strand": "Science as a human endeavour",
    "subStrand": "Use and influence of science",
    "descriptors": {
      "A": "thorough analysis of the key considerations that inform scientific responses and how these responses impact society",
      "B": "detailed analysis of the key considerations that inform scientific responses and how these responses impact society",
      "C": "analysis of the key considerations that inform scientific responses and how these responses impact society",
      "D": "description of considerations that inform scientific responses",
      "E": "statement/s about considerations that inform scientific responses"
    }
  },
  {
    "id": "sci-y8-she-communication",
    "orderIndex": 12,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 8",
    "strand": "Science as a human endeavour",
    "subStrand": "Use and influence of science",
    "descriptors": {
      "A": "thorough analysis of the importance of science communication in shaping viewpoints, policies and regulations",
      "B": "detailed analysis of the importance of science communication in shaping viewpoints, policies and regulations",
      "C": "analysis of the importance of science communication in shaping viewpoints, policies and regulations",
      "D": "description of the importance of science communication in shaping viewpoints, policies and regulations",
      "E": "statement/s about the importance of science communication"
    }
  },
  {
    "id": "sci-y8-inq-planning",
    "orderIndex": 13,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 8",
    "strand": "Science inquiry",
    "subStrand": "Questioning and predicting",
    "descriptors": {
      "A": "purposeful planning of investigations to: test relationships; explore models",
      "B": "plausible planning of investigations to: test relationships; explore models",
      "C": "planning of investigations to: test relationships; explore models",
      "D": "guided planning of investigations to: test relationships; explore models",
      "E": "directed planning of investigations to: test relationships; explore models"
    }
  },
  {
    "id": "sci-y8-inq-safe-investigations",
    "orderIndex": 14,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 8",
    "strand": "Science inquiry",
    "subStrand": "Planning and conducting",
    "descriptors": {
      "A": "thorough planning and conducting of safe, reproducible investigations",
      "B": "detailed planning and conducting of safe, reproducible investigations",
      "C": "planning and conducting of safe, reproducible investigations",
      "D": "planning and conducting of safe investigations",
      "E": "conducting of safe investigations"
    }
  },
  {
    "id": "sci-y8-inq-ethical",
    "orderIndex": 15,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 8",
    "strand": "Science inquiry",
    "subStrand": "Planning and conducting",
    "descriptors": {
      "A": "considered description of potential ethical issues and intercultural considerations needed for specific field locations or use of secondary data",
      "B": "informed description of potential ethical issues and intercultural considerations needed for specific field locations or use of secondary data",
      "C": "description of potential ethical issues and intercultural considerations needed for specific field locations or use of secondary data",
      "D": "identification of potential ethical issues and intercultural considerations needed for specific field locations or use of secondary data",
      "E": "directed identification of potential ethical issues and intercultural considerations needed for specific field locations or use of secondary data"
    }
  },
  {
    "id": "sci-y8-inq-equipment",
    "orderIndex": 16,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 8",
    "strand": "Science inquiry",
    "subStrand": "Processing, modelling and analysing",
    "descriptors": {
      "A": "selection and use of equipment for the purposeful generation and recording of data with precision",
      "B": "selection and use of equipment for the effective generation and recording of data with precision",
      "C": "selection and use of equipment to generate and record data with precision",
      "D": "selection and use of equipment to generate and record data",
      "E": "use of equipment to generate and record data"
    }
  },
  {
    "id": "sci-y8-inq-representations",
    "orderIndex": 17,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 8",
    "strand": "Science inquiry",
    "subStrand": "Processing, modelling and analysing",
    "descriptors": {
      "A": "selection and construction of appropriate representations for the purposeful organisation and processing of data and information",
      "B": "selection and construction of appropriate representations for the effective organisation and processing of data and information",
      "C": "selection and construction of appropriate representations for the organisation and processing of data and information",
      "D": "selection and construction of representations for the organisation and processing of data and information",
      "E": "use of provided representations for the organisation and processing of data and information"
    }
  },
  {
    "id": "sci-y8-inq-patterns",
    "orderIndex": 18,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 8",
    "strand": "Science inquiry",
    "subStrand": "Processing, modelling and analysing",
    "descriptors": {
      "A": "thorough analysis of data and information to describe patterns, trends and relationships; thorough analysis of data and information to identify anomalies",
      "B": "detailed analysis of data and information to describe patterns, trends and relationships; detailed analysis of data and information to identify anomalies",
      "C": "analysis of data and information to describe patterns, trends and relationships; analysis of data and information to identify anomalies",
      "D": "use of data and information to identify patterns, trends and relationships; use of data and information to identify anomalies",
      "E": "statement/s about patterns, trends, relationships or anomalies"
    }
  },
  {
    "id": "sci-y8-inq-assumptions",
    "orderIndex": 19,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 8",
    "strand": "Science inquiry",
    "subStrand": "Evaluating",
    "descriptors": {
      "A": "considered identification of assumptions and sources of error in methods",
      "B": "informed identification of assumptions and sources of error in methods",
      "C": "identification of assumptions and sources of error in methods",
      "D": "guided identification of assumptions or sources of error in methods",
      "E": "statement/s about assumptions or errors"
    }
  },
  {
    "id": "sci-y8-inq-conflicting",
    "orderIndex": 20,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 8",
    "strand": "Science inquiry",
    "subStrand": "Evaluating",
    "descriptors": {
      "A": "purposeful analysis of conclusions and claims with reference to conflicting evidence and unanswered questions",
      "B": "informed analysis of conclusions and claims with reference to conflicting evidence and unanswered questions",
      "C": "analysis of conclusions and claims with reference to conflicting evidence and unanswered questions",
      "D": "identification of conflicting evidence and unanswered questions in conclusions and claims",
      "E": "identification of conflicting evidence or unanswered questions in conclusions and claims, with direction"
    }
  },
  {
    "id": "sci-y8-inq-arguments",
    "orderIndex": 21,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 8",
    "strand": "Science inquiry",
    "subStrand": "Evaluating",
    "descriptors": {
      "A": "purposeful construction of evidence-based arguments to support conclusions and evaluate claims",
      "B": "informed construction of evidence-based arguments to support conclusions and evaluate claims",
      "C": "construction of evidence-based arguments to support conclusions and evaluate claims",
      "D": "guided construction of evidence-based arguments to support conclusions and evaluate claims",
      "E": "directed construction of evidence-based arguments to support conclusions and evaluate claims"
    }
  },
  {
    "id": "sci-y8-inq-comm",
    "orderIndex": 22,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 8",
    "strand": "Science inquiry",
    "subStrand": "Communicating",
    "descriptors": {
      "A": "appropriate selection and use of language and text features for their purpose for considered communication of their ideas, findings and arguments to specific audiences",
      "B": "appropriate selection and use of language and text features for their purpose for informed communication of their ideas, findings and arguments to specific audiences",
      "C": "appropriate selection and use of language and text features for their purpose when communicating their ideas, findings and arguments to specific audiences",
      "D": "use of language and text features for their purpose when communicating their ideas, findings and arguments",
      "E": "use of language and text features when communicating their ideas and findings"
    }
  },
  {
    "id": "sci-y7-bio-order",
    "orderIndex": 1,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 7",
    "strand": "Science understanding",
    "subStrand": "Biological sciences",
    "descriptors": {
      "A": "reasoned explanation of how biological diversity is ordered and organised",
      "B": "informed explanation of how biological diversity is ordered and organised",
      "C": "explanation of how biological diversity is ordered and organised",
      "D": "description of the order or organisation of biological diversity",
      "E": "statement/s about ordering biological diversity"
    }
  },
  {
    "id": "sci-y7-bio-flows",
    "orderIndex": 2,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 7",
    "strand": "Science understanding",
    "subStrand": "Biological sciences",
    "descriptors": {
      "A": "purposeful representation of flows of matter and energy in ecosystems",
      "B": "informed representation of flows of matter and energy in ecosystems",
      "C": "representation of flows of matter and energy in ecosystems",
      "D": "partial representation of flows of matter and energy in ecosystems",
      "E": "directed representation of flows of matter and energy in ecosystems"
    }
  },
  {
    "id": "sci-y7-bio-predict",
    "orderIndex": 3,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 7",
    "strand": "Science understanding",
    "subStrand": "Biological sciences",
    "descriptors": {
      "A": "reasoned prediction of the effects of environmental changes",
      "B": "plausible prediction of the effects of environmental changes",
      "C": "prediction of the effects of environmental changes",
      "D": "description of the effects of environmental changes",
      "E": "statement/s about environmental changes"
    }
  },
  {
    "id": "sci-y7-ess-cycles",
    "orderIndex": 4,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 7",
    "strand": "Science understanding",
    "subStrand": "Earth and space sciences",
    "descriptors": {
      "A": "purposeful modelling of cycles in the Earth-sun-moon system",
      "B": "informed modelling of cycles in the Earth-sun-moon system",
      "C": "modelling of cycles in the Earth-sun-moon system",
      "D": "partial modelling of cycles in the Earth-sun-moon system",
      "E": "modelling of cycles in the Earth-sun-moon system, with direction"
    }
  },
  {
    "id": "sci-y7-ess-phenomena",
    "orderIndex": 5,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 7",
    "strand": "Science understanding",
    "subStrand": "Earth and space sciences",
    "descriptors": {
      "A": "reasoned explanation of the effects of these cycles on Earth phenomena",
      "B": "informed explanation of the effects of these cycles on Earth phenomena",
      "C": "explanation of the effects of these cycles on Earth phenomena",
      "D": "description of the effects of these cycles on Earth phenomena",
      "E": "statement/s about cycles on Earth"
    }
  },
  {
    "id": "sci-y7-phys-rep-forces",
    "orderIndex": 6,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 7",
    "strand": "Science understanding",
    "subStrand": "Physical sciences",
    "descriptors": {
      "A": "purposeful representation of the effects of forces acting on objects",
      "B": "informed representation of the effects of forces acting on objects",
      "C": "representation of the effects of forces acting on objects",
      "D": "partial representation of the effects of forces acting on objects",
      "E": "statement/s about forces"
    }
  },
  {
    "id": "sci-y7-phys-exp-forces",
    "orderIndex": 7,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 7",
    "strand": "Science understanding",
    "subStrand": "Physical sciences",
    "descriptors": {
      "A": "reasoned explanation of the effects of forces acting on objects",
      "B": "informed explanation of the effects of forces acting on objects",
      "C": "explanation of the effects of forces acting on objects",
      "D": "description of forces acting on objects",
      "E": "statement/s about forces"
    }
  },
  {
    "id": "sci-y7-chem-particles",
    "orderIndex": 8,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 7",
    "strand": "Science understanding",
    "subStrand": "Chemical sciences",
    "descriptors": {
      "A": "purposeful use of particle theory to explain the physical properties of substances",
      "B": "effective use of particle theory to explain the physical properties of substances",
      "C": "use of particle theory to explain the physical properties of substances",
      "D": "description of particle theory",
      "E": "statement/s about particle theory"
    }
  },
  {
    "id": "sci-y7-chem-separation",
    "orderIndex": 9,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 7",
    "strand": "Science understanding",
    "subStrand": "Chemical sciences",
    "descriptors": {
      "A": "considered development of processes that separate mixtures",
      "B": "effective development of processes that separate mixtures",
      "C": "development of processes that separate mixtures",
      "D": "guided development of processes that separate mixtures",
      "E": "directed development of processes that separate mixtures"
    }
  },
  {
    "id": "sci-y7-she-factors",
    "orderIndex": 10,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 7",
    "strand": "Science as a human endeavour",
    "subStrand": "Nature and development of science",
    "descriptors": {
      "A": "considered identification of the factors that can influence development of and lead to changes in scientific knowledge",
      "B": "informed identification of the factors that can influence development of and lead to changes in scientific knowledge",
      "C": "identification of the factors that can influence development of and lead to changes in scientific knowledge",
      "D": "identification of the factors that can influence development of or lead to changes in scientific knowledge",
      "E": "statement/s about the development of scientific knowledge"
    }
  },
  {
    "id": "sci-y7-she-responses",
    "orderIndex": 11,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 7",
    "strand": "Science as a human endeavour",
    "subStrand": "Use and influence of science",
    "descriptors": {
      "A": "reasoned explanation of how scientific responses are developed and can impact society",
      "B": "informed explanation of how scientific responses are developed and can impact society",
      "C": "explanation of how scientific responses are developed and can impact society",
      "D": "description of an impact of scientific responses on society",
      "E": "statement/s about scientific responses"
    }
  },
  {
    "id": "sci-y7-she-communication",
    "orderIndex": 12,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 7",
    "strand": "Science as a human endeavour",
    "subStrand": "Use and influence of science",
    "descriptors": {
      "A": "reasoned explanation of the role of science communication in shaping viewpoints, policies and regulations",
      "B": "informed explanation of the role of science communication in shaping viewpoints, policies and regulations",
      "C": "explanation of the role of science communication in shaping viewpoints, policies and regulations",
      "D": "description of the role of science communication in shaping viewpoints, policies and regulations",
      "E": "description of science communication"
    }
  },
  {
    "id": "sci-y7-inq-planning",
    "orderIndex": 13,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 7",
    "strand": "Science inquiry",
    "subStrand": "Questioning and predicting",
    "descriptors": {
      "A": "purposeful planning of investigations to test: relationships; aspects of scientific models",
      "B": "plausible planning of investigations to test: relationships; aspects of scientific models",
      "C": "planning of investigations to test: relationships; aspects of scientific models",
      "D": "guided planning of investigations to test: relationships; aspects of scientific models",
      "E": "directed planning of investigations to test: relationships; aspects of scientific models"
    }
  },
  {
    "id": "sci-y7-inq-safe-investigations",
    "orderIndex": 14,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 7",
    "strand": "Science inquiry",
    "subStrand": "Planning and conducting",
    "descriptors": {
      "A": "thorough planning and conducting of safe, reproducible investigations",
      "B": "detailed planning and conducting of safe, reproducible investigations",
      "C": "planning and conducting of safe, reproducible investigations",
      "D": "planning and conducting of safe investigations",
      "E": "conducting of safe investigations"
    }
  },
  {
    "id": "sci-y7-inq-ethical",
    "orderIndex": 15,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 7",
    "strand": "Science inquiry",
    "subStrand": "Planning and conducting",
    "descriptors": {
      "A": "considered identification of potential ethical issues and intercultural considerations required for field locations or use of secondary data",
      "B": "informed identification of potential ethical issues and intercultural considerations required for field locations or use of secondary data",
      "C": "identification of potential ethical issues and intercultural considerations required for field locations or use of secondary data",
      "D": "guided identification of potential ethical issues and intercultural considerations required for field locations or use of secondary data",
      "E": "directed identification of potential ethical issues and intercultural considerations required for field locations or use of secondary data"
    }
  },
  {
    "id": "sci-y7-inq-equipment",
    "orderIndex": 16,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 7",
    "strand": "Science inquiry",
    "subStrand": "Planning and conducting",
    "descriptors": {
      "A": "use of equipment for the considered generation and recording of data with precision",
      "B": "use of equipment for the effective generation and recording of data with precision",
      "C": "use of equipment for the generation and recording of data with precision",
      "D": "use of equipment for the generation and recording of data",
      "E": "directed use of equipment for the generation and recording of data"
    }
  },
  {
    "id": "sci-y7-inq-representations",
    "orderIndex": 17,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 7",
    "strand": "Science inquiry",
    "subStrand": "Processing, modelling and analysing",
    "descriptors": {
      "A": "selection and construction of appropriate representations for the purposeful organisation of data and information",
      "B": "selection and construction of appropriate representations for the effective organisation of data and information",
      "C": "selection and construction of appropriate representations for the organisation of data and information",
      "D": "selection and construction of representations for the organisation of data and information",
      "E": "use of provided representations for the organisation of data and information"
    }
  },
  {
    "id": "sci-y7-inq-patterns",
    "orderIndex": 18,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 7",
    "strand": "Science inquiry",
    "subStrand": "Processing, modelling and analysing",
    "descriptors": {
      "A": "thorough processing of data and information; thorough analysis of data and information to describe patterns, trends and relationships",
      "B": "detailed processing of data and information; detailed analysis of data and information to describe patterns, trends and relationships",
      "C": "processing of data and information; analysis of data and information to describe patterns, trends and relationships",
      "D": "processing of data and information, with guidance; use of data and information to identify patterns, trends and relationships",
      "E": "statement/s about patterns, trends or relationships"
    }
  },
  {
    "id": "sci-y7-inq-eval-error",
    "orderIndex": 19,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 7",
    "strand": "Science inquiry",
    "subStrand": "Evaluating",
    "descriptors": {
      "A": "considered identification of possible sources of error in methods",
      "B": "informed identification of possible sources of error in methods",
      "C": "identification of possible sources of error in methods",
      "D": "guided identification of possible sources of error in methods",
      "E": "statement/s about errors in methods"
    }
  },
  {
    "id": "sci-y7-inq-eval-questions",
    "orderIndex": 20,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 7",
    "strand": "Science inquiry",
    "subStrand": "Evaluating",
    "descriptors": {
      "A": "considered identification of unanswered questions in conclusions and claims",
      "B": "informed identification of unanswered questions in conclusions and claims",
      "C": "identification of unanswered questions in conclusions and claims",
      "D": "guided identification of unanswered questions in conclusions and claims",
      "E": "directed identification of unanswered questions in conclusions and claims"
    }
  },
  {
    "id": "sci-y7-inq-eval-evidence",
    "orderIndex": 21,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 7",
    "strand": "Science inquiry",
    "subStrand": "Evaluating",
    "descriptors": {
      "A": "purposeful identification of evidence to support their conclusions",
      "B": "informed identification of evidence to support their conclusions",
      "C": "identification of evidence to support their conclusions",
      "D": "guided identification of evidence to support their conclusions",
      "E": "directed identification of evidence to support their conclusions"
    }
  },
  {
    "id": "sci-y7-inq-eval-arguments",
    "orderIndex": 22,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 7",
    "strand": "Science inquiry",
    "subStrand": "Evaluating",
    "descriptors": {
      "A": "considered construction of arguments to support or dispute claims",
      "B": "informed construction of arguments to support or dispute claims",
      "C": "construction of arguments to support or dispute claims",
      "D": "guided construction of arguments to support or dispute claims",
      "E": "directed construction of arguments to support or dispute claims"
    }
  },
  {
    "id": "sci-y7-inq-comm",
    "orderIndex": 23,
    "learningArea": "Science",
    "subject": "Science",
    "yearLevel": "Year 7",
    "strand": "Science inquiry",
    "subStrand": "Communicating",
    "descriptors": {
      "A": "appropriate selection and purposeful use of language and text features, including scientific terminology, for their purpose and audience when communicating their ideas and findings",
      "B": "appropriate selection and use of language and text features, including scientific terminology, for their purpose and audience when communicating their ideas and findings",
      "C": "appropriate selection and use of language and text features for their purpose and audience when communicating their ideas and findings",
      "D": "use of language and text features for their purpose and audience when communicating their ideas and findings",
      "E": "use of language and text features when communicating their ideas and findings"
    }
  },
  {
    "id": "math-year7-understanding",
    "orderIndex": 1,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 7",
    "strand": "Mathematical proficiencies",
    "subStrand": "Understanding",
    "descriptors": {
      "A": "accurate and consistent identification, representation, description and connection of mathematical concepts and relationships in complex unfamiliar, complex familiar, and simple familiar situations",
      "B": "accurate identification, representation, description and connection of mathematical concepts and relationships in complex familiar and simple familiar situations",
      "C": "identification, representation, description and connection of mathematical concepts and relationships in simple familiar situations",
      "D": "partial identification, representation and description of mathematical concepts and relationships in some simple familiar situations",
      "E": "fragmented identification, representation and description of mathematical concepts and relationships in isolated and obvious situations"
    }
  },
  {
    "id": "math-year7-fluency",
    "orderIndex": 2,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 7",
    "strand": "Mathematical proficiencies",
    "subStrand": "Fluency",
    "descriptors": {
      "A": "choice, use and application of comprehensive facts, definitions, and procedures to find solutions in complex unfamiliar, complex familiar, and simple familiar situations",
      "B": "choice, use and application of effective facts, definitions, and procedures to find solutions in complex familiar and simple familiar situations",
      "C": "choice, use and application of facts, definitions, and procedures to find solutions in simple familiar situations",
      "D": "choice and use of partial facts, definitions, and procedures to find solutions in some simple familiar situations",
      "E": "choice and use of fragmented facts, definitions and procedures to find solutions in isolated and obvious situations"
    }
  },
  {
    "id": "math-year7-reasoning",
    "orderIndex": 3,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 7",
    "strand": "Mathematical proficiencies",
    "subStrand": "Reasoning",
    "descriptors": {
      "A": "comprehensive explanation of mathematical thinking, strategies used, and conclusions reached in complex unfamiliar, complex familiar, and simple familiar situations",
      "B": "detailed explanation of mathematical thinking, strategies used, and conclusions reached in complex familiar and simple familiar situations",
      "C": "explanation of mathematical thinking, strategies used, and conclusions reached in simple familiar situations",
      "D": "partial explanation of mathematical thinking, strategies used, and conclusions reached in some simple familiar situations",
      "E": "fragmented explanation of mathematical thinking, strategies used, and conclusions reached in isolated and obvious situations"
    }
  },
  {
    "id": "math-year7-problem-solving",
    "orderIndex": 4,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 7",
    "strand": "Mathematical proficiencies",
    "subStrand": "Problem-solving",
    "descriptors": {
      "A": "purposeful use of problem-solving approaches to find solutions to problems",
      "B": "effective use of problem-solving approaches to find solutions to problems",
      "C": "use of problem-solving approaches to find solutions to problems",
      "D": "partial use of problem-solving approaches to make progress towards finding solutions to problems",
      "E": "fragmented use of problem-solving approaches to make progress towards finding solutions to problems"
    }
  },
  {
    "id": "math-year8-understanding",
    "orderIndex": 1,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 8",
    "strand": "Mathematical proficiencies",
    "subStrand": "Understanding",
    "descriptors": {
      "A": "accurate and consistent identification, representation, description and connection of mathematical concepts and relationships in complex unfamiliar, complex familiar, and simple familiar situations",
      "B": "accurate identification, representation, description and connection of mathematical concepts and relationships in complex familiar and simple familiar situations",
      "C": "identification, representation, description and connection of mathematical concepts and relationships in simple familiar situations",
      "D": "partial identification, representation and description of mathematical concepts and relationships in some simple familiar situations",
      "E": "fragmented identification, representation and description of mathematical concepts and relationships in isolated and obvious situations"
    }
  },
  {
    "id": "math-year8-fluency",
    "orderIndex": 2,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 8",
    "strand": "Mathematical proficiencies",
    "subStrand": "Fluency",
    "descriptors": {
      "A": "choice, use and application of comprehensive facts, definitions, and procedures to find solutions in complex unfamiliar, complex familiar, and simple familiar situations",
      "B": "choice, use and application of effective facts, definitions, and procedures to find solutions in complex familiar and simple familiar situations",
      "C": "choice, use and application of facts, definitions, and procedures to find solutions in simple familiar situations",
      "D": "choice and use of partial facts, definitions, and procedures to find solutions in some simple familiar situations",
      "E": "choice and use of fragmented facts, definitions and procedures to find solutions in isolated and obvious situations"
    }
  },
  {
    "id": "math-year8-reasoning",
    "orderIndex": 3,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 8",
    "strand": "Mathematical proficiencies",
    "subStrand": "Reasoning",
    "descriptors": {
      "A": "comprehensive explanation of mathematical thinking, strategies used, and conclusions reached in complex unfamiliar, complex familiar, and simple familiar situations",
      "B": "detailed explanation of mathematical thinking, strategies used, and conclusions reached in complex familiar and simple familiar situations",
      "C": "explanation of mathematical thinking, strategies used, and conclusions reached in simple familiar situations",
      "D": "partial explanation of mathematical thinking, strategies used, and conclusions reached in some simple familiar situations",
      "E": "fragmented explanation of mathematical thinking, strategies used, and conclusions reached in isolated and obvious situations"
    }
  },
  {
    "id": "math-year8-problem-solving",
    "orderIndex": 4,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 8",
    "strand": "Mathematical proficiencies",
    "subStrand": "Problem-solving",
    "descriptors": {
      "A": "purposeful use of problem-solving approaches to find solutions to problems",
      "B": "effective use of problem-solving approaches to find solutions to problems",
      "C": "use of problem-solving approaches to find solutions to problems",
      "D": "partial use of problem-solving approaches to make progress towards finding solutions to problems",
      "E": "fragmented use of problem-solving approaches to make progress towards finding solutions to problems"
    }
  },
  {
    "id": "math-year9-understanding",
    "orderIndex": 1,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 9",
    "strand": "Mathematical proficiencies",
    "subStrand": "Understanding",
    "descriptors": {
      "A": "accurate and consistent identification, representation, description and connection of mathematical concepts and relationships in complex unfamiliar, complex familiar, and simple familiar situations",
      "B": "accurate identification, representation, description and connection of mathematical concepts and relationships in complex familiar and simple familiar situations",
      "C": "identification, representation, description and connection of mathematical concepts and relationships in simple familiar situations",
      "D": "partial identification, representation and description of mathematical concepts and relationships in some simple familiar situations",
      "E": "fragmented identification, representation and description of mathematical concepts and relationships in isolated and obvious situations"
    }
  },
  {
    "id": "math-year9-fluency",
    "orderIndex": 2,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 9",
    "strand": "Mathematical proficiencies",
    "subStrand": "Fluency",
    "descriptors": {
      "A": "choice, use and application of comprehensive facts, definitions, and procedures to find solutions in complex unfamiliar, complex familiar, and simple familiar situations",
      "B": "choice, use and application of effective facts, definitions, and procedures to find solutions in complex familiar and simple familiar situations",
      "C": "choice, use and application of facts, definitions, and procedures to find solutions in simple familiar situations",
      "D": "choice and use of partial facts, definitions, and procedures to find solutions in some simple familiar situations",
      "E": "choice and use of fragmented facts, definitions and procedures to find solutions in isolated and obvious situations"
    }
  },
  {
    "id": "math-year9-reasoning",
    "orderIndex": 3,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 9",
    "strand": "Mathematical proficiencies",
    "subStrand": "Reasoning",
    "descriptors": {
      "A": "comprehensive explanation of mathematical thinking, strategies used, and conclusions reached in complex unfamiliar, complex familiar, and simple familiar situations",
      "B": "detailed explanation of mathematical thinking, strategies used, and conclusions reached in complex familiar and simple familiar situations",
      "C": "explanation of mathematical thinking, strategies used, and conclusions reached in simple familiar situations",
      "D": "partial explanation of mathematical thinking, strategies used, and conclusions reached in some simple familiar situations",
      "E": "fragmented explanation of mathematical thinking, strategies used, and conclusions reached in isolated and obvious situations"
    }
  },
  {
    "id": "math-year9-problem-solving",
    "orderIndex": 4,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 9",
    "strand": "Mathematical proficiencies",
    "subStrand": "Problem-solving",
    "descriptors": {
      "A": "purposeful use of problem-solving approaches to find solutions to problems",
      "B": "effective use of problem-solving approaches to find solutions to problems",
      "C": "use of problem-solving approaches to find solutions to problems",
      "D": "partial use of problem-solving approaches to make progress towards finding solutions to problems",
      "E": "fragmented use of problem-solving approaches to make progress towards finding solutions to problems"
    }
  },
  {
    "id": "math-year10-understanding",
    "orderIndex": 1,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 10",
    "strand": "Mathematical proficiencies",
    "subStrand": "Understanding",
    "descriptors": {
      "A": "accurate and consistent identification, representation, description and connection of mathematical concepts and relationships in complex unfamiliar, complex familiar, and simple familiar situations",
      "B": "accurate identification, representation, description and connection of mathematical concepts and relationships in complex familiar and simple familiar situations",
      "C": "identification, representation, description and connection of mathematical concepts and relationships in simple familiar situations",
      "D": "partial identification, representation and description of mathematical concepts and relationships in some simple familiar situations",
      "E": "fragmented identification, representation and description of mathematical concepts and relationships in isolated and obvious situations"
    }
  },
  {
    "id": "math-year10-fluency",
    "orderIndex": 2,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 10",
    "strand": "Mathematical proficiencies",
    "subStrand": "Fluency",
    "descriptors": {
      "A": "choice, use and application of comprehensive facts, definitions, and procedures to find solutions in complex unfamiliar, complex familiar, and simple familiar situations",
      "B": "choice, use and application of effective facts, definitions, and procedures to find solutions in complex familiar and simple familiar situations",
      "C": "choice, use and application of facts, definitions, and procedures to find solutions in simple familiar situations",
      "D": "choice and use of partial facts, definitions, and procedures to find solutions in some simple familiar situations",
      "E": "choice and use of fragmented facts, definitions and procedures to find solutions in isolated and obvious situations"
    }
  },
  {
    "id": "math-year10-reasoning",
    "orderIndex": 3,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 10",
    "strand": "Mathematical proficiencies",
    "subStrand": "Reasoning",
    "descriptors": {
      "A": "comprehensive explanation of mathematical thinking, strategies used, and conclusions reached in complex unfamiliar, complex familiar, and simple familiar situations",
      "B": "detailed explanation of mathematical thinking, strategies used, and conclusions reached in complex familiar and simple familiar situations",
      "C": "explanation of mathematical thinking, strategies used, and conclusions reached in simple familiar situations",
      "D": "partial explanation of mathematical thinking, strategies used, and conclusions reached in some simple familiar situations",
      "E": "fragmented explanation of mathematical thinking, strategies used, and conclusions reached in isolated and obvious situations"
    }
  },
  {
    "id": "math-year10-problem-solving",
    "orderIndex": 4,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 10",
    "strand": "Mathematical proficiencies",
    "subStrand": "Problem-solving",
    "descriptors": {
      "A": "purposeful use of problem-solving approaches to find solutions to problems",
      "B": "effective use of problem-solving approaches to find solutions to problems",
      "C": "use of problem-solving approaches to find solutions to problems",
      "D": "partial use of problem-solving approaches to make progress towards finding solutions to problems",
      "E": "fragmented use of problem-solving approaches to make progress towards finding solutions to problems"
    }
  },
  {
    "id": "fr-y910-interactions",
    "orderIndex": 1,
    "learningArea": "Languages",
    "subject": "French",
    "yearLevel": "Years 9\u201310",
    "strand": "Communicating meaning in French",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful contribution to and extension of interactions in French language in increasingly unfamiliar contexts related to a wide range of interests and issues",
      "B": "effective contribution to and extension of interactions in French language in increasingly unfamiliar contexts related to a wide range of interests and issues",
      "C": "contribution to and extension of interactions in French language in increasingly unfamiliar contexts related to a wide range of interests and issues",
      "D": "partial contribution to interactions in French language in unfamiliar contexts related to interests or issues",
      "E": "isolated contribution to interactions in French language"
    }
  },
  {
    "id": "fr-y910-interpreting",
    "orderIndex": 2,
    "learningArea": "Languages",
    "subject": "French",
    "yearLevel": "Years 9\u201310",
    "strand": "Communicating meaning in French",
    "subStrand": "",
    "descriptors": {
      "A": "considered interpretation of texts by evaluating and synthesising information, ideas and perspectives",
      "B": "informed interpretation of texts by evaluating and synthesising information, ideas and perspectives",
      "C": "interpretation of texts by evaluating and synthesising information, ideas and perspectives",
      "D": "variable interpretation of texts by evaluating and synthesising information, ideas and perspectives",
      "E": "statement/s about texts, ideas or perspectives"
    }
  },
  {
    "id": "fr-y910-audience",
    "orderIndex": 3,
    "learningArea": "Languages",
    "subject": "French",
    "yearLevel": "Years 9\u201310",
    "strand": "Communicating meaning in French",
    "subStrand": "",
    "descriptors": {
      "A": "considered showing of understanding of how features of language can be used to influence audience response",
      "B": "informed showing of understanding of how features of language can be used to influence audience response",
      "C": "showing of understanding of how features of language can be used to influence audience response",
      "D": "variable showing of understanding of how features of language can be used to influence audience response",
      "E": "isolated showing of understanding of how features of language can be used to influence audience response"
    }
  },
  {
    "id": "fr-y910-creating",
    "orderIndex": 4,
    "learningArea": "Languages",
    "subject": "French",
    "yearLevel": "Years 9\u201310",
    "strand": "Communicating meaning in French",
    "subStrand": "",
    "descriptors": {
      "A": "considered creation of texts, selecting and manipulating language for a range of contexts, purposes and audiences",
      "B": "effective creation of texts, selecting and manipulating language for a range of contexts, purposes and audiences",
      "C": "creation of texts, selecting and manipulating language for a range of contexts, purposes and audiences",
      "D": "variable creation of texts, selecting and manipulating language for contexts, purposes and audiences",
      "E": "isolated creation of texts"
    }
  },
  {
    "id": "fr-y910-sentences",
    "orderIndex": 5,
    "learningArea": "Languages",
    "subject": "French",
    "yearLevel": "Years 9\u201310",
    "strand": "Communicating meaning in French",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful application and use of complex sentences and structures to create and respond to spoken and written texts",
      "B": "effective application and use of complex sentences and structures to create and respond to spoken and written texts",
      "C": "application and use of complex sentences and structures to create and respond to spoken and written texts",
      "D": "variable use of sentences and structures to create and respond to spoken and written texts",
      "E": "isolated use of sentences to create texts"
    }
  },
  {
    "id": "fr-y910-tenses",
    "orderIndex": 6,
    "learningArea": "Languages",
    "subject": "French",
    "yearLevel": "Years 9\u201310",
    "strand": "Communicating meaning in French",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful use of: a variety of tenses to sequence events; language devices to enhance meaning and cohesion",
      "B": "effective use of: a variety of tenses to sequence events; language devices to enhance meaning and cohesion",
      "C": "use of: a variety of tenses to sequence events; language devices to enhance meaning and cohesion",
      "D": "variable use of: tenses to sequence events; language devices to enhance meaning and cohesion",
      "E": "isolated use of: tenses to sequence events or language devices"
    }
  },
  {
    "id": "fr-y910-spoken-conventions",
    "orderIndex": 7,
    "learningArea": "Languages",
    "subject": "French",
    "yearLevel": "Years 9\u201310",
    "strand": "Understanding language and culture",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful incorporation of the features and conventions of spoken French to extend fluency",
      "B": "effective incorporation of the features and conventions of spoken French to extend fluency",
      "C": "incorporation of the features and conventions of spoken French to extend fluency",
      "D": "variable incorporation of the features and conventions of spoken French to extend fluency",
      "E": "isolated use of the features or conventions of spoken French to extend fluency"
    }
  },
  {
    "id": "fr-y910-connections",
    "orderIndex": 8,
    "learningArea": "Languages",
    "subject": "French",
    "yearLevel": "Years 9\u201310",
    "strand": "Understanding language and culture",
    "subStrand": "",
    "descriptors": {
      "A": "considered demonstration of understanding of the conventions of spoken and written texts and the connections between them",
      "B": "informed demonstration of understanding of the conventions of spoken and written texts and the connections between them",
      "C": "demonstration of understanding of the conventions of spoken and written texts and the connections between them",
      "D": "variable demonstration of understanding of the conventions of spoken and written texts or the connections between them",
      "E": "isolated demonstration of understanding of the connections between spoken or written texts"
    }
  },
  {
    "id": "fr-y910-structures",
    "orderIndex": 9,
    "learningArea": "Languages",
    "subject": "French",
    "yearLevel": "Years 9\u201310",
    "strand": "Understanding language and culture",
    "subStrand": "",
    "descriptors": {
      "A": "thorough application of knowledge of language structures and features to make and predict meaning",
      "B": "informed application of knowledge of language structures and features to make and predict meaning",
      "C": "application of knowledge of language structures and features to make and predict meaning",
      "D": "variable application of knowledge of language structures and features to make and predict meaning",
      "E": "isolated use of language structures or features to make or predict meaning"
    }
  },
  {
    "id": "fr-y910-metalanguage",
    "orderIndex": 10,
    "learningArea": "Languages",
    "subject": "French",
    "yearLevel": "Years 9\u201310",
    "strand": "Understanding language and culture",
    "subStrand": "",
    "descriptors": {
      "A": "thorough analysis of French texts, using metalanguage",
      "B": "informed analysis of French texts, using metalanguage",
      "C": "analysis of French texts, using metalanguage",
      "D": "variable analysis of French texts",
      "E": "statement/s about French texts"
    }
  },
  {
    "id": "fr-y910-reflection",
    "orderIndex": 11,
    "learningArea": "Languages",
    "subject": "French",
    "yearLevel": "Years 9\u201310",
    "strand": "Understanding language and culture",
    "subStrand": "",
    "descriptors": {
      "A": "reflection on their own cultural perspectives and identity, and drawing on their experience of learning French, to thoroughly evaluate how this learning influences their ideas and ways of communicating",
      "B": "reflection on their own cultural perspectives and identity, and drawing on their experience of learning French, to effectively evaluate how this learning influences their ideas and ways of communicating",
      "C": "reflection on their own cultural perspectives and identity, and drawing on their experience of learning French, and evaluation of how this learning influences their ideas and ways of communicating",
      "D": "reflection on their own cultural perspectives or identity, and drawing on their experience of learning French, to partially identify how this learning influences their ideas and ways of communicating",
      "E": "statement/s about their own cultural perspectives, identity or experience of learning French"
    }
  },
  {
    "id": "fr-y78-interactions",
    "orderIndex": 1,
    "learningArea": "Languages",
    "subject": "French",
    "yearLevel": "Years 7\u20138",
    "strand": "Communicating meaning in French",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful use of French language to initiate and participate in interactions in familiar and some unfamiliar contexts related to a range of interests and experiences",
      "B": "effective use of French language to initiate and participate in interactions in familiar and some unfamiliar contexts related to a range of interests and experiences",
      "C": "use of French language to initiate and participate in interactions in familiar and some unfamiliar contexts related to a range of interests and experiences",
      "D": "variable use of French language to initiate and participate in interactions in familiar contexts",
      "E": "isolated use of French language to initiate or participate in interactions"
    }
  },
  {
    "id": "fr-y78-collaborate",
    "orderIndex": 2,
    "learningArea": "Languages",
    "subject": "French",
    "yearLevel": "Years 7\u20138",
    "strand": "Communicating meaning in French",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful use of French to collaborate, problem-solve and adjust their language in response to others",
      "B": "effective use of French to collaborate, problem-solve and adjust their language in response to others",
      "C": "use of French to collaborate, problem-solve and adjust their language in response to others",
      "D": "variable use of French to collaborate, problem-solve and adjust their language in response to others",
      "E": "isolated use of French to collaborate, problem-solve or adjust their language in response to others"
    }
  },
  {
    "id": "fr-y78-interpreting",
    "orderIndex": 3,
    "learningArea": "Languages",
    "subject": "French",
    "yearLevel": "Years 7\u20138",
    "strand": "Communicating meaning in French",
    "subStrand": "",
    "descriptors": {
      "A": "considered interpretation of information, ideas and opinions in texts",
      "B": "informed interpretation of information, ideas and opinions in texts",
      "C": "interpretation of information, ideas and opinions in texts",
      "D": "variable interpretation of information, ideas and opinions in texts",
      "E": "statement/s about information, ideas or opinions in texts"
    }
  },
  {
    "id": "fr-y78-similarities",
    "orderIndex": 4,
    "learningArea": "Languages",
    "subject": "French",
    "yearLevel": "Years 7\u20138",
    "strand": "Communicating meaning in French",
    "subStrand": "",
    "descriptors": {
      "A": "demonstration of understanding of similarities and differences between languages, in both familiar and some unfamiliar cultural contexts, by purposefully adjusting and reorganising responses",
      "B": "demonstration of understanding of similarities and differences between languages, in both familiar and some unfamiliar cultural contexts, by effectively adjusting and reorganising responses",
      "C": "demonstration of understanding of similarities and differences between languages, in both familiar and some unfamiliar cultural contexts, by adjusting and reorganising responses",
      "D": "partial demonstration of understanding of similarities and differences between languages, in familiar or unfamiliar cultural contexts",
      "E": "isolated demonstration of understanding of similarities or differences between languages"
    }
  },
  {
    "id": "fr-y78-vocabulary",
    "orderIndex": 5,
    "learningArea": "Languages",
    "subject": "French",
    "yearLevel": "Years 7\u20138",
    "strand": "Communicating meaning in French",
    "subStrand": "",
    "descriptors": {
      "A": "considered selection and use of vocabulary, sentence structures and expressions to create texts",
      "B": "effective selection and use of vocabulary, sentence structures and expressions to create texts",
      "C": "selection and use of vocabulary, sentence structures and expressions to create texts",
      "D": "variable selection and use of vocabulary, sentence structures and expressions to create texts",
      "E": "isolated use of vocabulary, sentence structures or expressions"
    }
  },
  {
    "id": "fr-y78-fluency",
    "orderIndex": 6,
    "learningArea": "Languages",
    "subject": "French",
    "yearLevel": "Years 7\u20138",
    "strand": "Understanding language and culture",
    "subStrand": "",
    "descriptors": {
      "A": "thorough application of the conventions of spoken French to develop fluency",
      "B": "informed application of the conventions of spoken French to develop fluency",
      "C": "application of the conventions of spoken French to develop fluency",
      "D": "variable application of the conventions of spoken French to develop fluency",
      "E": "isolated use of the conventions of spoken French"
    }
  },
  {
    "id": "fr-y78-conventions",
    "orderIndex": 7,
    "learningArea": "Languages",
    "subject": "French",
    "yearLevel": "Years 7\u20138",
    "strand": "Understanding language and culture",
    "subStrand": "",
    "descriptors": {
      "A": "considered demonstration of understanding that spoken, written and multimodal texts use different language conventions, structures and features to convey meaning",
      "B": "informed demonstration of understanding that spoken, written and multimodal texts use different language conventions, structures and features to convey meaning",
      "C": "demonstration of understanding that spoken, written and multimodal texts use different language conventions, structures and features to convey meaning",
      "D": "variable demonstration of understanding that spoken, written and multimodal texts use different language conventions, structures and features to convey meaning",
      "E": "isolated demonstration of understanding that spoken, written or multimodal texts use language conventions, structures or features to convey meaning"
    }
  },
  {
    "id": "fr-y78-metalanguage",
    "orderIndex": 8,
    "learningArea": "Languages",
    "subject": "French",
    "yearLevel": "Years 7\u20138",
    "strand": "Understanding language and culture",
    "subStrand": "",
    "descriptors": {
      "A": "thorough commentary on structures and features of French text, using metalanguage",
      "B": "informed commentary on structures and features of French text, using metalanguage",
      "C": "commentary on structures and features of French text, using metalanguage",
      "D": "variable commentary on structures and features of French text",
      "E": "statement/s about structures or features of French text"
    }
  },
  {
    "id": "fr-y78-identity",
    "orderIndex": 9,
    "learningArea": "Languages",
    "subject": "French",
    "yearLevel": "Years 7\u20138",
    "strand": "Understanding language and culture",
    "subStrand": "",
    "descriptors": {
      "A": "reflection on how the French language, culture and identity are interconnected and thorough comparison of this with their own language(s), culture(s) and identity",
      "B": "reflection on how the French language, culture and identity are interconnected and informed comparison of this with their own language(s), culture(s) and identity",
      "C": "reflection on how the French language, culture and identity are interconnected and comparison of this with their own language(s), culture(s) and identity",
      "D": "reflection on how the French language, culture and identity are interconnected and partial comparison of this with their own language(s), culture(s) or identity",
      "E": "statement/s about language, culture or identity"
    }
  },
  {
    "id": "hist-y10-significance",
    "orderIndex": 1,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 10",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of the historical significance of the period between 1918 and the early 21st century",
      "B": "informed explanation of the historical significance of the period between 1918 and the early 21st century",
      "C": "explanation of the historical significance of the period between 1918 and the early 21st century",
      "D": "simple explanation of the historical significance of the period between 1918 and the early 21st century",
      "E": "statement/s about the historical significance of the period between 1918 and the early 21st century"
    }
  },
  {
    "id": "hist-y10-causes",
    "orderIndex": 2,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 10",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of the causes and effects of events, developments, turning points or movements in 20th century Australia and internationally, leading up to and through the Second World War, and the post-war world",
      "B": "informed explanation of the causes and effects of events, developments, turning points or movements in 20th century Australia and internationally, leading up to and through the Second World War, and the post-war world",
      "C": "explanation of the causes and effects of events, developments, turning points or movements in 20th century Australia and internationally, leading up to and through the Second World War, and the post-war world",
      "D": "simple explanation of the causes and effects of events, developments, turning points or movements in 20th century Australia and internationally, leading up to and through the Second World War, and the post-war world",
      "E": "statement/s about the causes and effects of events, developments, turning points or movements in 20th century Australia and/or internationally, leading up to and through the Second World War, and the post-war world"
    }
  },
  {
    "id": "hist-y10-society",
    "orderIndex": 3,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 10",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough description of the social, cultural, economic and/or political aspects, including international developments, related to the changes and continuities in Australian society over this historical period",
      "B": "informed description of the social, cultural, economic and/or political aspects, including international developments, related to the changes and continuities in Australian society over this historical period",
      "C": "description of the social, cultural, economic and/or political aspects, including international developments, related to the changes and continuities in Australian society over this historical period",
      "D": "simple description of the social, cultural, economic and/or political aspects including, international developments, related to the changes and continuities in Australian society over this historical period",
      "E": "statement/s about changes and continuities in Australian society over this historical period"
    }
  },
  {
    "id": "hist-y10-ideas-institutions",
    "orderIndex": 4,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 10",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of the role of significant ideas, individuals, groups and institutions connected to the developments of this period and their influences on Australian and global history",
      "B": "informed explanation of the role of significant ideas, individuals, groups and institutions connected to the developments of this period and their influences on Australian and global history",
      "C": "explanation of the role of significant ideas, individuals, groups and institutions connected to the developments of this period and their influences on Australian and global history",
      "D": "simple explanation of the role of significant ideas, individuals, groups and institutions connected to the developments of this period and/or their influences on Australian and/or global history",
      "E": "statement/s about significant ideas, individuals, groups and institutions connected to the developments of this period"
    }
  },
  {
    "id": "hist-y10-inquiry-sources",
    "orderIndex": 5,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 10",
    "strand": "Skills",
    "subStrand": "Questioning and researching",
    "descriptors": {
      "A": "development and modification of a range of questions about the past to inform historical inquiry and purposeful: location, selection and comparison of a range of primary and secondary sources; synthesis of the information in sources as evidence in historical inquiry",
      "B": "development and modification of a range of questions about the past to inform historical inquiry and effective: location, selection and comparison of a range of primary and secondary sources; synthesis of the information in sources as evidence in historical inquiry",
      "C": "development and modification of a range of questions about the past to inform historical inquiry and: location, selection and comparison of a range of primary and secondary sources; synthesis of the information in sources as evidence in historical inquiry",
      "D": "guided development and modification of a range of questions about the past to inform historical inquiry and partial: location, selection and comparison of a range of primary and secondary sources; synthesis of the information in sources as evidence in historical inquiry",
      "E": "directed development of questions about the past related to a historical inquiry and basic location and/or selection of sources and/or information from sources"
    }
  },
  {
    "id": "hist-y10-sources-analysis",
    "orderIndex": 6,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 10",
    "strand": "Skills",
    "subStrand": "Using historical sources",
    "descriptors": {
      "A": "proficient analysis of the origin, content, context and purpose of primary and secondary sources; purposeful evaluation of the accuracy, usefulness and reliability of sources as evidence",
      "B": "effective analysis of the origin, content, context and purpose of primary and secondary sources; effective evaluation of the accuracy, usefulness and reliability of sources as evidence",
      "C": "analysis of the origin, content, context and purpose of primary and secondary sources; evaluation of the accuracy, usefulness and reliability of sources as evidence",
      "D": "simple analysis of the origin, content, context and/or purpose of primary and/or secondary sources; simple evaluation of the accuracy, usefulness and/or reliability of sources as evidence",
      "E": "statement/s about the origin, content, context, purpose, accuracy, usefulness and/or reliability of sources"
    }
  },
  {
    "id": "hist-y10-sequencing",
    "orderIndex": 7,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 10",
    "strand": "Skills",
    "subStrand": "Historical perspectives and interpretations",
    "descriptors": {
      "A": "proficient sequencing of events and developments to analyse cause and effect, and patterns of continuity and change, connected to a period, event or movement",
      "B": "effective sequencing of events and developments to analyse cause and effect, and patterns of continuity and change, connected to a period, event or movement",
      "C": "sequencing of events and developments to analyse cause and effect, and patterns of continuity and change, connected to a period, event or movement",
      "D": "partial sequencing of events and developments to analyse cause and effect, and/or patterns of continuity and change, connected to a period, event or movement",
      "E": "basic sequencing of events and developments connected to a period, event or movement"
    }
  },
  {
    "id": "hist-y10-interpretations",
    "orderIndex": 8,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 10",
    "strand": "Skills",
    "subStrand": "Historical perspectives and interpretations",
    "descriptors": {
      "A": "considered evaluation of perspectives of significant events and developments and explanation of the important factors that influence these perspectives; considered comparison and evaluation of different and contested historical interpretations",
      "B": "plausible evaluation of perspectives of significant events and developments and explanation of the important factors that influence these perspectives; effective comparison and evaluation of different and contested historical interpretations",
      "C": "evaluation of perspectives of significant events and developments and explanation of the important factors that influence these perspectives; comparison and evaluation of different and contested historical interpretations",
      "D": "simple evaluation of perspectives of significant events and developments and/or explanation of the important factors that influence these perspectives; simple comparison and evaluation of historical interpretations",
      "E": "statement/s about perspectives of significant events and developments and/or historical interpretations"
    }
  },
  {
    "id": "hist-y10-communicating",
    "orderIndex": 9,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 10",
    "strand": "Skills",
    "subStrand": "Communicating",
    "descriptors": {
      "A": "use of historical knowledge, concepts, and terms to develop purposeful descriptions, explanations and historical arguments that synthesise evidence from sources",
      "B": "use of historical knowledge, concepts, and terms to develop effective descriptions, explanations and historical arguments that synthesise evidence from sources",
      "C": "use of historical knowledge, concepts, and terms to develop descriptions, explanations and historical arguments that synthesise evidence from sources",
      "D": "use of historical knowledge, concepts, and terms to develop simple descriptions, explanations and/or historical arguments that refer to evidence from sources",
      "E": "use of historical knowledge, concepts, and terms to develop fragmented descriptions, explanations and/or historical arguments"
    }
  },
  {
    "id": "hist-y9-significance",
    "orderIndex": 1,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 9",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of the historical significance of the period of the early modern world up to 1918",
      "B": "informed explanation of the historical significance of the period of the early modern world up to 1918",
      "C": "explanation of the historical significance of the period of the early modern world up to 1918",
      "D": "simple explanation of the historical significance of the period of the early modern world up to 1918",
      "E": "statement/s about the historical significance of the period of the early modern world up to 1918"
    }
  },
  {
    "id": "hist-y9-causes",
    "orderIndex": 2,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 9",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of the causes and effects of events, developments, turning points or movements globally, in Australia and in relation to the First World War or in an Asian context",
      "B": "informed explanation of the causes and effects of events, developments, turning points or movements globally, in Australia and in relation to the First World War or in an Asian context",
      "C": "explanation of the causes and effects of events, developments, turning points or movements globally, in Australia and in relation to the First World War or in an Asian context",
      "D": "simple explanation of the causes and effects of events, developments, turning points or movements globally, in Australia and in relation to the First World War or in an Asian context",
      "E": "statement/s about the causes and effects of events, developments, turning points or movements globally and/or in Australia and/or in relation to the First World War or in an Asian context"
    }
  },
  {
    "id": "hist-y9-society",
    "orderIndex": 3,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 9",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough description of the social, cultural, economic and/or political aspects related to the changes and continuities in a society or a historical period",
      "B": "informed description of the social, cultural, economic and/or political aspects related to the changes and continuities in a society or a historical period",
      "C": "description of the social, cultural, economic and/or political aspects related to the changes and continuities in a society or a historical period",
      "D": "simple description of the social, cultural, economic and/or political aspects related to the changes and continuities in a society or a historical period",
      "E": "statement/s about the social, cultural, economic and/or political aspects related to a society or a historical period"
    }
  },
  {
    "id": "hist-y9-ideas",
    "orderIndex": 4,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 9",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of the role of significant ideas, individuals, groups and institutions connected to the developments of this period and their influences on the historical events",
      "B": "informed explanation of the role of significant ideas, individuals, groups and institutions connected to the developments of this period and their influences on the historical events",
      "C": "explanation of the role of significant ideas, individuals, groups and institutions connected to the developments of this period and their influences on the historical events",
      "D": "simple explanation of the role of significant ideas, individuals, groups and institutions connected to the developments of this period and/or their influences on the historical events",
      "E": "statement/s about significant ideas, individuals, groups and institutions connected to the societies of these periods"
    }
  },
  {
    "id": "hist-y9-questioning",
    "orderIndex": 5,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 9",
    "strand": "Skills",
    "subStrand": "Questioning and researching",
    "descriptors": {
      "A": "development and modification of questions about the past to inform historical inquiry and purposeful: location, selection and comparison of primary and secondary sources; use of information in sources as evidence in historical inquiry",
      "B": "development and modification of questions about the past to inform historical inquiry and effective: location, selection and comparison of primary and secondary sources; use of information in sources as evidence in historical inquiry",
      "C": "development and modification of questions about the past to inform historical inquiry and: location, selection and comparison of primary and secondary sources; use of information in sources as evidence in historical inquiry",
      "D": "guided development and modification of questions about the past to inform historical inquiry and partial: location, selection and comparison of primary and/or secondary sources; use of information in sources as evidence in historical inquiry",
      "E": "directed development of questions about the past related to a historical inquiry and basic location and/or selection of sources"
    }
  },
  {
    "id": "hist-y9-sources",
    "orderIndex": 6,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 9",
    "strand": "Skills",
    "subStrand": "Using historical sources",
    "descriptors": {
      "A": "proficient explanation of the origin, content, context and purpose of primary and secondary sources; purposeful comparison of sources to determine the accuracy, usefulness and reliability of sources as evidence",
      "B": "plausible explanation of the origin, content, context and purpose of primary and secondary sources; effective comparison of sources to determine the accuracy, usefulness and reliability of sources as evidence",
      "C": "explanation of the origin, content, context and purpose of primary and secondary sources; comparison of sources to determine the accuracy, usefulness and reliability of sources as evidence",
      "D": "simple explanation of the origin, content, context and/or purpose of primary and/or secondary sources; simple comparison of sources to determine the accuracy, usefulness and/or reliability of sources as evidence",
      "E": "statement/s about the origin, content, context, purpose, accuracy, usefulness and/or reliability of sources"
    }
  },
  {
    "id": "hist-y9-sequencing",
    "orderIndex": 7,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 9",
    "strand": "Skills",
    "subStrand": "Historical perspectives and interpretations",
    "descriptors": {
      "A": "thorough explanation of causes and effects and patterns of continuity and change connected to a period, event or movement",
      "B": "informed explanation of causes and effects and patterns of continuity and change connected to a period, event or movement",
      "C": "explanation of causes and effects and patterns of continuity and change connected to a period, event or movement",
      "D": "simple explanation of causes and effects, and/or patterns of continuity and change connected to a period, event or movement",
      "E": "statement/s about causes and effects, and/or patterns of continuity and change connected to a period, event or movement"
    }
  },
  {
    "id": "hist-y9-perspectives",
    "orderIndex": 8,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 9",
    "strand": "Skills",
    "subStrand": "Historical perspectives and interpretations",
    "descriptors": {
      "A": "considered comparison of perspectives of significant events and developments and explanation of factors that influence these perspectives; considered analysis of different and contested historical interpretations",
      "B": "plausible comparison of perspectives of significant events and developments and explanation of factors that influence these perspectives; plausible analysis of different and contested historical interpretations",
      "C": "comparison of perspectives of significant events and developments and explanation of factors that influence these perspectives; analysis of different and contested historical interpretations",
      "D": "simple comparison of perspectives of significant events and developments and explanation of factors that influence these perspectives; simple analysis of historical interpretations",
      "E": "statement/s about perspectives of significant events and developments and/or historical interpretations"
    }
  },
  {
    "id": "hist-y9-communicating",
    "orderIndex": 9,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 9",
    "strand": "Skills",
    "subStrand": "Communicating",
    "descriptors": {
      "A": "use of historical knowledge, concepts and terms to develop purposeful descriptions, explanations and historical arguments that acknowledge evidence from sources",
      "B": "use of historical knowledge, concepts and terms to develop effective descriptions, explanations and historical arguments that acknowledge evidence from sources",
      "C": "use of historical knowledge, concepts and terms to develop descriptions, explanations and historical arguments that acknowledge evidence from sources",
      "D": "use of historical knowledge, concepts and terms to develop simple descriptions, explanations and/or historical arguments that partially acknowledge evidence from sources",
      "E": "use of historical knowledge, concepts and terms to develop fragmented descriptions, explanations and/or historical arguments"
    }
  },
  {
    "id": "hist-y8-significance",
    "orderIndex": 1,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 8",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough description of the historical significance of the periods between the ancient and modern past",
      "B": "informed description of the historical significance of the periods between the ancient and modern past",
      "C": "description of the historical significance of the periods between the ancient and modern past",
      "D": "simple description of the historical significance of the periods between the ancient and modern past",
      "E": "statement/s about the periods between the ancient and modern past"
    }
  },
  {
    "id": "hist-y8-causes",
    "orderIndex": 2,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 8",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of the causes and effects of events, developments, turning points or challenges in: Medieval, Renaissance or pre-modern Europe or the societies connected to empires or expansions or the societies of the Asia-Pacific world during these periods",
      "B": "informed explanation of the causes and effects of events, developments, turning points or challenges in: Medieval, Renaissance or pre-modern Europe or the societies connected to empires or expansions or the societies of the Asia-Pacific world during these periods",
      "C": "explanation of the causes and effects of events, developments, turning points or challenges in: Medieval, Renaissance or pre-modern Europe or the societies connected to empires or expansions or the societies of the Asia-Pacific world during these periods",
      "D": "simple explanation of the causes and effects of events, developments, turning points or challenges in: Medieval, Renaissance or pre-modern Europe or the societies connected to empires or expansions or the societies of the Asia-Pacific world during these periods",
      "E": "statement/s about the causes and effects of events, developments, turning points or challenges in: Medieval, Renaissance or pre-modern Europe or the societies connected to empires or expansions or the societies of the Asia-Pacific world during these periods"
    }
  },
  {
    "id": "hist-y8-society",
    "orderIndex": 3,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 8",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough description of the social, religious, cultural, economic, environmental and/or political aspects related to the changes and continuities in a society or a historical period",
      "B": "informed description of the social, religious, cultural, economic, environmental and/or political aspects related to the changes and continuities in a society or a historical period",
      "C": "description of the social, religious, cultural, economic, environmental and/or political aspects related to the changes and continuities in a society or a historical period",
      "D": "simple description of the social, religious, cultural, economic, environmental and/or political aspects related to the changes and continuities in a society or a historical period",
      "E": "statement/s about the social, religious, cultural, economic, environmental and/or political aspects related to the changes and continuities in a society or a historical period"
    }
  },
  {
    "id": "hist-y8-individuals",
    "orderIndex": 4,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 8",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough description of the role of significant individuals, groups, and institutions connected to the societies of these periods and their influences on historical events",
      "B": "informed description of the role of significant individuals, groups, and institutions connected to the societies of these periods and their influences on historical events",
      "C": "description of the role of significant individuals, groups, and institutions connected to the societies of these periods and their influences on historical events",
      "D": "simple description of the role of significant individuals, groups, and institutions connected to the societies of these periods and/or their influences on historical events",
      "E": "statement/s about significant individuals, groups and institutions connected to the societies of these periods"
    }
  },
  {
    "id": "hist-y8-questioning",
    "orderIndex": 5,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 8",
    "strand": "Skills",
    "subStrand": "Questioning and researching",
    "descriptors": {
      "A": "development of questions about the past to inform historical inquiry and purposeful location and identification of a range of primary and secondary sources as evidence in historical inquiry",
      "B": "development of questions about the past to inform historical inquiry and effective location and identification of a range of primary and secondary sources as evidence in historical inquiry",
      "C": "development of questions about the past to inform historical inquiry and location and identification of a range of primary and secondary sources as evidence in historical inquiry",
      "D": "guided development of questions about the past to inform historical inquiry and partial location and identification of primary and/or secondary sources as evidence in historical inquiry",
      "E": "directed development of questions about the past related to a historical inquiry and basic location and identification of sources"
    }
  },
  {
    "id": "hist-y8-sources-desc",
    "orderIndex": 6,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 8",
    "strand": "Skills",
    "subStrand": "Using historical sources",
    "descriptors": {
      "A": "proficient description of the origin, content and context of sources and explanation of the purpose of primary and secondary sources",
      "B": "plausible description of the origin, content and context of sources and explanation of the purpose of primary and secondary sources",
      "C": "description of the origin, content and context of sources and explanation of the purpose of primary and secondary sources",
      "D": "simple description of the origin, content and/or context of sources and explanation of the purpose of primary and/or secondary sources",
      "E": "statement/s about the origin, content, context and/or purpose of sources"
    }
  },
  {
    "id": "hist-y8-sources-compare",
    "orderIndex": 7,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 8",
    "strand": "Skills",
    "subStrand": "Using historical sources",
    "descriptors": {
      "A": "purposeful comparison of sources to explain the accuracy, usefulness and reliability of sources as evidence",
      "B": "effective comparison of sources to explain the accuracy, usefulness and reliability of sources as evidence",
      "C": "comparison of sources to explain the accuracy, usefulness and reliability of sources as evidence",
      "D": "partial comparison of sources to explain the accuracy, usefulness and/or reliability of sources as evidence",
      "E": "statement/s about accuracy, usefulness and/or reliability of sources"
    }
  },
  {
    "id": "hist-y8-sequencing",
    "orderIndex": 8,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 8",
    "strand": "Skills",
    "subStrand": "Historical perspectives and interpretations",
    "descriptors": {
      "A": "proficient sequencing of events and developments to explain causes and effects, and patterns of continuity and change across societies and time periods",
      "B": "effective sequencing of events and developments to explain causes and effects, and patterns of continuity and change across societies and time periods",
      "C": "sequencing of events and developments to explain causes and effects, and patterns of continuity and change across societies and time periods",
      "D": "partial sequencing of events and developments to explain causes and effects, and patterns of continuity and change across societies and time periods",
      "E": "basic sequencing of events and developments across time periods"
    }
  },
  {
    "id": "hist-y8-perspectives",
    "orderIndex": 9,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 8",
    "strand": "Skills",
    "subStrand": "Historical perspectives and interpretations",
    "descriptors": {
      "A": "considered description of perspectives, attitudes and values of the past, suggesting reasons for different points of view; considered explanation of historical interpretations about significant events and people",
      "B": "plausible description of perspectives, attitudes and values of the past, suggesting reasons for different points of view; plausible explanation of historical interpretations about significant events and people",
      "C": "description of perspectives, attitudes and values of the past, suggesting reasons for different points of view; explanation of historical interpretations about significant events and people",
      "D": "perspectives, attitudes and/or values of the past, suggesting reasons for different points of view; simple explanation of historical interpretations about significant events and/or people",
      "E": "statement/s about perspectives, attitudes and/or values of the past and/or historical interpretations"
    }
  },
  {
    "id": "hist-y8-communicating",
    "orderIndex": 10,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 8",
    "strand": "Skills",
    "subStrand": "Communicating",
    "descriptors": {
      "A": "use of historical knowledge, concepts, terms and references to evidence from sources to create purposeful descriptions, explanations and historical arguments",
      "B": "use of historical knowledge, concepts, terms and references to evidence from sources to create effective descriptions, explanations and historical arguments",
      "C": "use of historical knowledge, concepts, terms and references to evidence from sources to create descriptions, explanations and historical arguments",
      "D": "use of historical knowledge, concepts, terms and/or references to evidence from sources to create simple descriptions, explanations and/or historical arguments",
      "E": "use of historical knowledge, concepts, terms and/or references to evidence from sources to create fragmented descriptions, explanations and/or historical arguments"
    }
  },
  {
    "id": "hist-y7-significance",
    "orderIndex": 1,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 7",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough description of the historical significance of the ancient past and the histories of early First Nations Peoples of Australia",
      "B": "informed description of the historical significance of the ancient past and the histories of early First Nations Peoples of Australia",
      "C": "description of the historical significance of the ancient past and the histories of early First Nations Peoples of Australia",
      "D": "simple description of the historical significance of the ancient past and the histories of early First Nations Peoples of Australia",
      "E": "statement/s about the ancient past and/or the histories of early First Nations Peoples of Australia"
    }
  },
  {
    "id": "hist-y7-causes",
    "orderIndex": 2,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 7",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough identification of the causes and effects of events, developments and achievements connected to groups and individuals in Australia and other societies from the ancient past",
      "B": "informed identification of the causes and effects of events, developments and achievements connected to groups and individuals in Australia and other societies from the ancient past",
      "C": "identification of the causes and effects of events, developments and achievements connected to groups and individuals in Australia and other societies from the ancient past",
      "D": "simple identification of the causes and effects of events, developments and/or achievements connected to groups and individuals in Australia and other societies from the ancient past",
      "E": "statement/s about events, developments and/or achievements connected to groups and/or individuals in societies from the ancient past"
    }
  },
  {
    "id": "hist-y7-society",
    "orderIndex": 3,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 7",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough description of the social, religious, cultural, economic, environmental and/or political aspects related to changes and continuities in these societies",
      "B": "informed description of the social, religious, cultural, economic, environmental and/or political aspects related to changes and continuities in these societies",
      "C": "description of the social, religious, cultural, economic, environmental and/or political aspects related to changes and continuities in these societies",
      "D": "simple description of the social, religious, cultural, economic, environmental and/or political aspects related to changes and continuities in these societies",
      "E": "statement/s about the changes and continuities in societies from the ancient past"
    }
  },
  {
    "id": "hist-y7-individuals",
    "orderIndex": 4,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 7",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough identification of the roles and achievements of significant individuals and groups and the influences on the development of ancient societies",
      "B": "informed identification of the roles and achievements of significant individuals and groups and the influences on the development of ancient societies",
      "C": "identification of the roles and achievements of significant individuals and groups and the influences on the development of ancient societies",
      "D": "simple identification of the roles and achievements of significant individuals and groups and/or the influences on the development of ancient societies",
      "E": "statement/s about significant individuals and groups connected to ancient societies"
    }
  },
  {
    "id": "hist-y7-heritage",
    "orderIndex": 5,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 7",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of the importance of heritage sites connected to Australia and other societies from the ancient past",
      "B": "informed explanation of the importance of heritage sites connected to Australia and other societies from the ancient past",
      "C": "explanation of the importance of heritage sites connected to Australia and other societies from the ancient past",
      "D": "simple explanation of the importance of heritage sites connected to Australia and/or other societies from the ancient past",
      "E": "statement/s about heritage sites connected to Australia and/or other societies from the ancient past"
    }
  },
  {
    "id": "hist-y7-questioning",
    "orderIndex": 6,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 7",
    "strand": "Skills",
    "subStrand": "Questioning and researching",
    "descriptors": {
      "A": "development of questions about the past and purposeful location and identification of primary and secondary sources as evidence in historical inquiry",
      "B": "development of questions about the past and effective location and identification of primary and secondary sources as evidence in historical inquiry",
      "C": "development of questions about the past and location and identification of primary and secondary sources as evidence in historical inquiry",
      "D": "guided development of questions about the past and partial location and identification of primary and/or secondary sources as evidence in historical inquiry",
      "E": "directed development of questions about the past and basic location and identification of sources"
    }
  },
  {
    "id": "hist-y7-sources",
    "orderIndex": 7,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 7",
    "strand": "Skills",
    "subStrand": "Using historical sources",
    "descriptors": {
      "A": "proficient description of the origin, content, context and purpose of primary and secondary sources; purposeful identification of the accuracy and usefulness of sources as evidence",
      "B": "plausible description of the origin, content, context and purpose of primary and secondary sources; effective identification of the accuracy and usefulness of sources as evidence",
      "C": "description of the origin, content, context and purpose of primary and secondary sources; identification of the accuracy and usefulness of sources as evidence",
      "D": "simple description of the origin, content, context and/or purpose of primary and/or secondary sources; partial identification of the accuracy and/or usefulness of sources as evidence",
      "E": "statement/s about the origin, content, context, purpose, accuracy and/or usefulness of sources"
    }
  },
  {
    "id": "hist-y7-sequencing",
    "orderIndex": 8,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 7",
    "strand": "Skills",
    "subStrand": "Historical perspectives and interpretations",
    "descriptors": {
      "A": "proficient sequencing of events and developments to describe causes and effects, and continuities and changes, across societies and time periods",
      "B": "effective sequencing of events and developments to describe causes and effects, and continuities and changes, across societies and time periods",
      "C": "sequencing of events and developments to describe causes and effects, and continuities and changes, across societies and time periods",
      "D": "partial sequencing of events and developments to describe causes and effects and/or continuities and changes, across societies and time periods",
      "E": "basic sequencing of events and developments across time periods"
    }
  },
  {
    "id": "hist-y7-perspectives",
    "orderIndex": 9,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 7",
    "strand": "Skills",
    "subStrand": "Historical perspectives and interpretations",
    "descriptors": {
      "A": "considered description of perspectives, attitudes and values of the past in sources; identification and considered description of historical interpretations about significant events and people",
      "B": "plausible description of perspectives, attitudes and values of the past in sources; identification and plausible description of historical interpretations about significant events and people",
      "C": "description of perspectives, attitudes and values of the past in sources; identification and description of historical interpretations about significant events and people",
      "D": "simple description of perspectives, attitudes and/or values of the past in sources; identification and simple description of historical interpretations about significant events and/or people",
      "E": "statement/s about perspectives, attitudes and/or values of the past and/or historical interpretations about significant events and/or people"
    }
  },
  {
    "id": "hist-y7-communicating",
    "orderIndex": 10,
    "learningArea": "HASS",
    "subject": "History",
    "yearLevel": "Year 7",
    "strand": "Skills",
    "subStrand": "Communicating",
    "descriptors": {
      "A": "use of historical knowledge, concepts, terms and references to evidence from sources to create purposeful descriptions, explanations and historical arguments",
      "B": "use of historical knowledge, concepts, terms and references to evidence from sources to create effective descriptions, explanations and historical arguments",
      "C": "use of historical knowledge, concepts, terms and references to evidence from sources to create descriptions, explanations and historical arguments",
      "D": "use of historical knowledge, concepts, terms and/or references to evidence from sources to create simple descriptions, explanations and/or historical arguments",
      "E": "use of historical knowledge, concepts, terms and/or references to evidence from sources to create fragmented descriptions, explanations and/or historical arguments"
    }
  },
  {
    "id": "geog-y10-processes",
    "orderIndex": 1,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 10",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of how the interactions of people and environmental processes at different scales change the characteristics of places",
      "B": "informed explanation of how the interactions of people and environmental processes at different scales change the characteristics of places",
      "C": "explanation of how the interactions of people and environmental processes at different scales change the characteristics of places",
      "D": "simple explanation of how the interactions of people and environmental processes at different scales change the characteristics of places",
      "E": "statement/s about how the interactions of people and environmental processes change places"
    }
  },
  {
    "id": "geog-y10-human-activity",
    "orderIndex": 2,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 10",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of the effects of human activity on environments, and the effects of environments on human activity, over time",
      "B": "informed explanation of the effects of human activity on environments, and the effects of environments on human activity, over time",
      "C": "explanation of the effects of human activity on environments, and the effects of environments on human activity, over time",
      "D": "simple explanation of the effects of human activity on environments, and/or the effects of environments on human activity, over time",
      "E": "statement/s about the effects of human activity on environments and/or the effects of environments on human activity"
    }
  },
  {
    "id": "geog-y10-distribution",
    "orderIndex": 3,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 10",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough evaluation of the implications of a distribution",
      "B": "informed evaluation of the implications of a distribution",
      "C": "evaluation of the implications of a distribution",
      "D": "simple evaluation of the implications of a distribution",
      "E": "statement/s about the implications of a distribution"
    }
  },
  {
    "id": "geog-y10-interconnections",
    "orderIndex": 4,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 10",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough evaluation of the extent of interconnections occurring between people and places and environments",
      "B": "informed evaluation of the extent of interconnections occurring between people and places and environments",
      "C": "evaluation of the extent of interconnections occurring between people and places and environments",
      "D": "simple evaluation of the extent of interconnections occurring between people and places and environments",
      "E": "statement/s about interconnections between people and places and environments"
    }
  },
  {
    "id": "geog-y10-changes",
    "orderIndex": 5,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 10",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough analysis of changes that result from these interconnections and their consequences",
      "B": "informed analysis of changes that result from these interconnections and their consequences",
      "C": "analysis of changes that result from these interconnections and their consequences",
      "D": "simple analysis of changes that result from these interconnections and/or their consequences",
      "E": "statement/s about changes that result from these interconnections"
    }
  },
  {
    "id": "geog-y10-strategies-eval",
    "orderIndex": 6,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 10",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough evaluation of strategies to address a geographical phenomenon or challenge, using environmental, social and economic criteria",
      "B": "informed evaluation of strategies to address a geographical phenomenon or challenge, using environmental, social and economic criteria",
      "C": "evaluation of strategies to address a geographical phenomenon or challenge, using environmental, social and economic criteria",
      "D": "simple evaluation of strategies to address a geographical phenomenon or challenge",
      "E": "statement/s about strategies to address a geographical phenomenon or challenge"
    }
  },
  {
    "id": "geog-y10-questioning",
    "orderIndex": 7,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 10",
    "strand": "Skills",
    "subStrand": "Questioning and researching using geographical methods",
    "descriptors": {
      "A": "development of a range of relevant questions about a geographical phenomenon or challenge and purposeful collection, representation and comparison of relevant and reliable geographical data and information by using a range of primary research methods and secondary research materials, using appropriate formats",
      "B": "development of a range of relevant questions about a geographical phenomenon or challenge and effective collection, representation and comparison of relevant and reliable geographical data and information by using a range of primary research methods and secondary research materials, using appropriate formats",
      "C": "development of a range of relevant questions about a geographical phenomenon or challenge and collection, representation and comparison of relevant and reliable geographical data and information by using a range of primary research methods and secondary research materials, using appropriate formats",
      "D": "guided development of questions about a geographical phenomenon or challenge and partial collection, representation and comparison of relevant and reliable geographical data and/or information by using primary research methods and/or secondary research materials",
      "E": "directed development of questions about a geographical phenomenon or challenge and basic collection, representation and/or comparison of geographical data and/or information"
    }
  },
  {
    "id": "geog-y10-interpreting",
    "orderIndex": 8,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 10",
    "strand": "Skills",
    "subStrand": "Interpreting and analysing using geographical data and information",
    "descriptors": {
      "A": "interpretation and proficient analysis of data and information to make generalisations and predictions, explain significant patterns and trends, and infer relationships",
      "B": "interpretation and plausible analysis of data and information to make generalisations and predictions, explain significant patterns and trends, and infer relationships",
      "C": "interpretation and analysis of data and information to make generalisations and predictions, explain significant patterns and trends, and infer relationships",
      "D": "interpretation and simple analysis of data and/or information to make generalisations and/or predictions, explain patterns and trends and/or infer relationships",
      "E": "statement/s about, predictions, patterns, trends and/or relationships in data"
    }
  },
  {
    "id": "geog-y10-concluding",
    "orderIndex": 9,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 10",
    "strand": "Skills",
    "subStrand": "Concluding and decision-making",
    "descriptors": {
      "A": "drawing considered and evidence-based conclusions, based on relevant data and information, about the impact of the geographical phenomenon or challenge; proficient development and evaluation of strategies, using criteria; recommendation of a considered strategy and explanation of the predicted impacts",
      "B": "drawing informed and evidence-based conclusions, based on relevant data and information, about the impact of the geographical phenomenon or challenge; effective development and evaluation of strategies, using criteria; recommendation of an informed strategy and explanation of the predicted impacts",
      "C": "drawing evidence-based conclusions, based on relevant data and information, about the impact of the geographical phenomenon or challenge; development and evaluation of strategies, using criteria; recommendation of a strategy and explanation of the predicted impacts",
      "D": "drawing simple conclusion/s, based on data and/or information, about the impact of the geographical phenomenon or challenge; simple development and evaluation of strategies; recommendation of a simple strategy and explanation of the predicted impacts",
      "E": "statement/s about the impact of the geographical phenomenon or challenge; statement/s about a recommended strategy"
    }
  },
  {
    "id": "geog-y10-communicating",
    "orderIndex": 10,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 10",
    "strand": "Skills",
    "subStrand": "Communicating",
    "descriptors": {
      "A": "use of geographical knowledge, concepts, terms and digital tools as appropriate to develop purposeful descriptions, explanations and responses that synthesise research findings",
      "B": "use of geographical knowledge, concepts, terms and digital tools as appropriate to develop effective descriptions, explanations and responses that synthesise research findings",
      "C": "use of geographical knowledge, concepts, terms and digital tools as appropriate to develop descriptions, explanations and responses that synthesise research findings",
      "D": "use of geographical knowledge, concepts, terms and/or digital tools to develop simple descriptions, explanations and/or responses that refer to research findings",
      "E": "use of geographical knowledge, concepts, terms and/or digital tools to develop fragmented descriptions, explanations and/or responses"
    }
  },
  {
    "id": "geog-y9-processes",
    "orderIndex": 1,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 9",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of how peoples\u2019 activities or environmental processes change the characteristics of places",
      "B": "informed explanation of how peoples\u2019 activities or environmental processes change the characteristics of places",
      "C": "explanation of how peoples\u2019 activities or environmental processes change the characteristics of places",
      "D": "simple explanation of how peoples\u2019 activities or environmental processes change the characteristics of places",
      "E": "statement/s about how peoples\u2019 activities or environmental processes change places"
    }
  },
  {
    "id": "geog-y9-human-activity",
    "orderIndex": 2,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 9",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of the effects of human activity on environments, and the effects of environments on human activity",
      "B": "informed explanation of the effects of human activity on environments, and the effects of environments on human activity",
      "C": "explanation of the effects of human activity on environments, and the effects of environments on human activity",
      "D": "simple explanation of the effects of human activity on environments, and/or the effects of environments on human activity",
      "E": "statement/s about the effects of human activity on environments, and/or the effects of environments on human activity"
    }
  },
  {
    "id": "geog-y9-biomes",
    "orderIndex": 3,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 9",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of the features of biomes\u2019 distribution and identification of implications for environments",
      "B": "informed explanation of the features of biomes\u2019 distribution and identification of implications for environments",
      "C": "explanation of the features of biomes\u2019 distribution and identification of implications for environments",
      "D": "simple explanation of the features of biomes\u2019 distribution and identification of implications for environments",
      "E": "statement/s about biomes and implications for environments"
    }
  },
  {
    "id": "geog-y9-interconnections",
    "orderIndex": 4,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 9",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough analysis of the interconnections between people and places and environments; identification and thorough explanation of how interconnections influence people, and change places and environments",
      "B": "informed analysis of the interconnections between people and places and environments; identification and informed explanation of how interconnections influence people, and change places and environments",
      "C": "analysis of the interconnections between people and places and environments; identification and explanation of how interconnections influence people, and change places and environments",
      "D": "simple analysis of the interconnections between people and places and environments; identification and simple explanation of how interconnections influence people, and/or change places and environments",
      "E": "statement/s about interconnections between people and places and environments and/or statement/s about how interconnections influence people and/or change places and environments"
    }
  },
  {
    "id": "geog-y9-strategies",
    "orderIndex": 5,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 9",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough analysis of strategies to address a geographical phenomenon or challenge using environmental, social or economic criteria",
      "B": "informed analysis of strategies to address a geographical phenomenon or challenge using environmental, social or economic criteria",
      "C": "analysis of strategies to address a geographical phenomenon or challenge using environmental, social or economic criteria",
      "D": "simple analysis of strategies to address a geographical phenomenon or challenge",
      "E": "statement/s about strategies to address a geographical phenomenon or challenge"
    }
  },
  {
    "id": "geog-y9-questioning",
    "orderIndex": 6,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 9",
    "strand": "Skills",
    "subStrand": "Questioning and researching using geographical methods",
    "descriptors": {
      "A": "development of a range of questions about a geographical phenomenon or challenge and purposeful collection, representation and comparison of relevant and reliable geographical data and information by using a range of primary research methods and secondary research materials in a range of formats",
      "B": "development of a range of questions about a geographical phenomenon or challenge and effective collection, representation and comparison of relevant and reliable geographical data and information by using a range of primary research methods and secondary research materials in a range of formats",
      "C": "development of a range of questions about a geographical phenomenon or challenge and collection, representation and comparison of relevant and reliable geographical data and information by using a range of primary research methods and secondary research materials in a range of formats",
      "D": "guided development of questions about a geographical phenomenon or challenge and partial collection, representation and comparison of relevant and reliable geographical data and/or information by using primary research methods and/or secondary research materials",
      "E": "directed development of questions about a geographical phenomenon or challenge and basic collection, representation and/or comparison of data and/or information"
    }
  },
  {
    "id": "geog-y9-interpreting",
    "orderIndex": 7,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 9",
    "strand": "Skills",
    "subStrand": "Interpreting and analysing geographical data and information",
    "descriptors": {
      "A": "interpretation and proficient analysis of data and information to explain patterns and trends and infer relationships",
      "B": "interpretation and plausible analysis of data and information to explain patterns and trends and infer relationships",
      "C": "interpretation and analysis of data and information to explain patterns and trends and infer relationships",
      "D": "interpretation and simple analysis of data and/or information to explain patterns, trends and/or relationships",
      "E": "statement/s about patterns, trends and/or relationships in data"
    }
  },
  {
    "id": "geog-y9-concluding",
    "orderIndex": 8,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 9",
    "strand": "Skills",
    "subStrand": "Concluding and decision-making",
    "descriptors": {
      "A": "drawing considered and evidence-based conclusions about the impact of the geographical phenomenon or challenge; proficient development and evaluation of strategies; making a considered recommendation and predicting impacts",
      "B": "drawing informed and evidence-based conclusions about the impact of the geographical phenomenon or challenge; effective development and evaluation of strategies; making an informed recommendation and predicting impacts",
      "C": "drawing evidence-based conclusions about the impact of the geographical phenomenon or challenge; development and evaluation of strategies; making a recommendation and predicting impacts",
      "D": "drawing simple conclusions about the impact of the geographical phenomenon or challenge; simple development and evaluation of strategies; making a simple recommendation and/or predicting impacts",
      "E": "statement/s about the impact of the geographical phenomenon or challenge; statement/s about strategies and/or a recommendation"
    }
  },
  {
    "id": "geog-y9-communicating",
    "orderIndex": 9,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 9",
    "strand": "Skills",
    "subStrand": "Communicating",
    "descriptors": {
      "A": "use of geographical knowledge, concepts, terms and digital tools as appropriate to develop purposeful descriptions, explanations and responses that acknowledge research findings",
      "B": "use of geographical knowledge, concepts, terms and digital tools as appropriate to develop effective descriptions, explanations and responses that acknowledge research findings",
      "C": "use of geographical knowledge, concepts, terms and digital tools as appropriate to develop descriptions, explanations and responses that acknowledge research findings",
      "D": "use of geographical knowledge, concepts, terms and/or digital tools to develop simple descriptions, explanations and/or responses that refer to research findings",
      "E": "use of geographical knowledge, concepts, terms and/or digital tools to develop fragmented descriptions, explanations and/or responses"
    }
  },
  {
    "id": "geog-y8-interactions",
    "orderIndex": 1,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 8",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of how the interactions of people and environmental processes impact on the characteristics of places",
      "B": "informed explanation of how the interactions of people and environmental processes impact on the characteristics of places",
      "C": "explanation of how the interactions of people and environmental processes impact on the characteristics of places",
      "D": "simple explanation of how the interactions of people and environmental processes impact on the characteristics of places",
      "E": "statement/s about how the interactions of people and environmental processes impact places"
    }
  },
  {
    "id": "geog-y8-perceptions",
    "orderIndex": 2,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 8",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of how the characteristics of places are perceived and valued differently by people",
      "B": "informed explanation of how the characteristics of places are perceived and valued differently by people",
      "C": "explanation of how the characteristics of places are perceived and valued differently by people",
      "D": "simple explanation of how the characteristics of places are perceived and valued differently by people",
      "E": "statement/s about how places are perceived and valued by people"
    }
  },
  {
    "id": "geog-y8-hazards",
    "orderIndex": 3,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 8",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough description of the effects of human activity or hazards on environments",
      "B": "informed description of the effects of human activity or hazards on environments",
      "C": "description of the effects of human activity or hazards on environments",
      "D": "simple description of the effects of human activity or hazards on environments",
      "E": "statement/s about the effects of human activity or hazards"
    }
  },
  {
    "id": "geog-y8-distribution",
    "orderIndex": 4,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 8",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of the features of a distribution and identification of implications",
      "B": "informed explanation of the features of a distribution and identification of implications",
      "C": "explanation of the features of a distribution and identification of implications",
      "D": "simple explanation of the features of a distribution and/or identification of implications",
      "E": "statement/s about features of a distribution"
    }
  },
  {
    "id": "geog-y8-interconnections",
    "orderIndex": 5,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 8",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of the interconnections between people and places and environments; thorough explanation of how these interconnections change places or environments",
      "B": "informed explanation of the interconnections between people and places and environments; informed explanation of how these interconnections change places or environments",
      "C": "explanation of the interconnections between people and places and environments; explanation of how these interconnections change places or environments",
      "D": "simple explanation of the interconnections between people and places and environments; simple explanation of how these interconnections change places or environments",
      "E": "statement/s about interconnections between people, places and environments and/or how interconnections change places or environments"
    }
  },
  {
    "id": "geog-y8-strategies",
    "orderIndex": 6,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 8",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of responses or strategies to address a geographical phenomenon or challenge, referring to environmental, economic or social factors",
      "B": "informed explanation of responses or strategies to address a geographical phenomenon or challenge, referring to environmental, economic or social factors",
      "C": "explanation of responses or strategies to address a geographical phenomenon or challenge, referring to environmental, economic or social factors",
      "D": "simple explanation of responses or strategies to address a geographical phenomenon or challenge",
      "E": "statement/s about responses or strategies to address a geographical phenomenon or challenge"
    }
  },
  {
    "id": "geog-y8-questioning",
    "orderIndex": 7,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 8",
    "strand": "Skills",
    "subStrand": "Questioning and researching using geographical methods",
    "descriptors": {
      "A": "development of relevant questions about a geographical phenomenon or challenge and purposeful collection, organisation and representation of relevant and reliable data and information using primary research methods and secondary research materials",
      "B": "development of relevant questions about a geographical phenomenon or challenge and effective collection, organisation and representation of relevant and reliable data and information using primary research methods and secondary research materials",
      "C": "development of relevant questions about a geographical phenomenon or challenge and collection, organisation and representation of relevant and reliable data and information using primary research methods and secondary research materials",
      "D": "guided development of questions about a geographical phenomenon or challenge and partial collection, organisation and representation of relevant and reliable data and/or information using primary research methods and/or secondary research materials",
      "E": "directed development of questions about a geographical phenomenon or challenge and basic collection, organisation and/or representation of data and/or information"
    }
  },
  {
    "id": "geog-y8-interpreting",
    "orderIndex": 8,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 8",
    "strand": "Skills",
    "subStrand": "Interpreting and analysing geographical data and information",
    "descriptors": {
      "A": "interpretation and proficient analysis of data and information to explain patterns and trends and infer relationships",
      "B": "interpretation and plausible analysis of data and information to explain patterns and trends and infer relationships",
      "C": "interpretation and analysis of data and information to explain patterns and trends and infer relationships",
      "D": "interpretation and simple analysis of data and/or information to explain patterns and trends and/or infer relationships",
      "E": "statement/s about patterns, trends and/or relationships in data"
    }
  },
  {
    "id": "geog-y8-concluding",
    "orderIndex": 9,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 8",
    "strand": "Skills",
    "subStrand": "Concluding and decision-making",
    "descriptors": {
      "A": "drawing considered and reasoned conclusions about the impact of the geographical phenomenon or challenge; considered decisions on appropriate strategies for action and explanation of potential impacts",
      "B": "drawing informed and reasoned conclusions about the impact of the geographical phenomenon or challenge; informed decisions on appropriate strategies for action and explanation of potential impacts",
      "C": "drawing reasoned conclusions about the impact of the geographical phenomenon or challenge; decisions on appropriate strategies for action and explanation of potential impacts",
      "D": "drawing simple conclusions about the impact of the geographical phenomenon or challenge; simple decisions on strategies for action and explanation of potential impacts",
      "E": "statement/s about the geographical phenomenon or challenge and/or strategies for action and/or potential impacts"
    }
  },
  {
    "id": "geog-y8-communicating",
    "orderIndex": 10,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 8",
    "strand": "Skills",
    "subStrand": "Communicating",
    "descriptors": {
      "A": "use of geographical knowledge, methods, concepts and terms to create purposeful descriptions, explanations and responses that reference findings from sources",
      "B": "use of geographical knowledge, methods, concepts and terms to create effective descriptions, explanations and responses that reference findings from sources",
      "C": "use of geographical knowledge, methods, concepts and terms to create descriptions, explanations and responses that reference findings from sources",
      "D": "use of geographical knowledge, methods, concepts, terms and/or findings from sources to create simple descriptions, explanations and/or responses",
      "E": "use of geographical knowledge, methods, concepts, terms and/or findings from sources to create fragmented descriptions, explanations and/or responses"
    }
  },
  {
    "id": "geog-y7-perceptions",
    "orderIndex": 1,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 7",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough description of how the characteristics of places are perceived and valued differently by people",
      "B": "informed description of how the characteristics of places are perceived and valued differently by people",
      "C": "description of how the characteristics of places are perceived and valued differently by people",
      "D": "simple description of how the characteristics of places are perceived and valued by people",
      "E": "statement/s about how places are perceived and/or valued by people"
    }
  },
  {
    "id": "geog-y7-importance",
    "orderIndex": 2,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 7",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough description of the importance of environments to people",
      "B": "informed description of the importance of environments to people",
      "C": "description of the importance of environments to people",
      "D": "simple description of the importance of environments to people",
      "E": "statement/s about the importance of environments to people"
    }
  },
  {
    "id": "geog-y7-distribution",
    "orderIndex": 3,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 7",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough description of the features of a distribution",
      "B": "informed description of the features of a distribution",
      "C": "description of the features of a distribution",
      "D": "simple description of the features of a distribution",
      "E": "statement/s about a distribution"
    }
  },
  {
    "id": "geog-y7-interconnections",
    "orderIndex": 4,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 7",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of the interconnections between people and places and environments; thorough description of how these interconnections change places or environments",
      "B": "informed explanation of the interconnections between people and places and environments; informed description of how these interconnections change places or environments",
      "C": "explanation of the interconnections between people and places and environments; description of how these interconnections change places or environments",
      "D": "simple explanation of the interconnections between people, places and environments; simple description of how these interconnections change places or environments",
      "E": "statement/s about interconnections between people, places and environments"
    }
  },
  {
    "id": "geog-y7-strategy-desc",
    "orderIndex": 5,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 7",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough description of a response or strategy to address a geographical phenomenon or challenge",
      "B": "informed description of a response or strategy to address a geographical phenomenon or challenge",
      "C": "description of a response or strategy to address a geographical phenomenon or challenge",
      "D": "simple description of a response or strategy to address a geographical phenomenon or challenge",
      "E": "statement/s about a response or strategy to address a geographical phenomenon or challenge"
    }
  },
  {
    "id": "geog-y7-questioning",
    "orderIndex": 6,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 7",
    "strand": "Skills",
    "subStrand": "Questioning and researching using geographical methods",
    "descriptors": {
      "A": "development of questions about a geographical phenomenon or challenge and purposeful collection, organisation and representation of relevant data and information, using primary research methods and secondary research materials",
      "B": "development of questions about a geographical phenomenon or challenge and effective collection, organisation and representation of relevant data and information, using primary research methods and secondary research materials",
      "C": "development of questions about a geographical phenomenon or challenge and collection, organisation and representation of relevant data and information, using primary research methods and secondary research materials",
      "D": "guided development of questions about a geographical phenomenon or challenge and partial collection, organisation and representation of data and/or information, using primary research methods and/or secondary research materials",
      "E": "directed development of questions about a geographical phenomenon or challenge and basic collection, organisation and/or representation of data and/or information"
    }
  },
  {
    "id": "geog-y7-patterns",
    "orderIndex": 7,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 7",
    "strand": "Skills",
    "subStrand": "Interpreting and analysing geographical data and information",
    "descriptors": {
      "A": "identification of similarities and differences and thorough description of patterns in data and information",
      "B": "identification of similarities and differences and effective description of patterns in data and information",
      "C": "identification of similarities and differences and description of patterns in data and information",
      "D": "identification of similarities and differences and partial description of patterns in data and/or information",
      "E": "statement/s about patterns in data and/or information"
    }
  },
  {
    "id": "geog-y7-concluding",
    "orderIndex": 8,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 7",
    "strand": "Skills",
    "subStrand": "Concluding and decision-making",
    "descriptors": {
      "A": "drawing considered conclusions about the impact of the geographical phenomenon or challenge on people, places and environments; development of a considered strategy for action",
      "B": "drawing informed conclusions about the impact of the geographical phenomenon or challenge on people, places and environments; development of an informed strategy for action",
      "C": "drawing conclusions about the impact of the geographical phenomenon or challenge on people, places and environments; development of a strategy for action",
      "D": "drawing simple conclusions about the impact of the geographical phenomenon or challenge on people, places and environments; development of a simple strategy for action",
      "E": "statement/s about the impact of the geographical phenomenon or challenge and/or a strategy for action"
    }
  },
  {
    "id": "geog-y7-communicating",
    "orderIndex": 9,
    "learningArea": "HASS",
    "subject": "Geography",
    "yearLevel": "Year 7",
    "strand": "Skills",
    "subStrand": "Communicating",
    "descriptors": {
      "A": "use of geographical knowledge, concepts, terms and relevant findings from sources to create purposeful descriptions, explanations and responses",
      "B": "use of geographical knowledge, concepts, terms and relevant findings from sources to create effective descriptions, explanations and responses",
      "C": "use of geographical knowledge, concepts, terms and relevant findings from sources to create descriptions, explanations and responses",
      "D": "use of geographical knowledge, concepts, terms and/or findings from sources to create simple descriptions, explanations and/or responses",
      "E": "use of geographical knowledge, concepts, terms and/or findings from sources to create fragmented descriptions, explanations and/or responses"
    }
  },
  {
    "id": "econ-y10-indicators",
    "orderIndex": 1,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 10",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough analysis of how economic indicators influence Australian Government decision-making",
      "B": "informed analysis of how economic indicators influence Australian Government decision-making",
      "C": "analysis of how economic indicators influence Australian Government decision-making",
      "D": "simple analysis of how economic indicators influence Australian Government decision-making",
      "E": "statement/s about economic indicators"
    }
  },
  {
    "id": "econ-y10-intervention",
    "orderIndex": 2,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 10",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of ways that government intervenes to improve economic performance and living standards",
      "B": "informed explanation of ways that government intervenes to improve economic performance and living standards",
      "C": "explanation of ways that government intervenes to improve economic performance and living standards",
      "D": "simple explanation of ways that government intervenes to improve economic performance and/or living standards",
      "E": "statement/s about how government intervenes in the economy"
    }
  },
  {
    "id": "econ-y10-workforce",
    "orderIndex": 3,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 10",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of processes that businesses use to manage the workforce and improve productivity",
      "B": "informed explanation of processes that businesses use to manage the workforce and improve productivity",
      "C": "explanation of processes that businesses use to manage the workforce and improve productivity",
      "D": "simple explanation of processes that businesses use to manage the workforce and/or improve productivity",
      "E": "statement/s about management of the workforce and/or improvement in productivity"
    }
  },
  {
    "id": "econ-y10-superannuation",
    "orderIndex": 4,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 10",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of the importance of Australia\u2019s superannuation system and its effect on consumer and financial decision-making",
      "B": "informed explanation of the importance of Australia\u2019s superannuation system and its effect on consumer and financial decision-making",
      "C": "explanation of the importance of Australia\u2019s superannuation system and its effect on consumer and financial decision-making",
      "D": "simple explanation of the importance of Australia\u2019s superannuation system and/or its effect on consumer and financial decision-making",
      "E": "statement/s about Australia\u2019s superannuation system"
    }
  },
  {
    "id": "econ-y10-decisions",
    "orderIndex": 5,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 10",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough analysis of factors that influence major consumer and financial decisions; thorough explanation of the short- and long-term effects of these decisions",
      "B": "informed analysis of factors that influence major consumer and financial decisions; informed explanation of the short- and long-term effects of these decisions",
      "C": "analysis of factors that influence major consumer and financial decisions; explanation of the short- and long-term effects of these decisions",
      "D": "simple analysis of factors that influence major consumer and financial decisions; simple explanation of the effects of these decisions",
      "E": "statement/s about factors that influence major consumer and financial decisions and/or effects of these decisions"
    }
  },
  {
    "id": "econ-y10-questioning",
    "orderIndex": 6,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 10",
    "strand": "Skills",
    "subStrand": "Questioning and researching",
    "descriptors": {
      "A": "development and modification of a range of questions to investigate an economic and business issue and purposeful location, selection and analysis of relevant and reliable information and data from a range of sources",
      "B": "development and modification of a range of questions to investigate an economic and business issue and effective location, selection and analysis of relevant and reliable information and data from a range of sources",
      "C": "development and modification of a range of questions to investigate an economic and business issue and location, selection and analysis of relevant and reliable information and data from a range of sources",
      "D": "guided development and modification of questions to investigate an economic and business issue and partial location, selection and/or analysis of relevant and reliable information and/or data from sources",
      "E": "directed development and modification of questions to investigate an economic and business issue and basic location, selection and/or analysis of information and/or data from sources"
    }
  },
  {
    "id": "econ-y10-interpreting",
    "orderIndex": 7,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 10",
    "strand": "Skills",
    "subStrand": "Interpreting and analysing",
    "descriptors": {
      "A": "proficient interpretation and analysis of information and data to: evaluate trends and economic cause-and-effect relationships; make predictions about consumer and financial impacts",
      "B": "plausible interpretation and analysis of information and data to: evaluate trends and economic cause-and-effect relationships; make predictions about consumer and financial impacts",
      "C": "interpretation and analysis of information and data to: evaluate trends and economic cause-and-effect relationships; make predictions about consumer and financial impacts",
      "D": "simple interpretation and analysis of information and/or data to partially: evaluate trends and economic cause-and-effect relationships; make predictions about consumer and financial impacts",
      "E": "statement/s about trends and/or economic cause-and-effect relationships and/or predictions about consumer and financial impacts"
    }
  },
  {
    "id": "econ-y10-concluding",
    "orderIndex": 8,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 10",
    "strand": "Skills",
    "subStrand": "Evaluating, concluding and decision-making",
    "descriptors": {
      "A": "development of a considered and evidence-based response to an economic and business issue; proficient evaluation of a response, using appropriate criteria to decide on a course of action",
      "B": "development of an informed and evidence-based response to an economic and business issue; plausible evaluation of a response, using appropriate criteria to decide on a course of action",
      "C": "development of an evidence-based response to an economic and business issue; evaluation of a response, using appropriate criteria to decide on a course of action",
      "D": "development of a simple evidence-based response to an economic and business issue; simple evaluation of a response, using criteria to decide on a course of action",
      "E": "statement/s about a basic response to an economic and business issue and/or a course of action"
    }
  },
  {
    "id": "econ-y10-communicating",
    "orderIndex": 9,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 10",
    "strand": "Skills",
    "subStrand": "Communicating",
    "descriptors": {
      "A": "use of economic and business knowledge, concepts, and terms to develop purposeful descriptions, explanations and reasoned arguments that synthesise research findings",
      "B": "use of economic and business knowledge, concepts, and terms to develop effective descriptions, explanations and reasoned arguments that synthesise research findings",
      "C": "use of economic and business knowledge, concepts, and terms to develop descriptions, explanations and reasoned arguments that synthesise research findings",
      "D": "use of economic and business knowledge, concepts, and terms to develop simple descriptions, explanations and/or arguments that refer to research findings",
      "E": "use of economic and business knowledge, concepts, and terms to develop fragmented descriptions, explanations and/or arguments"
    }
  },
  {
    "id": "econ-y9-financial-sector",
    "orderIndex": 1,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 9",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of the role of Australia\u2019s financial sector and its effect on economic decision-making by individuals and businesses",
      "B": "informed explanation of the role of Australia\u2019s financial sector and its effect on economic decision-making by individuals and businesses",
      "C": "explanation of the role of Australia\u2019s financial sector and its effect on economic decision-making by individuals and businesses",
      "D": "simple explanation of the role of Australia\u2019s financial sector and its effect on economic decision-making by individuals and/or businesses",
      "E": "statement/s about Australia\u2019s financial sector"
    }
  },
  {
    "id": "econ-y9-global-market",
    "orderIndex": 2,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 9",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of the interdependence of participants in the global market and the effect on economic decision-making",
      "B": "informed explanation of the interdependence of participants in the global market and the effect on economic decision-making",
      "C": "explanation of the interdependence of participants in the global market and the effect on economic decision-making",
      "D": "simple explanation of the interdependence of participants in the global market and/or the effect on economic decision-making",
      "E": "statement/s about participants in the global market and/or the effect on economic decision-making"
    }
  },
  {
    "id": "econ-y9-trade-asia",
    "orderIndex": 3,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 9",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of the reasons for trade and Australia\u2019s pattern of trade with Asia",
      "B": "informed explanation of the reasons for trade and Australia\u2019s pattern of trade with Asia",
      "C": "explanation of the reasons for trade and Australia\u2019s pattern of trade with Asia",
      "D": "simple explanation of the reasons for trade and/or Australia\u2019s pattern of trade with Asia",
      "E": "statement/s about reasons for trade and/or Australia\u2019s trade with Asia"
    }
  },
  {
    "id": "econ-y9-competitive-advantage",
    "orderIndex": 4,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 9",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of why businesses seek to create and maintain a competitive advantage",
      "B": "informed explanation of why businesses seek to create and maintain a competitive advantage",
      "C": "explanation of why businesses seek to create and maintain a competitive advantage",
      "D": "simple explanation of why businesses seek to create and maintain a competitive advantage",
      "E": "statement/s about businesses and competitive advantage"
    }
  },
  {
    "id": "econ-y9-risks-rewards",
    "orderIndex": 5,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 9",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of how individuals and businesses manage consumer and financial risks and rewards",
      "B": "informed explanation of how individuals and businesses manage consumer and financial risks and rewards",
      "C": "explanation of how individuals and businesses manage consumer and financial risks and rewards",
      "D": "simple explanation of how individuals and/or businesses manage consumer and financial risks and/or rewards",
      "E": "statement/s about consumer and financial risks and/or rewards"
    }
  },
  {
    "id": "econ-y9-questioning",
    "orderIndex": 6,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 9",
    "strand": "Skills",
    "subStrand": "Questioning and researching",
    "descriptors": {
      "A": "development and modification of questions to investigate an economic and business issue and purposeful location, selection and analysis of information and data from a range of sources",
      "B": "development and modification of questions to investigate an economic and business issue and effective location, selection and analysis of information and data from a range of sources",
      "C": "development and modification of questions to investigate an economic and business issue and location, selection and analysis of information and data from a range of sources",
      "D": "guided development of questions to investigate an economic and business issue and partial location, selection and/or analysis of information and/or data from sources",
      "E": "directed development of questions to investigate an economic and business issue and basic location, selection and/or analysis of information and/or data from sources"
    }
  },
  {
    "id": "econ-y9-interpreting",
    "orderIndex": 7,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 9",
    "strand": "Skills",
    "subStrand": "Interpreting and analysing",
    "descriptors": {
      "A": "proficient interpretation and analysis of information and data to explain economic trends and cause-and-effect relationships and identify consumer and financial impacts",
      "B": "plausible interpretation and analysis of information and data to explain economic trends and cause-and-effect relationships and identify consumer and financial impacts",
      "C": "interpretation and analysis of information and data to explain economic trends and cause-and-effect relationships and identify consumer and financial impacts",
      "D": "simple interpretation and analysis of information and/or data to partially explain economic trends and cause-and-effect relationships and identify consumer and financial impacts",
      "E": "statement/s about economic trends and/or cause-and-effect relationships and/or consumer and financial impacts"
    }
  },
  {
    "id": "econ-y9-concluding",
    "orderIndex": 8,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 9",
    "strand": "Skills",
    "subStrand": "Evaluating, concluding and decision-making",
    "descriptors": {
      "A": "development of a considered response to an economic and business issue, taking account of economic, business or financial factors; proficient evaluation of a response using criteria and making decisions about how it is to be implemented",
      "B": "development of an informed response to an economic and business issue, taking account of economic, business or financial factors; plausible evaluation of a response using criteria and making decisions about how it is to be implemented",
      "C": "development of a response to an economic and business issue, taking account of economic, business or financial factors; evaluation of a response using criteria and making decisions about how it is to be implemented",
      "D": "development of a simple response to an economic and business issue and/or taking account of economic, business or financial factors; simple evaluation of a response and/or making decisions about how it is to be implemented",
      "E": "development of a basic response to an economic and business issue; statement/s about a response and/or how it is to be implemented"
    }
  },
  {
    "id": "econ-y9-communicating",
    "orderIndex": 9,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 9",
    "strand": "Skills",
    "subStrand": "Communicating",
    "descriptors": {
      "A": "use of economic and business knowledge, concepts and terms to develop purposeful descriptions, explanations and arguments that acknowledge research findings",
      "B": "use of economic and business knowledge, concepts and terms to develop effective descriptions, explanations and arguments that acknowledge research findings",
      "C": "use of economic and business knowledge, concepts and terms to develop descriptions, explanations and arguments that acknowledge research findings",
      "D": "use of economic and business knowledge, concepts and terms to develop simple descriptions, explanations and/or arguments that partially acknowledge research findings",
      "E": "use of economic and business knowledge, concepts and terms to develop fragmented descriptions, explanations and/or arguments"
    }
  },
  {
    "id": "econ-y8-allocation",
    "orderIndex": 1,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 8",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of how markets influence the allocation of resources to the production of goods and services",
      "B": "informed explanation of how markets influence the allocation of resources to the production of goods and services",
      "C": "explanation of how markets influence the allocation of resources to the production of goods and services",
      "D": "simple explanation of how markets influence the allocation of resources to the production of goods and services",
      "E": "statement/s about how markets influence the allocation of resources"
    }
  },
  {
    "id": "econ-y8-adaptation",
    "orderIndex": 2,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 8",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of the ways that businesses adapt to opportunities in markets and respond to the work environment",
      "B": "informed explanation of the ways that businesses adapt to opportunities in markets and respond to the work environment",
      "C": "explanation of the ways that businesses adapt to opportunities in markets and respond to the work environment",
      "D": "simple explanation of the ways that businesses adapt to opportunities in markets and/or respond to the work environment",
      "E": "statement/s about ways that businesses adapt to markets and/or respond to the work environment"
    }
  },
  {
    "id": "econ-y8-taxation",
    "orderIndex": 3,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 8",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough description of the importance of Australia\u2019s taxation system and its effect on decision-making by individuals and businesses",
      "B": "informed description of the importance of Australia\u2019s taxation system and its effect on decision-making by individuals and businesses",
      "C": "description of the importance of Australia\u2019s taxation system and its effect on decision-making by individuals and businesses",
      "D": "simple description of the importance of Australia\u2019s taxation system and/or its effect on decision-making by individuals and businesses",
      "E": "statement/s about Australia\u2019s taxation system"
    }
  },
  {
    "id": "econ-y8-budgeting",
    "orderIndex": 4,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 8",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of why individuals and/or businesses budget and plan",
      "B": "informed explanation of why individuals and/or businesses budget and plan",
      "C": "explanation of why individuals and/or businesses budget and plan",
      "D": "simple explanation of why individuals and/or businesses budget and/or plan",
      "E": "statement/s about why individuals and/or businesses budget and/or plan"
    }
  },
  {
    "id": "econ-y8-questioning",
    "orderIndex": 5,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 8",
    "strand": "Skills",
    "subStrand": "Questioning and researching",
    "descriptors": {
      "A": "development of a range of questions to investigate an economic and business issue and purposeful location, selection and organisation of relevant information and data",
      "B": "development of a range of questions to investigate an economic and business issue and effective location, selection and organisation of relevant information and data",
      "C": "development of a range of questions to investigate an economic and business issue and location, selection and organisation of relevant information and data",
      "D": "guided development of questions to investigate an economic and business issue and partial location, selection and organisation of relevant information and/or data",
      "E": "directed development of questions to investigate an economic and business issue and basic location, selection and/or organisation of relevant information and/or data"
    }
  },
  {
    "id": "econ-y8-interpreting",
    "orderIndex": 6,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 8",
    "strand": "Skills",
    "subStrand": "Interpreting and analysing",
    "descriptors": {
      "A": "purposeful interpretation of information and data to: identify economic and business issues and trends; describe economic cause-and-effect relationships",
      "B": "effective interpretation of information and data to: identify economic and business issues and trends; describe economic cause-and-effect relationships",
      "C": "interpretation of information and data to: identify economic and business issues and trends; describe economic cause-and-effect relationships",
      "D": "simple interpretation of information and/or data to partially: identify economic and business issues and trends; describe economic cause-and-effect relationships",
      "E": "statement/s about information and/or data about: economic and business issues and trends and/or economic cause-and-effect relationships"
    }
  },
  {
    "id": "econ-y8-concluding",
    "orderIndex": 7,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 8",
    "strand": "Skills",
    "subStrand": "Evaluating, concluding and decision-making",
    "descriptors": {
      "A": "development of a considered response to an economic and business issue; identification and proficient evaluation of potential costs and benefits",
      "B": "development of an informed response to an economic and business issue; identification and plausible evaluation of potential costs and benefits",
      "C": "development of a response to an economic and business issue; identification and evaluation of potential costs and benefits",
      "D": "development of a simple response to an economic and business issue; identification of potential costs and benefits",
      "E": "statement/s about a response to an economic and business issue and/or potential costs and benefits"
    }
  },
  {
    "id": "econ-y8-communicating",
    "orderIndex": 8,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 8",
    "strand": "Skills",
    "subStrand": "Communicating",
    "descriptors": {
      "A": "use of economic and business knowledge, concepts, terms and research findings to create purposeful descriptions and explanations",
      "B": "use of economic and business knowledge, concepts, terms and research findings to create effective descriptions and explanations",
      "C": "use of economic and business knowledge, concepts, terms and research findings to create descriptions and explanations",
      "D": "use of economic and business knowledge, concepts, terms and/or research findings to create simple descriptions and/or explanations",
      "E": "use of economic and business knowledge, concepts, terms and/or research findings to create fragmented descriptions and/or explanations"
    }
  },
  {
    "id": "econ-y7-resources",
    "orderIndex": 1,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 7",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough description of how decisions are made to allocate limited resources to individuals and communities in an economy",
      "B": "informed description of how decisions are made to allocate limited resources to individuals and communities in an economy",
      "C": "description of how decisions are made to allocate limited resources to individuals and communities in an economy",
      "D": "simple description of how decisions are made to allocate limited resources to individuals and/or communities in an economy",
      "E": "statement/s about allocation of limited resources to individuals and/or communities"
    }
  },
  {
    "id": "econ-y7-businesses",
    "orderIndex": 2,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 7",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough description of the reasons businesses exist and types of businesses; thorough identification of how entrepreneurial characteristics contribute to the success of a business",
      "B": "informed description of the reasons businesses exist and types of businesses; informed identification of how entrepreneurial characteristics contribute to the success of a business",
      "C": "description of the reasons businesses exist and types of businesses; identification of how entrepreneurial characteristics contribute to the success of a business",
      "D": "simple description of the reasons businesses exist and/or types of businesses; partial identification of how entrepreneurial characteristics contribute to the success of a business",
      "E": "statement/s about reasons businesses exist and/or types of businesses; statement/s about entrepreneurial characteristics"
    }
  },
  {
    "id": "econ-y7-income",
    "orderIndex": 3,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 7",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough description of the reasons individuals choose to work, how they may derive an income and the types of work that exist",
      "B": "informed description of the reasons individuals choose to work, how they may derive an income and the types of work that exist",
      "C": "description of the reasons individuals choose to work, how they may derive an income and the types of work that exist",
      "D": "simple description of the reasons individuals choose to work, how they may derive an income and/or the types of work that exist",
      "E": "statement/s about why individuals work, how they derive income and/or the types of work that exist"
    }
  },
  {
    "id": "econ-y7-rights",
    "orderIndex": 4,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 7",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough identification of the rights and responsibilities of individuals and businesses in terms of products and services",
      "B": "informed identification of the rights and responsibilities of individuals and businesses in terms of products and services",
      "C": "identification of the rights and responsibilities of individuals and businesses in terms of products and services",
      "D": "partial identification of the rights and/or responsibilities of individuals and businesses in terms of products and services",
      "E": "statement/s about rights and/or responsibilities of individuals and businesses"
    }
  },
  {
    "id": "econ-y7-questioning",
    "orderIndex": 5,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 7",
    "strand": "Skills",
    "subStrand": "Questioning and researching",
    "descriptors": {
      "A": "development of questions to investigate an economic and business issue and purposeful location, selection and organisation of data and information from sources",
      "B": "development of questions to investigate an economic and business issue and effective location, selection and organisation of data and information from sources",
      "C": "development of questions to investigate an economic and business issue and location, selection and organisation of data and information from sources",
      "D": "guided development of questions to investigate an economic and business issue and partial location, selection and organisation of data and/or information from sources",
      "E": "directed development of questions to investigate an economic and business issue and basic location, selection and/or organisation of data and/or information from sources"
    }
  },
  {
    "id": "econ-y7-interpreting",
    "orderIndex": 6,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 7",
    "strand": "Skills",
    "subStrand": "Interpreting and analysing",
    "descriptors": {
      "A": "purposeful interpretation of information and data to identify economic and business issues, trends or effects",
      "B": "effective interpretation of information and data to identify economic and business issues, trends or effects",
      "C": "interpretation of information and data to identify economic and business issues, trends or effects",
      "D": "simple interpretation of information and/or data to partially identify economic and business issues, trends or effects",
      "E": "statement/s about information and/or data on economic and business issues, trends or effects"
    }
  },
  {
    "id": "econ-y7-concluding",
    "orderIndex": 7,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 7",
    "strand": "Skills",
    "subStrand": "Evaluating, concluding and decision-making",
    "descriptors": {
      "A": "development of a considered response to an economic and business issue and identification of potential costs and benefits",
      "B": "development of an informed response to an economic and business issue and identification of potential costs and benefits",
      "C": "development of a response to an economic and business issue and identification of potential costs and benefits",
      "D": "development of a simple response to an economic and business issue and partial identification of potential costs and benefits",
      "E": "statement/s about a response to an economic and business issue and/or potential costs and/or benefits"
    }
  },
  {
    "id": "econ-y7-communicating",
    "orderIndex": 8,
    "learningArea": "HASS",
    "subject": "Economics and Business",
    "yearLevel": "Year 7",
    "strand": "Skills",
    "subStrand": "Communicating",
    "descriptors": {
      "A": "use of economic and business knowledge, concepts, terms and sources to create purposeful descriptions and explanations",
      "B": "use of economic and business knowledge, concepts, terms and sources to create effective descriptions and explanations",
      "C": "use of economic and business knowledge, concepts, terms and sources to create descriptions and explanations",
      "D": "use of economic and business knowledge, concepts, terms and/or sources to create simple descriptions and/or explanations",
      "E": "use of economic and business knowledge, concepts, terms and/or sources to create fragmented descriptions and/or explanations"
    }
  },
  {
    "id": "civics-y10-government",
    "orderIndex": 1,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 10",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough comparison of the key features and values of Australia\u2019s system of government to those of another system of government",
      "B": "informed comparison of the key features and values of Australia\u2019s system of government to those of another system of government",
      "C": "comparison of the key features and values of Australia\u2019s system of government to those of another system of government",
      "D": "simple comparison of the key features and/or values of Australia\u2019s system of government to those of another system of government",
      "E": "statement/s about key features and/or values of Australia\u2019s system of government and/or another system of government"
    }
  },
  {
    "id": "civics-y10-global-role",
    "orderIndex": 2,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 10",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough description of the Australian Government\u2019s role and responsibilities at a regional and global level",
      "B": "informed description of the Australian Government\u2019s role and responsibilities at a regional and global level",
      "C": "description of the Australian Government\u2019s role and responsibilities at a regional and global level",
      "D": "simple description of the Australian Government\u2019s role and responsibilities at a regional and/or global level",
      "E": "statement/s about the Australian Government\u2019s role and/or responsibilities"
    }
  },
  {
    "id": "civics-y10-high-court",
    "orderIndex": 3,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 10",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of the role of the High Court of Australia",
      "B": "informed explanation of the role of the High Court of Australia",
      "C": "explanation of the role of the High Court of Australia",
      "D": "simple explanation of the role of the High Court of Australia",
      "E": "statement/s about the High Court of Australia"
    }
  },
  {
    "id": "civics-y10-international-law",
    "orderIndex": 4,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 10",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of how Australia\u2019s international legal obligations influence the law and government policy",
      "B": "informed explanation of how Australia\u2019s international legal obligations influence the law and government policy",
      "C": "explanation of how Australia\u2019s international legal obligations influence the law and government policy",
      "D": "simple explanation of how Australia\u2019s international legal obligations influence the law and/or government policy",
      "E": "statement/s about Australia\u2019s international legal obligations and/or law and/or government policy"
    }
  },
  {
    "id": "civics-y10-democracy-challenges",
    "orderIndex": 5,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 10",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "identification and thorough explanation of challenges to a resilient democracy and a cohesive society in Australia",
      "B": "identification and informed explanation of challenges to a resilient democracy and a cohesive society in Australia",
      "C": "identification and explanation of challenges to a resilient democracy and a cohesive society in Australia",
      "D": "identification and simple explanation of challenges to a resilient democracy and/or a cohesive society in Australia",
      "E": "statement/s about democracy and/or society in Australia"
    }
  },
  {
    "id": "civics-y10-questioning",
    "orderIndex": 6,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 10",
    "strand": "Skills",
    "subStrand": "Questioning and researching",
    "descriptors": {
      "A": "development and refinement of a range of questions and purposeful location, selection and comparison of relevant and reliable information from a range of sources to investigate political and legal systems, and contemporary civic issues",
      "B": "development and refinement of a range of questions and effective location, selection and comparison of relevant and reliable information from a range of sources to investigate political and legal systems, and contemporary civic issues",
      "C": "development and refinement of a range of questions and location, selection and comparison of relevant and reliable information from a range of sources to investigate political and legal systems, and contemporary civic issues",
      "D": "guided development and refinement of a range of questions and partial location, selection and/or comparison of information from a range of sources to investigate political and legal systems, and contemporary civic issues",
      "E": "directed development of questions and basic location, selection and/or comparison of information about political and legal systems, and contemporary civic issues"
    }
  },
  {
    "id": "civics-y10-analysis",
    "orderIndex": 7,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 10",
    "strand": "Skills",
    "subStrand": "Analysis, evaluation and interpretation",
    "descriptors": {
      "A": "purposeful analysis of information to evaluate perspectives and challenges related to political, legal or civic issues",
      "B": "effective analysis of information to evaluate perspectives and challenges related to political, legal or civic issues",
      "C": "analysis of information to evaluate perspectives and challenges related to political, legal or civic issues",
      "D": "simple analysis of information to evaluate perspectives and/or challenges related to political, legal or civic issues",
      "E": "statement/s about perspectives and/or challenges related to political, legal or civic issues"
    }
  },
  {
    "id": "civics-y10-participation",
    "orderIndex": 8,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 10",
    "strand": "Skills",
    "subStrand": "Civic participation and decision-making",
    "descriptors": {
      "A": "proficient evaluation and comparison of the methods or strategies related to civic participation or action",
      "B": "plausible evaluation and comparison of the methods or strategies related to civic participation or action",
      "C": "evaluation and comparison of the methods or strategies related to civic participation or action",
      "D": "simple evaluation and comparison of the methods or strategies related to civic participation or action",
      "E": "statement/s about methods or strategies related to civic participation or action"
    }
  },
  {
    "id": "civics-y10-communicating",
    "orderIndex": 9,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 10",
    "strand": "Skills",
    "subStrand": "Communicating",
    "descriptors": {
      "A": "use of civics and citizenship knowledge, concepts, and terms to develop purposeful descriptions, explanations and arguments that synthesise evidence from sources",
      "B": "use of civics and citizenship knowledge, concepts, and terms to develop effective descriptions, explanations and arguments that synthesise evidence from sources",
      "C": "use of civics and citizenship knowledge, concepts, and terms to develop descriptions, explanations and arguments that synthesise evidence from sources",
      "D": "use of civics and citizenship knowledge, concepts, and terms to develop simple descriptions, explanations and/or arguments that refer to evidence from sources",
      "E": "use of civics and citizenship knowledge, concepts, and terms to develop fragmented descriptions, explanations and/or arguments"
    }
  },
  {
    "id": "civics-y9-constitution",
    "orderIndex": 1,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 9",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough analysis of the role of the Australian Constitution, the federal system of government, and the process and reasons for constitutional change",
      "B": "informed analysis of the role of the Australian Constitution, the federal system of government, and the process and reasons for constitutional change",
      "C": "analysis of the role of the Australian Constitution, the federal system of government, and the process and reasons for constitutional change",
      "D": "simple analysis of the role of the Australian Constitution, the federal system of government, and/or the process and reasons for constitutional change",
      "E": "statement/s about the Australian Constitution, the federal system of government, and/or the process and/or reasons for constitutional change"
    }
  },
  {
    "id": "civics-y9-legislative",
    "orderIndex": 2,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 9",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of policy development and legislative processes in Australia\u2019s democracy",
      "B": "informed explanation of policy development and legislative processes in Australia\u2019s democracy",
      "C": "explanation of policy development and legislative processes in Australia\u2019s democracy",
      "D": "simple explanation of policy development and/or legislative processes in Australia\u2019s democracy",
      "E": "statement/s about policy development and/or legislative processes in Australia\u2019s democracy"
    }
  },
  {
    "id": "civics-y9-courts",
    "orderIndex": 3,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 9",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "identification of the key features and jurisdictions of Australia\u2019s court system and thorough explanation of the role and processes of courts and tribunals",
      "B": "identification of the key features and jurisdictions of Australia\u2019s court system and informed explanation of the role and processes of courts and tribunals",
      "C": "identification of the key features and jurisdictions of Australia\u2019s court system and explanation of the role and processes of courts and tribunals",
      "D": "identification of the key features and jurisdictions of Australia\u2019s court system and/or simple explanation of the role and processes of courts and tribunals",
      "E": "statement/s about key features and/or jurisdictions of Australia\u2019s court system and/or role and processes of courts and tribunals"
    }
  },
  {
    "id": "civics-y9-participation-reasons",
    "orderIndex": 4,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 9",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough identification of the reasons individuals and groups participate in and contribute to civic life nationally and globally",
      "B": "informed identification of the reasons individuals and groups participate in and contribute to civic life nationally and globally",
      "C": "identification of the reasons individuals and groups participate in and contribute to civic life nationally and globally",
      "D": "partial identification of the reasons individuals and groups participate in and contribute to civic life nationally and globally",
      "E": "statement/s about reasons individuals and groups participate in and/or contribute to civic life"
    }
  },
  {
    "id": "civics-y9-media",
    "orderIndex": 5,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 9",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of the influence of the media on reflections of identity and diversity",
      "B": "informed explanation of the influence of the media on reflections of identity and diversity",
      "C": "explanation of the influence of the media on reflections of identity and diversity",
      "D": "simple explanation of the influence of the media on reflections of identity and diversity",
      "E": "statement/s about the influence of the media on reflections of identity and diversity"
    }
  },
  {
    "id": "civics-y9-questioning",
    "orderIndex": 6,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 9",
    "strand": "Skills",
    "subStrand": "Questioning and researching",
    "descriptors": {
      "A": "development of a range of questions and purposeful location, selection and comparison of information from sources to investigate political and legal systems, and contemporary civic issues",
      "B": "development of a range of questions and effective location, selection and comparison of information from sources to investigate political and legal systems, and contemporary civic issues",
      "C": "development of a range of questions and location, selection and comparison of information from sources to investigate political and legal systems, and contemporary civic issues",
      "D": "guided development of a range of questions and partial location, selection and/or comparison of information from sources to investigate political and legal systems, and contemporary civic issues",
      "E": "directed development of questions and basic location, selection and/or comparison of information about political and legal systems, and contemporary civic issues"
    }
  },
  {
    "id": "civics-y9-analysis",
    "orderIndex": 7,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 9",
    "strand": "Skills",
    "subStrand": "Analysis, evaluation and interpretation",
    "descriptors": {
      "A": "purposeful analysis of information to explain perspectives and challenges related to political, legal or civic issues",
      "B": "effective analysis of information to explain perspectives and challenges related to political, legal or civic issues",
      "C": "analysis of information to explain perspectives and challenges related to political, legal or civic issues",
      "D": "simple analysis of information to explain perspectives and/or challenges related to political, legal or civic issues",
      "E": "statement/s about perspectives and/or challenges related to political, legal or civic issues"
    }
  },
  {
    "id": "civics-y9-action",
    "orderIndex": 8,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 9",
    "strand": "Skills",
    "subStrand": "Civic participation and decision-making",
    "descriptors": {
      "A": "identification and proficient evaluation of the methods or strategies related to civic participation or action",
      "B": "identification and plausible evaluation of the methods or strategies related to civic participation or action",
      "C": "identification and evaluation of the methods or strategies related to civic participation or action",
      "D": "identification and simple evaluation of the methods or strategies related to civic participation or action",
      "E": "statement/s about methods or strategies related to civic participation or action"
    }
  },
  {
    "id": "civics-y9-communicating",
    "orderIndex": 9,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 9",
    "strand": "Skills",
    "subStrand": "Communicating",
    "descriptors": {
      "A": "use of civics and citizenship knowledge, concepts and terms to develop purposeful descriptions, explanations and evidence-based arguments",
      "B": "use of civics and citizenship knowledge, concepts and terms to develop effective descriptions, explanations and evidence-based arguments",
      "C": "use of civics and citizenship knowledge, concepts and terms to develop descriptions, explanations and evidence-based arguments",
      "D": "use of civics and citizenship knowledge, concepts and terms to develop simple descriptions, explanations and/or evidence-based arguments",
      "E": "use of civics and citizenship knowledge, concepts and terms to develop fragmented descriptions, explanations and/or evidence-based arguments"
    }
  },
  {
    "id": "civics-y8-democracy",
    "orderIndex": 1,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 8",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of how Australians are informed about and participate in their democracy",
      "B": "informed explanation of how Australians are informed about and participate in their democracy",
      "C": "explanation of how Australians are informed about and participate in their democracy",
      "D": "simple explanation of how Australians are informed about and participate in their democracy",
      "E": "statement/s about Australians participating in their democracy"
    }
  },
  {
    "id": "civics-y8-parties",
    "orderIndex": 2,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 8",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough description of the roles of political parties and elected representatives in Australian government",
      "B": "informed description of the roles of political parties and elected representatives in Australian government",
      "C": "description of the roles of political parties and elected representatives in Australian government",
      "D": "simple description of the roles of political parties and elected representatives in Australian government",
      "E": "statement/s about political parties and/or elected representatives in Australian government"
    }
  },
  {
    "id": "civics-y8-laws",
    "orderIndex": 3,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 8",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of the characteristics of laws, how laws are made and the types of law in Australia",
      "B": "informed explanation of the characteristics of laws, how laws are made and the types of law in Australia",
      "C": "explanation of the characteristics of laws, how laws are made and the types of law in Australia",
      "D": "simple explanation of the characteristics of laws, how laws are made and/or the types of law in Australia",
      "E": "statement/s about laws in Australia"
    }
  },
  {
    "id": "civics-y8-identity",
    "orderIndex": 4,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 8",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "identification of ways in which Australians express different aspects of their identity and thorough explanation of perspectives on Australia\u2019s national identity",
      "B": "identification of ways in which Australians express different aspects of their identity and informed explanation of perspectives on Australia\u2019s national identity",
      "C": "identification of ways in which Australians express different aspects of their identity and explanation of perspectives on Australia\u2019s national identity",
      "D": "identification of ways in which Australians express different aspects of their identity and/or simple explanation of perspectives on Australia\u2019s national identity",
      "E": "statement/s about ways Australians express their identify and/or Australia\u2019s national identity"
    }
  },
  {
    "id": "civics-y8-questioning",
    "orderIndex": 5,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 8",
    "strand": "Skills",
    "subStrand": "Questioning and researching",
    "descriptors": {
      "A": "development of questions and purposeful location, selection and organisation of relevant information from different sources to investigate political and legal systems, and contemporary civic issues",
      "B": "development of questions and effective location, selection and organisation of relevant information from different sources to investigate political and legal systems, and contemporary civic issues",
      "C": "development of questions and location, selection and organisation of relevant information from different sources to investigate political and legal systems, and contemporary civic issues",
      "D": "guided development of questions and partial location, selection and/or organisation of information from different sources to investigate political and legal systems, and contemporary civic issues",
      "E": "directed development of questions and basic location, selection and/or organisation of information about political and legal systems and contemporary civic issues"
    }
  },
  {
    "id": "civics-y8-analysis",
    "orderIndex": 6,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 8",
    "strand": "Skills",
    "subStrand": "Analysis, evaluation and interpretation",
    "descriptors": {
      "A": "purposeful analysis of information related to political, legal or civic issues; identification and thorough description of perspectives and challenges related to political, legal or civic issues",
      "B": "effective analysis of information related to political, legal or civic issues; identification and informed description of perspectives and challenges related to political, legal or civic issues",
      "C": "analysis of information related to political, legal or civic issues; identification and description of perspectives and challenges related to political, legal or civic issues",
      "D": "simple analysis of information related to political, legal or civic issues; identification and simple description of perspectives and/or challenges related to political, legal or civic issues",
      "E": "statement/s about perspectives and/or challenges related to political, legal or civic issues"
    }
  },
  {
    "id": "civics-y8-participation",
    "orderIndex": 7,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 8",
    "strand": "Skills",
    "subStrand": "Civic participation and decision-making",
    "descriptors": {
      "A": "purposeful explanation of the methods or strategies related to civic participation or action",
      "B": "effective explanation of the methods or strategies related to civic participation or action",
      "C": "explanation of the methods or strategies related to civic participation or action",
      "D": "simple explanation of the methods or strategies related to civic participation or action",
      "E": "statement/s about methods or strategies related to civic participation or action"
    }
  },
  {
    "id": "civics-y8-communicating",
    "orderIndex": 8,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 8",
    "strand": "Skills",
    "subStrand": "Communicating",
    "descriptors": {
      "A": "use of civics and citizenship knowledge, concepts, terms and references to evidence from sources to create purposeful descriptions, explanations and arguments",
      "B": "use of civics and citizenship knowledge, concepts, terms and references to evidence from sources to create effective descriptions, explanations and arguments",
      "C": "use of civics and citizenship knowledge, concepts, terms and references to evidence from sources to create descriptions, explanations and arguments",
      "D": "use of civics and citizenship knowledge, concepts, terms and/or references to evidence from sources to create simple descriptions, explanations and/or arguments",
      "E": "use of civics and citizenship knowledge, concepts, terms and/or references to evidence from sources to create fragmented descriptions, explanations and/or arguments"
    }
  },
  {
    "id": "civics-y7-government",
    "orderIndex": 1,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 7",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough description of the key features of Australia\u2019s system of government",
      "B": "informed description of the key features of Australia\u2019s system of government",
      "C": "description of the key features of Australia\u2019s system of government",
      "D": "simple description of Australia\u2019s system of government",
      "E": "statement/s about Australia\u2019s system of government"
    }
  },
  {
    "id": "civics-y7-legal-system",
    "orderIndex": 2,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 7",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough description of the principles and features of the Australian legal system",
      "B": "informed description of the principles and features of the Australian legal system",
      "C": "description of the principles and features of the Australian legal system",
      "D": "simple description of the Australian legal system",
      "E": "statement/s about the Australian legal system"
    }
  },
  {
    "id": "civics-y7-democracy",
    "orderIndex": 3,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 7",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough explanation of the characteristics of Australian democracy",
      "B": "informed explanation of the characteristics of Australian democracy",
      "C": "explanation of the characteristics of Australian democracy",
      "D": "simple explanation of the characteristics of Australian democracy",
      "E": "statement/s about Australian democracy"
    }
  },
  {
    "id": "civics-y7-society-values",
    "orderIndex": 4,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 7",
    "strand": "Knowledge and understanding",
    "subStrand": "",
    "descriptors": {
      "A": "thorough description of the nature of Australian society and its cultural and religious diversity and identification of the values that support cohesion in Australian society",
      "B": "informed description of the nature of Australian society and its cultural and religious diversity and identification of the values that support cohesion in Australian society",
      "C": "description of the nature of Australian society and its cultural and religious diversity and identification of the values that support cohesion in Australian society",
      "D": "simple description of the nature of Australian society and its cultural and religious diversity and/or identification of the values that support cohesion in Australian society",
      "E": "statement/s about Australian society and its diversity and/or values that support cohesion in Australian society"
    }
  },
  {
    "id": "civics-y7-questioning",
    "orderIndex": 5,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 7",
    "strand": "Skills",
    "subStrand": "Questioning and researching",
    "descriptors": {
      "A": "development of questions and purposeful location, selection and organisation of information from sources to investigate political and legal systems, and contemporary civic issues",
      "B": "development of questions and effective location, selection and organisation of information from sources to investigate political and legal systems, and contemporary civic issues",
      "C": "development of questions and location, selection and organisation of information from sources to investigate political and legal systems, and contemporary civic issues",
      "D": "guided development of questions and partial location, selection and/or organisation of information from sources to investigate political and legal systems, and contemporary civic issues",
      "E": "directed development of questions and basic location, selection and/or organisation of information about political and legal systems, and contemporary civic issues"
    }
  },
  {
    "id": "civics-y7-analysis",
    "orderIndex": 6,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 7",
    "strand": "Skills",
    "subStrand": "Analysis, evaluation and interpretation",
    "descriptors": {
      "A": "purposeful analysis of information and identification of perspectives and challenges related to political, legal or civic issues",
      "B": "effective analysis of information and identification of perspectives and challenges related to political, legal or civic issues",
      "C": "analysis of information and identification of perspectives and challenges related to political, legal or civic issues",
      "D": "simple analysis of information and identification of perspectives and/or challenges related to political, legal or civic issues",
      "E": "statement/s about perspectives and/or challenges related to political, legal or civic issues"
    }
  },
  {
    "id": "civics-y7-action",
    "orderIndex": 7,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 7",
    "strand": "Skills",
    "subStrand": "Civic participation and decision-making",
    "descriptors": {
      "A": "identification and thorough description of the methods or strategies related to civic participation or action",
      "B": "identification and informed description of the methods or strategies related to civic participation or action",
      "C": "identification and description of the methods or strategies related to civic participation or action",
      "D": "identification and simple description of the methods or strategies related to civic participation or action",
      "E": "statement/s about methods or strategies related to civic participation or action"
    }
  },
  {
    "id": "civics-y7-communicating",
    "orderIndex": 8,
    "learningArea": "HASS",
    "subject": "Civics and Citizenship",
    "yearLevel": "Year 7",
    "strand": "Skills",
    "subStrand": "Communicating",
    "descriptors": {
      "A": "use of civics and citizenship concepts, terms and sources to create purposeful descriptions, explanations and arguments",
      "B": "use of civics and citizenship concepts, terms and sources to create effective descriptions, explanations and arguments",
      "C": "use of civics and citizenship concepts, terms and sources to create descriptions, explanations and arguments",
      "D": "use of civics and citizenship concepts, terms and sources to create simple descriptions, explanations and/or arguments",
      "E": "use of civics and citizenship concepts, terms and sources to create fragmented descriptions, explanations and/or arguments"
    }
  },
  {
    "id": "hpe-y910-identities",
    "orderIndex": 1,
    "learningArea": "Health & Physical Education",
    "subject": "Health & Physical Education",
    "yearLevel": "Years 9\u201310",
    "strand": "Personal, social and community health",
    "subStrand": "",
    "descriptors": {
      "A": "considered proposal and evaluation of personal strategies to manage their identities, emotions and responses to change",
      "B": "informed proposal and evaluation of personal strategies to manage their identities, emotions and responses to change",
      "C": "proposal and evaluation of personal strategies to manage their identities, emotions and responses to change",
      "D": "proposal and description of personal strategies to manage their identities, emotions and/or responses to change",
      "E": "identification of strategies to manage identities, emotions and/or responses to change"
    }
  },
  {
    "id": "hpe-y910-relationships",
    "orderIndex": 2,
    "learningArea": "Health & Physical Education",
    "subject": "Health & Physical Education",
    "yearLevel": "Years 9\u201310",
    "strand": "Personal, social and community health",
    "subStrand": "",
    "descriptors": {
      "A": "considered evaluation of how attitudes and beliefs about equality, respect, diversity and inclusion influence the nature and quality of relationships",
      "B": "informed evaluation of how attitudes and beliefs about equality, respect, diversity and inclusion influence the nature and quality of relationships",
      "C": "evaluation of how attitudes and beliefs about equality, respect, diversity and inclusion influence the nature and quality of relationships",
      "D": "explanation of how attitudes and beliefs about equality, respect, diversity and/or inclusion influence the nature and quality of relationships",
      "E": "statement/s about equality, respect, diversity and/or inclusion in relationships"
    }
  },
  {
    "id": "hpe-y910-safety-risks",
    "orderIndex": 3,
    "learningArea": "Health & Physical Education",
    "subject": "Health & Physical Education",
    "yearLevel": "Years 9\u201310",
    "strand": "Personal, social and community health",
    "subStrand": "",
    "descriptors": {
      "A": "considered proposal and justification of strategies to manage online and offline situations where their own or others\u2019 health, safety, relationships or wellbeing may be at risk",
      "B": "informed proposal and justification of strategies to manage online and offline situations where their own or others\u2019 health, safety, relationships or wellbeing may be at risk",
      "C": "proposal and justification of strategies to manage online and offline situations where their own or others\u2019 health, safety, relationships or wellbeing may be at risk",
      "D": "proposal and description of strategies to manage online and offline situations where their own or others\u2019 health, safety, relationships or wellbeing may be at risk",
      "E": "identification of strategies to manage online and/or offline situations where their own or others\u2019 health, safety, relationships or wellbeing may be at risk"
    }
  },
  {
    "id": "hpe-y910-health-info",
    "orderIndex": 4,
    "learningArea": "Health & Physical Education",
    "subject": "Health & Physical Education",
    "yearLevel": "Years 9\u201310",
    "strand": "Personal, social and community health",
    "subStrand": "",
    "descriptors": {
      "A": "considered proposal and justification of strategies to enhance their own and others\u2019 health, safety, relationships and wellbeing through synthesis of health information from credible sources",
      "B": "informed proposal and justification of strategies to enhance their own and others\u2019 health, safety, relationships and wellbeing through synthesis of health information from credible sources",
      "C": "proposal and justification of strategies to enhance their own and others\u2019 health, safety, relationships and wellbeing through synthesis of health information from credible sources",
      "D": "proposal and description of strategies to enhance their own and others\u2019 health, safety, relationships and/or wellbeing through use of health information",
      "E": "identification of strategies to enhance their own and others\u2019 health, safety, relationships and/or wellbeing"
    }
  },
  {
    "id": "hpe-y910-movement-concepts",
    "orderIndex": 5,
    "learningArea": "Health & Physical Education",
    "subject": "Health & Physical Education",
    "yearLevel": "Years 9\u201310",
    "strand": "Movement and physical activity",
    "subStrand": "",
    "descriptors": {
      "A": "considered evaluation and purposeful refinement of their own and others\u2019 movement skills and performances; purposeful application of movement concepts in challenging or unfamiliar situations",
      "B": "informed evaluation and effective refinement of their own and others\u2019 movement skills and performances; effective application of movement concepts in challenging or unfamiliar situations",
      "C": "evaluation and refinement of their own and others\u2019 movement skills and performances; application of movement concepts in challenging or unfamiliar situations",
      "D": "partial evaluation and variable refinement of their own and others\u2019 movement skills and performances; variable application of movement concepts in challenging or unfamiliar situations",
      "E": "description and basic refinement of their own and others\u2019 movement skills and performances; isolated application of movement concepts in challenging or unfamiliar situations"
    }
  },
  {
    "id": "hpe-y910-movement-strategies",
    "orderIndex": 6,
    "learningArea": "Health & Physical Education",
    "subject": "Health & Physical Education",
    "yearLevel": "Years 9\u201310",
    "strand": "Movement and physical activity",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful adaptation and transfer of movement strategies to unfamiliar situations to achieve successful outcomes",
      "B": "effective adaptation and transfer of movement strategies to unfamiliar situations to achieve successful outcomes",
      "C": "adaptation and transfer of movement strategies to unfamiliar situations to achieve successful outcomes",
      "D": "variable adaptation and transfer of movement strategies to unfamiliar situations",
      "E": "isolated adaptation and transfer of movement strategies to unfamiliar situations"
    }
  },
  {
    "id": "hpe-y910-interventions",
    "orderIndex": 7,
    "learningArea": "Health & Physical Education",
    "subject": "Health & Physical Education",
    "yearLevel": "Years 9\u201310",
    "strand": "Movement and physical activity",
    "subStrand": "",
    "descriptors": {
      "A": "considered proposal and evaluation of community-based physical activity interventions designed to improve the health, fitness and wellbeing of themselves and others",
      "B": "informed proposal and evaluation of community-based physical activity interventions designed to improve the health, fitness and wellbeing of themselves and others",
      "C": "proposal and evaluation of community-based physical activity interventions designed to improve the health, fitness and wellbeing of themselves and others",
      "D": "proposal and description of community-based physical activity interventions designed to improve the health, fitness and/or wellbeing of themselves and others",
      "E": "identification of community-based physical activity interventions designed to improve health, fitness and/or wellbeing"
    }
  },
  {
    "id": "hpe-y910-leadership",
    "orderIndex": 8,
    "learningArea": "Health & Physical Education",
    "subject": "Health & Physical Education",
    "yearLevel": "Years 9\u201310",
    "strand": "Movement and physical activity",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful application and considered evaluation of leadership approaches, collaboration strategies and ethical behaviours across a range of movement contexts",
      "B": "effective application and informed evaluation of leadership approaches, collaboration strategies and ethical behaviours across a range of movement contexts",
      "C": "application and evaluation of leadership approaches, collaboration strategies and ethical behaviours across a range of movement contexts",
      "D": "variable application and description of leadership approaches, collaboration strategies and/or ethical behaviours across movement contexts",
      "E": "isolated application and statement/s about leadership approaches, collaboration strategies and/or ethical behaviours across movement contexts"
    }
  },
  {
    "id": "hpe-y78-identities",
    "orderIndex": 1,
    "learningArea": "Health & Physical Education",
    "subject": "Health & Physical Education",
    "yearLevel": "Years 7\u20138",
    "strand": "Personal, social and community health",
    "subStrand": "",
    "descriptors": {
      "A": "considered analysis of factors that influence identities, emotions and responses to change; thorough description of strategies to respond to these influences",
      "B": "informed analysis of factors that influence identities, emotions and responses to change; detailed description of strategies to respond to these influences",
      "C": "analysis of factors that influence identities, emotions and responses to change; description of strategies to respond to these influences",
      "D": "description of factors that influence identities, emotions and responses to change; partial description of strategies to respond to these influences",
      "E": "identification of factors that influence identities, emotions and responses to change; identification of strategies to respond to these influences"
    }
  },
  {
    "id": "hpe-y78-relationships",
    "orderIndex": 2,
    "learningArea": "Health & Physical Education",
    "subject": "Health & Physical Education",
    "yearLevel": "Years 7\u20138",
    "strand": "Personal, social and community health",
    "subStrand": "",
    "descriptors": {
      "A": "considered analysis of how stereotypes, respect, empathy and valuing diversity influence relationships",
      "B": "informed analysis of how stereotypes, respect, empathy and valuing diversity influence relationships",
      "C": "analysis of how stereotypes, respect, empathy and valuing diversity influence relationships",
      "D": "description of stereotypes, respect, empathy and/or diversity in relationships",
      "E": "statement/s about stereotypes, respect, empathy and/or diversity in relationships"
    }
  },
  {
    "id": "hpe-y78-assertive",
    "orderIndex": 3,
    "learningArea": "Health & Physical Education",
    "subject": "Health & Physical Education",
    "yearLevel": "Years 7\u20138",
    "strand": "Personal, social and community health",
    "subStrand": "",
    "descriptors": {
      "A": "considered analysis of the effectiveness of assertive communication strategies, protective behaviours and help-seeking strategies applied online and offline",
      "B": "informed analysis of the effectiveness of assertive communication strategies, protective behaviours and help-seeking strategies applied online and offline",
      "C": "analysis of the effectiveness of assertive communication strategies, protective behaviours and help-seeking strategies applied online and offline",
      "D": "description of assertive communication strategies, protective behaviours and/or help-seeking strategies applied online and offline",
      "E": "statement/s about communication strategies, protective behaviours and/or help-seeking strategies"
    }
  },
  {
    "id": "hpe-y78-health-messages",
    "orderIndex": 4,
    "learningArea": "Health & Physical Education",
    "subject": "Health & Physical Education",
    "yearLevel": "Years 7\u20138",
    "strand": "Personal, social and community health",
    "subStrand": "",
    "descriptors": {
      "A": "thorough analysis of health information and messages to propose strategies that enhance their own and others\u2019 health, safety, relationships and wellbeing",
      "B": "informed analysis of health information and messages to propose strategies that enhance their own and others\u2019 health, safety, relationships and wellbeing",
      "C": "analysis of health information and messages to propose strategies that enhance their own and others\u2019 health, safety, relationships and wellbeing",
      "D": "use of health information and messages to propose strategies that enhance their own and others\u2019 health, safety, relationships and/or wellbeing",
      "E": "statement/s about strategies that enhance their own and others\u2019 health, safety, relationships and/or wellbeing"
    }
  },
  {
    "id": "hpe-y78-movement-skills",
    "orderIndex": 5,
    "learningArea": "Health & Physical Education",
    "subject": "Health & Physical Education",
    "yearLevel": "Years 7\u20138",
    "strand": "Movement and physical activity",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful application and transfer of movement skills and movement concepts across a range of situations",
      "B": "effective application and transfer of movement skills and movement concepts across a range of situations",
      "C": "application and transfer of movement skills and movement concepts across a range of situations",
      "D": "variable application and transfer of movement skills and movement concepts across situations",
      "E": "isolated application and transfer of movement skills and movement concepts across situations"
    }
  },
  {
    "id": "hpe-y78-movement-strategies",
    "orderIndex": 6,
    "learningArea": "Health & Physical Education",
    "subject": "Health & Physical Education",
    "yearLevel": "Years 7\u20138",
    "strand": "Movement and physical activity",
    "subStrand": "",
    "descriptors": {
      "A": "proficient implementation and thorough evaluation of the effectiveness of movement strategies on movement outcomes",
      "B": "effective implementation and informed evaluation of the effectiveness of movement strategies on movement outcomes",
      "C": "implementation and evaluation of the effectiveness of movement strategies on movement outcomes",
      "D": "variable implementation and description of movement strategies and movement outcomes",
      "E": "isolated implementation and statement/s about movement strategies or movement outcomes"
    }
  },
  {
    "id": "hpe-y78-personal-health",
    "orderIndex": 7,
    "learningArea": "Health & Physical Education",
    "subject": "Health & Physical Education",
    "yearLevel": "Years 7\u20138",
    "strand": "Movement and physical activity",
    "subStrand": "",
    "descriptors": {
      "A": "considered proposal of strategies designed to achieve personal health, fitness and wellbeing outcomes; thorough evaluation of strategies designed to achieve personal health, fitness and wellbeing outcomes",
      "B": "effective proposal of strategies designed to achieve personal health, fitness and wellbeing outcomes; informed evaluation of strategies designed to achieve personal health, fitness and wellbeing outcomes",
      "C": "proposal of strategies designed to achieve personal health, fitness and wellbeing outcomes; evaluation of strategies designed to achieve personal health, fitness and wellbeing outcomes",
      "D": "variable proposal of strategies designed to achieve personal health, fitness and/or wellbeing outcomes; description of strategies designed to achieve personal health, fitness and/or wellbeing outcomes",
      "E": "statement/s about strategies designed to achieve personal health, fitness and/or wellbeing outcomes; statement/s about achieving personal health, fitness and/or wellbeing"
    }
  },
  {
    "id": "hpe-y78-fairplay",
    "orderIndex": 8,
    "learningArea": "Health & Physical Education",
    "subject": "Health & Physical Education",
    "yearLevel": "Years 7\u20138",
    "strand": "Movement and physical activity",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful selection, use and refinement of strategies to support inclusion, fair play and collaboration across a range of movement contexts",
      "B": "effective selection, use and refinement of strategies to support inclusion, fair play and collaboration across a range of movement contexts",
      "C": "selection, use and refinement of strategies to support inclusion, fair play and collaboration across a range of movement contexts",
      "D": "variable selection, use and refinement of strategies to support inclusion, fair play and/or collaboration across movement contexts",
      "E": "basic selection, use and refinement of strategies to support inclusion, fair play and/or collaboration across movement contexts"
    }
  },
  {
    "id": "eng-y10-spoken-interact",
    "orderIndex": 1,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 10",
    "strand": "Listening, speaking and creating",
    "subStrand": "",
    "descriptors": {
      "A": "listening to texts including literary and multimodal texts and interacting with others to purposefully: discuss ideas and responses to representations; purposeful creation of spoken texts including literary and multimodal texts including texts with a range of purposes and for audiences through: discussing ideas and responses to representations, making connections, providing substantiation",
      "B": "listening to texts including literary and multimodal texts and interacting with others to: discuss ideas and responses to representations in an informed way; effective creation of spoken texts including literary and multimodal texts including texts with a range of purposes and for audiences through: discussing ideas and responses to representations, making connections, providing substantiation",
      "C": "listening to texts including literary and multimodal texts and interacting with others to: discuss ideas and responses to representations; creation of spoken texts including literary and multimodal texts including texts with a range of purposes and for audiences through: discussing ideas and responses to representations, making connections, providing substantiation",
      "D": "listening to texts including literary and/or multimodal texts and interacting with others to variably: discuss ideas; variable creation of spoken texts including literary and/or multimodal texts including texts with a range of purposes and for audiences through: discussing ideas and responses to representations",
      "E": "listening to texts including literary and/or multimodal texts and interacting with others to sporadically: discuss ideas; sporadic creation of spoken texts including literary and/or multimodal texts including texts with a range of purposes and for audiences through: discussing ideas"
    }
  },
  {
    "id": "eng-y10-spoken-structures",
    "orderIndex": 2,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 10",
    "strand": "Listening, speaking and creating",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful selection and experimentation with text structures to organise and develop ideas",
      "B": "effective selection and experimentation with text structures to organise and develop ideas",
      "C": "selection and experimentation with text structures to organise and develop ideas",
      "D": "selection of aspects of text structures to organise and develop ideas",
      "E": "use of fragmented text structures to organise ideas"
    }
  },
  {
    "id": "eng-y10-spoken-features",
    "orderIndex": 3,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 10",
    "strand": "Listening, speaking and creating",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful selection, variation and experimentation with language features including rhetorical and literary devices; considered experimentation with multimodal features; considered experimentation with features of voice",
      "B": "effective selection, variation and experimentation with language features including rhetorical and literary devices; informed experimentation with multimodal features; informed experimentation with features of voice",
      "C": "selection, variation and experimentation with language features including rhetorical and literary devices; experimentation with multimodal features; experimentation with features of voice",
      "D": "selection and variation of aspects of language features; experimentation with aspects of multimodal features; experimentation with aspects of features of voice",
      "E": "isolated selection and use of language features; fragmented use of multimodal features; isolated use of features of voice"
    }
  },
  {
    "id": "eng-y10-reading-comprehend",
    "orderIndex": 4,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 10",
    "strand": "Reading and viewing",
    "subStrand": "",
    "descriptors": {
      "A": "reading, viewing and comprehending a range of texts created to inform, influence and engage audiences through thorough analysis and evaluation of: representations of people, places, events and concepts; how interpretations of representations may be influenced by readers and viewers",
      "B": "reading, viewing and comprehending a range of texts created to inform, influence and engage audiences through detailed analysis and evaluation of: representations of people, places, events and concepts; how interpretations of representations may be influenced by readers and viewers",
      "C": "reading, viewing and comprehending a range of texts created to inform, influence and engage audiences through analysis and evaluation of: representations of people, places, events and concepts; how interpretations of representations may be influenced by readers and viewers",
      "D": "reading, viewing and comprehending a range of texts created to inform, influence and engage audiences through explanation of: representations of people and/or places and/or events; how interpretations of representations may be influenced by readers and viewers",
      "E": "reading, viewing and comprehending a range of texts created to inform, influence and engage audiences through statement/s about: representations of people and/or places and/or events"
    }
  },
  {
    "id": "eng-y10-reading-structures",
    "orderIndex": 5,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 10",
    "strand": "Reading and viewing",
    "subStrand": "",
    "descriptors": {
      "A": "thorough analysis of the effects of text structures and their contribution to the aesthetic qualities of texts",
      "B": "detailed analysis of the effects of text structures and their contribution to the aesthetic qualities of texts",
      "C": "analysis of the effects of text structures and their contribution to the aesthetic qualities of texts",
      "D": "explanation of the effects of text structures and their contribution to the aesthetic qualities of texts",
      "E": "statement/s about text structures and the aesthetic qualities of texts"
    }
  },
  {
    "id": "eng-y10-reading-language",
    "orderIndex": 6,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 10",
    "strand": "Reading and viewing",
    "subStrand": "",
    "descriptors": {
      "A": "thorough analysis of the effects of language features including literary devices, intertextual connections, and multimodal features and their contribution to the aesthetic qualities of texts",
      "B": "detailed analysis of the effects of language features including literary devices, intertextual connections, and multimodal features and their contribution to the aesthetic qualities of texts",
      "C": "analysis of the effects of language features including literary devices, intertextual connections, and multimodal features and their contribution to the aesthetic qualities of texts",
      "D": "explanation of the effects of language features and/or multimodal features and their contribution to the aesthetic qualities of texts",
      "E": "statement/s about language features and/or multimodal features and their contribution to the aesthetic qualities of texts"
    }
  },
  {
    "id": "eng-y10-writing-create",
    "orderIndex": 7,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 10",
    "strand": "Writing and creating",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful creation of written and multimodal texts, including literary texts, for a range of purposes and audiences through: expressing ideas and representations, making connections; providing substantiation",
      "B": "effective creation of written and multimodal texts, including literary texts, for a range of purposes and audiences through: expressing ideas and representations, making connections; providing substantiation",
      "C": "creation of written and multimodal texts, including literary texts, for a range of purposes and audiences by: expressing ideas and representations, making connections; providing substantiation",
      "D": "variable creation of written and multimodal texts, including literary texts, for a range of purposes and audiences through: expressing ideas and representations, making connections; providing substantiation",
      "E": "sporadic creation of written and multimodal texts, including literary texts, for a range of purposes and audiences through: expressing ideas"
    }
  },
  {
    "id": "eng-y10-writing-structures",
    "orderIndex": 8,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 10",
    "strand": "Writing and creating",
    "subStrand": "",
    "descriptors": {
      "A": "considered selection and experimentation with text structures to organise, develop and link ideas and representations",
      "B": "informed selection and experimentation with text structures to organise, develop and link ideas and representations",
      "C": "selection and experimentation with text structures to organise, develop and link ideas and representations",
      "D": "selection of aspects of text structures to organise, develop and link ideas",
      "E": "use of fragmented text structures to organise ideas"
    }
  },
  {
    "id": "eng-y10-writing-language",
    "orderIndex": 9,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 10",
    "strand": "Writing and creating",
    "subStrand": "",
    "descriptors": {
      "A": "considered selection, variation and experimentation with language features including literary devices; considered experimentation with multimodal features",
      "B": "informed selection, variation and experimentation with language features including literary devices; informed experimentation with multimodal features",
      "C": "selection, variation and experimentation with language features including literary devices; experimentation with multimodal features",
      "D": "selection and variation of aspects of language features; experimentation with aspects of multimodal features",
      "E": "isolated selection and variation of language features; isolated use of multimodal features"
    }
  },
  {
    "id": "eng-y9-spoken-interact",
    "orderIndex": 1,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 9",
    "strand": "Listening, speaking and creating",
    "subStrand": "",
    "descriptors": {
      "A": "listening to texts including literary and multimodal texts and interacting with others to purposefully discuss and expand on ideas, shaping meaning; purposeful creation of spoken texts including literary and multimodal texts including texts for a range of purposes and for audiences through: expanding on ideas, shaping meaning; providing substantiation",
      "B": "listening to texts including literary and multimodal texts and interacting with others to discuss and expand on ideas in an informed way, shaping meaning; effective creation of spoken texts including literary and multimodal texts including texts for a range of purposes and for audiences through: expanding on ideas, shaping meaning; providing substantiation",
      "C": "listening to texts including literary and multimodal texts and interacting with others to discuss and expand on ideas, shaping meaning; creation of spoken texts including literary and multimodal texts including texts for a range of purposes and for audiences through: expanding on ideas, shaping meaning; providing substantiation",
      "D": "listening to texts including literary and/or multimodal texts and interacting with others to variably discuss and expand on ideas; variable creation of spoken texts including literary and/or multimodal texts including texts for a range of purposes and for audiences through: expanding on ideas, shaping meaning; providing substantiation",
      "E": "listening to texts including literary and/or multimodal texts and interacting with others to sporadically discuss ideas; sporadic creation of spoken texts and/or multimodal texts including texts for a range of purposes and for audiences through: expanding on ideas"
    }
  },
  {
    "id": "eng-y9-spoken-structures",
    "orderIndex": 2,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 9",
    "strand": "Listening, speaking and creating",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful selection and experimentation with text structures to organise and develop ideas",
      "B": "effective selection and experimentation with text structures to organise and develop ideas",
      "C": "selection and experimentation with text structures to organise and develop ideas",
      "D": "selection of aspects of text structures to organise and develop ideas",
      "E": "use of fragmented text structures to organise ideas"
    }
  },
  {
    "id": "eng-y9-spoken-features",
    "orderIndex": 3,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 9",
    "strand": "Listening, speaking and creating",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful selection and experimentation with language features including literary devices; considered experimentation with multimodal features; considered selection and experimentation with features of voice",
      "B": "effective selection and experimentation with language features including literary devices; informed experimentation with multimodal features; informed selection and experimentation with features of voice",
      "C": "selection and experimentation with language features including literary devices; experimentation with multimodal features; experimentation with features of voice",
      "D": "selection and experimentation with aspects of language features; experimentation with aspects of multimodal features; variable use of features of voice",
      "E": "sporadic selection of language features; fragmented use of multimodal features; sporadic use of features of voice"
    }
  },
  {
    "id": "eng-y9-reading-comprehend",
    "orderIndex": 4,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 9",
    "strand": "Reading and viewing",
    "subStrand": "",
    "descriptors": {
      "A": "reading, viewing and comprehending a range of texts created to inform, influence and/or engage audiences through considered analysis of: representations of people, places, events and concepts; how texts respond to contexts; aesthetic qualities of texts",
      "B": "reading, viewing and comprehending a range of texts created to inform, influence and/or engage audiences through effective analysis of: representations of people, places, events and concepts; how texts respond to contexts; aesthetic qualities of texts",
      "C": "reading, viewing and comprehending a range of texts created to inform, influence and/or engage audiences through analysis of: representations of people, places, events and concepts; how texts respond to contexts; aesthetic qualities of texts",
      "D": "reading, viewing and comprehending a range of texts created to inform, influence and/or engage audiences through explanation of: representations of people and/or places and/or events and/or concepts; how texts respond to contexts; aesthetic qualities of texts",
      "E": "reading, viewing and comprehending a range of texts created to inform, influence and/or engage audiences through statement/s about: representations of people and/or places and/or events and/or concepts; texts and their contexts; aesthetic qualities of texts"
    }
  },
  {
    "id": "eng-y9-reading-structures",
    "orderIndex": 5,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 9",
    "strand": "Reading and viewing",
    "subStrand": "",
    "descriptors": {
      "A": "considered analysis of the effects of text structures",
      "B": "effective analysis of the effects of text structures",
      "C": "analysis of the effects of text structures",
      "D": "explanation of the effects of text structures",
      "E": "statement/s about the effects of text structures"
    }
  },
  {
    "id": "eng-y9-reading-language",
    "orderIndex": 6,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 9",
    "strand": "Reading and viewing",
    "subStrand": "",
    "descriptors": {
      "A": "considered analysis of the effects of language features including literary devices, intertextual references, and multimodal features",
      "B": "effective analysis of the effects of language features including literary devices, intertextual references, and multimodal features",
      "C": "analysis of the effects of language features including literary devices, intertextual references, and multimodal features",
      "D": "explanation of the effects of language features and multimodal features",
      "E": "statement/s about the effects of language features and multimodal features"
    }
  },
  {
    "id": "eng-y9-writing-create",
    "orderIndex": 7,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 9",
    "strand": "Writing and creating",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful creation of written and multimodal texts, including literary texts, for a range of purposes and audiences through: expression and expansion of ideas, shaping meaning; providing substantiation",
      "B": "effective creation of written and multimodal texts, including literary texts, for a range of purposes and audiences through: expression and expansion of ideas, shaping meaning; providing substantiation",
      "C": "creation of written and multimodal texts, including literary texts, for a range of purposes and audiences through: expression and expansion of ideas, shaping meaning; providing substantiation",
      "D": "variable creation of written and multimodal texts, including literary texts, for a range of purposes and audiences through: expression and expansion of ideas, shaping meaning",
      "E": "sporadic creation of written and/or multimodal texts for a range of purposes and audiences through: expression of ideas"
    }
  },
  {
    "id": "eng-y9-writing-structures",
    "orderIndex": 8,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 9",
    "strand": "Writing and creating",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful selection and experimentation with text structures to organise, develop and link ideas",
      "B": "effective selection and experimentation with text structures to organise, develop and link ideas",
      "C": "selection and experimentation with text structures to organise, develop and link ideas",
      "D": "variable selection and experimentation with text structures to organise and develop ideas",
      "E": "use of fragmented text structures to organise ideas"
    }
  },
  {
    "id": "eng-y9-writing-language",
    "orderIndex": 9,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 9",
    "strand": "Writing and creating",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful selection and experimentation with language features including literary devices; considered experimentation with multimodal features",
      "B": "effective selection and experimentation with language features including literary devices; effective experimentation with multimodal features",
      "C": "selection and experimentation with language features including literary devices; experimentation with multimodal features",
      "D": "selection of aspects of language features; experimentation with aspects of multimodal features",
      "E": "sporadic selection of language features; sporadic use of multimodal features"
    }
  },
  {
    "id": "eng-y8-spoken-interact",
    "orderIndex": 1,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 8",
    "strand": "Listening, speaking and creating",
    "subStrand": "",
    "descriptors": {
      "A": "listening to texts including literary and/or multimodal texts and interacting with others to purposefully discuss, express and elaborate on ideas with supporting evidence; purposeful creation of spoken texts, including literary and/or multimodal texts, for different purposes and audiences through: expression and elaboration of ideas with supporting evidence",
      "B": "listening to texts including literary and/or multimodal texts and interacting with others to effectively discuss, express and elaborate on ideas with supporting evidence; effective creation of spoken texts, including literary and/or multimodal texts, for different purposes and audiences through: expression and elaboration of ideas with supporting evidence",
      "C": "listening to texts including literary and/or multimodal texts and interacting with others to discuss, express and elaborate on ideas with supporting evidence; creation of spoken texts, including literary and/or multimodal texts, for different purposes and audiences through the expression and elaboration of ideas with supporting evidence",
      "D": "listening to texts including literary and/or multimodal texts and interacting with others to variably discuss, express and elaborate on ideas; variable creation of spoken texts and/or multimodal texts for different purposes and audiences through: expression of ideas and evidence",
      "E": "listening to texts including literary and/or multimodal texts and interacting with others to state ideas; creation of spoken texts and/or multimodal texts for different purposes and audiences through statement/s of ideas"
    }
  },
  {
    "id": "eng-y8-spoken-structures",
    "orderIndex": 2,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 8",
    "strand": "Listening, speaking and creating",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful selection and variation of text structures to organise, develop and link ideas",
      "B": "effective selection and variation of text structures to organise, develop and link ideas",
      "C": "selection and variation of text structures to organise, develop and link ideas",
      "D": "selection of aspects of text structures to organise ideas",
      "E": "use of fragmented text structures to organise ideas"
    }
  },
  {
    "id": "eng-y8-spoken-features",
    "orderIndex": 3,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 8",
    "strand": "Listening, speaking and creating",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful selection and variation of language features including literary devices, and/or multimodal features; considered selection and variation of features of voice",
      "B": "effective selection and variation of language features including literary devices, and/or multimodal features; informed selection and variation of features of voice",
      "C": "selection and variation of language features including literary devices, and/or multimodal features; selection and variation of features of voice",
      "D": "selection of aspects of language features and/or multimodal features; selection of aspects of features of voice",
      "E": "sporadic use of language features and/or multimodal features; sporadic use of features of voice"
    }
  },
  {
    "id": "eng-y8-reading-comprehend",
    "orderIndex": 4,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 8",
    "strand": "Reading and viewing",
    "subStrand": "",
    "descriptors": {
      "A": "reading, viewing and comprehending a range of texts created to inform, influence and/or engage audiences through considered explanation of: how ideas are represented; how texts reflect or challenge contexts; the aesthetic qualities of texts",
      "B": "reading, viewing and comprehending a range of texts created to inform, influence and/or engage audiences through effective explanation of: how ideas are represented; how texts reflect or challenge contexts; the aesthetic qualities of texts",
      "C": "reading, viewing and comprehending a range of texts created to inform, influence and/or engage audiences through the explanation of: how ideas are represented; how texts reflect or challenge contexts; the aesthetic qualities of texts",
      "D": "reading, viewing and comprehending texts created to inform, influence and/or engage audiences through identification of: how ideas are represented; how texts reflect or challenge contexts; the aesthetic qualities of texts",
      "E": "reading, viewing and comprehending a range of texts created to inform, influence and/or engage audiences through statement/s about: ideas represented in texts; texts and their contexts; the aesthetic qualities of texts"
    }
  },
  {
    "id": "eng-y8-reading-structures",
    "orderIndex": 5,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 8",
    "strand": "Reading and viewing",
    "subStrand": "",
    "descriptors": {
      "A": "considered explanation of how text structures shape meaning",
      "B": "effective explanation of how text structures shape meaning",
      "C": "explanation of how text structures shape meaning",
      "D": "description of aspects of text structures",
      "E": "identification of text structures"
    }
  },
  {
    "id": "eng-y8-reading-language",
    "orderIndex": 6,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 8",
    "strand": "Reading and viewing",
    "subStrand": "",
    "descriptors": {
      "A": "considered explanation of the effects of language features including intertextual references and literary devices, and visual features",
      "B": "effective explanation of the effects of language features including intertextual references and literary devices, and visual features",
      "C": "explanation of the effects of language features including intertextual references and literary devices, and visual features",
      "D": "variable explanation of language features including literary devices, and visual features",
      "E": "statement/s about language features including literary devices, and visual features"
    }
  },
  {
    "id": "eng-y8-writing-create",
    "orderIndex": 7,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 8",
    "strand": "Writing and creating",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful creation of written and/or multimodal texts, including literary texts for different purposes and audiences through: expression and advancement of ideas with supporting evidence",
      "B": "effective creation of written and/or multimodal texts, including literary texts for different purposes and audiences through: expression and advancement of ideas with supporting evidence",
      "C": "creation of written and/or multimodal texts, including literary texts for different purposes and audiences through: expression and advancement of ideas with supporting evidence",
      "D": "variable creation of written and/or multimodal texts, including literary texts for different purposes and audiences through: expression and advancement of ideas",
      "E": "creation of written and/or multimodal texts for different purposes and audiences through statement/s of ideas"
    }
  },
  {
    "id": "eng-y8-writing-structures",
    "orderIndex": 8,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 8",
    "strand": "Writing and creating",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful selection and variation of text structures to organise, develop and link ideas",
      "B": "effective selection and variation of text structures to organise, develop and link ideas",
      "C": "selection and variation of text structures to organise, develop and link ideas",
      "D": "selection of aspects of text structures to organise and link ideas",
      "E": "use of fragmented text structures to organise ideas"
    }
  },
  {
    "id": "eng-y8-writing-language",
    "orderIndex": 9,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 8",
    "strand": "Writing and creating",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful selection and variation of language features including literary devices, and/or multimodal features",
      "B": "effective selection and variation of language features including literary devices, and/or multimodal features",
      "C": "selection and variation of language features including literary devices, and/or multimodal features",
      "D": "selection of aspects of language features and/or multimodal features",
      "E": "sporadic use of language features and/or multimodal features"
    }
  },
  {
    "id": "eng-y7-spoken-interact",
    "orderIndex": 1,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 7",
    "strand": "Listening, speaking and creating",
    "subStrand": "",
    "descriptors": {
      "A": "listening to texts including literary and/or multimodal texts and interacting with others to purposefully discuss, express and expand ideas with evidence; purposeful creation of spoken texts including literary and/or multimodal texts including texts with different purposes and for audiences through: expression and expansion of ideas with evidence",
      "B": "listening to texts including literary and/or multimodal texts and interacting with others to discuss, express and expand ideas with evidence in an informed way; effective creation of spoken texts including literary and/or multimodal texts including texts with different purposes and for audiences through: expression and expansion of ideas with evidence",
      "C": "listening to texts including literary and/or multimodal texts and interacting with others to discuss, express and expand ideas with evidence; creation of spoken texts including literary and/or multimodal texts including texts with different purposes and for audiences through: expression and expansion of ideas with evidence",
      "D": "listening to texts including literary and/or multimodal texts and interacting with others to variably discuss, express and expand ideas; variable creation of spoken texts including literary and/or multimodal texts including texts with different purposes and for audiences through: expression and expansion of ideas",
      "E": "listening to texts including literary and/or multimodal texts and interacting with others to state ideas; creation of spoken texts including literary and/or multimodal texts including texts with different purposes and for audiences through statement/s of ideas"
    }
  },
  {
    "id": "eng-y7-spoken-structures",
    "orderIndex": 2,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 7",
    "strand": "Listening, speaking and creating",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful adoption of text structures to organise, develop and link ideas",
      "B": "effective adoption of text structures to organise, develop and link ideas",
      "C": "adoption of text structures to organise, develop and link ideas",
      "D": "adoption of aspects of text structures to organise, develop and link ideas",
      "E": "adoption of fragmented text structures to organise ideas"
    }
  },
  {
    "id": "eng-y7-spoken-features",
    "orderIndex": 3,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 7",
    "strand": "Listening, speaking and creating",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful adoption of language features including literary devices, and/or multimodal features; considered adoption of features of voice",
      "B": "effective adoption of language features including literary devices, and/or multimodal features; informed adoption of features of voice",
      "C": "adoption of language features including literary devices, and/or multimodal features; adoption of features of voice",
      "D": "adoption of aspects of language features including literary devices, and/or multimodal features; adoption of aspects of features of voice",
      "E": "sporadic adoption of language features including literary devices, and/or multimodal features; sporadic adoption of features of voice"
    }
  },
  {
    "id": "eng-y7-reading-comprehend",
    "orderIndex": 4,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 7",
    "strand": "Reading and viewing",
    "subStrand": "",
    "descriptors": {
      "A": "reading, viewing and comprehending texts created to inform, influence and/or engage audiences through considered identification of: how ideas are portrayed; how texts are influenced by contexts; the aesthetic qualities of texts",
      "B": "reading, viewing and comprehending texts created to inform, influence and/or engage audiences through informed identification of: how ideas are portrayed; how texts are influenced by contexts; the aesthetic qualities of texts",
      "C": "reading, viewing and comprehending texts created to inform, influence and/or engage audiences through identification of: how ideas are portrayed; how texts are influenced by contexts; the aesthetic qualities of texts",
      "D": "reading, viewing and comprehending texts created to inform, influence and/or engage audiences through identification of aspects of: how ideas are portrayed; how texts are influenced by contexts; the aesthetic qualities of texts",
      "E": "reading, viewing and comprehending texts created to inform, influence and/or engage audiences through sporadic identification of: ideas; texts and their contexts; the aesthetic qualities of texts"
    }
  },
  {
    "id": "eng-y7-reading-structures",
    "orderIndex": 5,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 7",
    "strand": "Reading and viewing",
    "subStrand": "",
    "descriptors": {
      "A": "considered identification of how text structures shape meaning",
      "B": "informed identification of how text structures shape meaning",
      "C": "identification of how text structures shape meaning",
      "D": "identification of aspects of text structures",
      "E": "statement/s about text structures"
    }
  },
  {
    "id": "eng-y7-reading-language",
    "orderIndex": 6,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 7",
    "strand": "Reading and viewing",
    "subStrand": "",
    "descriptors": {
      "A": "considered identification of how language features including literary devices and visual features shape meaning",
      "B": "informed identification of how language features including literary devices and visual features shape meaning",
      "C": "identification of how language features including literary devices and visual features shape meaning",
      "D": "variable identification of how language features including literary devices and visual features shape meaning",
      "E": "statement/s about language features and visual features"
    }
  },
  {
    "id": "eng-y7-writing-create",
    "orderIndex": 7,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 7",
    "strand": "Writing and creating",
    "subStrand": "",
    "descriptors": {
      "A": "purposeful creation of written and/or multimodal texts, including literary texts, for different purposes and audiences through: expression and expansion on ideas with evidence",
      "B": "effective creation of written and/or multimodal texts, including literary texts, for different purposes and audiences through: expression and expansion on ideas with evidence",
      "C": "creation of written and/or multimodal texts, including literary texts, for different purposes and audiences through: expression and expansion on ideas with evidence",
      "D": "variable creation of written and/or multimodal texts, including literary texts, for different purposes and audiences through: expression of ideas with evidence",
      "E": "creation of written and/or multimodal texts through statement/s of ideas"
    }
  },
  {
    "id": "eng-y7-writing-structures",
    "orderIndex": 8,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 7",
    "strand": "Writing and creating",
    "subStrand": "",
    "descriptors": {
      "A": "considered adoption of text structures to organise, develop and link ideas",
      "B": "effective adoption of text structures to organise, develop and link ideas",
      "C": "adoption of text structures to organise, develop and link ideas",
      "D": "adoption of aspects of text structures to organise, develop and link ideas",
      "E": "adoption of fragmented text structures to organise ideas"
    }
  },
  {
    "id": "eng-y7-writing-language",
    "orderIndex": 9,
    "learningArea": "English",
    "subject": "English",
    "yearLevel": "Year 7",
    "strand": "Writing and creating",
    "subStrand": "",
    "descriptors": {
      "A": "considered adoption of language features including literary devices, and/or multimodal features",
      "B": "effective adoption of language features including literary devices, and/or multimodal features",
      "C": "adoption of language features including literary devices, and/or multimodal features",
      "D": "adoption of aspects of language features and/or multimodal features",
      "E": "sporadic adoption of language features and/or multimodal features"
    }
  },
  {
    "id": "tech-la-y78-society",
    "orderIndex": 1,
    "learningArea": "Technologies",
    "subject": "Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Knowledge and understanding",
    "subStrand": "Technologies and society",
    "descriptors": {
      "A": "discerning explanation of how people design, innovate and produce products, services and environments for preferred futures",
      "B": "detailed explanation of how people design, innovate and produce products, services and environments for preferred futures",
      "C": "explanation of how people design, innovate and produce products, services and environments for preferred futures",
      "D": "description of how people design, innovate and produce products, services and environments for preferred futures",
      "E": "statement/s about how people design, innovate and/or produce designed solutions"
    }
  },
  {
    "id": "tech-la-y78-contexts",
    "orderIndex": 2,
    "learningArea": "Technologies",
    "subject": "Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Knowledge and understanding",
    "subStrand": "Technologies contexts",
    "descriptors": {
      "A": "discerning explanation of how the features of technologies impact on design decisions for each of the 4 prescribed technologies contexts: Engineering principles and systems, Food and fibre production, Food specialisations, Materials and technologies specialisations",
      "B": "detailed explanation of how the features of technologies impact on design decisions for each of the 4 prescribed technologies contexts: Engineering principles and systems, Food and fibre production, Food specialisations, Materials and technologies specialisations",
      "C": "explanation of how the features of technologies impact on design decisions for each of the 4 prescribed technologies contexts: Engineering principles and systems, Food and fibre production, Food specialisations, Materials and technologies specialisations",
      "D": "description of how the features of technologies impact on design decisions for each of the 4 prescribed technologies contexts: Engineering principles and systems, Food and fibre production, Food specialisations, Materials and technologies specialisations",
      "E": "statement/s about the features of technologies for one or more of the 4 prescribed technologies contexts: Engineering principles and systems, Food and fibre production, Food specialisations, Materials and technologies specialisations"
    }
  },
  {
    "id": "tech-la-y78-hardware",
    "orderIndex": 3,
    "learningArea": "Technologies",
    "subject": "Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Knowledge and understanding",
    "subStrand": "Digital systems",
    "descriptors": {
      "A": "proficient selection of appropriate hardware for particular tasks",
      "B": "effective selection of appropriate hardware for particular tasks",
      "C": "selection of appropriate hardware for particular tasks",
      "D": "guided selection of appropriate hardware for particular tasks",
      "E": "directed selection of appropriate hardware for particular tasks"
    }
  },
  {
    "id": "tech-la-y78-networks",
    "orderIndex": 4,
    "learningArea": "Technologies",
    "subject": "Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Knowledge and understanding",
    "subStrand": "Digital systems",
    "descriptors": {
      "A": "considered explanation of how data is transmitted and secured in networks",
      "B": "detailed explanation of how data is transmitted and secured in networks",
      "C": "explanation of how data is transmitted and secured in networks",
      "D": "description of how data is transmitted and/or secured in networks",
      "E": "statement/s about data transmission and/or security"
    }
  },
  {
    "id": "tech-la-y78-binary",
    "orderIndex": 5,
    "learningArea": "Technologies",
    "subject": "Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Knowledge and understanding",
    "subStrand": "Data representation",
    "descriptors": {
      "A": "reasoned representation of data with integers and binary",
      "B": "effective representation of data with integers and binary",
      "C": "representation of data with integers and binary",
      "D": "partial representation of data with integers and binary",
      "E": "fragmented representation of data with integers and/or binary"
    }
  },
  {
    "id": "tech-la-y78-spreadsheets",
    "orderIndex": 6,
    "learningArea": "Technologies",
    "subject": "Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Acquiring, managing and analysing data",
    "descriptors": {
      "A": "proficient acquisition, interpretation and modelling with spreadsheets",
      "B": "effective acquisition, interpretation and modelling with spreadsheets",
      "C": "acquisition, interpretation and modelling with spreadsheets",
      "D": "partial acquisition, interpretation and/or modelling with spreadsheets",
      "E": "fragmented acquisition, interpretation and/or modelling with spreadsheets"
    }
  },
  {
    "id": "tech-la-y78-needs",
    "orderIndex": 7,
    "learningArea": "Technologies",
    "subject": "Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Investigating and defining",
    "descriptors": {
      "A": "proficient analysis of needs or opportunities for each of the 4 prescribed technologies contexts: Engineering principles and systems, Food and fibre production, Food specialisations, Materials and technologies specialisations",
      "B": "effective analysis of needs or opportunities for each of the 4 prescribed technologies contexts: Engineering principles and systems, Food and fibre production, Food specialisations, Materials and technologies specialisations",
      "C": "analysis of needs or opportunities for each of the 4 prescribed technologies contexts: Engineering principles and systems, Food and fibre production, Food specialisations, Materials and technologies specialisations",
      "D": "superficial analysis of needs or opportunities for each of the 4 prescribed technologies contexts: Engineering principles and systems, Food and fibre production, Food specialisations, Materials and technologies specialisations",
      "E": "identification of needs or opportunities for one or more of the 4 prescribed technologies contexts: Engineering principles and systems, Food and fibre production, Food specialisations, Materials and technologies specialisations"
    }
  },
  {
    "id": "tech-la-y78-algorithms",
    "orderIndex": 8,
    "learningArea": "Technologies",
    "subject": "Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Generating and designing",
    "descriptors": {
      "A": "proficient design and tracing of algorithms",
      "B": "effective design and tracing of algorithms",
      "C": "design and tracing of algorithms",
      "D": "guided design and/or tracing of algorithms",
      "E": "directed design and/or tracing of algorithms"
    }
  },
  {
    "id": "tech-la-y78-design-solutions",
    "orderIndex": 9,
    "learningArea": "Technologies",
    "subject": "Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Generating and designing",
    "descriptors": {
      "A": "proficient creation and adaptation of comprehensive design ideas, processes and solutions based on analysis of needs or opportunities",
      "B": "informed creation and adaptation of effective design ideas, processes and solutions based on analysis of needs or opportunities",
      "C": "creation and adaptation of design ideas, processes and solutions based on analysis of needs or opportunities",
      "D": "partial creation and adaptation of simple design ideas, processes and solutions based on analysis of needs or opportunities",
      "E": "fragmented creation and/or adaptation of basic design ideas, processes and solutions based on needs or opportunities"
    }
  },
  {
    "id": "tech-la-y78-communication",
    "orderIndex": 10,
    "learningArea": "Technologies",
    "subject": "Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Generating and designing",
    "descriptors": {
      "A": "communication of design ideas and solutions to audiences with: considered use of technical terms; comprehensive use of graphical representation techniques, including using digital tools",
      "B": "communication of design ideas and solutions to audiences with: effective use of technical terms; detailed use of graphical representation techniques, including using digital tools",
      "C": "communication of design ideas and solutions to audiences using: technical terms; graphical representation techniques, including using digital tools",
      "D": "communication of design ideas and solutions to audiences with: superficial use of technical terms and/or simple use of graphical representation techniques, including using digital tools",
      "E": "communication of design ideas and solutions to audiences with: fragmented use of technical terms and/or basic use of graphical representation techniques, including using digital tools"
    }
  },
  {
    "id": "tech-la-y78-production-solutions",
    "orderIndex": 11,
    "learningArea": "Technologies",
    "subject": "Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Producing and implementing",
    "descriptors": {
      "A": "proficient, safe and responsible production of designed or digital solutions for the intended purpose",
      "B": "effective, safe and responsible production of designed or digital solutions for the intended purpose",
      "C": "safe and responsible production of designed or digital solutions for the intended purpose",
      "D": "safe and responsible production of aspects of designed or digital solutions for the intended purpose",
      "E": "safe and responsible production of aspects of designed or digital solutions for the intended purpose, with direction"
    }
  },
  {
    "id": "tech-la-y78-prog-implement",
    "orderIndex": 12,
    "learningArea": "Technologies",
    "subject": "Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Producing and implementing",
    "descriptors": {
      "A": "proficient implementation of algorithms in a general-purpose programming language",
      "B": "effective implementation of algorithms in a general-purpose programming language",
      "C": "implementation of algorithms in a general-purpose programming language",
      "D": "partial implementation of algorithms in a general-purpose programming language",
      "E": "directed implementation of algorithms"
    }
  },
  {
    "id": "tech-la-y78-evaluating",
    "orderIndex": 13,
    "learningArea": "Technologies",
    "subject": "Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Evaluating",
    "descriptors": {
      "A": "discerning justification of their decisions against developed design criteria that include sustainability",
      "B": "plausible justification of their decisions against developed design criteria that include sustainability",
      "C": "justification of their decisions against developed design criteria that include sustainability",
      "D": "partial justification of their decisions against aspects of developed design criteria that include sustainability",
      "E": "statement/s about design decisions"
    }
  },
  {
    "id": "tech-la-y78-management",
    "orderIndex": 14,
    "learningArea": "Technologies",
    "subject": "Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Collaborating and managing",
    "descriptors": {
      "A": "individual and collaborative: comprehensive documentation; proficient management of production processes using a range of digital tools",
      "B": "individual and collaborative: detailed documentation; effective management of production processes using a range of digital tools",
      "C": "individual and collaborative documentation and management of production processes using a range of digital tools",
      "D": "individual and collaborative: partial documentation; guided management of production processes using digital tools",
      "E": "individual and/or collaborative: fragmented documentation; directed management of production processes using digital tools"
    }
  },
  {
    "id": "tech-la-y78-security",
    "orderIndex": 15,
    "learningArea": "Technologies",
    "subject": "Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Privacy and security",
    "descriptors": {
      "A": "discerning identification of cyber security threats",
      "B": "informed identification of cyber security threats",
      "C": "identification of cyber security threats",
      "D": "partial identification of cyber security threats",
      "E": "directed identification of cyber security threats"
    }
  },
  {
    "id": "tech-la-y78-footprint",
    "orderIndex": 16,
    "learningArea": "Technologies",
    "subject": "Technologies",
    "yearLevel": "Years 7\u20138",
    "strand": "Processes and production skills",
    "subStrand": "Privacy and security",
    "descriptors": {
      "A": "justified management of their digital footprint",
      "B": "informed management of their digital footprint",
      "C": "management of their digital footprint",
      "D": "management of aspects of their digital footprint",
      "E": "directed management of their digital footprint"
    }
  },
  {
    "id": "math-y7-number-primes",
    "orderIndex": 1,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 7",
    "strand": "Number",
    "subStrand": "Powers and prime factors",
    "descriptors": {
      "A": "fluent representation of natural numbers in expanded form and as products of powers of prime factors using exponent notation",
      "B": "accurate representation of natural numbers in expanded form and as products of prime factors using exponent notation",
      "C": "representation of natural numbers in expanded form and as products of prime factors, using exponent notation",
      "D": "partial representation of natural numbers in expanded form or with prime factors",
      "E": "fragmented calculation with prime numbers"
    }
  },
  {
    "id": "math-y7-number-integers",
    "orderIndex": 2,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 7",
    "strand": "Number",
    "subStrand": "Operations with integers and rational numbers",
    "descriptors": {
      "A": "fluent and accurate application of all 4 operations with positive fractions, decimals and integers using optimal strategies",
      "B": "consistent application of all 4 operations with positive fractions, decimals and integers using efficient strategies",
      "C": "use of all 4 operations in calculations involving positive fractions and decimals choosing efficient calculation strategies",
      "D": "routine calculations using fractions, decimals and integers",
      "E": "attempted calculations with whole numbers"
    }
  },
  {
    "id": "math-y7-algebra-equations",
    "orderIndex": 3,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 7",
    "strand": "Algebra",
    "subStrand": "Linear equations and relationships",
    "descriptors": {
      "A": "sophisticated algebraic formulation and solving of linear equations with verification and graphical representation",
      "B": "effective algebraic formulation and solving of linear equations with natural number solutions",
      "C": "solving of linear equations with natural number solutions and creation of tables of values",
      "D": "solving of simple one-step linear equations",
      "E": "substitution of values into simple formulas"
    }
  },
  {
    "id": "math-y7-measurement-geometry",
    "orderIndex": 4,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 7",
    "strand": "Measurement",
    "subStrand": "Geometric calculations and circles",
    "descriptors": {
      "A": "fluent application of formulas for areas of triangles, parallelograms and volumes of prisms and relationships between circle features",
      "B": "accurate use of formulas for areas of triangles, parallelograms and volumes of prisms and circle features",
      "C": "use of formulas for the areas of triangles and parallelograms and the volumes of rectangular and triangular prisms",
      "D": "calculation of perimeter and area for standard composite shapes",
      "E": "basic measurements using metric units"
    }
  },
  {
    "id": "math-y7-space-transforms",
    "orderIndex": 5,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 7",
    "strand": "Space",
    "subStrand": "Classification and coordinates",
    "descriptors": {
      "A": "rigorous classification of polygons and algorithmic design with precise coordinate transformations in the Cartesian plane",
      "B": "consistent classification of polygons and algorithmic design with coordinate transformations in the plane",
      "C": "classification of polygons according to features, creation of sorting algorithms and use of coordinates to describe transformations",
      "D": "basic classification of triangles and quadrilaterals with coordinates",
      "E": "naming of common 2D shapes"
    }
  },
  {
    "id": "math-y7-stats-prob",
    "orderIndex": 6,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 7",
    "strand": "Statistics and Probability",
    "subStrand": "Data investigation and chance experiments",
    "descriptors": {
      "A": "critical interpretation of central tendency, spread and outliers, and rigorous execution of chance experiments and digital simulations",
      "B": "detailed interpretation of data distribution and measures of central tendency, with digital chance simulations",
      "C": "planning and conducting of statistical investigations with discrete/continuous data, and calculation of probabilities for single-step events",
      "D": "calculation of mean, median and range and recording of outcomes",
      "E": "basic reading of data displays"
    }
  },
  {
    "id": "math-y8-number-real",
    "orderIndex": 1,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 8",
    "strand": "Number",
    "subStrand": "Irrational numbers and exponent laws",
    "descriptors": {
      "A": "fluent recognition of irrational numbers and sophisticated application of exponent laws with positive integer exponents",
      "B": "consistent recognition of irrational numbers and accurate application of exponent laws with positive integer exponents",
      "C": "recognition of irrational numbers and terminating or recurring decimals; application of exponent laws to calculations with numbers",
      "D": "calculation with recurring decimals and basic powers",
      "E": "recognition of square roots"
    }
  },
  {
    "id": "math-y8-algebra-linear",
    "orderIndex": 2,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 8",
    "strand": "Algebra",
    "subStrand": "Linear expressions and equations",
    "descriptors": {
      "A": "fluent algebraic manipulation to expand, factorise and rearrange linear expressions, and solve linear equations and inequalities graphically and algebraically",
      "B": "consistent expansion, factorisation and rearranging of linear expressions, and solving linear equations algebraically and graphically",
      "C": "application of algebraic properties to rearrange, expand and factorise linear expressions; graphing linear relations and solving linear equations",
      "D": "solving of simple one-variable linear equations",
      "E": "expanding simple brackets"
    }
  },
  {
    "id": "math-y8-measurement-pythagoras",
    "orderIndex": 3,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 8",
    "strand": "Measurement",
    "subStrand": "Pythagoras\u2019 theorem and prisms",
    "descriptors": {
      "A": "fluent application of Pythagoras\u2019 theorem to solve complex measurement problems involving right-angle triangles and composite volumes",
      "B": "accurate application of Pythagoras\u2019 theorem to solve measurement problems involving unknown lengths in right-angle triangles",
      "C": "use of Pythagoras\u2019 theorem to solve measurement problems involving unknown lengths of right-angle triangles; formulas for circumference and area of circles",
      "D": "calculation of right prism volume and circle area using formulas",
      "E": "routine perimeter and area calculations"
    }
  },
  {
    "id": "math-y8-space-congruency",
    "orderIndex": 4,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 8",
    "strand": "Space",
    "subStrand": "Congruency and 3D positioning",
    "descriptors": {
      "A": "rigorous identification and proof of conditions for congruency and similarity, and sophisticated 3D coordinate description",
      "B": "accurate identification of conditions for congruency and similarity in shapes, and 3D coordinate positioning",
      "C": "identification of conditions for congruency and similarity in shapes; creation of testing algorithms; description of position in 3 dimensions",
      "D": "identification of congruent shapes and basic coordinate location",
      "E": "recognition of similar shapes"
    }
  },
  {
    "id": "math-y8-stats-sampling",
    "orderIndex": 5,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 8",
    "strand": "Statistics and Probability",
    "subStrand": "Sampling and compound events",
    "descriptors": {
      "A": "critical analysis of random sampling variation and sample size, with sophisticated determination of compound event probabilities using Venn diagrams and trees",
      "B": "detailed analysis of sampling distributions and central tendency, with accurate calculation of compound probabilities",
      "C": "conducting statistical investigations explaining implications of sampling; representation of 2-event combinations with tables and diagrams",
      "D": "calculation of probabilities using two-way tables or Venn diagrams",
      "E": "listing outcomes for simple chance events"
    }
  },
  {
    "id": "math-y9-number-algebra-quadratics",
    "orderIndex": 1,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 9",
    "strand": "Number and Algebra",
    "subStrand": "Binomial products and quadratics",
    "descriptors": {
      "A": "fluent expansion of binomial products, factorisation of monic quadratics, solving monic quadratic equations with integer roots algebraically, and graphing quadratic functions",
      "B": "consistent expansion of binomial products, factorisation of monic quadratics, and solving monic quadratic equations algebraically",
      "C": "expansion of binomial products, factorisation of monic quadratic expressions, graphing quadratic functions and solving monic quadratic equations with integer roots",
      "D": "expansion of simple binomial expressions and factorisation of common factors",
      "E": "routine algebraic simplifications"
    }
  },
  {
    "id": "math-y9-measurement-trig",
    "orderIndex": 2,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 9",
    "strand": "Measurement",
    "subStrand": "Trigonometric ratios and cylinders",
    "descriptors": {
      "A": "sophisticated application of sine, cosine and tangent ratios and Pythagoras\u2019 theorem to solve multifaceted spatial problems, with percentage error analysis",
      "B": "effective application of trigonometric ratios and Pythagoras\u2019 theorem to solve problems in right-angled triangles",
      "C": "application of Pythagoras\u2019 theorem and trigonometric ratios to solve problems involving right-angled triangles; surface area and volume of right prisms and cylinders",
      "D": "calculation of right prism surface area and volume using standard formulas",
      "E": "routine triangle calculations"
    }
  },
  {
    "id": "math-y9-stats-bivariate",
    "orderIndex": 3,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 9",
    "strand": "Statistics and Probability",
    "subStrand": "Data distribution and compound simulations",
    "descriptors": {
      "A": "critical comparative analysis of multiple numerical distributions, shape, spread and outliers, with rigorous digital simulation of combined events",
      "B": "detailed comparison of multiple numerical data distributions and evaluation of sampling techniques, with digital chance experiments",
      "C": "comparison and analysis of distributions of multiple numerical data sets using summary statistics and shape; determination of compound event outcomes",
      "D": "calculation of summary statistics for datasets and constructing basic plots",
      "E": "reading data from charts and tables"
    }
  },
  {
    "id": "math-y10-algebra-functions",
    "orderIndex": 1,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 10",
    "strand": "Number and Algebra",
    "subStrand": "Functions and simultaneous equations",
    "descriptors": {
      "A": "sophisticated mathematical modelling of growth and decay using linear, quadratic and exponential functions; solving simultaneous linear equations and inequalities graphically with rigorous justification",
      "B": "effective mathematical modelling using linear, quadratic and exponential functions; solving simultaneous equations and inequalities graphically",
      "C": "mathematical modelling to solve problems involving growth and decay applying linear, quadratic and exponential functions; solving simultaneous linear equations and linear inequalities in 2 variables graphically",
      "D": "solving simultaneous linear equations graphically or algebraically",
      "E": "plotting linear relations on Cartesian planes"
    }
  },
  {
    "id": "math-y10-measurement-trig-logs",
    "orderIndex": 2,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 10",
    "strand": "Measurement",
    "subStrand": "Logarithmic scales and composite objects",
    "descriptors": {
      "A": "sophisticated interpretation and application of logarithmic scales, measurement error impact analysis, and surface area/volume of complex composite objects",
      "B": "effective use of logarithmic scales, measurement error evaluation, and surface area and volume of composite objects",
      "C": "interpretation and use of logarithmic scales representing small or large quantities; solving measurement problems involving surface area and volume of composite objects",
      "D": "solving surface area and volume problems for composite objects",
      "E": "routine volume calculations"
    }
  },
  {
    "id": "math-y10-space-proofs",
    "orderIndex": 3,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 10",
    "strand": "Space",
    "subStrand": "Deductive geometric proofs and networks",
    "descriptors": {
      "A": "rigorous deductive reasoning and theorem proofs in the plane, network diagram interpretation, and algorithmic solutions to spatial problems",
      "B": "consistent deductive reasoning and theorem application to solve spatial problems, with network interpretation",
      "C": "use of deductive reasoning, theorems and algorithms to solve spatial problems; interpretation of networks used to represent practical situations and describe connectedness",
      "D": "application of circle theorems or triangle properties to find unknown angles",
      "E": "identifying vertices and edges in simple networks"
    }
  },
  {
    "id": "math-y10-stats-bivariate-prob",
    "orderIndex": 4,
    "learningArea": "Mathematics",
    "subject": "Mathematics",
    "yearLevel": "Year 10",
    "strand": "Statistics and Probability",
    "subStrand": "Bivariate data and conditional probability",
    "descriptors": {
      "A": "critical analysis of bivariate scatter plots, association, linearity and media bias, with sophisticated application and digital simulation of conditional probability",
      "B": "detailed analysis of bivariate data, scatter plots and media bias, with application of conditional probability to compound events",
      "C": "planning and conducting statistical investigations involving bivariate data; representation with tables and scatter plots; application of conditional probability to solve problems involving compound events",
      "D": "constructing scatter plots and identifying positive/negative correlation",
      "E": "calculating simple probabilities for two events"
    }
  }
];

export const DEFAULT_CONFIG: RubricConfig = {
  learningArea: 'Science',
  subject: 'Science',
  yearLevel: 'Year 8',
  scaleType: 'qcaa_elaborations',
  subheaderText: 'The folio of student work has the following characteristics: work has the following characteristics:',
  includeSubheader: true,
  sortByQcaaOrder: true
};
