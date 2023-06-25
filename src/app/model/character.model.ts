export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Comic {
  resourceURI: string;
  name: string;
}

export interface Series {
  resourceURI: string;
  name: string;
}

export interface Story {
  resourceURI: string;
  name: string;
  type: string;
}

export interface Event {
  resourceURI: string;
  name: string;
}

export interface Url {
  type: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: {
    available: number;
    collectionURI: string;
    items: Comic[];
    returned: number;
  };
  series: {
    available: number;
    collectionURI: string;
    items: Series[];
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: Story[];
    returned: number;
  };
  events: {
    available: number;
    collectionURI: string;
    items: Event[];
    returned: number;
  };
  urls: Url[];
}

export interface CharacterData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Character[];
}
